import { FC } from "react";
import styles from "./JobList.module.scss";
import { JobItem } from "../../atoms/JobItem";
import { JOB_DATA } from "./../../../data/data";

export const JobList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {JOB_DATA.map((job) => (
        <JobItem
          job={job}
        />
      ))}
    </div>
  );
};