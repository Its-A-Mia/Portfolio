const ContactInput = ({ label, type, value, setValue, name }) => {
  return (
    <label className="contact-input-label">
      {label}
      {type === 'textarea' ? (
        <textarea
          className="contact-input"
          value={value}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          style={{ resize: 'vertical' }}
          required
        ></textarea>
      ) : (
        <input
          className="contact-input"
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      )}
    </label>
  );
};

export default ContactInput;
