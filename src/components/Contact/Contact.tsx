import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Report } from "notiflix/build/notiflix-report-aio";
import useValidationSchema from "../../helpers/validations";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Contact.styled";
import sprite from "../../assets/icons/sprite.svg";
import { useTranslation, Trans } from "react-i18next";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

type FormData = yup.InferType<ReturnType<typeof useValidationSchema>>;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const schema = useValidationSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { username } = data;
    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, data, VITE_PUBLIC_KEY)
      .then(() => {
        reset();
        Report.success(
          t("contact.messageSuccess.title"),
          t("contact.messageSuccess.text", { username }),
          t("contact.messageSuccess.button")
        );
      })
      .catch((err) => {
        console.error("FAILED...", err);
        Report.failure(
          t("contact.messageFailure.title"),
          t("contact.messageFailure.text"),
          t("contact.messageFailure.button")
        );
      });
  };

  return (
    <Container id="contact">
      <Title title={t("contact.title")} />
      <s.Text>
        <Trans i18nKey="contact.text">
          Please contact me directly at
          <a href="mailto:natalukha.dev@gmail.com">natalukha.dev@gmail.com</a>
          or through this form.
        </Trans>
      </s.Text>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <s.WrapperInput>
          <s.Input
            type="text"
            placeholder={t("contact.placeholderName")}
            {...register("username")}
            $errors={!!errors.username}
          />
          <s.ErrorText>{errors.username?.message}</s.ErrorText>
        </s.WrapperInput>
        <s.WrapperInput>
          <s.Input
            type="email"
            placeholder={t("contact.placeholderEmail")}
            {...register("email")}
            $errors={!!errors.email}
          />
          <s.ErrorText>{errors.email?.message}</s.ErrorText>
        </s.WrapperInput>
        <s.WrapperInput>
          <s.Textarea
            placeholder={t("contact.placeholderMessage")}
            {...register("message")}
            $errors={!!errors.message}
          />
          <s.ErrorText>{errors.message?.message}</s.ErrorText>
        </s.WrapperInput>
        <s.Button type="submit">
          {t("contact.button")}{" "}
          <svg width={24} height={24}>
            <use href={`${sprite}#email`} />
          </svg>
        </s.Button>
      </s.Forma>
    </Container>
  );
};

export default Contact;
