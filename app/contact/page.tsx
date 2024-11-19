'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedin
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-garamond mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl"
          >
            Get in touch with Dr. Elizabeth Gresson for expert legal counsel and representation
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-3xl font-garamond text-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-2xl text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-garamond text-navy mb-2">Office Location</h3>
                    <p className="text-navy/80">
                      Vulcan Chambers<br />
                      Level 1, 25 Vulcan Lane<br />
                      Auckland CBD 1010<br />
                      New Zealand
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone className="text-2xl text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-garamond text-navy mb-2">Phone</h3>
                    <p className="text-navy/80">
                      <a href="tel:+6493023434" className="hover:text-gold transition-colors">
                        +64 9 302 3434
                      </a>
                      <br/>
                      <a href="tel:+640221376902" className="hover:text-gold transition-colors">
                        +64  22 137 6902
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-2xl text-gold mt-1" />
                  <div>
                    <h3 className="text-xl font-garamond text-navy mb-2">Email</h3>
                    <p className="text-navy/80">
                      <a href="mailto:elizabeth@vulcanchambers.co.nz" className="hover:text-gold transition-colors">
                        elizabeth@vulcanchambers.co.nz
                      </a>
                    </p>
                  </div>
                </div>

                

               
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-50 p-4 md:p-8 rounded-lg order-1 lg:order-2"
            >
              <h2 className="text-3xl font-garamond text-navy mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-navy mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-navy mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-navy mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-base"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-navy mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-navy mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base min-h-[120px]"
                  />
                </div>
                <div>
                  <button type="submit" className="w-full bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
