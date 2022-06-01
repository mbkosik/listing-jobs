import { FC } from "react";
import styles from "./JobList.module.scss";
import { JobItem } from "../../atoms/JobItem";
import JOB_DATA from "./../../../data/data";

export const JobList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {JOB_DATA.map((job) => (
        <JobItem
          company={job.company}
          logo={job.logo}
          isNew={job.new}
          isFeatured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </div>
  );
};
