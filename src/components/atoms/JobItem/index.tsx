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
  return (
    <div className={styles.wrapper}>
      <h2>{company}</h2>
      <img src={logo} alt={company} />
      {isNew && <p>New</p>}
      {isFeatured && <p>Featured</p>}
      <p>{position}</p>
      <p>{postedAt}</p>
      <p>{contract}</p>
      <p>{location}</p>
      <ul>
        {languages.map((lang) => (
          <li>{lang}</li>
        ))}
      </ul>
      <ul>
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </div>
  );
};
