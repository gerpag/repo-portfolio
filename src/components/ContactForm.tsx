import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import "../i18n";
import "../css/ContactForm.css"



function ContactForm() {
  const [state, handleSubmit] = useForm("xgeggaky");
  const { translate } = useLanguage();

  if (state.succeeded) {
    return <p className='section-title'>{translate('contact.form.success')}</p>;
  }
  
 
  

  return (
    <form onSubmit={handleSubmit}>
      <div id='contact'>
        <span className="section-title">{translate('contact.title')}</span>
      </div>

      <div id="nets">
        <a href="mailto:germinalfp@gmail.com" className="icon-link"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
        <a href="https://discordapp.com/users/724728588519342100" target="_blank" rel="noopener noreferrer" className="icon-link"><FaDiscord /></a>
        <a href="https://github.com/gerpag" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
      </div>

      <label htmlFor="name">
      {translate('contact.form.name')}
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
      {translate('contact.form.subject')}
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
      {translate('contact.form.email')}
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

      <label htmlFor="message">{translate('contact.form.message')}</label>
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
      {translate('contact.form.submit')}
      </button>
    </form>
  );
}

export default ContactForm;

