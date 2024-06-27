import { CardDemo } from "./CardDemo";
import { StickyScrollReveal } from "./StickyScrollReveal";

const Services = () => {
  return (
    <section id="services">
      <div className="flex flex-col md:flex-row">
        <StickyScrollReveal />
        <CardDemo />
      </div>
    </section>
  );
};

export default Services;
