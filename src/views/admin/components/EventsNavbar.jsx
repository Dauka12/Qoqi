import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { FiltersToggleEvents, SearchBarEvents } from '@/components/common';
import { ADD_EVENT } from "@/constants/routes";
import PropType from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

const EventsNavbar = (props) => {
  const { eventsCount, totalEventsCount } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">
      <h3 className="product-admin-header-title">
        Мероприятия &nbsp; ({`${eventsCount} / ${totalEventsCount}`})
      </h3>
      <SearchBarEvents />
            &nbsp;
      <FiltersToggleEvents>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;Фильтр
        </button>
      </FiltersToggleEvents>
      <button
        className="button button-small"
        onClick={() => history.push(ADD_EVENT)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Добавить мероприятие
      </button>
    </div>
  );
};

EventsNavbar.propTypes = {
  eventsCount: PropType.number.isRequired,
  totalEventsCount: PropType.number.isRequired,
};

export default EventsNavbar;
