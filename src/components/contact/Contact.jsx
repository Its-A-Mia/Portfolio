import './Contact.css';
import ContactInput from './ContactInput';

const Contact = () => {
  return (
    <section className="container grid">
      <ContactInput label={'Name'} type={'text'} />
      <ContactInput label={'Email'} type={'text'} />
      <ContactInput label={'Message'} type={'textarea'} />
    </section>
  );
};

export default Contact;
