import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section className="flex flex-col sm:flex-row items-center justify-center p-8 sm:p-16">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-center sm:max-w-md lg:max-w-lg">
          <p className="text-sm capitalize text-p3 tracking-wide mb-2">Video Edition</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase leading-tight">
            Amazingly Simple
          </h2>
          <p className="text-white text-opacity-90 mb-6">
            We designed Xora AI Video Editor 
            to be easy to use, quick to learn, and surprisingly powerful.
          </p>
          <Link
          to={''}
          className="bg-p2 p-2 rounded-lg shadow-md inline-flex items-center justify-center capitalize text-lg text-p1"
          >
            <img
                src="/images/zap.svg"
                alt="icon"
                className="w-5 h-5 mr-2"
                />
                Try it now 
          </Link>
        </div>
        <div className="mt-8 sm:mt-0 sm:ml-8 flex-shrink-0">
          <img 
            src="/images/hero.png" 
            alt="hero" 
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default Hero;
  