import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle, XCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
    
    if (!scriptUrl) {
      setSubmitStatus('error');
      setStatusMessage('Google Sheets URL is not configured. Please set VITE_GOOGLE_SHEETS_URL.');
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);

      // Using no-cors mode is the standard way to submit to Google Apps Script 
      // without hitting strict CORS preflight failures from the browser.
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      // With no-cors, the response is opaque (status 0), so we assume success if no network error occurred.
      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setStatusMessage('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="text-sm font-display tracking-widest text-brand-accent-from uppercase mb-4">
            04. What's Next?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mt-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.a
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               href="mailto:usmansethi016@gmail.com"
               aria-label="Send an email to Usman Sethi"
               className="glass p-6 rounded-2xl flex items-start space-x-4 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="p-3 bg-brand-accent-from/10 text-brand-accent-from rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Email</h3>
                <p className="text-gray-200 font-medium break-all">usmansethi016@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               href="https://github.com/usman-sethi"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="View Usman Sethi's GitHub Profile"
               className="glass p-6 rounded-2xl flex items-start space-x-4 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="p-3 bg-white/5 text-gray-300 rounded-xl group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">GitHub</h3>
                <p className="text-gray-200 font-medium">usman-sethi</p>
              </div>
            </motion.a>

            <motion.a
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               href="https://www.linkedin.com/in/usman-sethi"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="View Usman Sethi's LinkedIn Profile"
               className="glass p-6 rounded-2xl flex items-start space-x-4 hover:bg-white/[0.05] transition-colors group"
            >
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">LinkedIn</h3>
                <p className="text-gray-200 font-medium">Usman Sethi</p>
              </div>
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl relative"
          >
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="mb-8 p-4 rounded-xl glass-accent bg-green-500/10 border-green-500/20 flex items-start space-x-3 text-green-400 overflow-hidden"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{statusMessage}</p>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="mb-8 p-4 rounded-xl glass-accent bg-red-500/10 border-red-500/20 flex items-start space-x-3 text-red-400 overflow-hidden"
                >
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{statusMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent-from focus:ring-1 focus:ring-brand-accent-from transition-all"
                  placeholder="Paradox"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent-from focus:ring-1 focus:ring-brand-accent-from transition-all"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent-from focus:ring-1 focus:ring-brand-accent-from transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
