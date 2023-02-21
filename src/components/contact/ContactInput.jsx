const ContactInput = ({ label, type, value, setValue }) => {
  return (
    <label className="contact-input-label">
      {label}
      {type === 'textarea' ? (
        <textarea
          className="contact-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ resize: 'vertical' }}
        ></textarea>
      ) : (
        <input className="contact-input" type={type} value={value} onChange={(e) => setValue(e.target.value)} />
      )}
    </label>
  );
};

export default ContactInput;
