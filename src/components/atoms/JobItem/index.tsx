import { FC, useEffect, useState, useRef } from "react";
import { FilterButton } from "../FilterButton";
import { IJobItemProps } from "./types";
import { useJobStore } from "../../../context/job.context";
import classNames from "classnames";
import styles from "./JobItem.module.scss";

export const JobItem: FC<IJobItemProps> = ({ job }) => {
  const { state } = useJobStore();
  const [active, setActive] = useState(false); 
  const filterContent = [job.role, job.level, ...job.languages, ...job.tools];
  const jobFiltersRef = useRef(filterContent);

  useEffect(() => {
    const activeFilters = state.activeFilters;

    const containsFilters = activeFilters.every(filter => {
      return jobFiltersRef.current.includes(filter);
    });

    setActive(containsFilters);
  }, [state.activeFilters]);

  if (!active && state.activeFilters.length) return null;

  return (
    <div
      className={classNames([
        styles.wrapper,
        job.isFeatured && styles.featured,
      ])}
    >
      <div className={styles.logoWrapper}>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.mainInfoWrapper}>
          <h3 className={styles.company}>{job.company}</h3>
          {job.isNew && <p className={styles.new}>New</p>}
          {job.isFeatured && <p className={styles.featured}>Featured</p>}
        </div>
        <h2 className={styles.position}>{job.position}</h2>
        <div className={styles.detailsWrapper}>
          <p>{job.postedAt}</p>
          <p>{job.contract}</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className={styles.filtersWrapper}>
        {filterContent.map((filter, index) => (
          <FilterButton filter={filter} key={index} />
        ))}
      </div>
    </div>
  );
};
