"use client";

import { useId, useState } from "react";
import { fractionRemaining, getEliminationModel, type EliminationModel } from "@/lib/kinetics";
import type { PKObservation } from "@/lib/types";

type KineticsChartProps = {
  observation: PKObservation | undefined;
  sourceHref: string;
};

function hours(value: number) {
  return new Intl.NumberFormat("en", { maximumSignificantDigits: 3 }).format(value);
}

export function KineticsChart({ observation, sourceHref }: KineticsChartProps) {
  const model = getEliminationModel(observation);
  if (!observation || !model) return <div className="kinetics-unavailable">
    <strong>An elimination model is not established for this observation.</strong>
    {observation && <><p><b>Measured analyte:</b> {observation.analyte}. <b>Route:</b> {observation.route}. <b>Formulation:</b> {observation.formulation}. <b>Population:</b> {observation.population}.</p><p>{observation.context}</p><a href={sourceHref}>Read the source context ↗</a></>}
  </div>;
  return <EliminationChart key={`${observation.id}:${model.minimum}:${model.maximum}`} observation={observation} model={model} sourceHref={sourceHref}/>;
}

function EliminationChart({ observation, model, sourceHref }: KineticsChartProps & { observation: PKObservation; model: EliminationModel }) {
  const id = useId();
  const [selectedHalfLife, setSelectedHalfLife] = useState(model.initialHalfLife);
  const halfLife = Math.min(model.maximum, Math.max(model.minimum, selectedHalfLife));
  const endTime = model.maximum * 5;
  const left = 44;
  const top = 18;
  const plotWidth = 552;
  const plotHeight = 165;
  const points = Array.from({ length: 121 }, (_, index) => {
    const t = index / 120 * endTime;
    const remaining = fractionRemaining(t, halfLife);
    return `${left + t / endTime * plotWidth},${top + (1 - remaining) * plotHeight}`;
  }).join(" ");
  const halfLifeX = left + halfLife / endTime * plotWidth;

  return <div className="kinetics-chart">
    <div className="kinetics-chart-heading"><div><span className="article-overline">ILLUSTRATIVE ELIMINATION MODEL</span><h3>{model.analyte} remaining over time</h3></div><span className="kinetics-chart-pill">Single exposure</span></div>
    <p className="kinetics-description">The modeled analyte is <strong>{model.analyte}</strong>. The curve begins after absorption and distribution; it does not predict onset, felt effects, or an individual’s response.</p>
    <p className="kinetics-context"><strong>Route:</strong> {observation.route}. <strong>Formulation:</strong> {observation.formulation}. <strong>Population:</strong> {observation.population}.</p>
    <p className="kinetics-context">{observation.context} <a href={sourceHref}>Source & context</a></p>
    <p className="kinetics-statistic"><strong>{model.statisticLabel}:</strong> {hours(model.minimum)}{model.minimum < model.maximum ? `–${hours(model.maximum)}` : ""} hours.</p>
    {model.adjustable ? <>
      <div className="kinetics-slider-heading"><label htmlFor={`${id}-range`}>Illustrative chosen half-life</label><output htmlFor={`${id}-range`}>{hours(halfLife)} <span>hours</span></output></div>
      <p id={`${id}-range-help`} className="kinetics-description">The midpoint is the initial illustrative choice within the reported range. It is not a measured average or a prediction.</p>
      <input id={`${id}-range`} className="kinetics-slider" type="range" min={model.minimum} max={model.maximum} step={(model.maximum - model.minimum) / 100 || "any"} value={halfLife} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value)) setSelectedHalfLife(value); }} aria-describedby={`${id}-range-help`} aria-valuetext={`${hours(halfLife)} hours`}/>
      <div className="kinetics-slider-bounds"><span>{hours(model.minimum)} h</span><span>Reported range</span><span>{hours(model.maximum)} h</span></div>
    </> : <p className="kinetics-fixed-value">The model uses this single {observation.statistic === "study-mean" ? "study mean" : "reported estimate"}; no range is inferred.</p>}
    <div className="kinetics-axis-label">{model.analyte} remaining (%)</div>
    <svg className="kinetics-svg" viewBox="0 0 616 218" role="img" aria-labelledby={`${id}-title ${id}-description`}>
      <title id={`${id}-title`}>{`${model.analyte}: illustrative elimination with a ${hours(halfLife)} hour half-life`}</title>
      <desc id={`${id}-description`}>A first-order elimination model of {model.analyte}. Fifty percent remains after {hours(halfLife)} hours and 25 percent after {hours(halfLife * 2)} hours. Horizontal axis: elapsed hours after absorption and distribution. Vertical axis: percentage of the modeled analyte remaining. This is a mathematical illustration, not a personalized prediction.</desc>
      <defs><linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#52745c" stopOpacity="0.17"/><stop offset="100%" stopColor="#52745c" stopOpacity="0.01"/></linearGradient></defs>
      {[0, 25, 50, 75, 100].map(percent => { const y = top + (100 - percent) / 100 * plotHeight; return <g key={percent}><line x1={left} x2={left + plotWidth} y1={y} y2={y} stroke="#dfe3d9" strokeDasharray={percent === 0 ? undefined : "3 5"}/><text x={left - 12} y={y + 4} textAnchor="end" className="kinetics-svg-label">{percent}</text></g>; })}
      <polygon points={`${left},${top + plotHeight} ${points} ${left + plotWidth},${top + plotHeight}`} fill={`url(#${id}-fill)`}/>
      <polyline points={points} fill="none" stroke="#315440" strokeWidth="2.5" strokeLinejoin="round"/>
      <line x1={halfLifeX} x2={halfLifeX} y1={top + plotHeight / 2} y2={top + plotHeight} stroke="#829886" strokeDasharray="4 4"/>
      <circle cx={halfLifeX} cy={top + plotHeight / 2} r="4.5" fill="#315440" stroke="#fbfcf8" strokeWidth="2"/>
      {[0, 1, 2, 3, 4, 5].map(index => <text key={index} x={left + index / 5 * plotWidth} y={top + plotHeight + 24} textAnchor="middle" className="kinetics-svg-label">{hours(index / 5 * endTime)} h</text>)}
    </svg>
    <div className="kinetics-readouts"><span>After <strong>{hours(halfLife)} h</strong><b>50% remains</b></span><span>After <strong>{hours(halfLife * 2)} h</strong><b>25% remains</b></span><span>After <strong>{hours(halfLife * 5)} h</strong><b>3.125% remains</b></span></div>
    <p className="kinetics-footnote">Model: fraction remaining = 2<sup>−time / half-life</sup>. Assumes a single exposure, instantaneous distribution, and a constant half-life for {model.analyte}. Formation of metabolites, repeated exposure, and interactions are not modeled. <a href={sourceHref}>Source & context</a></p>
  </div>;
}
