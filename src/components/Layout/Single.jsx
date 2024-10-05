import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Single = ({ children }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  /**
   * @param {React.MouseEvent} event
   */
  const handleMouse = (event) => {
    const { clientX, clientY, currentTarget } = event;

    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className="inset-0 z-30 transition duration-300 absolute text-md">
      <div className="relative group-custom-cursor" onMouseMove={handleMouse}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-20 lg:py-0">
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover-custom-cursor transition duration-300"
            style={{
              background: useMotionTemplate`radial-gradient(2000px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 25%)`,
            }}
          />
          <div className="lg:sticky lg:py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Single;
