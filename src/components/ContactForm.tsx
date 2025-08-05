import React from 'react';
import { FormData } from '../types';

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name *
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.name}
        onChange={(e) => onChange('name', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email *
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message *
      </label>
      <textarea
        id="message"
        rows={15}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={formData.message}
        onChange={(e) => onChange('message', e.target.value)}
        disabled={isSubmitting}
        required
      />
    </div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
  </form>
);

export default ContactForm;