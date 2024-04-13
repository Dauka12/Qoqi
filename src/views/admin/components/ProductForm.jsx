/* eslint-disable jsx-a11y/label-has-associated-control */
import { CheckOutlined, LoadingOutlined } from "@ant-design/icons";
import { ImageLoader } from "@/components/common";
import {
  CustomCreatableSelect,
  CustomInput,
  CustomTextarea,
} from "@/components/formik";
import { Field, FieldArray, Form, Formik } from "formik";
import { useFileHandler } from "@/hooks";
import PropType from "prop-types";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";

const { Option } = Select;
// Default brand names that I used. You can use what you want
const brandOptions = [
  { value: "Фотографии", label: "Фотографии" },
  { value: "Музыка", label: "Музыка" },
  { value: "Дизайн", label: "Дизайн" },
  { value: "Иллюстрации", label: "Иллюстрации" },
  { value: "Анимации", label: "Анимации" },
  { value: "Инсталяции", label: "Инсталяции" },
  { value: "3D", label: "3D" },
];

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Product name is required.")
    .max(60, "Product name must only be less than 60 characters."),
  brand: Yup.string().required("Brand name is required."),
  price: Yup.number(),
  // .positive("Price is invalid.")
  // .integer("Price should be an integer.")
  // .required("Price is required."),
  description: Yup.string().required("Description is required."),
  isFeatured: Yup.boolean(),
  isRecommended: Yup.boolean(),
});

const ProductForm = ({ product, onSubmit, isLoading }) => {
  const [param, setParam] = useState(false);
  const [description, setDescription] = useState(false);
  // const [isFeatured, setIsFeatured] = useState(false);

  // const handleFeaturedChange = (e) => {
  //   setIsFeatured(e.target.checked);
  // };

  const toggleParam = () => {
    setParam(true);
    setDescription(false);
  };

  const toggleDescription = () => {
    setParam(false);
    setDescription(true);
  };

  useEffect(() => {
    toggleParam();
  }, []);

  const initFormikValues = {
    name: product?.name || "",
    brand: product?.brand || "",
    price: product?.price || 0,
    description: product?.description || "",
    isFeatured: product?.isFeatured || false,
    isRecommended: product?.isRecommended || false,
  };

  const { imageFile, isFileLoading, onFileChange, removeImage } =
    useFileHandler({
      image: {},
      imageCollection: product?.imageCollection || [],
    });

  const onSubmitForm = (form) => {
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...form,
        quantity: 1,
        // due to firebase function billing policy, let's add lowercase version
        // of name here instead in firebase functions
        name_lower: form.name.toLowerCase(),
        dateAdded: new Date().getTime(),
        image: imageFile?.image?.file || product.imageUrl,
        imageCollection: imageFile.imageCollection,
      });
    } else {
      // eslint-disable-next-line no-alert
      alert("Главный файл обязателен");
    }
  };

  return (
    <div>
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        onSubmit={onSubmitForm}
      >
        {({ values, setValues }) => (
          <Form className="product-headline">
            <div>
              <h1>Опубликовать работу</h1>
              <div style={{ display: "flex" }}>
                <h2>Добавьте вложения</h2>
                <div className="product-submit-button">
                  <button
                    className="button-submit"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Загружается" : "Опубликовать"}
                    &nbsp;
                    {isLoading ? (
                      <LoadingOutlined />
                    ) : (
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ marginLeft: "1rem", width: "10%" }}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* ----THUBMNAIL ---- */}
            <div className="product-form">
              <div className="product-form-file">
                <div className="product-form-image-wrapper">
                  {(imageFile.image.url || product.image) && (
                    <ImageLoader
                      alt=""
                      className="product-form-image-preview"
                      src={imageFile.image.url || product.image}
                    />
                  )}

                  {!isFileLoading && (
                    <label htmlFor="product-input-file" className="label-image">
                      <input
                        disabled={isLoading}
                        hidden
                        id="product-input-file"
                        onChange={(e) =>
                          onFileChange(e, { name: "image", type: "single" })
                        }
                        readOnly={isLoading}
                        type="file"
                      />
                      {/* <p className="label-image-text"> */}* Перетащите файл
                      для загрузки или просмотра
                      {/* </p> */}
                    </label>
                  )}
                </div>
              </div>
              <div className="product-form-inputs">
                <div style={{ display: "flex" }}>
                  <Button
                    className="product-form-buttons"
                    onClick={toggleParam}
                    style={{
                      borderBottom: param
                        ? "7px solid #F28290"
                        : "1px solid black",
                    }}
                  >
                    Параметры
                  </Button>
                  <Button
                    className="product-form-buttons"
                    onClick={toggleDescription}
                    style={{
                      borderBottom: description
                        ? "7px solid #F28290"
                        : "1px solid black",
                    }}
                  >
                    Описание
                  </Button>
                </div>
                {param && (
                  <div className="d-flex-row">
                    <div className="product-form-field">
                      <Field
                        disabled={isLoading}
                        name="name"
                        type="text"
                        label="* Название работы"
                        placeholder="Мона Лиза"
                        style={{
                          textTransform: "capitalize",
                          borderRadius: "5rem",
                        }}
                        component={CustomInput}
                      />
                    </div>
                    &nbsp;
                    <div className="product-form-field">
                      <CustomCreatableSelect
                        defaultValue={{
                          label: values.brand,
                          value: values.brand,
                        }}
                        name="brand"
                        iid="brand"
                        options={brandOptions}
                        disabled={isLoading}
                        placeholder="Выберите категорию"
                        label="* Категория"
                        style={{ borderRadius: "5rem" }}
                      />
                    </div>
                  </div>
                )}
                {description && (
                  <div className="product-form-field">
                    <Field
                      disabled={isLoading}
                      name="description"
                      id="description"
                      rows={3}
                      label="* Описание работы"
                      style={{ borderRadius: "5rem" }}
                      component={CustomTextarea}
                    />
                    <div className="d-flex">
                      <div className="product-form-field">
                        <input
                          checked={values.isFeatured}
                          className=""
                          id="featured"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              isFeatured: e.target.checked,
                            })
                          }
                          type="checkbox"
                        />
                        <label htmlFor="featured">
                          <h5 className="d-flex-grow-1 margin-0">
                            &nbsp; Добавить в Маркетплейс &nbsp;
                          </h5>
                        </label>
                      </div>
                    </div>
                    {values.isFeatured && (
                      <div className="d-flex">
                        <div className="product-form-field">
                          <Field
                            disabled={isLoading}
                            name="price"
                            id="price"
                            type="number"
                            style={{ borderRadius: "5rem" }}
                            label="Цена"
                            component={CustomInput}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {param && (
                  <div className="product-form-field">
                    <br />
                    {!isFileLoading && (
                      <label htmlFor="product-input-file-collection">
                        <input
                          disabled={isLoading}
                          hidden
                          id="product-input-file-collection"
                          multiple
                          onChange={(e) =>
                            onFileChange(e, {
                              name: "imageCollection",
                              type: "multiple",
                            })
                          }
                          readOnly={isLoading}
                          type="file"
                        />
                        Дополнительные файлы
                      </label>
                    )}
                  </div>
                )}
                {param && (
                  <div className="product-form-collection">
                    <>
                      {imageFile.imageCollection.length >= 1 &&
                        imageFile.imageCollection.map((image) => (
                          <div
                            className="product-form-collection-image"
                            key={image.id}
                          >
                            <ImageLoader alt="" src={image.url} />
                            <button
                              className="product-form-delete-image"
                              onClick={() =>
                                removeImage({
                                  id: image.id,
                                  name: "imageCollection",
                                })
                              }
                              title="Delete Image"
                              type="button"
                            >
                              <i className="fa fa-times-circle" />
                            </button>
                          </div>
                        ))}
                    </>
                  </div>
                )}
                <br />
                <br />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ProductForm.propTypes = {
  product: PropType.shape({
    name: PropType.string,
    brand: PropType.string,
    price: PropType.number,
    description: PropType.string,
    imageCollection: PropType.arrayOf(PropType.object),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
};

export default ProductForm;
