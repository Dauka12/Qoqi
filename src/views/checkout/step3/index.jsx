import { CHECKOUT_STEP_1 } from "@/constants/routes";
import { Form, Formik } from "formik";
import { displayActionMessage } from "@/helpers/utils";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import PropType from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import { StepTracker } from "../components";
import withCheckout from "../hoc/withCheckout";
import CreditPayment from "./CreditPayment";
import PayPalPayment from "./PayPalPayment";
import Total from "./Total";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Имя должно содержать не менее 4 символов.")
    .required("Укажите имя"),
  cardnumber: Yup.string()
  .min(13, "Номер карты должен состоять из 13-19 цифр")
  .max(19, "Номер карты должен состоять только из 13–19 цифр")
  .required("Необходим номер карты."),
  expiry: Yup.date().required("Требуется срок действия кредитной карты."),
  ccv: Yup.string()
  .min(3, "Длина CCV должна состоять из 3–4 цифр")
  .max(4, "Длина CCV должна состоять только из 3–4 цифр")
  .required("Требуется CCV."),
  type: Yup.string().required("Пожалуйста, выберите способ оплаты"),
});

const Payment = ({ shipping, payment, subtotal }) => {
  useDocumentTitle("Check Out Final Step | Qoqiqaz");
  useScrollTop();

  const initFormikValues = {
    name: payment.name || "",
    cardnumber: payment.cardnumber || "",
    expiry: payment.expiry || "",
    ccv: payment.ccv || "",
    type: payment.type || "paypal",
  };

  const onConfirm = () => {
    displayActionMessage("Успешно", "info");
  };

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  return (
    <div className="checkout">
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        validate={(form) => {
          if (form.type === "paypal") {
            displayActionMessage("Успешно", "info");
          }
        }}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className="checkout-step-3">
            <CreditPayment />
            <PayPalPayment />
            <Total
              isInternational={shipping.isInternational}
              subtotal={subtotal}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool,
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string,
  }).isRequired,
  subtotal: PropType.number.isRequired,
};

export default withCheckout(Payment);
