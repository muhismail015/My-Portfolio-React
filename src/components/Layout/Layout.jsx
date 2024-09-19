import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Layout = ({ leftContent, rightContent }) => {
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
    <>
      <div className="fixed inset-0 z-30 transition duration-300 lg:absolute text-md">
        <div className="relative group-custom-cursor" onMouseMove={handleMouse}>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/2"> */}
            <div className="lg:flex lg:justify-between lg:gap-4">
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover-custom-cursor transition duration-300"
                style={{
                  background: useMotionTemplate`radial-gradient(2000px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 25%)`,
                }}
              />
              <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                {leftContent}
              </div>
              <div className="pt-24 lg:w-1/2 lg:py-24 ">{rightContent}</div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
