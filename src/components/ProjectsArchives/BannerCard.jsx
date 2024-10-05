import projectsData from "../../utils/constant/projectsData";
import HeadArchive from "./HeadArchives";
import { useEffect, useState } from "react";
import RectangleProject from "./RectangleProjects";
import GridProjects from "./GridProjects";

const BannerCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "Rectangle";
  });

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  const filteredData = projectsData.filter((project) => {
    const searchMatch =
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.desc?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tag?.some((t) =>
        t.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const categoryMatch =
      selectedCategories === "All" || project.category === selectedCategories;

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <div>
        <HeadArchive
          onSearch={setSearchTerm}
          setViewMode={setViewMode}
          viewMode={viewMode}
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />

        {filteredData.length === 0 ? (
          <div className="text-center mt-10 underline text-slate-400 font-bold text-3xl">
            <p>Project Not Found</p>
          </div>
        ) : (
          <>
            {viewMode === "Rectangle" ? (
              <RectangleProject filteredData={filteredData} />
            ) : (
              <GridProjects filteredData={filteredData} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BannerCard;
