/** Reserved header space — prevents layout shift while Navbar chunk loads. */
export default function NavbarShell() {
  return <div className="nav_bar nav_bar--shell" aria-hidden="true" />;
}
