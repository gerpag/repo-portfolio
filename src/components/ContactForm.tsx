
import { useForm, ValidationError } from '@formspree/react';
import "../css/ContactForm.css"


function ContactForm() {
  const [state, handleSubmit] = useForm("xgeggaky");
  
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <div id='contact'>
      <span className="subheader-text">Contact me</span>
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
