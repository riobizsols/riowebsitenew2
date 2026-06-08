import {
  FiArchive,
  FiClipboard,
  FiFileText,
  FiRefreshCw,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { ASSETS } from "../assets";
import WhatsAppButton from "./WhatsAppButton";

const lifecycleFeatures = [
  { icon: FiArchive, label: "Asset Registry" },
  { icon: FiFileText, label: "Documents & Warranty" },
  { icon: FiUser, label: "AMC / CMC Contracts" },
  { icon: FiClipboard, label: "Approvals & Audit Logs" },
  { icon: FiShield, label: "Depreciation & Scrap" },
  { icon: FiRefreshCw, label: "Asset Movement & Transfer" },
];

const rows = [
  { cap: "Maintenance schedules", cmms: "Yes", rio: "Yes" },
  { cap: "Work orders", cmms: "Yes", rio: "Yes" },
  {
    cap: "Equipment history",
    cmms: "Limited",
    rio: "Complete history with cost & parts",
  },
  {
    cap: "Vendor records",
    cmms: "Basic",
    rio: "Detailed vendor performance & contracts",
  },
  { cap: "Asset registry", cmms: "No", rio: "Centralized asset register" },
  {
    cap: "Document tracking",
    cmms: "No",
    rio: "Documents, manuals, warranty",
  },
  { cap: "Approvals & audit logs", cmms: "Limited", rio: "Full audit trail" },
  {
    cap: "Depreciation / scrap management",
    cmms: "No",
    rio: "Depreciation, disposal & scrap tracking",
  },
];

export default function WhyRioAlm() {
  return (
    <section className="v2-why-block" id="why-rio">
      <div className="v2-container">
        <div className="v2-lifecycle-card">
          <div className="v2-lifecycle-top">
            <div className="v2-lifecycle-diagram">
              <img
                src={ASSETS.lifecycleLoop}
                alt="Asset lifecycle: plan, procure, operate, maintain, and retire"
                className="v2-lifecycle-loop-img"
                width={800}
                height={358}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="v2-lifecycle-text">
              <h2>
                Why stop at maintenance when you can manage the full asset
                lifecycle?
              </h2>
              <p>
                RIO EAM includes CMMS capabilities and extends them with asset
                registry, documents, warranty, AMC/CMC contracts, approvals,
                depreciation, audit logs, asset movement, and scrap management.
              </p>
            </div>
          </div>
          <div className="v2-lifecycle-features">
            {lifecycleFeatures.map(({ icon: Icon, label }) => (
              <div className="v2-lc-feature" key={label}>
                <span className="v2-lc-feature-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="v2-lc-feature-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="v2-compare-heading">Basic CMMS vs RIO EAM</h2>
        <div className="v2-compare-shell">
          <table className="v2-compare-table">
            <colgroup>
              <col className="v2-col-cap" />
              <col className="v2-col-cmms" />
              <col className="v2-col-rio" />
            </colgroup>
            <thead>
              <tr>
                <th className="v2-th-cap">
                  <span className="v2-th-full">Capability</span>
                  <span className="v2-th-short">Feature</span>
                </th>
                <th className="v2-th-cmms">
                  <span className="v2-th-full">Basic CMMS</span>
                  <span className="v2-th-short">CMMS</span>
                </th>
                <th className="v2-th-rio">RIO EAM</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ cap, cmms, rio }) => (
                <tr key={cap}>
                  <td className="v2-td-cap">{cap}</td>
                  <td className="v2-td-cmms">{cmms}</td>
                  <td className="v2-td-rio">
                    <span className="v2-rio-cell">
                      <span className="v2-row-check" aria-hidden="true">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{rio}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="v2-compare-cta">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
