import { FC } from "react";

import { useJobStore } from "context/job.context";
import { FiltersBar } from "components/atoms/FiltersBar";
import { JobItem } from "components/atoms/JobItem";
import { JOB_DATA } from "data/data";

import styles from "./JobList.module.scss";

export const JobList: FC = () => {
  const { state } = useJobStore();

  return (
    <div className={styles.wrapper}>
      {!!state.activeFilters.length && <FiltersBar />}
      {JOB_DATA.map((job) => (
        <JobItem
          job={job}
          key={job.id}
        />
      ))}
    </div>
  );
};
