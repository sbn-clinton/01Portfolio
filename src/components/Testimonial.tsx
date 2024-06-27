import { InfiniteMovingCard } from "./InfiniteMovingCards";
import { MovingBorder } from "./MovingBorder";

const Testimonial = () => {
  return (
    <section id="contact">
      <div className=" flex flex-col md:flex-row mx-auto justify-center items-center gap-4 max-w-5xl">
        <div className=" md:w-1/3">
          <MovingBorder />
        </div>
        <div className="md:w-2/3 mt-5 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-slate-400">
            What our Customers are saying
          </h1>
          <InfiniteMovingCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
