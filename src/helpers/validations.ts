import * as yup from "yup";

const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Error email"),
  message: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(500, "Maximum 500 characters"),
});
