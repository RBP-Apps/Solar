import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import { company } from '../../data/company';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-16 bg-bg">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
            <MessageSquare className="w-4 h-4 text-secondary" />
            <span>Outreach & Liaison</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Let’s Connect
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Have a question, policy query, or partnership opportunity? Reach out to Chhattisgarh Solar Business Welfare Association.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Association Details */}
          <div className="lg:col-span-5 bg-primary text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Direct Liaison</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-4">
                {company.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                We coordinate with government authorities, DISCOMs, energy agencies, and clean energy businesses across India.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Headquarters</h3>
                    <p className="text-slate-300 text-xs mt-0.5">{company.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email Address</h3>
                    <a href={`mailto:${company.contact.email}`} className="text-slate-300 hover:text-accent text-xs mt-0.5 block">
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Phone Support</h3>
                    <a href={`tel:${company.contact.phone}`} className="text-slate-300 hover:text-accent text-xs mt-0.5 block">
                      {company.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-300">
              Operating Hours: {company.contact.operatingHours}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-2">Message Received</h3>
                <p className="text-sm text-muted max-w-md leading-relaxed mb-6">
                  Thank you for connecting with Chhattisgarh Solar Business Welfare Association. Our executive team will review your enquiry and get back to you shortly.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Send a Message</h3>
                  <p className="text-xs text-muted">Fill out the details below to initiate dialogue.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Solar Business / DISCOM"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Enquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry, policy clarification request, or partnership interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-secondary transition-colors"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
