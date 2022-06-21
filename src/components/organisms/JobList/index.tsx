import { FC } from "react";

import { FiltersBar } from "components/atoms/FiltersBar";
import { JobItem } from "components/atoms/JobItem";
import { JOB_DATA } from "data/data";

import styles from "./JobList.module.scss";

export const JobList: FC = () => {

  return (
    <div className={styles.wrapper}>
      <FiltersBar />
      {JOB_DATA.map((job) => (
        <JobItem
          job={job}
          key={job.id}
        />
      ))}
    </div>
  );
};
