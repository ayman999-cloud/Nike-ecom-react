import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex 
      justify-between
      items-center
      max-lg:flex-col 
      gap-10
      w-full
      max-container
      border-2 
      border-green-500"
    >
      <div
        className="flex flex-1 flex-col border-2 
      border-red-500"
      >
        <h2
          className="font-palanquin 
        text-4xl
        capitalize
        font-bold lg:max-w-lg"
        >
          We provide you <span className="text-coral-red">super quality </span>
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designes to elevate your expreience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfacition
        </p>
        <div className="mt-11">
          <Button label="View Details" />{' '}
        </div>
      </div>

      <div
        className="flex flex-1
      justify-center 
      items-center border-2 
      border-red-500"
      >
        <img
          src={shoe8}
          className="object-contain"
          alt="shoe8"
          width={570}
          height={570}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
