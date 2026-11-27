/** Client-side OEE formulas — same logic as RIO EAM Production module. */

const clampPct = (n) => {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(100, n));
};

export const round2 = (n) => Math.round((Number(n) || 0) * 100) / 100;

export function availabilityPercent(plannedMinutes, downtimeMinutes) {
  const planned = Number(plannedMinutes) || 0;
  if (planned <= 0) return 0;
  const down = Math.max(0, Number(downtimeMinutes) || 0);
  return clampPct(((planned - down) / planned) * 100);
}

export function performancePercent(idealCycleTime, actualProd, availableMinutes) {
  const avail = Number(availableMinutes) || 0;
  if (avail <= 0) return 0;
  const ideal = Number(idealCycleTime) || 0;
  const actual = Number(actualProd) || 0;
  return clampPct(((ideal * actual) / avail) * 100);
}

export function qualityPercent(actualProd, defectiveProd) {
  const actual = Number(actualProd) || 0;
  if (actual <= 0) return 0;
  const defective = Math.max(0, Number(defectiveProd) || 0);
  return clampPct(((actual - defective) / actual) * 100);
}

export function oeePercent(availability, performance, quality) {
  return clampPct(
    ((Number(availability) || 0) / 100) *
      ((Number(performance) || 0) / 100) *
      ((Number(quality) || 0) / 100) *
      100
  );
}

export function computeFromInputs(inputs) {
  const planned = Number(inputs.plannedMinutes) || 480;
  const downtime = Math.max(0, Number(inputs.downtimeMinutes) || 0);
  const available = Math.max(0, planned - downtime);
  const actual = Number(inputs.actualProd) || 0;
  const target = Number(inputs.targetProd) || 0;
  const defective = Math.max(0, Number(inputs.defectiveProd) || 0);
  const ideal = Number(inputs.idealCycleTime) || 0;
  const availability = availabilityPercent(planned, downtime);
  const performance = performancePercent(ideal, actual, available);
  const quality = qualityPercent(actual, defective);
  const oee = oeePercent(availability, performance, quality);
  return {
    planned_minutes: round2(planned),
    downtime_minutes: round2(downtime),
    available_minutes: round2(available),
    availability: round2(availability),
    performance: round2(performance),
    quality: round2(quality),
    oee: round2(oee),
    actual: round2(actual),
    target: round2(target),
    defective: round2(defective),
    good: round2(Math.max(0, actual - defective)),
    achievement_pct: target > 0 ? round2((actual / target) * 100) : 0,
    scrap_rate: actual > 0 ? round2((defective / actual) * 100) : 0,
  };
}

export function toneForPct(n, good = 85, mid = 65) {
  const v = Number(n) || 0;
  if (v >= good) return 'good';
  if (v >= mid) return 'mid';
  return 'low';
}
