const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © {currentYear} Crafty Glass Ltd. - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
