import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';
import { company } from '../../data/company';
import { footerQuickLinks, footerWorkAreas } from '../../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-secondary/30 pt-10 pb-6">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-8 pb-6 md:pb-8 border-b border-white/10">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-accent">Navigation</h3>
            <ul className="flex flex-col gap-1 md:gap-1.5 md:grid md:grid-rows-3 md:grid-flow-col md:gap-x-8">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[11px] sm:text-sm text-slate-300 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact & Outreach */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-accent">Contact & Liaison</h3>
            <div className="flex flex-col gap-1.5 md:gap-2 text-[11px] sm:text-sm text-slate-300">
              <div className="flex items-start gap-1.5 md:gap-2.5">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{company.contact.address}</span>
              </div>
              <div className="flex items-start gap-1.5 md:gap-2.5">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {company.contact.phones && company.contact.phones.length > 0 ? (
                    company.contact.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:+91${phone}`} className="hover:text-white transition-colors">
                        +91 {phone.slice(0, -10)}{phone.slice(-10)}
                      </a>
                    ))
                  ) : (
                    <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                      {company.contact.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-4 md:pt-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-[11px] md:text-xs text-slate-400 text-center">
          <p>© {currentYear} {company.name}. All rights reserved.</p>

          <p className="flex items-center justify-center gap-1 text-slate-400">
            <span>Powered by</span>
            <a
              href="https://botivate.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-extrabold tracking-wide transition-colors"
            >
              Botivate
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
