import React, { useState } from 'react';
import { Send, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import ThankYouModal from './ThankYouModal';

const initialState = { name: '', number: '', email: '', remarks: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('csbwa_contact').insert({
      name: values.name,
      number: values.number,
      email: values.email,
      remarks: values.remarks
    });

    if (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
      return;
    }

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

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center justify-center gap-2 font-semibold rounded-lg px-6 py-3 text-sm bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md border border-primary/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              Submitting
              <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Submit
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        {status === 'error' && (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again.
          </span>
        )}
      </div>

      {status === 'sent' && (
        <ThankYouModal onClose={() => setStatus('idle')} />
      )}
    </form>
  );
}
