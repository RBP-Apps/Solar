import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Shield } from 'lucide-react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import { company } from '../../data/company';
import { footerQuickLinks, footerWorkAreas } from '../../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-secondary/30 pt-10 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Logo light />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Working with government departments, renewable energy agencies, DISCOMs, industry stakeholders, and businesses across India to support clean energy growth and investment.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/30 border border-secondary/50 text-xs text-accent font-medium w-fit">
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span>Pan-India Renewable Energy Facilitation Platform</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">Navigation</h3>
            <ul className="flex flex-col gap-1.5">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-slate-300 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Outreach */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent">Contact & Liaison</h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{company.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-white transition-colors">
                  {company.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`tel:${company.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {company.contact.phone}
                </a>
              </div>
            </div>

            <div className="mt-1 p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 leading-normal">
              <span className="font-semibold text-white">Institutional Engagement:</span> For policy consultations or DISCOM liaison enquiries, reach out via our contact form.
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-xs text-slate-400 text-center md:text-left">
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

          <p className="md:text-right text-slate-400">
            Pan-India Renewable Energy Ecosystem
          </p>
        </div>
      </Container>
    </footer>
  );
}
