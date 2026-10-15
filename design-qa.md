# Timing chart design QA

Source visual truth: `/tmp/codex-clipboard-caadfac1-5b07-4e34-9b0f-72074e101ae7.png` (1281 × 1713 px).
Implementation focused capture: `/tmp/bhwiki-design-qa/timing-chart-card-v4.png` (737 × 466 px element capture, CSS device scale factor 1).

State: Citicoline pharmacokinetics section, two explicit total-plasma-radiolabel observations (about 1 h and 24 h), no established elimination model.

## Comparison evidence

- The previous funnel was replaced with a lazy-loaded Chart.js scatter chart using an elapsed-time x-axis.
- The chart renders two source-backed markers, keeps vertical position non-quantitative, and shows exact readable values below the plot.
- Marker color follows the authored timing label: peaks are coral-red; offset/tail phases are green; onset/rise is amber; unknown observations remain slate.
- Range charts use pairs of points without a connecting line, preserving both reported bounds without inventing a trajectory.
- The full source wording remains in tooltips and the accessible list; the surrounding citation stays visible.

## Required fidelity surfaces

- Fonts and typography: existing BHWiki typography and hierarchy are retained; chart labels and readouts use compact, readable metadata.
- Spacing and layout rhythm: the chart is contained in a bordered inset panel with a responsive canvas and two-column readout.
- Colors and visual tokens: semantic phase colors are used for points, with a conditional legend that omits absent phases.
- Image quality and asset fidelity: the visualization uses Chart.js canvas; no decorative raster assets are required.
- Copy and content: the chart explicitly states that markers are elapsed observations and do not establish felt-effect timing or a parent-compound elimination curve.

## Findings and fixes

- [P1] The previous funnel's 100%/72% values and taper implied quantitative data without a numeric basis. Fixed by removing the funnel and adding explicit source-backed markers.
- [P1] The previous visual had no numeric axis. Fixed with a Chart.js linear elapsed-time axis and 1 h / 24 h points.
- [P2] Long marker labels were clipped inside the canvas. Fixed with short chart labels plus full visible readouts and accessible source text.
- [P2] Pages without explicit numeric timing remain evidence summaries rather than fabricated charts.
- [P2] Chart.js is loaded through a shared dynamic import only after the chart enters the viewport; the initial route bundle does not eagerly load the chart runtime.

## Final result

passed
