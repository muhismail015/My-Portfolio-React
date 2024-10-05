import { Fragment, useState } from "react";
import { Carousel } from "flowbite-react";
import ZoomSingle from "react-medium-image-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tags from "../Tags/Tags";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Article = ({ project, color, icon }) => {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 mean not opened

  const images = project.img[0].sort(
    (a, b) =>
      parseInt(a.match(/\((\d+)\)/)[1]) - parseInt(b.match(/\((\d+)\)/)[1])
  );

  const openLightbox = (index) => {
    setCurrentIndex(index); // Set index ke gambar yang diklik
  };

  const hideIndicator = project.img[0].length > 1 && project.img[0].length <= 6;
  const condArrow = project.img[0].length <= 1 ? " " : "";

  return (
    <article className="mx-auto w-full">
      <header className="mb-4 lg:mb-6 not-format">
        <h1 className="text-3xl font-extrabold leading-tight text-slate-50 mb-1 lg:text-4xl dark:text-white">
          {project.title}
        </h1>
        <p className="mb-5">Category: {project.category}</p>
      </header>
      <div className="bg-gray-800 rounded-xl p-5">
        <Carousel
          leftControl={condArrow}
          rightControl={condArrow}
          slideInterval={2000}
          indicators={hideIndicator}
        >
          {project.img[0]
            .sort(
              (a, b) =>
                parseInt(a.match(/\((\d+)\)/)[1]) -
                parseInt(b.match(/\((\d+)\)/)[1])
            )
            .map((img, index) => (
              <Fragment key={index}>
                <ZoomSingle>
                  <img key={index} src={img} alt={project.title} />
                </ZoomSingle>
              </Fragment>
            ))}
        </Carousel>

        <div className="my-5">
          <div className="mb-4 flex items-center justify-start md:justify-end gap-4">
            <span
              className={`flex items-center justify-between gap-1 ${color} me-2 rounded bg-primary-100 px-2.5 py-1 text-xs font-medium text-slate-200`}
            >
              <FontAwesomeIcon icon={icon} /> {project.type}
            </span>
          </div>
        </div>

        <div>
          <p className="font-semibold text-slate-50 text-xl">Desription:</p>
          <p className="">{project.desc}</p>
        </div>

        <div className="my-3">
          <h1 className="font-semibold text-slate-50 text-xl">Gallery:</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
            {images.map((img, index) => (
              <img
                key={index}
                onClick={() => openLightbox(index)}
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={img}
                alt=""
              />
            ))}
          </div>

          <Lightbox
            index={currentIndex}
            slides={images.map((img) => ({ src: img }))}
            open={currentIndex >= 0} // open if not -1
            close={() => setCurrentIndex(-1)} // -1 mean closed
            plugins={[Counter, Fullscreen, Thumbnails, Zoom, Download]}
            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          />
        </div>

        <div className="mt-5">
          <p>Tags:</p>
          <Tags project={project.tag} />
        </div>
      </div>
    </article>
  );
};

export default Article;
