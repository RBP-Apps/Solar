import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { company } from '../../data/company';

const initialState = { name: '', number: '', email: '', remarks: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Website Inquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Number: ${values.number}`,
      `Email: ${values.email}`,
      '',
      'Remarks:',
      values.remarks
    ].join('\n');

    window.location.href = `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus('sent');
    setValues(initialState);
  };

  const inputClasses =
    'w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors';

  return (
    <form onSubmit={handleSubmit} className="w-full text-left" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-primary mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-xs font-semibold text-primary mb-1.5">
            Number
          </label>
          <input
            id="number"
            name="number"
            type="tel"
            required
            value={values.number}
            onChange={handleChange}
            placeholder="Your phone number"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-xs font-semibold text-primary mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="remarks" className="block text-xs font-semibold text-primary mb-1.5">
          Remarks
        </label>
        <textarea
          id="remarks"
          name="remarks"
          rows={4}
          required
          value={values.remarks}
          onChange={handleChange}
          placeholder="Tell us about your inquiry..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 font-semibold rounded-lg px-6 py-3 text-sm bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md border border-primary/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Submit
          <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>

        {status === 'sent' && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary">
            <CheckCircle2 className="w-4 h-4" />
            Opening your email client to send this message...
          </span>
        )}
      </div>
    </form>
  );
}
