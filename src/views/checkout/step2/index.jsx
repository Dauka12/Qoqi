/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Boundary } from "@/components/common";
import { CHECKOUT_STEP_1, CHECKOUT_STEP_3 } from "@/constants/routes";
import { Form, Formik } from "formik";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import PropType from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setShippingDetails } from "@/redux/actions/checkoutActions";
import * as Yup from "yup";
import { StepTracker } from "../components";
import withCheckout from "../hoc/withCheckout";
import ShippingForm from "./ShippingForm";
import ShippingTotal from "./ShippingTotal";

const FormSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Необходимо полное имя.")
    .min(2, "Полное имя должно содержать не менее 2 символов.")
    .max(60, "Полное имя должно содержать не более 60 символов."),
  email: Yup.string()
  .email("Электронная почта недействительна.")
  .required("Необходим адрес электронной почты."),
  address: Yup.string().required("Необходим адрес доставки."),
  mobile: Yup.object()
    .shape({
      country: Yup.string(),
      countryCode: Yup.string(),
      dialCode: Yup.string().required("Требуется номер мобильного телефона"),
      value: Yup.string().required("Требуется номер мобильного телефона"),
    })
    .required("Требуется номер мобильного телефона"),
  isInternational: Yup.boolean(),
  isDone: Yup.boolean(),
});

const ShippingDetails = ({ profile, shipping, subtotal }) => {
  useDocumentTitle("Check Out Step 2 | Qoqiqaz");
  useScrollTop();
  const dispatch = useDispatch();
  const history = useHistory();

  const initFormikValues = {
    fullname: shipping.fullname || profile.fullname || "",
    email: shipping.email || profile.email || "",
    address: shipping.address || profile.address || "",
    mobile: shipping.mobile || profile.mobile || {},
    isInternational: shipping.isInternational || false,
    isDone: shipping.isDone || false,
  };

  const onSubmitForm = (form) => {
    dispatch(
      setShippingDetails({
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        mobile: form.mobile,
        isInternational: form.isInternational,
        isDone: true,
      })
    );
    history.push(CHECKOUT_STEP_3);
  };

  return (
    <Boundary>
      <div className="checkout">
        <StepTracker current={2} />
        <div className="checkout-step-2">
          <h3 className="text-center">Сведения для доставки</h3>
          <Formik
            initialValues={initFormikValues}
            validateOnChange
            validationSchema={FormSchema}
            onSubmit={onSubmitForm}
          >
            {() => (
              <Form>
                <ShippingForm />
                <br />
                {/*  ---- TOTAL --------- */}
                <ShippingTotal subtotal={subtotal} />
                <br />
                {/*  ----- NEXT/PREV BUTTONS --------- */}
                <div className="checkout-shipping-action">
                  <button
                    className="button button-muted"
                    onClick={() => history.push(CHECKOUT_STEP_1)}
                    type="button"
                  >
                    <ArrowLeftOutlined />
                    &nbsp; Назад
                  </button>
                  <button className="button button-icon" type="submit">
                    Следующий шаг &nbsp;
                    <ArrowRightOutlined />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Boundary>
  );
};

ShippingDetails.propTypes = {
  subtotal: PropType.number.isRequired,
  profile: PropType.shape({
    fullname: PropType.string,
    email: PropType.string,
    address: PropType.string,
    mobile: PropType.object,
  }).isRequired,
  shipping: PropType.shape({
    fullname: PropType.string,
    email: PropType.string,
    address: PropType.string,
    mobile: PropType.object,
    isInternational: PropType.bool,
    isDone: PropType.bool,
  }).isRequired,
};

export default withCheckout(ShippingDetails);
