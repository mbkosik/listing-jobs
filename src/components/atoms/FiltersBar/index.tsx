import { FC } from "react";
import { useJobStore } from "../../../context/job.context";
import { FilterButton } from "../FilterButton";
import styles from "./FiltersBar.module.scss";

export const FiltersBar: FC = () => {
  const { state } = useJobStore();

  return (
    <div className={styles.wrapper}>
      {state.activeFilters.map((filter, index) => (
        <FilterButton filter={filter} key={index} />
      ))}
    </div>
  );
};
