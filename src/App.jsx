import { Navigate, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import NotFound from "./pages/NotFound";
import ProjectArchives from "./pages/ProjectArchives";
import "react-medium-image-zoom/dist/styles.css";
import FixedTop from "./components/ScrollToTop/FixedTop";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <FixedTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectArchives />} />
        <Route path="/projects/:title" element={<ProjectDetail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to={"/404/"} />} />
      </Routes>
    </>
  );
};

export default App;
library.add(fab, fas, far);
