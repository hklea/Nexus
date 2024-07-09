
// import { useState } from 'react';
// import '../style/contact.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// const Contact = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [company, setCompany] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Prepare form data for submission to Web3Forms
//     const formData = new FormData();
//     formData.append('access_key', 'e49f762c-70ee-447f-957f-20d855bcdccf');
//     formData.append('fullName', fullName);
//     formData.append('email', email);
//     formData.append('phone', phone);
//     formData.append('company', company);
//     formData.append('message', message);

//     // Submit form data to Web3Forms API endpoint
//     fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to submit form');
//         }
//         // Clear form fields after successful submission
//         setFullName('');
//         setEmail('');
//         setPhone('');
//         setCompany('');
//         setMessage('');
//         console.log('Form submitted successfully');
//       })
//       .catch(error => {
//         console.error('Error submitting form:', error);
//         // Handle error state or display an error message to the user
//       });
//   };

//   return (
//     <div className="contact-form">
//       <div className="contact-left">
//         <label>CONTACT</label>
//         <p className='left-text' style={{fontSize:30}}>Contact Us. It's Easy.</p>
//         <br />
//         <p>We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out.</p>
//         <br />
//         <div className="contact-info">
//           <p className='add' style={{fontSize:12}}>Monday-Friday</p>
//           <p><FontAwesomeIcon icon={faClock} /> 9 AM - 5 PM</p>
//           <br />
//           <p className='add'style={{fontSize:12}}>Phone number</p>
//           <p><FontAwesomeIcon icon={faPhone} /> +355 682 363 499</p>
//           <br />
//           <p className='add'style={{fontSize:12}}>Email</p>
//           <p><FontAwesomeIcon icon={faEnvelope} /> contact@example.com</p>
//         </div>
//       </div>
//       <div className="contact-right">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <div className="flex-row">
//               <div className="flex-item">
//                 <label htmlFor="fullName">Full Name:</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex-item">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="flex-row">
//               <div className="flex-item">
//                 <label htmlFor="phone">Phone:</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex-item">
//                 <label htmlFor="company">Company (optional):</label>
//                 <input
//                   type="text"
//                   id="company"
//                   value={company}
//                   onChange={(e) => setCompany(e.target.value)}
//                 />
//               </div>
//             </div>
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
//           <button className='send' type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState } from 'react';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare form data for submission to Web3Forms
    const formData = new FormData();
    formData.append('access_key', 'e49f762c-70ee-447f-957f-20d855bcdccf');//e49f762c-70ee-447f-957f-20d855bcdccf
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('company', company);
    formData.append('message', message);

    // Set submitting state to true to show loading indicator
    setSubmitting(true);

    // Submit form data to Web3Forms API endpoint
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        // Clear form fields after successful submission
        setFullName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setMessage('');
        setSubmitted(true); // Set submitted state to true
        setSubmitting(false); // Set submitting state to false
        console.log('Form submitted successfully');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error state or display an error message to the user
        setSubmitting(false); // Set submitting state to false
      });
  };

  return (
    <div className="contact-form">
      <div className="contact-left">
        <label>CONTACT</label>
        <p className='left-text' style={{fontSize:30}}>Contact Us. It's Easy.</p>
        <br />
        <p>We'd love to hear from you! Whether you have a question about
          <br />
           our services, need assistance, or just want to provide feedback,
           <br /> feel free to reach out.</p>
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
                  required
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
          {submitting ? (
            <p>Sending...</p>
          ) : (
            <button className='send' type="submit">Send Message</button>
          )}
        </form>
        {submitted && (
          <div className="success-message">
            <p style={{marginTop:10, marginLeft:10}}>Thank you for your message! We will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
