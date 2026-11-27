import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  INDUSTRIES,
  SCENARIOS,
  getIndustry,
  defaultMachineForIndustry,
  inputsFromMachine,
} from './data/industries';
import { computeFromInputs, toneForPct } from './utils/oeeCalc';
import {
  validateFullName,
  validateCompany,
  validateEmail,
  validatePhone,
  firstFieldError,
  sanitizePhoneInput,
  sanitizeNameInput,
  sanitizeCompanyInput,
  sanitizeMessageInput,
} from '../eam-landing/utils/formValidation';
import { captureUtmParams } from '../eam-landing/utils/utm';
import { savePendingLead, redirectToThankYou } from '../../../utils/landingThankYou';
import './OeeSimulatorApp.css';

const LANDING_PATH = '/eam-production';
const LEAD_POPUP_DELAY_MS = 7000;

function AnimatedNumber({ value, decimals = 1, suffix = '' }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const from = prev.current;
    const to = value;
    prev.current = to;
    if (from === to) {
      setDisplay(to);
      return undefined;
    }
    let raf;
    const start = performance.now();
    const duration = 480;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <>
      {display.toFixed(decimals)}
      {suffix}
    </>
  );
}

function Gauge({ pct, tone }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, pct)) / 100) * c;
  return (
    <div className={`oee-gauge oee-gauge--${tone}`} aria-label={`OEE ${pct}%`}>
      <svg viewBox="0 0 140 140" className="oee-gauge-svg">
        <circle className="oee-gauge-track" cx="70" cy="70" r={r} />
        <circle
          className="oee-gauge-value"
          cx="70"
          cy="70"
          r={r}
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="oee-gauge-label">
        <span className="oee-gauge-pct">
          <AnimatedNumber value={pct} decimals={1} suffix="%" />
        </span>
        <span className="oee-gauge-caption">OEE</span>
      </div>
    </div>
  );
}

function MetricBar({ label, value, tone, formula }) {
  return (
    <div className={`oee-metric oee-metric--${tone}`}>
      <div className="oee-metric-head">
        <span>{label}</span>
        <strong>
          <AnimatedNumber value={value} decimals={1} suffix="%" />
        </strong>
      </div>
      <div className="oee-metric-track">
        <div className="oee-metric-fill" style={{ width: `${Math.min(100, value)}%` }} />
      </div>
      {formula ? <p className="oee-metric-formula">{formula}</p> : null}
    </div>
  );
}

const emptyLead = {
  fullName2: '',
  company2: '',
  email2: '',
  phone2: '',
  countryCode: '+91',
  message: '',
};

function LeadFormFields({
  lead,
  leadErrors,
  leadError,
  submitting,
  onLeadChange,
  onLeadSubmit,
  result,
  industry,
  machine,
}) {
  return (
    <form className="oee-sim-form" onSubmit={onLeadSubmit} noValidate>
      {result ? (
        <p className="oee-sim-lead-snapshot oee-sim-form-full">
          Latest board: <strong>{result.oee}% OEE</strong>
          {industry ? ` · ${industry.label}` : ''}
          {machine ? ` · ${machine.name}` : ''}
        </p>
      ) : null}
      <label>
        <span>Full name</span>
        <input
          name="fullName2"
          value={lead.fullName2}
          onChange={onLeadChange}
          autoComplete="name"
          required
        />
        {leadErrors.fullName2 ? <em>{leadErrors.fullName2}</em> : null}
      </label>
      <label>
        <span>Company</span>
        <input
          name="company2"
          value={lead.company2}
          onChange={onLeadChange}
          autoComplete="organization"
          required
        />
        {leadErrors.company2 ? <em>{leadErrors.company2}</em> : null}
      </label>
      <label>
        <span>Work email</span>
        <input
          type="email"
          name="email2"
          value={lead.email2}
          onChange={onLeadChange}
          autoComplete="email"
          required
        />
        {leadErrors.email2 ? <em>{leadErrors.email2}</em> : null}
      </label>
      <label>
        <span>Phone</span>
        <div className="oee-sim-phone">
          <select
            name="countryCode"
            value={lead.countryCode}
            onChange={onLeadChange}
            aria-label="Country code"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
            <option value="+65">+65</option>
          </select>
          <input
            name="phone2"
            value={lead.phone2}
            onChange={onLeadChange}
            autoComplete="tel"
            required
          />
        </div>
        {leadErrors.phone2 ? <em>{leadErrors.phone2}</em> : null}
      </label>
      <label className="oee-sim-form-full">
        <span>Anything we should know? (optional)</span>
        <textarea
          name="message"
          rows={3}
          value={lead.message}
          onChange={onLeadChange}
          placeholder="Sites, assets, timing…"
        />
      </label>
      {leadError ? <p className="oee-sim-form-error">{leadError}</p> : null}
      <button
        type="submit"
        className="oee-sim-btn oee-sim-btn--primary oee-sim-form-submit"
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Send message'}
      </button>
      <p className="oee-sim-form-note">We&apos;ll only use this to follow up on your note.</p>
    </form>
  );
}

export default function OeeSimulatorApp() {
  const [industryId, setIndustryId] = useState(null);
  const [lineId, setLineId] = useState('');
  const [machineId, setMachineId] = useState('');
  const [scenarioId, setScenarioId] = useState('healthy');
  const [inputs, setInputs] = useState(null);
  const [publishedInputs, setPublishedInputs] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | setup | results
  const [setupModalOpen, setSetupModalOpen] = useState(false);
  const [lead, setLead] = useState(emptyLead);
  const [leadErrors, setLeadErrors] = useState({});
  const [leadError, setLeadError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const resultsRef = useRef(null);
  const modalResultsRef = useRef(null);
  const pendingScrollToResults = useRef(false);
  const leadAutoShownRef = useRef(false);
  const setupOpen = Boolean(setupModalOpen && industryId && inputs);

  const industry = industryId ? getIndustry(industryId) : null;

  const line = useMemo(
    () => industry?.lines?.find((l) => l.id === lineId) || industry?.lines?.[0],
    [industry, lineId]
  );

  const machine = useMemo(
    () => line?.machines?.find((m) => m.id === machineId) || line?.machines?.[0],
    [line, machineId]
  );

  useEffect(() => {
    if (!industry) return;
    const { line: dLine, machine: dMachine } = defaultMachineForIndustry(industry);
    setLineId(dLine?.id || '');
    setMachineId(dMachine?.id || '');
    setScenarioId('healthy');
    setInputs(inputsFromMachine(dMachine, 'healthy'));
  }, [industryId]); // eslint-disable-line react-hooks/exhaustive-deps

  const result = useMemo(
    () => (publishedInputs ? computeFromInputs(publishedInputs) : null),
    [publishedInputs]
  );
  const oeeTone = result ? toneForPct(result.oee) : 'mid';

  useEffect(() => {
    if (!pendingScrollToResults.current || !result) return;

    const timer = window.setTimeout(() => {
      pendingScrollToResults.current = false;
      const target = modalResultsRef.current || resultsRef.current;
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [result, setupOpen]);

  // After score is shown: float icon stays available; contact popup opens once after 7s.
  useEffect(() => {
    if (!result) return;
    if (leadAutoShownRef.current) return;

    const timer = window.setTimeout(() => {
      leadAutoShownRef.current = true;
      setLeadModalOpen(true);
    }, LEAD_POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [result]);

  useEffect(() => {
    if (!leadModalOpen && !setupOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [leadModalOpen, setupOpen]);

  const resetLeadOffer = () => {
    leadAutoShownRef.current = false;
    setLeadModalOpen(false);
    setTooltipOpen(true);
  };

  const pickIndustry = (id) => {
    const next = getIndustry(id);
    const { line: dLine, machine: dMachine } = defaultMachineForIndustry(next);
    setPhase('setup');
    setSetupModalOpen(true);
    resetLeadOffer();
    setPublishedInputs(null);
    setIndustryId(id);
    setLineId(dLine?.id || '');
    setMachineId(dMachine?.id || '');
    setScenarioId('healthy');
    setInputs(inputsFromMachine(dMachine, 'healthy'));
  };

  const closeSetupModal = () => {
    setSetupModalOpen(false);
    setPhase(publishedInputs ? 'results' : 'idle');
  };

  const openSetupModal = () => {
    setPhase('setup');
    setSetupModalOpen(true);
  };

  const applyScenario = (id) => {
    if (!machine) return;
    setScenarioId(id);
    setInputs(inputsFromMachine(machine, id));
  };

  const selectLine = (id) => {
    if (!industry) return;
    const nextLine = industry.lines.find((l) => l.id === id) || industry.lines[0];
    const nextMachine = nextLine?.machines?.[0];
    setLineId(nextLine?.id || '');
    setMachineId(nextMachine?.id || '');
    setScenarioId('healthy');
    setInputs(inputsFromMachine(nextMachine, 'healthy'));
  };

  const selectMachine = (id) => {
    const next = line?.machines?.find((m) => m.id === id) || line?.machines?.[0];
    setMachineId(next?.id || '');
    setScenarioId('healthy');
    setInputs(inputsFromMachine(next, 'healthy'));
  };

  const updateInput = (key, raw) => {
    const n = Number(raw);
    setInputs((prev) => ({
      ...prev,
      [key]: Number.isFinite(n) ? n : 0,
    }));
    setScenarioId('custom');
  };

  const runBoard = () => {
    if (!inputs) return;
    pendingScrollToResults.current = true;
    setPublishedInputs({ ...inputs });
    setPhase('results');
    setSetupModalOpen(true);
    leadAutoShownRef.current = false;
    setLeadModalOpen(false);
    setTooltipOpen(true);
  };

  const closeLeadModal = () => {
    setLeadModalOpen(false);
    setTooltipOpen(true);
  };

  const openLeadModal = () => {
    setLeadModalOpen(true);
  };

  const validateLead = (form) => ({
    fullName2: validateFullName(form.fullName2),
    company2: validateCompany(form.company2),
    email2: validateEmail(form.email2),
    phone2: validatePhone(form.phone2, {
      required: true,
      countryCode: form.countryCode,
    }),
  });

  const onLeadChange = (e) => {
    const { name, value } = e.target;
    let next = value;
    if (name === 'fullName2') next = sanitizeNameInput(value);
    if (name === 'company2') next = sanitizeCompanyInput(value);
    if (name === 'phone2') next = sanitizePhoneInput(value, lead.countryCode);
    if (name === 'message') next = sanitizeMessageInput(value);
    if (name === 'countryCode') {
      setLead((prev) => ({
        ...prev,
        countryCode: value,
        phone2: sanitizePhoneInput(prev.phone2, value),
      }));
      return;
    }
    setLead((prev) => ({ ...prev, [name]: next }));
    if (leadErrors[name]) {
      setLeadErrors((prev) => ({
        ...prev,
        [name]: validateLead({ ...lead, [name]: next })[name],
      }));
    }
  };

  const onLeadSubmit = (e) => {
    e.preventDefault();
    const errors = validateLead(lead);
    setLeadErrors(errors);
    const first = firstFieldError(errors);
    if (first) {
      setLeadError(first);
      return;
    }
    setLeadError('');

    const simSummary = result
      ? `OEE sim | industry=${industry?.label || '-'} | line=${line?.name || '-'} | machine=${machine?.name || '-'} | OEE=${result.oee}% A=${result.availability}% P=${result.performance}% Q=${result.quality}% | downtime=${result.downtime_minutes}m actual=${result.actual} defective=${result.defective}`
      : 'OEE sim | no run yet';

    const payload = {
      ...lead,
      industry: industry?.label || 'Manufacturing',
      country2: 'India',
      sites: '1',
      assets: '100-500',
      product: 'EAM Production OEE',
      request_type: 'demo',
      phone2: `${lead.countryCode} ${lead.phone2}`.trim(),
      message: [lead.message.trim(), simSummary].filter(Boolean).join('\n\n'),
      ...captureUtmParams(),
      landing_page: typeof window !== 'undefined' ? window.location.href : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    };

    setSubmitting(true);
    try {
      savePendingLead({
        ...payload,
        trackingEvent: 'eam_oee_simulator_lead',
      });
      redirectToThankYou(LANDING_PATH);
    } catch (err) {
      console.error(err);
      setLeadError('Unable to send your request right now. Please try again.');
      setSubmitting(false);
    }
  };

  const stepIndex = !industry ? 1 : phase === 'results' ? 3 : 2;

  return (
    <div className="oee-sim">
      <Helmet>
        <title>Production OEE | RIO EAM | Riobizsols</title>
        <meta
          name="description"
          content="Interactive Production OEE experience for manufacturing, NGP, pharma, food, healthcare and hospitality. Dial Availability, Performance and Quality and watch the score move live."
        />
        <link rel="canonical" href={`https://riobizsols.com${LANDING_PATH}`} />
        <meta property="og:title" content="Production OEE | RIO EAM" />
        <meta
          property="og:description"
          content="Pick an industry, tune the shift, and watch OEE respond in real time — Availability × Performance × Quality."
        />
        <meta property="og:url" content={`https://riobizsols.com${LANDING_PATH}`} />
      </Helmet>

      <section className="oee-sim-hero">
        <div className="oee-sim-hero-glow" aria-hidden="true" />
        <div className="oee-sim-hero-inner">
          <p className="oee-sim-kicker">RIO EAM · Production</p>
          <h1 className="oee-sim-title">
            Make OEE move
            <span> with every input you change.</span>
          </h1>
          <p className="oee-sim-lead">
            Choose an industry, set up the shift, then reveal Availability,
            Performance and Quality as one OEE score — the way Production works
            inside RIO EAM.
          </p>
          <div className="oee-sim-hero-actions">
            <a className="oee-sim-btn oee-sim-btn--primary" href="#industries">
              Pick an industry
            </a>
          </div>
          <ul className="oee-sim-proof">
            <li>Step through line, machine and shift inputs</li>
            <li>Reveal OEE when you are ready</li>
            <li>Compare healthy vs downtime vs quality hits</li>
          </ul>
        </div>
      </section>

      <section className="oee-sim-industries" id="industries">
        <div className="oee-sim-section-head">
          <p className="oee-sim-step-label">Step 1</p>
          <h2>Pick your industry</h2>
          <p>Tap an industry to load matching lines and machines.</p>
        </div>
        <div className="oee-sim-industry-grid">
          {INDUSTRIES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`oee-sim-industry-card${industryId === s.id ? ' is-active' : ''}`}
              style={{ '--industry-accent': s.accent }}
              onClick={() => pickIndustry(s.id)}
            >
              <span className="oee-sim-industry-label">{s.label}</span>
              <span className="oee-sim-industry-tag">{s.tagline}</span>
              <span className="oee-sim-industry-blurb">{s.blurb}</span>
            </button>
          ))}
        </div>
      </section>

      {industry && phase === 'idle' ? (
        <div className="oee-sim-resume">
          <p>
            <strong>{industry.label}</strong> is selected — continue setting up
            the shift when you are ready.
          </p>
          <button type="button" className="oee-sim-btn oee-sim-btn--primary" onClick={openSetupModal}>
            Continue setup
          </button>
        </div>
      ) : null}

      {setupOpen ? (
        <div
          className="oee-sim-setup-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="oee-setup-title"
        >
          <button
            type="button"
            className="oee-sim-setup-modal-backdrop"
            aria-label="Close setup"
            onClick={closeSetupModal}
          />
          <div className="oee-sim-setup-modal-panel" id="simulator">
            <button
              type="button"
              className="oee-sim-modal-close oee-sim-setup-modal-close"
              onClick={closeSetupModal}
              aria-label="Close setup"
            >
              ×
            </button>

            <div className="oee-sim-setup-modal-scroll">
            <div className="oee-sim-section-head">
              <p className="oee-sim-step-label">Step 2</p>
              <h2 id="oee-setup-title">Set up the {industry.label} shift</h2>
              <p>
                {industry.shiftLabel}. Choose the line and machine, tune the
                numbers, then run the board to see OEE.
              </p>
            </div>

            <div className="oee-sim-progress" aria-hidden="true">
              <span className={stepIndex >= 1 ? 'is-done' : ''}>Industry</span>
              <span className={stepIndex >= 2 ? 'is-done' : ''}>Setup</span>
              <span className={stepIndex >= 3 ? 'is-done' : ''}>Results</span>
            </div>

            <div
              className={`oee-sim-board oee-sim-board--setup${result ? ' has-results' : ''}`}
              style={industry ? { '--industry-accent': industry.accent } : undefined}
            >
              <aside className="oee-sim-controls">
                <p className="oee-sim-panel-label">Shift controls</p>
                <div className="oee-sim-setup-grid">
                  <label className="oee-sim-field">
                    <span>Production line</span>
                    <select value={line?.id || ''} onChange={(e) => selectLine(e.target.value)}>
                      {industry.lines.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="oee-sim-field">
                    <span>Machine / asset</span>
                    <select
                      value={machine?.id || ''}
                      onChange={(e) => selectMachine(e.target.value)}
                    >
                      {(line?.machines || []).map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="oee-sim-scenarios">
                  <span className="oee-sim-field-label">Quick scenarios</span>
                  <div className="oee-sim-scenario-row">
                    {SCENARIOS.map((sc) => (
                      <button
                        key={sc.id}
                        type="button"
                        className={`oee-sim-chip${scenarioId === sc.id ? ' is-active' : ''}`}
                        onClick={() => applyScenario(sc.id)}
                        title={sc.hint}
                      >
                        {sc.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="oee-sim-sliders">
                  <label className="oee-sim-field">
                    <span>
                      Planned time <em>{inputs.plannedMinutes} min</em>
                    </span>
                    <input
                      type="range"
                      min={60}
                      max={industry.id === 'ngp' ? 1440 : 720}
                      step={15}
                      value={inputs.plannedMinutes}
                      onChange={(e) => updateInput('plannedMinutes', e.target.value)}
                    />
                  </label>
                  <label className="oee-sim-field">
                    <span>
                      Downtime <em>{inputs.downtimeMinutes} min</em>
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={Math.max(30, inputs.plannedMinutes - 15)}
                      step={5}
                      value={inputs.downtimeMinutes}
                      onChange={(e) => updateInput('downtimeMinutes', e.target.value)}
                    />
                  </label>
                  <label className="oee-sim-field">
                    <span>
                      Actual output <em>{inputs.actualProd} {industry.unitLabel}</em>
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={Math.max(inputs.targetProd * 1.3, inputs.actualProd, 10)}
                      step={1}
                      value={inputs.actualProd}
                      onChange={(e) => updateInput('actualProd', e.target.value)}
                    />
                  </label>
                  <label className="oee-sim-field">
                    <span>
                      Target output <em>{inputs.targetProd}</em>
                    </span>
                    <input
                      type="range"
                      min={1}
                      max={Math.max(inputs.targetProd * 1.5, 20)}
                      step={1}
                      value={inputs.targetProd}
                      onChange={(e) => updateInput('targetProd', e.target.value)}
                    />
                  </label>
                  <label className="oee-sim-field">
                    <span>
                      Defective / scrap <em>{inputs.defectiveProd}</em>
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={Math.max(inputs.actualProd, 1)}
                      step={1}
                      value={Math.min(inputs.defectiveProd, inputs.actualProd)}
                      onChange={(e) => updateInput('defectiveProd', e.target.value)}
                    />
                  </label>
                  <label className="oee-sim-field">
                    <span>
                      Ideal cycle time <em>{inputs.idealCycleTime} min/unit</em>
                    </span>
                    <input
                      type="number"
                      min={0.01}
                      step={0.01}
                      value={inputs.idealCycleTime}
                      onChange={(e) => updateInput('idealCycleTime', e.target.value)}
                    />
                  </label>
                </div>

                <div className="oee-sim-setup-summary">
                  <p>
                    <strong>{machine?.name}</strong>
                    <span> on {line?.name}</span>
                  </p>
                  <p className="oee-sim-setup-hint">
                    Tune the shift, then run the board to unlock the live OEE
                    console.
                  </p>
                  <button
                    type="button"
                    className="oee-sim-btn oee-sim-btn--primary oee-sim-run-btn"
                    onClick={runBoard}
                  >
                    {result ? 'Recalculate OEE →' : 'Run the board →'}
                  </button>
                </div>
              </aside>

              {result ? (
                <div
                  className="oee-sim-console oee-sim-results--reveal"
                  ref={modalResultsRef}
                >
                  <div className="oee-sim-console-head">
                    <div>
                      <p className="oee-sim-step-label">Live console</p>
                      <h2>OEE for {machine?.name}</h2>
                      <p className="oee-sim-console-sub">
                        {line?.name} · {industry.label} · A × P × Q
                      </p>
                    </div>
                    <div className={`oee-sim-console-badge oee-sim-console-badge--${oeeTone}`}>
                      {oeeTone === 'good' ? 'Strong' : oeeTone === 'mid' ? 'Watch' : 'Critical'}
                    </div>
                  </div>

                  <div className="oee-sim-console-hero">
                    <Gauge pct={result.oee} tone={oeeTone} />
                    <div className="oee-sim-headline">
                      <p className={`oee-sim-verdict oee-sim-verdict--${oeeTone}`}>
                        {result.oee >= 85
                          ? 'Strong shift — Availability, Performance and Quality are aligned.'
                          : result.oee >= 65
                            ? 'Mid-pack — downtime or scrap is pulling the score down.'
                            : 'Heavy losses — most of the OEE gap is visible in A, P or Q.'}
                      </p>
                      <div className="oee-sim-console-formula">
                        <span>{result.availability}% A</span>
                        <span>×</span>
                        <span>{result.performance}% P</span>
                        <span>×</span>
                        <span>{result.quality}% Q</span>
                        <span>=</span>
                        <strong>{result.oee}% OEE</strong>
                      </div>
                    </div>
                  </div>

                  <div className="oee-sim-apq oee-sim-apq--tiles">
                    <MetricBar
                      label="Availability"
                      value={result.availability}
                      tone={toneForPct(result.availability)}
                      formula={`(Planned − Downtime) ÷ Planned · ${result.available_minutes} min available`}
                    />
                    <MetricBar
                      label="Performance"
                      value={result.performance}
                      tone={toneForPct(result.performance)}
                      formula="Ideal cycle × Actual ÷ Available time"
                    />
                    <MetricBar
                      label="Quality"
                      value={result.quality}
                      tone={toneForPct(result.quality)}
                      formula={`Good ÷ Actual · ${result.good} good · ${result.scrap_rate}% scrap`}
                    />
                  </div>

                  <div className="oee-sim-stat-grid oee-sim-stat-grid--wide">
                    <div className="oee-sim-stat">
                      <span>Downtime</span>
                      <strong>{result.downtime_minutes} min</strong>
                    </div>
                    <div className="oee-sim-stat">
                      <span>Achievement</span>
                      <strong>{result.achievement_pct}%</strong>
                    </div>
                    <div className="oee-sim-stat">
                      <span>Actual / Target</span>
                      <strong>
                        {result.actual} / {result.target}
                      </strong>
                    </div>
                    <div className="oee-sim-stat">
                      <span>Available time</span>
                      <strong>{result.available_minutes} min</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="oee-sim-console oee-sim-console--empty">
                  <p className="oee-sim-step-label">Awaiting run</p>
                  <h3>OEE console</h3>
                  <p>
                    Set line, machine and shift inputs on the left, then run the
                    board. Availability, Performance, Quality and OEE unlock
                    here.
                  </p>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      ) : null}

      {industry && inputs && result && !setupOpen ? (
        <section className="oee-sim-results-section" id="results" ref={resultsRef}>
          <div className="oee-sim-section-head">
            <p className="oee-sim-step-label">Step 3</p>
            <h2>Your OEE result</h2>
            <p>
              Availability × Performance × Quality for {machine?.name}. Open the
              console again to retune and recalculate.
            </p>
            <button
              type="button"
              className="oee-sim-btn oee-sim-btn--primary oee-sim-adjust-btn"
              onClick={openSetupModal}
            >
              Open live console
            </button>
          </div>

          <div
            className="oee-sim-console oee-sim-console--page oee-sim-results--reveal"
            style={{ '--industry-accent': industry.accent }}
          >
            <div className="oee-sim-console-head">
              <div>
                <p className="oee-sim-step-label">Saved board</p>
                <h2>OEE for {machine?.name}</h2>
                <p className="oee-sim-console-sub">
                  {line?.name} · {industry.label}
                </p>
              </div>
              <div className={`oee-sim-console-badge oee-sim-console-badge--${oeeTone}`}>
                {oeeTone === 'good' ? 'Strong' : oeeTone === 'mid' ? 'Watch' : 'Critical'}
              </div>
            </div>
            <div className="oee-sim-console-hero">
              <Gauge pct={result.oee} tone={oeeTone} />
              <div className="oee-sim-headline">
                <p className={`oee-sim-verdict oee-sim-verdict--${oeeTone}`}>
                  {result.oee >= 85
                    ? 'Strong shift — Availability, Performance and Quality are aligned.'
                    : result.oee >= 65
                      ? 'Mid-pack — downtime or scrap is pulling the score down.'
                      : 'Heavy losses — most of the OEE gap is visible in A, P or Q.'}
                </p>
                <div className="oee-sim-console-formula">
                  <span>{result.availability}% A</span>
                  <span>×</span>
                  <span>{result.performance}% P</span>
                  <span>×</span>
                  <span>{result.quality}% Q</span>
                  <span>=</span>
                  <strong>{result.oee}% OEE</strong>
                </div>
              </div>
            </div>
            <div className="oee-sim-apq oee-sim-apq--tiles">
              <MetricBar
                label="Availability"
                value={result.availability}
                tone={toneForPct(result.availability)}
                formula={`(Planned − Downtime) ÷ Planned · ${result.available_minutes} min available`}
              />
              <MetricBar
                label="Performance"
                value={result.performance}
                tone={toneForPct(result.performance)}
                formula="Ideal cycle × Actual ÷ Available time"
              />
              <MetricBar
                label="Quality"
                value={result.quality}
                tone={toneForPct(result.quality)}
                formula={`Good ÷ Actual · ${result.good} good · ${result.scrap_rate}% scrap`}
              />
            </div>
          </div>
        </section>
      ) : null}

      {leadModalOpen ? (
        <div
          className="oee-sim-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="oee-lead-title"
        >
          <button
            type="button"
            className="oee-sim-modal-backdrop"
            aria-label="Close"
            onClick={closeLeadModal}
          />
          <div className="oee-sim-modal-panel">
            <button
              type="button"
              className="oee-sim-modal-close"
              onClick={closeLeadModal}
              aria-label="Close form"
            >
              ×
            </button>
            <div className="oee-sim-modal-scroll">
              <div className="oee-sim-modal-head">
                <p className="oee-sim-kicker">Next step</p>
                <h2 id="oee-lead-title">Connect with us</h2>
                <p>
                  Share a few details and we&apos;ll continue the conversation on
                  Production OEE for your industry.
                </p>
              </div>
              <LeadFormFields
                lead={lead}
                leadErrors={leadErrors}
                leadError={leadError}
                submitting={submitting}
                onLeadChange={onLeadChange}
                onLeadSubmit={onLeadSubmit}
                result={result}
                industry={industry}
                machine={machine}
              />
            </div>
          </div>
        </div>
      ) : null}

      {result && !leadModalOpen ? (
        <div className="oee-sim-float">
          {tooltipOpen ? (
            <div className="oee-sim-float-tooltip" role="tooltip">
              <span>Connect with us</span>
              <button
                type="button"
                className="oee-sim-float-tooltip-close"
                aria-label="Dismiss tip"
                onClick={() => setTooltipOpen(false)}
              >
                ×
              </button>
            </div>
          ) : null}
          <button
            type="button"
            className="oee-sim-float-btn"
            onClick={openLeadModal}
            aria-label="Connect with us"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
