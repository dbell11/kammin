'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    const formData = new FormData(e.currentTarget);

    // Add Web3Forms access key (user needs to get this from web3forms.com)
    // For now, using a placeholder - user should replace with their actual key
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        setMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns so schnell wie möglich bei Ihnen.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(data.message || 'Ein Fehler ist aufgetreten');
      }
    } catch (error) {
      setFormState('error');
      setMessage('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte rufen Sie uns direkt an oder versuchen Sie es später erneut.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Ihr vollständiger Name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="Ihre Telefonnummer"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
          Gewünschte Dienstleistung
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Bitte wählen...</option>
          <option value="Haarschnitt">Haarschnitt</option>
          <option value="Färbung">Färbung / Strähnen</option>
          <option value="Extensions">Great Lengths Extensions</option>
          <option value="Kosmetik">Kosmetik</option>
          <option value="Beratung">Beratung</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          placeholder="Teilen Sie uns Ihre Wünsche mit..."
        />
      </div>

      {/* Honeypot (spam protection) */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

      {/* Status Messages */}
      {formState === 'success' && (
        <div className="bg-green-50 border-2 border-green-200 rounded-md p-4 flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-800 text-sm">{message}</p>
        </div>
      )}

      {formState === 'error' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-md p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{message}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full inline-flex items-center justify-center space-x-2"
        disabled={formState === 'loading'}
      >
        {formState === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Wird gesendet...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Nachricht senden</span>
          </>
        )}
      </Button>

      <p className="text-xs text-secondary-500 text-center">
        * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
      </p>
    </form>
  );
}
