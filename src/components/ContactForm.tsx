import { useForm, ValidationError } from '@formspree/react';
import "../css/ContactForm.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';



function ContactForm() {
  const [state, handleSubmit] = useForm("xgeggaky");
  
  if (state.succeeded) {
    return <p className='section-title'>Thanks for contacting me!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id='contact'>
        <span className="section-title">Contact me</span>
      </div>

      <div id="nets">
        <a href="mailto:germinalfp@gmail.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
        <a href="https://discordapp.com/users/724728588519342100" target="_blank" rel="noopener noreferrer" className="icon-link"><FaDiscord /></a>
        <a href="https://github.com/gerpag" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
      </div>

      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="subject">
        Subject
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
      />
      <ValidationError 
        prefix="subject" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

