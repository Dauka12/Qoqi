/* eslint-disable no-nested-ternary */
import { useDidMountEvents } from "@/hooks";
import PropType from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import {
  applyFilterEvents,
  resetFilterEvents,
} from "@/redux/actions/filterEventActions";

const FiltersEvents = ({ closeModal }) => {
  const { filter, isLoading, events } = useSelector((state) => ({
    filter: state.filter,
    isLoading: state.app.loading,
    events: state.events.items,
  }));
  const [field, setFilter] = useState({
    brand: filter.brand,
    sortBy: filter.sortBy,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const didMount = useDidMountEvents();

  useEffect(() => {
    if (didMount && window.screen.width <= 480) {
      history.push("/");
    }

    if (didMount && closeModal) closeModal();

    setFilter(filter);
    window.scrollTo(0, 0);
  }, [filter]);

  const onBrandFilterChange = (e) => {
    const val = e.target.value;

    setFilter({ ...field, brand: val });
  };

  const onSortFilterChange = (e) => {
    setFilter({ ...field, sortBy: e.target.value });
  };

  const onApplyFilter = () => {
    const isChanged = Object.keys(field).some(
      (key) => field[key] !== filter[key]
    );
    dispatch(applyFilterEvents(field));
    if (isChanged) {
      dispatch(applyFilterEvents(field));
    } else {
      closeModal();
    }
  };

  const onResetFilter = () => {
    const filterFields = ["brand", "sortBy"];

    if (filterFields.some((key) => !!filter[key])) {
      dispatch(resetFilterEvents());
    } else {
      closeModal();
    }
  };

  return (
    <div className="filters">
      <div className="filters-field">
        <span>Категория</span>
        <br />
        <br />
        {events.length === 0 && isLoading ? (
          <h5 className="text-subtle">Загружается</h5>
        ) : (
          <select
            className="filters-brand"
            value={field.brand}
            disabled={isLoading || events.length === 0}
            onChange={onBrandFilterChange}
          >
            <option value="">Все категории</option>
            <option value="выставка">Выставка</option>
            <option value="соревнование">Соревнование</option>
            <option value="аукцион">Аукцион</option>
          </select>
        )}
      </div>
      <div className="filters-field">
        <span>Сортировать по</span>
        <br />
        <br />
        <select
          className="filters-sort-by d-block"
          value={field.sortBy}
          disabled={isLoading || events.length === 0}
          onChange={onSortFilterChange}
        >
          <option value="">По умолчанию</option>
          <option value="name-asc">По возрастанию названия A - Z</option>
          <option value="name-desc">По убыванию названия Z - A</option>
        </select>
      </div>
      <div className="filters-action">
        <button
          className="filters-button button button-small"
          disabled={isLoading || events.length === 0}
          onClick={onApplyFilter}
          type="button"
        >
          Применить фильтры
        </button>
        <button
          className="filters-button button button-border button-small"
          disabled={isLoading || events.length === 0}
          onClick={onResetFilter}
          type="button"
        >
          Убрать фильтры
        </button>
      </div>
    </div>
  );
};

FiltersEvents.propTypes = {
  closeModal: PropType.func.isRequired,
};

export default withRouter(FiltersEvents);
