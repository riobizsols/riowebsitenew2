import {
  FiAlertTriangle,
  FiBarChart2,
  FiCalendar,
  FiClipboard,
  FiFileText,
  FiGlobe,
  FiZap,
  FiLayers,
  FiMapPin,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiTool,
  FiUsers,
  FiBookOpen,
  FiHome,
  FiTruck,
} from "react-icons/fi";

export const heroHighlights = [
  { icon: FiCalendar, line1: "Preventive", line2: "Maintenance" },
  { icon: FiClipboard, line1: "Work", line2: "Orders" },
  { icon: FiZap, line1: "Breakdown", line2: "Tracking" },
  { icon: FiFileText, line1: "Service", line2: "History" },
  { icon: FiSmartphone, line1: "Mobile", line2: "App" },
  { icon: FiGlobe, line1: "Multilingual", line2: "Support" },
];

export const painPoints = [
  {
    icon: FiCalendar,
    text: "Reduce missed preventive maintenance",
    desc: "Automated PM schedules replace spreadsheet reminders and missed due dates.",
  },
  {
    icon: FiAlertTriangle,
    text: "Respond faster to breakdowns",
    desc: "Log breakdowns instantly, assign technicians, and track resolution in real time.",
  },
  {
    icon: FiClipboard,
    text: "Improve work order visibility",
    desc: "See open, in-progress, and completed work orders across teams and locations.",
  },
  {
    icon: FiFileText,
    text: "Access complete equipment service history",
    desc: "Every repair, part, cost, and vendor note stored against each asset.",
  },
  {
    icon: FiShield,
    text: "Track calibration & inspection compliance",
    desc: "Never miss calibration or inspection due dates with alerts and audit trails.",
  },
  {
    icon: FiUsers,
    text: "Manage vendor service records efficiently",
    desc: "Centralize vendor contracts, SLAs, and service performance in one place.",
  },
];

export const features = [
  {
    icon: FiLayers,
    title: "Centralized Equipment Repository",
    desc: "Register assets with location, category, warranty, and lifecycle details.",
  },
  {
    icon: FiCalendar,
    title: "Preventive & Breakdown Scheduling",
    desc: "Plan PM routines and capture breakdown jobs from one maintenance calendar.",
  },
  {
    icon: FiClipboard,
    title: "Work Order Management",
    desc: "Create, prioritize, assign, and close work orders with full status tracking.",
  },
  {
    icon: FiUsers,
    title: "Technician Assignment & Tracking",
    desc: "Assign the right technician and measure response time and completion rates.",
  },
  {
    icon: FiFileText,
    title: "Equipment Service History",
    desc: "Complete history of services, repairs, parts used, and maintenance costs.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Maintenance Updates",
    desc: "Technicians update jobs, attach photos, and close work orders from mobile.",
  },
  {
    icon: FiShield,
    title: "Calibration & Inspection Tracking",
    desc: "Schedule calibrations and inspections with compliance-ready documentation.",
  },
  {
    icon: FiFileText,
    title: "Audit Logs & Digital Approvals",
    desc: "Maintain compliance with full audit trails and approval workflows.",
  },
];

export const structuredOperations = [
  {
    icon: FiMapPin,
    title: "Multi-location asset tracking",
    desc: "Track assets and maintenance across plants, sites, and branches from one view.",
  },
  {
    icon: FiSettings,
    title: "Configurable workflows",
    desc: "Adapt statuses, approvals, and forms to match how your team works.",
  },
  {
    icon: FiLayers,
    title: "Asset-type specific fields",
    desc: "Capture the right data for machines, vehicles, facilities, and equipment types.",
  },
  {
    icon: FiClipboard,
    title: "Smart grouping of assets",
    desc: "Organize assets by location, department, category, or custom groups.",
  },
];

export const industries = [
  {
    title: "Manufacturing Plants",
    icon: FiTool,
    items: [
      "Reduce unplanned machine downtime",
      "Track PM for production equipment",
      "Improve asset reliability & uptime",
    ],
  },
  {
    title: "Hospitals & Clinics",
    icon: FiShield,
    items: [
      "Ensure critical medical equipment uptime",
      "Track calibration & compliance",
      "Maintain audit-ready maintenance records",
    ],
  },
  {
    title: "Hotels & Resorts",
    icon: FiHome,
    items: [
      "Manage HVAC, kitchen & facility assets",
      "Schedule preventive maintenance",
      "Improve guest experience with fewer breakdowns",
    ],
  },
  {
    title: "Educational Institutions",
    icon: FiBookOpen,
    items: [
      "Track lab, IT & campus facility assets",
      "Plan maintenance across buildings",
      "Control maintenance budgets centrally",
    ],
  },
  {
    title: "Facilities Management",
    icon: FiLayers,
    items: [
      "Manage multi-site client portfolios",
      "Streamline work orders & vendor coordination",
      "Deliver SLA-compliant maintenance services",
    ],
  },
  {
    title: "Equipment Rental / Service Companies",
    icon: FiTruck,
    items: [
      "Track rented equipment service history",
      "Schedule inspections before dispatch",
      "Reduce repair turnaround time",
    ],
  },
];

export const trustBarItems = [
  "Easy to Use",
  "Secure & Reliable",
  "Quick Implementation",
  "Accessible on Web & Mobile",
  "Multilingual Support",
];

export const formOptions = {
  industries: [
    "Manufacturing",
    "Healthcare / Hospitals",
    "Hospitality / Hotels",
    "Education",
    "Facilities Management",
    "Equipment Rental / Service",
    "Other",
  ],
  countryCodes: [
    { code: "+91", label: "IN +91" },
    { code: "+1", label: "US +1" },
    { code: "+44", label: "UK +44" },
    { code: "+971", label: "UAE +971" },
    { code: "+65", label: "SG +65" },
  ],
};
