import * as yup from "yup";
import { useTranslation } from "react-i18next";

const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const useValidationSchema = () => {
  const { t } = useTranslation();

  return yup.object().shape({
    username: yup
      .string()
      .required(t("contact.validation.username.required"))
      .min(3, t("contact.validation.username.min"))
      .max(64, t("contact.validation.username.max")),
    email: yup
      .string()
      .required(t("contact.validation.email.required"))
      .matches(emailRegexp, t("contact.validation.email.matches")),
    message: yup
      .string()
      .required(t("contact.validation.message.required"))
      .min(3, t("contact.validation.message.min"))
      .max(500, t("contact.validation.message.max")),
  });
};

export default useValidationSchema;
