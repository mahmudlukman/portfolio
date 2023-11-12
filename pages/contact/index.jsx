import emailjs from '@emailjs/browser';
// components
import Circles from '../../components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';
import { useState, useRef } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
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
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex gap-x-6 w-full">
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
            <input
              type="text"
              name="subject"
              required
              placeholder="subject"
              className="input"
            />
            <textarea
              placeholder="message"
              name="message"
              required
              className="textarea"
            ></textarea>
            <button
              type="submit"
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
// import emailjs from '@emailjs/browser';
// // components
// import Circles from '../../components/Circles';

// // icons
// import { BsArrowRight } from 'react-icons/bs';

// // framer
// import { motion } from 'framer-motion';

// // variants
// import { fadeIn } from '../../variants';
// import { useState, useRef } from 'react';

// const Contact = () => {
//   const formRef = useRef(null);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: 'Lukman',
//           from_email: form.email,
//           to_email: 'mistamann49@gmail.com',
//           message: form.message,
//         },
//         process.env.NEXT_PUBLIC_EMAILJS_API_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setSuccess(true);
//           setForm({
//             name: '',
//             email: '',
//             subject: '',
//             message: '',
//           });
//           setTimeout(() => {
//             setSuccess(false);
//           },[3000])
//         },
//         (error) => {
//           setLoading(false);
//           setError(true)
//           console.log(error);
//         }
//       );
//   };

//   return (
//     <div className="h-full bg-primary/30">
//       <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
//         {/* text & form */}
//         <div className="flex flex-col w-full max-w-[700px]">
//           {/* text */}
//           <motion.h2
//             variants={fadeIn('up', 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="h2 text-center mb-12"
//           >
//             Let&apos;s <span className="text-accent">connect.</span>
//           </motion.h2>
//           {/* form */}
//           <motion.form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             variants={fadeIn('up', 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="flex-1 flex flex-col gap-6 w-full mx-auto"
//           >
//             {/* input group */}
//             <div className="flex gap-x-6 w-full">
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={form.name}
//                 required
//                 onChange={handleChange}
//                 placeholder="name"
//                 className="input"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={form.email}
//                 required
//                 onChange={handleChange}
//                 placeholder="email"
//                 className="input"
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               id="subject"
//               value={form.subject}
//               required
//               onChange={handleChange}
//               placeholder="subject"
//               className="input"
//             />
//             <textarea
//               placeholder="message"
//               name="message"
//               id="message"
//               value={form.message}
//               required
//               onChange={handleChange}
//               className="textarea"
//             ></textarea>
//             <button
//               type="submit"
//               disabled={loading}
//               className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
//             >
//               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                 {loading ? 'Sending...' : 'Send'}
//               </span>
//               <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
//             </button>
//             {error && 'Something went wrong!'}
//             {success &&
//               'Thank you. I will get back to you as soon as possible.'}
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
