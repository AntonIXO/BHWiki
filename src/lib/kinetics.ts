import type { PKObservation } from "./types";

export type EliminationModel = {
  analyte: string;
  minimum: number;
  maximum: number;
  initialHalfLife: number;
  statisticLabel: string;
  adjustable: boolean;
};

/** Fraction remaining after distribution in a single first-order elimination model. */
export function fractionRemaining(timeHours: number, halfLifeHours: number): number {
  if (!Number.isFinite(timeHours) || timeHours < 0) {
    throw new RangeError("Elapsed time must be finite and non-negative.");
  }
  if (!Number.isFinite(halfLifeHours) || halfLifeHours <= 0) {
    throw new RangeError("Half-life must be finite and positive.");
  }
  return 2 ** (-timeHours / halfLifeHours);
}

function positive(value: number | null): value is number {
  return value !== null && Number.isFinite(value) && value > 0;
}

/** A numeric value alone never establishes suitability for an elimination model. */
export function getEliminationModel(observation: PKObservation | undefined): EliminationModel | null {
  if (!observation?.modelEligible || observation.endpoint !== "elimination-half-life" ||
    observation.unit !== "hours" || !observation.analyte.trim()) return null;

  let minimum: number;
  let maximum: number;
  let statisticLabel: string;
  if (observation.statistic === "reported-range") {
    if (!positive(observation.low) || !positive(observation.high) || observation.high < observation.low) return null;
    minimum = observation.low;
    maximum = observation.high;
    statisticLabel = "Reported range";
  } else if (observation.statistic === "study-mean" || observation.statistic === "approximate") {
    if (!positive(observation.value)) return null;
    minimum = maximum = observation.value;
    statisticLabel = observation.statistic === "study-mean" ? "Study mean" : "Approximate estimate";
  } else {
    return null;
  }

  // Keep the five-half-life chart horizon representable without silently truncating it.
  if (!Number.isFinite(maximum * 5)) return null;
  return {
    analyte: observation.analyte,
    minimum,
    maximum,
    initialHalfLife: minimum + (maximum - minimum) / 2,
    statisticLabel,
    adjustable: minimum < maximum,
  };
}
