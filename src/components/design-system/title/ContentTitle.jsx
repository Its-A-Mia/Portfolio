import './ContentTitle.css';

const ContentTitle = ({ children, className }) => {
  return <h2 className={`section-title ${className}`}>{children}</h2>;
};

export default ContentTitle;
