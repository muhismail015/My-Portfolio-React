const NavTitle = ({ title }) => {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h4 className="font-bold text-slate-200 uppercase mb-3">
        <span className="border-b">{title}</span>
      </h4>
    </div>
  );
};

export default NavTitle;
