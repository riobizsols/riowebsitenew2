import {
  FiAlertTriangle,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiShield,
  FiSmartphone,
  FiTool,
  FiUsers,
} from "react-icons/fi";

export const painPoints = [
  {
    icon: FiCalendar,
    text: "Missed preventive maintenance",
    desc: "Schedules are missed or tracked in spreadsheets.",
  },
  {
    icon: FiAlertTriangle,
    text: "Reactive breakdown handling",
    desc: "Breakdowns are fixed reactively, increasing downtime and cost.",
  },
  {
    icon: FiClipboard,
    text: "No clear work order visibility",
    desc: "Work orders are untracked or hard to prioritize.",
  },
  {
    icon: FiFileText,
    text: "Equipment history spread across files",
    desc: "Service history is scattered across emails, notes, and folders.",
  },
  {
    icon: FiMapPin,
    text: "Calibration records difficult to trace",
    desc: "Calibration due dates are missed, causing compliance risks.",
  },
  {
    icon: FiUsers,
    text: "Vendor updates scattered across teams",
    desc: "No single view of vendor performance and service history.",
  },
];

export const features = [
  {
    icon: FiCalendar,
    title: "Preventive Maintenance Scheduling",
    desc: "Create PM plans, set recurrence, and stay ahead of failures.",
  },
  {
    icon: FiTool,
    title: "Breakdown Maintenance Tracking",
    desc: "Log breakdowns, capture root cause, and improve MTTR.",
  },
  {
    icon: FiClipboard,
    title: "Work Order Management",
    desc: "Create, prioritize, and track work orders from request to closure.",
  },
  {
    icon: FiUsers,
    title: "Technician Assignment",
    desc: "Assign the right technician, track time, and measure performance.",
  },
  {
    icon: FiFileText,
    title: "Equipment Service History",
    desc: "Complete history of services, repairs, parts, and costs in one place.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Maintenance Updates",
    desc: "Technicians can update work orders, attach photos, and close on the go.",
  },
  {
    icon: FiCheckCircle,
    title: "Calibration & Inspection Tracking",
    desc: "Track calibration, inspections, alerts, and compliance in one system.",
  },
  {
    icon: FiBarChart2,
    title: "Vendor Service Records",
    desc: "Manage vendors, contracts, service history, and performance.",
  },
];

export const industries = [
  {
    title: "Manufacturing Plants",
    imageKey: "industryManufacturing",
    items: [
      "Reduce unplanned downtime",
      "Improve asset reliability",
      "Control maintenance costs",
    ],
  },
  {
    title: "Hospitals & Clinics",
    imageKey: "industryHealthcare",
    items: [
      "Ensure critical equipment uptime",
      "Track calibration & compliance",
      "Maintain audit-ready records",
    ],
  },
  {
    title: "Facilities Management",
    imageKey: "industryFacilities",
    items: [
      "Manage multi-site assets",
      "Streamline work orders",
      "Optimize vendor performance",
    ],
  },
  {
    title: "Hotels & Institutions",
    imageKey: "industryHospitality",
    items: [
      "Track assets & preventive maintenance",
      "Improve guest experience",
      "Reduce maintenance costs",
    ],
  },
  {
    title: "Multi-site Businesses",
    imageKey: "industryManufacturing",
    items: [
      "Centralize asset data",
      "Standardize maintenance processes",
      "Get real-time visibility",
    ],
  },
];

export const faqs = [
  {
    q: "What is RIO EAM?",
    a: "RIO EAM is Enterprise Asset Management software that helps organizations manage assets, maintenance, inspections, calibration, vendor contracts, documents, depreciation, and asset lifecycle records from one platform.",
  },
  {
    q: "Is RIO EAM the same as CMMS?",
    a: "RIO EAM includes CMMS-style maintenance management features, but it also covers wider asset lifecycle functions such as asset registry, document tracking, vendor contracts, depreciation, expiry, and scrap management.",
  },
  {
    q: "Can it integrate with ERP or SAP PM?",
    a: "Yes, integration can be planned based on the customer system landscape. RIO EAM can work alongside SAP PM or ERP for selected asset, maintenance, document, and workflow processes.",
  },
  {
    q: "Is on-prem deployment available?",
    a: "Yes. RIO EAM can be deployed on cloud, private cloud, or on-prem depending on customer IT policy.",
  },
  {
    q: "How do we get pricing?",
    a: "Pricing depends on the number of locations, asset volume, modules, deployment model, implementation scope, and support needs. Use the pricing form on this page.",
  },
];

export const formOptions = {
  industries: [
    "Manufacturing",
    "Healthcare / Clinics",
    "Facilities Management",
    "Hospitality",
    "Education",
    "Other",
  ],
  sites: ["1", "2-5", "6-20", "20+"],
  assetCounts: ["Below 500", "500-2,000", "2,000-10,000", "10,000+"],
};
