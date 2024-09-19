import NavTitle from "../Navigation/NavTitle";

import { Timeline } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import educationData from "../../utils/constant/educationData";

const Education = () => {
  return (
    <section id="education" className="pt-10">
      <NavTitle title={"Education"} />

      <Timeline className="ml-5 mt-8">
        {educationData.map((data, index) => (
          <Timeline.Item key={index}>
            <div data-testid="timeline-point">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 ring-8 ring-cyan-600 dark:bg-cyan-900 dark:ring-gray-900">
                <FontAwesomeIcon className="text-cyan-800" icon={data.icon} />
              </span>
            </div>
            <Timeline.Content className="ml-2">
              <Timeline.Time>
                {data.startDate} - {data.endDate}
              </Timeline.Time>
              <Timeline.Title className="text-slate-200">
                {data.name}
              </Timeline.Title>
              <Timeline.Body>
                {data.major} <br />
                {data.gpa && <span>GPA: {data.gpa}</span>}
              </Timeline.Body>
              {/* <Button color="gray">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button> */}
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </section>
  );
};

export default Education;
