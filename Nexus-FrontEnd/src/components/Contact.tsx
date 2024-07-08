// import  { useState } from 'react';
// import '../style/contact.css'

// const Contact = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [company, setCompany] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     // Here you can implement the logic to send the form data to your email or server
//     // Example:
//     console.log({ fullName, email, phone, company, message });
//     // Clear form fields after submission if needed
//     setFullName('');
//     setEmail('');
//     setPhone('');
//     setCompany('');
//     setMessage('');
//   };

//   return (
//     <div className="contact-form">
//       <div className="contact-left">
//         <label>Contact:</label>
//         <p>Some text here that you decide about.</p>
//       </div>
//       <div className="contact-right">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name:</label>
//             <input
//               type="text"
//               id="fullName"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="tel"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="company">Company (optional):</label>
//             <input
//               type="text"
//               id="company"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import  { useState } from 'react';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you can implement the logic to send the form data to your email or server
    // Example:
    console.log({ fullName, email, phone, company, message });
    // Clear form fields after submission if needed
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };
//npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

  return (
    <div className="contact-form">
      <div className="contact-left">
        <label>CONTACT</label>
        <p className='left-text' style={{fontSize:30}}>Contact Us. It's Easy.</p>
        <br />
        <p>We'd love to hear from you!Whether you have<br></br> a question about our services,need assistance,
           or<br></br> just want to provide feedback, 
           feel free to reach out.</p>
           <br />
           <div className="contact-info">
            <p className='add' style={{fontSize:12}}>Monday-Friday</p>
          <p><FontAwesomeIcon icon={faClock} /> 9 AM - 5 PM</p>
          <br />
          <p className='add'style={{fontSize:12}}>Phone number</p>
          <p><FontAwesomeIcon icon={faPhone} /> +355 682 363 499</p>
          <br />
          <p className='add'style={{fontSize:12}}>Email</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> contact@example.com</p>
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="flex-row">
              <div className="flex-item">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-item">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="flex-row">
              <div className="flex-item">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex-item">
                <label htmlFor="company">Company (optional):</label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className='send' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
