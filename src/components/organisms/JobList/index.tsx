import { FC, useEffect, useState } from "react";
import { FiltersBar } from "components/atoms/FiltersBar";
import { JobItem } from "components/atoms/JobItem";

import styles from "./JobList.module.scss";

export interface IJobDataProps {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages?: string[];
  tools?: string[];
};


export const JobList: FC = () => {
  const [jobData, setJobData] = useState<IJobDataProps[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch(
        "https://listing-jobs-default-rtdb.europe-west1.firebasedatabase.app/jobs.json"
      );
      if (!res.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return res.json();
      }
    };

    fetchJobs()
      .then((res) => {
        setJobData(res);
      })
      .catch((e) => {
        throw new Error(e.message);
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <FiltersBar />
      {jobData.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </div>
  );
};
