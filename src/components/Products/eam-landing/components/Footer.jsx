import { FiCheckCircle, FiGlobe, FiShield, FiSmartphone, FiZap } from "react-icons/fi";
import { trustBarItems } from "../data";

const trustIcons = [FiZap, FiShield, FiCheckCircle, FiSmartphone, FiGlobe];

export default function Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-trust-bar">
        <div className="v2-container v2-trust-bar-inner">
          {trustBarItems.map((label, i) => {
            const Icon = trustIcons[i] || FiCheckCircle;
            return (
              <div className="v2-trust-item" key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
