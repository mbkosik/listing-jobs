import { FC } from "react";
import { FilterButton } from "../FilterButton";
import { IJobItemProps } from "./types";
import classNames from "classnames";
import styles from "./JobItem.module.scss";

export const JobItem: FC<IJobItemProps> = ({ job }) => {
  const filterContent = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={classNames([styles.wrapper, job.isFeatured && styles.featured])}>
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
          <FilterButton filter={filter} key={index}/>
        ))}
      </div>
    </div>
  );
};
