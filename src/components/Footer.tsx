import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";
import { appConfig } from "@/config/features";

const socialIconMap = {
  Twitter,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const Footer = () => {
  return (
    <footer className="hidden w-full py-12 mt-20 md:block">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Orbito Logo" className="h-8 w-auto" />
                <h3 className="font-medium text-lg tracking-wider">
                  {appConfig.companyNameDisplay}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {appConfig.tagline}
              </p>
              <div className="flex space-x-2">
                {appConfig.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.platform];

                  return (
                    <Button
                      key={social.platform}
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {appConfig.footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-medium">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <NavLink
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} {appConfig.companyNameDisplay}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
