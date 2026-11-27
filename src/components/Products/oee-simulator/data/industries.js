/**
 * Mock plant data by industry for the public Production / OEE page.
 * Mirrors RIO EAM production concepts (lines → machines → shift KPIs)
 * without calling the EAM database.
 */

export const INDUSTRIES = [
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    tagline: 'Discrete & process plants',
    blurb: 'CNC, presses, furnaces — track Availability × Performance × Quality live.',
    accent: '#0d9488',
    unitLabel: 'units',
    shiftLabel: '8-hour shift',
    lines: [
      {
        id: 'mfg-cnc',
        name: 'CNC Machining Line',
        machines: [
          {
            id: 'cnc-01',
            name: 'CNC Lathe A1',
            plannedMinutes: 480,
            idealCycleTime: 0.45,
            targetProd: 900,
            baselines: {
              healthy: { downtimeMinutes: 28, actualProd: 860, defectiveProd: 12 },
              downtime: { downtimeMinutes: 95, actualProd: 620, defectiveProd: 18 },
              quality: { downtimeMinutes: 35, actualProd: 840, defectiveProd: 78 },
            },
          },
          {
            id: 'cnc-02',
            name: 'Vertical Mill B2',
            plannedMinutes: 480,
            idealCycleTime: 0.55,
            targetProd: 720,
            baselines: {
              healthy: { downtimeMinutes: 22, actualProd: 690, defectiveProd: 8 },
              downtime: { downtimeMinutes: 110, actualProd: 480, defectiveProd: 14 },
              quality: { downtimeMinutes: 30, actualProd: 680, defectiveProd: 62 },
            },
          },
        ],
      },
      {
        id: 'mfg-press',
        name: 'Hydraulic Press Bay',
        machines: [
          {
            id: 'press-01',
            name: 'Press Station P1',
            plannedMinutes: 480,
            idealCycleTime: 0.35,
            targetProd: 1200,
            baselines: {
              healthy: { downtimeMinutes: 40, actualProd: 1120, defectiveProd: 22 },
              downtime: { downtimeMinutes: 130, actualProd: 780, defectiveProd: 30 },
              quality: { downtimeMinutes: 45, actualProd: 1100, defectiveProd: 95 },
            },
          },
        ],
      },
      {
        id: 'mfg-furnace',
        name: 'Heat Treatment',
        machines: [
          {
            id: 'furn-01',
            name: 'Batch Furnace F3',
            plannedMinutes: 480,
            idealCycleTime: 2.4,
            targetProd: 180,
            baselines: {
              healthy: { downtimeMinutes: 55, actualProd: 168, defectiveProd: 4 },
              downtime: { downtimeMinutes: 140, actualProd: 118, defectiveProd: 6 },
              quality: { downtimeMinutes: 60, actualProd: 165, defectiveProd: 22 },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'ngp',
    label: 'NGP / Campus',
    tagline: 'Facilities & utilities',
    blurb: 'Generators, HVAC, lifts — treat uptime like production OEE for critical assets.',
    accent: '#0369a1',
    unitLabel: 'runtime hrs equiv.',
    shiftLabel: '24-hour window',
    lines: [
      {
        id: 'ngp-power',
        name: 'Power Generation',
        machines: [
          {
            id: 'gen-01',
            name: 'Diesel Genset DG-1',
            plannedMinutes: 1440,
            idealCycleTime: 1,
            targetProd: 1380,
            baselines: {
              healthy: { downtimeMinutes: 45, actualProd: 1360, defectiveProd: 0 },
              downtime: { downtimeMinutes: 220, actualProd: 1180, defectiveProd: 0 },
              quality: { downtimeMinutes: 60, actualProd: 1320, defectiveProd: 40 },
            },
          },
          {
            id: 'gen-02',
            name: 'Diesel Genset DG-2',
            plannedMinutes: 1440,
            idealCycleTime: 1,
            targetProd: 1380,
            baselines: {
              healthy: { downtimeMinutes: 30, actualProd: 1390, defectiveProd: 0 },
              downtime: { downtimeMinutes: 180, actualProd: 1220, defectiveProd: 0 },
              quality: { downtimeMinutes: 50, actualProd: 1340, defectiveProd: 35 },
            },
          },
        ],
      },
      {
        id: 'ngp-hvac',
        name: 'Central HVAC',
        machines: [
          {
            id: 'chiller-01',
            name: 'Chiller Plant CH-A',
            plannedMinutes: 1440,
            idealCycleTime: 1,
            targetProd: 1400,
            baselines: {
              healthy: { downtimeMinutes: 70, actualProd: 1340, defectiveProd: 10 },
              downtime: { downtimeMinutes: 260, actualProd: 1080, defectiveProd: 15 },
              quality: { downtimeMinutes: 80, actualProd: 1320, defectiveProd: 85 },
            },
          },
        ],
      },
      {
        id: 'ngp-lift',
        name: 'Vertical Transport',
        machines: [
          {
            id: 'lift-01',
            name: 'Passenger Lift L3',
            plannedMinutes: 960,
            idealCycleTime: 0.8,
            targetProd: 1100,
            baselines: {
              healthy: { downtimeMinutes: 25, actualProd: 1080, defectiveProd: 5 },
              downtime: { downtimeMinutes: 160, actualProd: 820, defectiveProd: 8 },
              quality: { downtimeMinutes: 35, actualProd: 1050, defectiveProd: 55 },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'pharma',
    label: 'Pharma / Life Sciences',
    tagline: 'GMP production lines',
    blurb: 'Blending, filling, packaging — quality losses show up instantly in OEE.',
    accent: '#1d4ed8',
    unitLabel: 'batches / packs',
    shiftLabel: '8-hour shift',
    lines: [
      {
        id: 'ph-blend',
        name: 'Blending Suite',
        machines: [
          {
            id: 'blend-01',
            name: 'Ribbon Blender RB-2',
            plannedMinutes: 480,
            idealCycleTime: 12,
            targetProd: 36,
            baselines: {
              healthy: { downtimeMinutes: 40, actualProd: 34, defectiveProd: 1 },
              downtime: { downtimeMinutes: 120, actualProd: 24, defectiveProd: 1 },
              quality: { downtimeMinutes: 45, actualProd: 33, defectiveProd: 5 },
            },
          },
        ],
      },
      {
        id: 'ph-pack',
        name: 'Packaging Line',
        machines: [
          {
            id: 'pack-01',
            name: 'Blister Packer BP-1',
            plannedMinutes: 480,
            idealCycleTime: 0.08,
            targetProd: 5200,
            baselines: {
              healthy: { downtimeMinutes: 35, actualProd: 5000, defectiveProd: 80 },
              downtime: { downtimeMinutes: 100, actualProd: 3800, defectiveProd: 90 },
              quality: { downtimeMinutes: 40, actualProd: 4900, defectiveProd: 420 },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'food',
    label: 'Food & Beverage',
    tagline: 'Filling & processing',
    blurb: 'Fillers and cookers — simulate scrap, changeovers, and lost minutes.',
    accent: '#c2410c',
    unitLabel: 'cases / liters',
    shiftLabel: '8-hour shift',
    lines: [
      {
        id: 'fb-fill',
        name: 'Bottling Line',
        machines: [
          {
            id: 'fill-01',
            name: 'Rotary Filler RF-4',
            plannedMinutes: 480,
            idealCycleTime: 0.12,
            targetProd: 3600,
            baselines: {
              healthy: { downtimeMinutes: 50, actualProd: 3400, defectiveProd: 60 },
              downtime: { downtimeMinutes: 145, actualProd: 2500, defectiveProd: 70 },
              quality: { downtimeMinutes: 55, actualProd: 3350, defectiveProd: 280 },
            },
          },
        ],
      },
      {
        id: 'fb-cook',
        name: 'Process Kitchen',
        machines: [
          {
            id: 'cook-01',
            name: 'Cooker CK-2',
            plannedMinutes: 480,
            idealCycleTime: 1.5,
            targetProd: 280,
            baselines: {
              healthy: { downtimeMinutes: 30, actualProd: 270, defectiveProd: 6 },
              downtime: { downtimeMinutes: 100, actualProd: 200, defectiveProd: 8 },
              quality: { downtimeMinutes: 35, actualProd: 265, defectiveProd: 32 },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    tagline: 'Clinical asset readiness',
    blurb: 'Imaging and OT assets — availability is the KPI patients feel.',
    accent: '#0f766e',
    unitLabel: 'procedures / scans',
    shiftLabel: '12-hour window',
    lines: [
      {
        id: 'hc-img',
        name: 'Imaging Suite',
        machines: [
          {
            id: 'mri-01',
            name: 'MRI Scanner M1',
            plannedMinutes: 720,
            idealCycleTime: 45,
            targetProd: 14,
            baselines: {
              healthy: { downtimeMinutes: 40, actualProd: 13, defectiveProd: 0 },
              downtime: { downtimeMinutes: 180, actualProd: 9, defectiveProd: 0 },
              quality: { downtimeMinutes: 50, actualProd: 12, defectiveProd: 2 },
            },
          },
        ],
      },
      {
        id: 'hc-ot',
        name: 'Operating Theatre',
        machines: [
          {
            id: 'ot-01',
            name: 'OT Table & Anesthesia',
            plannedMinutes: 720,
            idealCycleTime: 90,
            targetProd: 7,
            baselines: {
              healthy: { downtimeMinutes: 25, actualProd: 7, defectiveProd: 0 },
              downtime: { downtimeMinutes: 150, actualProd: 4, defectiveProd: 0 },
              quality: { downtimeMinutes: 30, actualProd: 6, defectiveProd: 1 },
            },
          },
        ],
      },
    ],
  },
  {
    id: 'hospitality',
    label: 'Hospitality',
    tagline: 'Kitchen & laundry ops',
    blurb: 'Kitchen and laundry equipment — turn downtime into a board-ready OEE story.',
    accent: '#b45309',
    unitLabel: 'covers / loads',
    shiftLabel: '12-hour service',
    lines: [
      {
        id: 'hos-kit',
        name: 'Main Kitchen',
        machines: [
          {
            id: 'oven-01',
            name: 'Combi Oven Bank',
            plannedMinutes: 720,
            idealCycleTime: 0.9,
            targetProd: 700,
            baselines: {
              healthy: { downtimeMinutes: 35, actualProd: 680, defectiveProd: 15 },
              downtime: { downtimeMinutes: 140, actualProd: 500, defectiveProd: 20 },
              quality: { downtimeMinutes: 40, actualProd: 670, defectiveProd: 70 },
            },
          },
        ],
      },
      {
        id: 'hos-lau',
        name: 'Laundry Plant',
        machines: [
          {
            id: 'wash-01',
            name: 'Washer Extractor W2',
            plannedMinutes: 720,
            idealCycleTime: 4,
            targetProd: 160,
            baselines: {
              healthy: { downtimeMinutes: 45, actualProd: 152, defectiveProd: 4 },
              downtime: { downtimeMinutes: 160, actualProd: 110, defectiveProd: 5 },
              quality: { downtimeMinutes: 50, actualProd: 148, defectiveProd: 18 },
            },
          },
        ],
      },
    ],
  },
];

export const SCENARIOS = [
  {
    id: 'healthy',
    label: 'Healthy shift',
    hint: 'Baseline — solid A · P · Q',
  },
  {
    id: 'downtime',
    label: 'High downtime',
    hint: 'Breaks & stoppages spike',
  },
  {
    id: 'quality',
    label: 'Quality hit',
    hint: 'Scrap / rework climbs',
  },
];

export function getIndustry(id) {
  return INDUSTRIES.find((s) => s.id === id) || INDUSTRIES[0];
}

export function defaultMachineForIndustry(industry) {
  const line = industry?.lines?.[0];
  return { line, machine: line?.machines?.[0] };
}

export function inputsFromMachine(machine, scenarioId = 'healthy') {
  if (!machine) {
    return {
      plannedMinutes: 480,
      downtimeMinutes: 30,
      idealCycleTime: 1,
      targetProd: 100,
      actualProd: 90,
      defectiveProd: 2,
    };
  }
  const base =
    machine.baselines?.[scenarioId] || machine.baselines?.healthy || {};
  return {
    plannedMinutes: machine.plannedMinutes,
    idealCycleTime: machine.idealCycleTime,
    targetProd: machine.targetProd,
    downtimeMinutes: base.downtimeMinutes ?? 30,
    actualProd: base.actualProd ?? Math.round(machine.targetProd * 0.9),
    defectiveProd: base.defectiveProd ?? 0,
  };
}
