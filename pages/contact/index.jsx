// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            name="contact" 
            method="POST" 
            data-netlify-recaptcha="true"
            data-netlify="true" 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
            <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input"
              />
            </div>
            <textarea
              placeholder="message"
              name="message"
              required
              className="textarea"
            ></textarea>
            <div data-netlify-recaptcha="true"></div>
            <button
              type="submit"
              disabled={loading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? 'Sending...' : 'Send'}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            {error && 'Something went wrong!'}
            {success &&
              'Thank you. I will get back to you as soon as possible.'}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;