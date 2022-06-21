import { FC } from "react";
import { ActionType, useJobStore } from "context/job.context";
import { FilterButton } from "components/atoms/FilterButton";
import classNames from "classnames";
import styles from "./FiltersBar.module.scss";

export const FiltersBar: FC = () => {
  const { state, dispatch } = useJobStore();

  const clearFilters = () => {
    dispatch({
      type: ActionType.RESET,
    });
  };

  const removeFilter = (filter: string) => {
    dispatch({
      type: ActionType.REMOVE_ACTIVE_FILTER,
      payload: filter,
    });
  };

  return (
    <div
      className={classNames([
        styles.wrapper,
        !state.activeFilters.length && styles.hidden,
      ])}
    >
      <div className={styles.filtersWrapper}>
        {state.activeFilters.map((filter) => (
          <FilterButton
            filter={filter}
            key={filter}
            onClick={() => removeFilter(filter)}
          />
        ))}
      </div>
      <button className={styles.clearButton} onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
};
