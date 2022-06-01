import { FC } from "react";
import { IJobItemProps } from "./types";
import styles from "./JobItem.module.scss";

export const JobItem: FC<IJobItemProps> = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const filterContent = [...languages, ...tools];

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt={company} />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.mainInfoWrapper}>
          <h3 className={styles.company}>{company}</h3>
          {isNew && <p className={styles.new}>New</p>}
          {isFeatured && <p className={styles.featured}>Featured</p>}
        </div>
        <h2 className={styles.position}>{position}</h2>
        <div className={styles.detailsWrapper}>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className={styles.filtersWrapper}>
        {filterContent.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};
