import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "flowbite-react";

const HeadArchives = ({
  onSearch,
  setViewMode,
  viewMode,
  setSelectedCategories,
  selectedCategories,
}) => {
  const arrCategory = ["All", "Website", "Bot", "Figma"];
  const arrLayout = ["Rectangle", "Grid"];

  return (
    <div className="mt-10 max-w-screen-xl mx-auto w-full">
      <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 shadow-md dark:bg-gray-800 rounded-lg">
        <div className="flex flex-col items-center justify-between p-3 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  icon="fa-solid fa-magnifying-glass"
                />
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            <div className="flex items-center justify-evenly space-x-3 md:w-auto w-full">
              <Dropdown
                dismissOnClick={false}
                color={"gray"}
                size={"xs"}
                label={
                  <div className="flex items-center justify-center w-full sm:mx-auto">
                    <FontAwesomeIcon
                      className="w-3 h-3 mr-2 text-gray-400"
                      icon="fa-solid fa-filter"
                    />
                    Filter
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block truncate text-sm font-medium">
                    Choose Category
                  </span>
                </Dropdown.Header>
                {arrCategory.map((category) => (
                  <Dropdown.Item
                    key={category}
                    className="rounded-lg my-1 transition "
                    style={{
                      backgroundColor:
                        selectedCategories === category ? "#0e7490" : "#f1f5f9",
                      color:
                        selectedCategories === category ? "#f1f5f9" : "#000",
                    }}
                    onMouseEnter={(e) => {
                      if (selectedCategories !== category) {
                        e.target.style.backgroundColor = "#0f9bbe";
                        e.target.style.color = "#f1f5f9";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCategories !== category) {
                        e.target.style.backgroundColor = "#e2e8f0";
                        e.target.style.color = "#000";
                      }
                    }}
                    onClick={() => setSelectedCategories(category)}
                  >
                    {category}
                  </Dropdown.Item>
                ))}

                {/* <Dropdown.Divider /> */}
              </Dropdown>
              <Dropdown
                dismissOnClick={false}
                color={"gray"}
                size={"xs"}
                label={
                  <div className="flex items-center justify-center sm:mx-auto">
                    <FontAwesomeIcon
                      className="w-3 h-3 mr-2 text-gray-400"
                      icon="fa-solid fa-border-all"
                    />
                    Layout
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block truncate text-sm font-medium">
                    Type
                  </span>
                </Dropdown.Header>
                {arrLayout.map((layout) => (
                  <Dropdown.Item
                    key={layout}
                    className="rounded-lg my-1 transition "
                    style={{
                      backgroundColor:
                        viewMode === layout ? "#0e7490" : "#f1f5f9",
                      color: viewMode === layout ? "#f1f5f9" : "#000",
                    }}
                    onMouseEnter={(e) => {
                      if (viewMode !== layout) {
                        e.target.style.backgroundColor = "#0f9bbe";
                        e.target.style.color = "#f1f5f9";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (viewMode !== layout) {
                        e.target.style.backgroundColor = "#e2e8f0";
                        e.target.style.color = "#000";
                      }
                    }}
                    color="gray"
                    onClick={() => setViewMode(layout)}
                  >
                    <FontAwesomeIcon
                      className="mr-3 h-5 w-5"
                      icon={`${
                        layout === "Rectangle"
                          ? "fa-regular fa-rectangle-list"
                          : "fa-solid fa-grip"
                      }`}
                    />
                    {layout}
                  </Dropdown.Item>
                ))}

                <Dropdown.Divider />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadArchives;
