import FlowerVariantTwo from './icons/FlowerVariantTwo';
import Vine from './icons/Vine';

const Image = ({ className, src, alt }) => {
  return (
    <div className="image-border">
      <div className="image-flower">
        <FlowerVariantTwo />
      </div>
      <div className="image-vine-left">
        <Vine />
      </div>
      <div className="image-vine-bottom">
        <Vine />
      </div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};

export default Image;
