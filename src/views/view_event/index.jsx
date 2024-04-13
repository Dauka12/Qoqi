import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { ImageLoader, MessageDisplay } from "@/components/common";
import { EVENTS } from "@/constants/routes";
import { useDocumentTitle, useEvent, useScrollTop } from "@/hooks";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const ViewEvent = () => {
  const { id } = useParams();
  const { event, isLoading, error } = useEvent(id);
  useScrollTop();
  useDocumentTitle(`Обзор ${event?.name || "Item"}`);

  const [selectedImage, setSelectedImage] = useState(event?.image || "");

  useEffect(() => {
    setSelectedImage(event?.image);
  }, [event]);

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Загружается</h4>
          <br />
          <LoadingOutlined style={{ fontSize: "3rem" }} />
        </div>
      )}
      {error && <MessageDisplay message={error} />}
      {event && !isLoading && (
        <div className="product-view">
          <Link to={EVENTS}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Вернуться в Мероприятия
            </h3>
          </Link>
          <div className="product-modal">
            {event.imageCollection.length !== 0 && (
              <div className="product-modal-image-collection">
                {event.imageCollection.map((image) => (
                  <div
                    className="product-modal-image-collection-wrapper"
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    role="presentation"
                  >
                    <ImageLoader
                      className="product-modal-image-collection-img"
                      src={image.url}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="product-modal-image-wrapper">
              <ImageLoader
                alt={event.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{event.brand}</span>
              <h1 className="margin-top-0">{event.name}</h1>
              <span>{event.description}</span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <div></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewEvent;
