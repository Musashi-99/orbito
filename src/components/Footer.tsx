import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Orbito Logo" className="h-8 w-auto" />
                <h3 className="font-medium text-lg tracking-wider">ORBITO</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Building Scalable Systems for the Future
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Services
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/terms-of-service"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} ORBITO. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
