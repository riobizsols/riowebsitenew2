import LeadForm from "../../eam-landing/components/LeadForm";

export default function EamClassicLeadForm(props) {
  return (
    <LeadForm trackingEvent="eam_classic_pricing_form" product="EAM" {...props} />
  );
}
