import { FC } from "react";
import styles from "./JobList.module.scss";
import { FiltersBar } from "components/atoms/FiltersBar";
import { JobItem } from "components/atoms/JobItem";
import { JOB_DATA } from "data/data";

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
