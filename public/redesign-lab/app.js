const outcomes = [
  { title: "Attention", icon: "target", direction: "up", grade: "B", effect: "Small improvement", population: "Adults with ADHD", participants: "412", studies: "6 studies", detail: "Improved sustained-attention task performance in the diagnosed subgroup." },
  { title: "Executive function", icon: "brain", direction: "mixed", grade: "B", effect: "Context-dependent", population: "Clinical + healthy samples", participants: "328", studies: "4 studies", detail: "Direction varies by diagnosis, task, and acute exposure context." },
  { title: "Sleep", icon: "moon", direction: "down", grade: "C", effect: "Small worsening", population: "Healthy adults", participants: "410", studies: "6 studies", detail: "Later exposure was associated with longer sleep-onset latency." },
  { title: "Heart rate", icon: "heart-pulse", direction: "up", grade: "C", effect: "Small increase", population: "Mixed populations", participants: "686", studies: "8 studies", detail: "Cardiovascular measures should remain attached to dose and population." },
];

const presets = {
  atlas: { label: "Evidence Atlas", type: "substance", outcome: "matrix", pk: "rail", sources: "collapsed" },
  ledger: { label: "Evidence Ledger", type: "effect", outcome: "signal", pk: "rail", sources: "collapsed" },
  field: { label: "Field Guide", type: "enzyme", outcome: "cards", pk: "inline", sources: "expanded" },
};

const state = { direction: "atlas", type: "substance", outcome: "matrix", pk: "rail", sources: "collapsed", activeTab: "overview", surface: "tinted", labels: "icons", icons: "rich", outcomeLabel: "measured", interaction: "map", visual: false, chart: false, sleep: true, subjective: false, external: true, chosen: false };
const preview = document.querySelector("#preview");
const outcomesContent = document.querySelector("#outcomes-content");
const pkPanel = document.querySelector("#pk-panel");
const sourceList = document.querySelector("#source-list");
const sourcesPanel = document.querySelector("#sources");
const typeLabel = document.querySelector("#type-label");

function icon(name) { return `<i data-lucide="${name}"></i>`; }

function renderOutcomes() {
  const visibleOutcomes = state.sleep ? outcomes : outcomes.filter((outcome) => outcome.title !== "Sleep");
  if (state.outcome === "matrix") {
    outcomesContent.innerHTML = `<div class="matrix" role="table" aria-label="Measured outcomes matrix"><div class="matrix-row matrix-head"><span>${icon("target")}Outcome</span><span>${icon("arrow-up-down")}Direction</span><span>${icon("badge-check")}Grade</span><span>${icon("users")}Population</span><span>${icon("library")}Studies</span></div>${visibleOutcomes.map((o) => `<div class="matrix-row"><strong>${icon(o.icon)}${o.title}</strong><span class="direction ${o.direction}">${directionIcon(o.direction)}${o.effect}</span><span class="grade grade-${o.grade.toLowerCase()}">${o.grade}</span><span>${o.population}</span><a href="#sources">${o.studies}</a></div>`).join("")}</div>`;
  } else if (state.outcome === "signal") {
    outcomesContent.innerHTML = `<div class="signal-list">${visibleOutcomes.map((o) => `<article class="signal-row"><span class="outcome-icon">${icon(o.icon)}</span><div class="signal-copy"><strong>${o.title}</strong><p>${o.detail}</p></div><span class="direction ${o.direction}">${directionIcon(o.direction)}${o.effect}</span><span class="grade grade-${o.grade.toLowerCase()}">${o.grade}</span><a href="#sources">${o.studies}</a></article>`).join("")}</div>`;
  } else {
    outcomesContent.innerHTML = `<div class="insight-grid">${visibleOutcomes.slice(0, 3).map((o) => `<article class="insight-card ${o.direction}"><span class="insight-icon">${icon(o.icon)}</span><div class="insight-top"><span>${o.title}</span><span class="grade grade-${o.grade.toLowerCase()}">${o.grade}</span></div><strong>${o.effect}</strong><p>${o.detail}</p><footer><span>${o.participants} participants</span><a href="#sources">${o.studies}</a></footer></article>`).join("")}</div>`;
  }
}

function directionIcon(direction) { return direction === "up" ? icon("arrow-up") : direction === "down" ? icon("arrow-down") : icon("activity"); }

function renderPk() {
  pkPanel.innerHTML = `<div class="panel-heading compact"><div><span class="section-kicker"><b>${icon("clock-3")}</b>Body timeline</span><h3>Pharmacokinetics</h3><p>Show the data where the eye expects it.</p></div><button class="pin-button">${icon("pin")}Pinned</button></div><div class="pk-stat"><span>${icon("timer")} Mean half-life</span><strong>3.5 h</strong><small>reported range 1.3–7.7 h</small></div><div class="timeline"><div class="timeline-line"><span style="left:12%"></span><span style="left:39%"></span><span style="left:82%"></span></div><div class="timeline-labels"><span>${icon("circle-dot")}Onset<small>not established</small></span><span>${icon("circle-dot")}Peak<small>about 2 h</small></span><span>${icon("circle-dot")}Elimination<small>3.5 h half-life</small></span></div></div><div class="chart"><div class="chart-y"><span>100%</span><span>50%</span><span>0%</span></div><svg viewBox="0 0 320 126" role="img" aria-label="Illustrative concentration curve"><path class="chart-grid" d="M12 18H310M12 62H310M12 106H310M64 10V110M130 10V110M196 10V110M262 10V110"></path><path class="chart-area" d="M12 106 C30 100,50 35,82 24 C108 16,124 38,150 54 C182 74,226 88,310 99 L310 106 Z"></path><path class="chart-line" d="M12 106 C30 100,50 35,82 24 C108 16,124 38,150 54 C182 74,226 88,310 99"></path></svg><div class="chart-x"><span>0 h</span><span>2 h</span><span>4 h</span><span>8 h</span></div></div><p class="chart-note">${icon("info")}Illustrative model, not a personalized prediction.</p>`;
}

function renderSources() {
  const expanded = state.sources === "expanded";
  sourcesPanel.classList.toggle("is-expanded", expanded);
  document.querySelector("#sources-description").textContent = expanded ? "The finding, source, and limitation" : "5 listed sources hidden by default";
  document.querySelector("#sources-action").innerHTML = `${expanded ? "Hide" : "Show 5"} ${icon("chevron-down")}`;
  sourceList.innerHTML = expanded ? `<article><span class="source-number">01</span><div><strong>Neurocognitive effects of methylphenidate in adult ADHD</strong><p>Turner et al. · randomized crossover study · 2005</p><small>${icon("shield-alert")}Small acute study; differing diagnostic subgroups.</small></div><a href="#">Open ${icon("external-link")}</a></article><article><span class="source-number">02</span><div><strong>RITALIN LA pharmacokinetic comparison</strong><p>Official prescribing label · 2026</p><small>${icon("shield-alert")}Formulation-specific; does not establish benefit outside label context.</small></div><a href="#">Open ${icon("external-link")}</a></article>` : "";
}

function updateTabs() {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const active = tab.dataset.tab === state.activeTab;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-tab-panel]").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.tabPanel === state.activeTab));
}

function update() {
  preview.className = `preview direction-${state.direction} type-${state.type} outcome-${state.outcome} pk-${state.pk} surface-${state.surface} labels-${state.labels} icons-${state.icons} interaction-mode-${state.interaction} ${state.visual ? "show-visual-slot" : ""} ${state.chart ? "show-chart-slot" : ""} ${state.sleep ? "" : "no-sleep"} ${state.subjective ? "show-subjective" : ""} ${state.external ? "" : "hide-external"}`;
  preview.querySelector(".main-grid").classList.toggle("pk-inline", state.pk === "inline");
  typeLabel.textContent = state.type[0].toUpperCase() + state.type.slice(1);
  const typeIcon = document.querySelector(".type-pill i, .type-pill svg"); if (typeIcon) typeIcon.outerHTML = icon(state.type === "effect" ? "sparkles" : state.type === "enzyme" ? "network" : "flask-conical");
  document.querySelector("#pk-panel").style.display = "block";
  document.querySelector("#main-grid").appendChild(state.pk === "inline" ? pkPanel : document.querySelector(".primary-column").nextElementSibling || pkPanel);
  if (state.pk === "inline") document.querySelector(".primary-column").insertBefore(pkPanel, document.querySelector(".interactions-panel"));
  renderOutcomes(); renderPk(); renderSources(); updateControls(); updateTabs(); lucide.createIcons();
}

function updateControls() {
  document.querySelectorAll(".preset").forEach((button) => button.classList.toggle("is-active", button.dataset.preset === state.direction));
  document.querySelectorAll("[data-page-type]").forEach((button) => button.classList.toggle("is-active", button.dataset.pageType === state.type));
  document.querySelectorAll("[data-outcome]").forEach((button) => button.classList.toggle("is-active", button.dataset.outcome === state.outcome));
  document.querySelector("#pk-placement").value = state.pk; document.querySelector("#source-mode").value = state.sources;
  document.querySelector("#surface-mode").value = state.surface; document.querySelector("#label-mode").value = state.labels; document.querySelector("#icon-mode").value = state.icons; document.querySelector("#outcome-label").value = state.outcomeLabel; document.querySelector("#interaction-mode").value = state.interaction;
  document.querySelector("#visual-slots").checked = state.visual; document.querySelector("#chart-slot").checked = state.chart; document.querySelector("#sleep-toggle").checked = state.sleep; document.querySelector("#subjective-toggle").checked = state.subjective; document.querySelector("#external-toggle").checked = state.external;
  document.querySelector("#outcome-heading").textContent = state.outcomeLabel === "data" ? "What the data shows" : state.outcomeLabel === "signal" ? "Research signal" : "Measured outcomes";
  const preset = presets[state.direction];
  document.querySelector("#current-selection").textContent = `${preset.label} · ${state.type[0].toUpperCase() + state.type.slice(1)}`;
  document.querySelector("#current-detail").textContent = `${state.outcome === "matrix" ? "Evidence matrix" : state.outcome === "signal" ? "Signal rows" : "Insight cards"} · ${state.pk === "rail" ? "right rail" : "inline PK"} · sources ${state.sources}`;
  document.querySelector("#ideas-detail").textContent = `${state.surface === "tinted" ? "Tinted" : "Neutral"} sections · ${state.icons === "rich" ? "rich" : "quiet"} icons · ${state.sleep ? "sleep included" : "sleep hidden"}${state.subjective ? " · subjective on" : ""}`;
}

function setState(next) { Object.assign(state, next, { chosen: false }); document.querySelector("#lab-status-text").textContent = "Exploration mode"; update(); }

document.querySelectorAll(".preset").forEach((button) => button.addEventListener("click", () => { const p = presets[button.dataset.preset]; setState({ direction: button.dataset.preset, type: p.type, outcome: p.outcome, pk: p.pk, sources: p.sources }); }));
document.querySelectorAll("[data-page-type]").forEach((button) => button.addEventListener("click", () => setState({ type: button.dataset.pageType })));
document.querySelectorAll("[data-outcome]").forEach((button) => button.addEventListener("click", () => setState({ outcome: button.dataset.outcome })));
document.querySelector("#pk-placement").addEventListener("change", (e) => setState({ pk: e.target.value }));
document.querySelector("#source-mode").addEventListener("change", (e) => setState({ sources: e.target.value }));
document.querySelector("#surface-mode").addEventListener("change", (e) => setState({ surface: e.target.value }));
document.querySelector("#label-mode").addEventListener("change", (e) => setState({ labels: e.target.value }));
document.querySelector("#icon-mode").addEventListener("change", (e) => setState({ icons: e.target.value }));
document.querySelector("#outcome-label").addEventListener("change", (e) => setState({ outcomeLabel: e.target.value }));
document.querySelector("#interaction-mode").addEventListener("change", (e) => setState({ interaction: e.target.value }));
document.querySelector("#visual-slots").addEventListener("change", (e) => setState({ visual: e.target.checked }));
document.querySelector("#chart-slot").addEventListener("change", (e) => setState({ chart: e.target.checked }));
document.querySelector("#sleep-toggle").addEventListener("change", (e) => setState({ sleep: e.target.checked }));
document.querySelector("#subjective-toggle").addEventListener("change", (e) => setState({ subjective: e.target.checked }));
document.querySelector("#external-toggle").addEventListener("change", (e) => setState({ external: e.target.checked }));
document.querySelector("#sources-toggle").addEventListener("click", () => setState({ sources: state.sources === "collapsed" ? "expanded" : "collapsed" }));
document.querySelector("#caveat-source-toggle").addEventListener("click", () => setState({ sources: state.sources === "collapsed" ? "expanded" : "collapsed" }));
document.querySelectorAll("[data-tab]").forEach((tab) => tab.addEventListener("click", () => { state.activeTab = tab.dataset.tab; updateTabs(); }));
document.querySelector("#choose-button").addEventListener("click", () => { state.chosen = true; document.querySelector("#lab-status-text").textContent = "Marked for implementation"; const button = document.querySelector("#choose-button"); button.innerHTML = `${icon("check")}<span>Chosen for implementation</span>`; lucide.createIcons(); });

renderOutcomes(); renderPk(); renderSources(); updateTabs(); lucide.createIcons();
