import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "../../helpers/validations";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Contact.styled";
import sprite from "../../assets/icons/sprite.svg";

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Container id="contact">
      <Title title="Contact" />
      <s.Text>
        Please contact me directly at{" "}
        <a href="mailto:natalukha.a.a@gmail.com">natalukha.a.a@gmail.com</a> or
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
