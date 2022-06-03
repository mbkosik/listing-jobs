import { FC } from "react";
import { ActionType, useJobStore } from "../../../context/job.context";
import { FilterButton } from "../FilterButton";
import styles from "./FiltersBar.module.scss";

export const FiltersBar: FC = () => {
  const { state, dispatch } = useJobStore();

  const clearFilters = () => {
    dispatch({
      type: ActionType.RESET
    })
  }

  const removeFilter = (filter: string) => {
    dispatch({
      type: ActionType.REMOVE_ACTIVE_FILTER, 
      payload: filter,
    })
  }

  return (
    <div className={styles.wrapper}>
      {state.activeFilters.map((filter, index) => (
        <FilterButton filter={filter} key={index} onClick={() => removeFilter(filter)} />
      ))}
      <button className={styles.clearButton} onClick={clearFilters}>Clear</button>
    </div>
  );
};
