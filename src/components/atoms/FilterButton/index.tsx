import { FC } from "react";
import { IFilterButtonProps } from "./types";
import { ActionType, useJobStore } from "../../../context/job.context";
import styles from "./FilterButton.module.scss";

export const FilterButton: FC<IFilterButtonProps> = ({ filter }) => {
  const { state, dispatch } = useJobStore();

  const handleActiveFilter = () => {
    if (!state.activeFilters.includes(filter)) {
      dispatch({
        type: ActionType.SET_ACTIVE_FILTER,
        payload: filter,
      });
    }
  };

  return (
    <button className={styles.filter} onClick={handleActiveFilter}>
      {filter}
    </button>
  );
};
