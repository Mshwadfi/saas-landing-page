import { testimonials } from "../../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40 overflow-hidden">
      <div className="container block lg:flex flex-wrap justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="testimonials_head-res flex-1 max-w-full lg:max-w-[45%]">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
        </div>

        <div className="testimonials_inner-after flex flex-wrap gap-8 justify-between lg:w-full">
          <div className="flex-1 max-w-full lg:max-w-[48%]">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-1 max-w-full lg:max-w-[48%]">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
