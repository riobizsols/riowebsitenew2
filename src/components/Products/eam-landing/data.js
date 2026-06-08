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
  FiCheckCircle,
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
    desc: "Plan recurring maintenance and avoid costly delays and downtime.",
  },
  {
    icon: FiAlertTriangle,
    text: "Respond faster to breakdowns",
    desc: "Capture issues quickly, assign responsibility, and resolve faster.",
  },
  {
    icon: FiClipboard,
    text: "Improve work order visibility",
    desc: "Track open, pending, overdue and completed jobs in real time.",
  },
  {
    icon: FiFileText,
    text: "Keep service records organized",
    desc: "Store maintenance history, technician notes and documents by equipment.",
  },
  {
    icon: FiUsers,
    text: "Support field technicians",
    desc: "Enable mobile updates, photos, remarks and job closures on the go.",
  },
  {
    icon: FiCheckCircle,
    text: "Standardize maintenance",
    desc: "Use role-based access, multilingual screens & workflows across teams.",
  },
];

export const features = [
  {
    icon: FiLayers,
    title: "Centralized Equipment Repository",
    desc: "Maintain all equipment details, location, department, and lifecycle data.",
  },
  {
    icon: FiCalendar,
    title: "Preventive & Breakdown Scheduling",
    desc: "Create plans, log breakdowns, and assign tasks from one calendar.",
  },
  {
    icon: FiClipboard,
    title: "Work Order Management",
    desc: "Create, assign, prioritize and monitor work orders end to end.",
  },
  {
    icon: FiShield,
    title: "Calibration Tracking",
    desc: "Track schedules, due dates and maintain records for compliance.",
  },
  {
    icon: FiBarChart2,
    title: "Vendor & AMC / CMC Management",
    desc: "Manage vendors, contracts, and service visits in one place.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Maintenance Updates",
    desc: "Technicians can scan equipment and update jobs via the mobile app.",
  },
  {
    icon: FiGlobe,
    title: "Multilingual & Role-Based Access",
    desc: "Support multiple languages and access levels for every user type.",
  },
  {
    icon: FiFileText,
    title: "Audit Logs & Compliance Records",
    desc: "Maintain audit-ready records and activity logs for every action.",
  },
];

export const structuredOperations = [
  {
    icon: FiMapPin,
    title: "Multi-location asset tracking",
    desc: "Manage assets across branches, plants, and buildings from one view.",
  },
  {
    icon: FiSettings,
    title: "Configurable workflows",
    desc: "Set up approval flows and processes that match how your team works.",
  },
  {
    icon: FiLayers,
    title: "Asset-type specific fields",
    desc: "Custom fields for machines, vehicles, facilities, and equipment types.",
  },
  {
    icon: FiClipboard,
    title: "Smart grouping of assets",
    desc: "Group parent-child or related assets for easier maintenance planning.",
  },
];

export const industries = [
  {
    title: "Manufacturing Plants",
    icon: FiTool,
    items: [
      "Machine maintenance scheduling",
      "Breakdown tracking & root cause",
      "Production equipment PM plans",
    ],
  },
  {
    title: "Hospitals & Clinics",
    icon: FiShield,
    items: [
      "Medical equipment maintenance",
      "Calibration reminders & compliance",
      "Critical asset uptime tracking",
    ],
  },
  {
    title: "Hotels & Resorts",
    icon: FiHome,
    items: [
      "Room & facility maintenance",
      "HVAC and kitchen equipment PM",
      "Guest-facing asset reliability",
    ],
  },
  {
    title: "Educational Institutions",
    icon: FiBookOpen,
    items: [
      "Lab equipment maintenance",
      "Maintenance schedules & checklists",
      "Campus facility upkeep",
    ],
  },
  {
    title: "Facilities Management",
    icon: FiLayers,
    items: [
      "Building maintenance workflows",
      "Contractor tracking & SLAs",
      "Multi-site work order management",
    ],
  },
  {
    title: "Equipment Rental / Service Companies",
    icon: FiTruck,
    items: [
      "Repair tracking & dispatch",
      "Field technician updates on site",
      "Equipment service history records",
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
