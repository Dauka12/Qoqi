import { LoadingOutlined } from "@ant-design/icons";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { addEvent } from "@/redux/actions/eventActions";

const EventForm = lazy(() => import("../components/EventForm"));

const AddEvent = () => {
  useScrollTop();
  useDocumentTitle("Add New Event | Qoqiqaz");
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    dispatch(addEvent(event));
  };

  return (
    <div className="product-form-container">
      <h2>Добавьте новое мероприятие</h2>
      <Suspense
        fallback={
          <div className="loader" style={{ minHeight: "80vh" }}>
            <h6>Загружается ... </h6>
            <br />
            <LoadingOutlined />
          </div>
        }
      >
        <EventForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          event={{
            name: "",
            brand: '',
            description: "",
            image: "",
            imageCollection: [],
          }}
        />
      </Suspense>
    </div>
  );
};

export default withRouter(AddEvent);
