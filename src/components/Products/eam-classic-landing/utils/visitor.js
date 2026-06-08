const VISITOR_KEY = "rio_eam_visitor_id";

export function getOrCreateVisitorId() {
  if (typeof window === "undefined") return "unknown";

  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return `visitor_${Date.now()}`;
  }
}
