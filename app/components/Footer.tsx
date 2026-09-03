import Logo from "./Logo";

const Footer = () => (
  <footer className="rule-top">
    <div className="shell flex items-center gap-3 py-10">
      <Logo size={24} className="text-muted" />
      <span className="text-micro text-muted">Akshanth V</span>
    </div>
  </footer>
);

export default Footer;
