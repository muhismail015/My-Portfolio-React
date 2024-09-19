import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={"ss"} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
library.add(fab, fas, far);
