/* eslint-disable no-nested-ternary */
import { CloseCircleOutlined } from "@ant-design/icons";
import PropType from "prop-types";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { applyFilterEvents } from "@/redux/actions/filterEventActions";

const EventAppliedFilters = ({ filteredEventsCount }) => {
  const filter = useSelector((state) => state.filter, shallowEqual);
  const fields = ["brand", "sortBy", "keyword"];
  const isFiltered = fields.some((key) => !!filter[key]);
  const dispatch = useDispatch();

  const onRemoveKeywordFilter = () => {
    dispatch(applyFilterEvents({ keyword: "" }));
  };

  const onRemoveBrandFilter = () => {
    dispatch(applyFilterEvents({ brand: "" }));
  };

  const onRemoveSortFilter = () => {
    dispatch(applyFilterEvents({ sortBy: "" }));
  };

  return !isFiltered ? null : (
    <>
      <div className="product-list-header">
        <div className="product-list-header-title">
          <h5>
            {filteredEventsCount > 0 &&
              `Found ${filteredEventsCount} ${
                filteredEventsCount > 1 ? "events" : "event"
              }`}
          </h5>
        </div>
      </div>
      <div className="product-applied-filters">
        {filter.keyword && (
          <div className="pill-wrapper">
            <span className="d-block">Keyword</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.keyword}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveKeywordFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.brand && (
          <div className="pill-wrapper">
            <span className="d-block">Brand</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.brand}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveBrandFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.sortBy && (
          <div className="pill-wrapper">
            <span className="d-block">Sort By</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                {filter.sortBy === "name-desc" ? "Name Z - A" : "Name A - Z"}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveSortFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

EventAppliedFilters.defaultProps = {
  filteredEventsCount: 0,
};

EventAppliedFilters.propTypes = {
  filteredEventsCount: PropType.number,
};

export default EventAppliedFilters;
