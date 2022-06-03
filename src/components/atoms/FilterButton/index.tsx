import { FC } from "react";
import { IFilterButtonProps } from "./types";
import styles from "./FilterButton.module.scss";

export const FilterButton: FC<IFilterButtonProps> = ({ filter, onClick }) => (
  <button className={styles.filter} onClick={onClick}>
    {filter}
  </button>
  // TODO: add X button for removing
);
