import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Report } from "notiflix/build/notiflix-report-aio";
import { schema } from "../../helpers/validations";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Contact.styled";
import sprite from "../../assets/icons/sprite.svg";

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
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
          "Email sent successfully!",
          `Dear ${username}, Thank you for contacting us! I have received your message and will get in touch with you shortly. I will answer all your questions and provide the necessary information. Best regards, Oleksandr`,
          "Ok"
        );
      })
      .catch((err) => {
        console.error("FAILED...", err);
        Report.failure(
          "Failed to send email.",
          "Unfortunately, there was an error in sending your message. Please try again or contact us directly via email. We apologize for any inconvenience and appreciate your understanding.",
          "Ok"
        );
      });
  };

  return (
    <Container id="contact">
      <Title title="Contact" />
      <s.Text>
        Please contact me directly at{" "}
        <a href="mailto:natalukha.dev@gmail.com">natalukha.dev@gmail.com</a> or
        through this form.
      </s.Text>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <s.WrapperInput>
          <s.Input
            type="text"
            placeholder="Your Name"
            {...register("username")}
            $errors={!!errors.username}
          />
          <s.ErrorText>{errors.username?.message}</s.ErrorText>
        </s.WrapperInput>
        <div>
          <s.Input
            type="email"
            placeholder="Your Email"
            {...register("email")}
            $errors={!!errors.email}
          />
          <s.ErrorText>{errors.email?.message}</s.ErrorText>
        </div>
        <div>
          <s.Textarea
            placeholder="Your Message"
            {...register("message")}
            $errors={!!errors.message}
          />
          <s.ErrorText>{errors.message?.message}</s.ErrorText>
        </div>
        <s.Button type="submit">
          Send Message{" "}
          <svg width={24} height={24}>
            <use href={`${sprite}#email`} />
          </svg>
        </s.Button>
      </s.Forma>
    </Container>
  );
};

export default Contact;

// user_id = service_1zqvwxj;
// service_id = service_1zqvwxj;
// template_id =template_pzc1uwe;
