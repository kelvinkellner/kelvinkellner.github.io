import { Image } from 'react-bootstrap';

import './abstract-stripe.css';
import BgPetals from '@images/bg-petals.png';

const AbstractStripe = ({ id = undefined, height = '8px' }) => {
  return (
    <div id={id ? `${id}-container` : undefined} className="abstract-stripe-container" height={height}>
      <Image
        id={id}
        src={BgPetals}
        alt="Abstract wallpaper"
        className="abstract-stripe"
        height={height}
        style={{ objectPosition: `0% ${parseInt(Math.random() * 100)}%` }}
      />
    </div>
  );
};

export default AbstractStripe;
