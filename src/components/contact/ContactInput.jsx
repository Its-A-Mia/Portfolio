import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactInput = ({ label, type, value, setValue, name }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      entry.target.style.opacity = '100';
    }
  }, [inView]);

  return (
    <label className="contact-input-label" ref={ref}>
      {label}
      {type === 'textarea' ? (
        <textarea
          className="contact-input contact-textarea"
          value={value}
          name={name}
          onChange={(e) => setValue(e.target.value)}
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
