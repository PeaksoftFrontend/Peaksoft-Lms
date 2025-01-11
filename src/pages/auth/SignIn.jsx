import { styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FotgotPassword } from "./FotgotPassword.";
import { Modal } from "../../components/UI/Modal";
import { Button } from "../../components/UI/Button";
import Boy from "../../assets/images/boy.png";
import Logo from "../../assets/images/Logo.png";

export const SignIn = () => {
  const [modal, setModal] = useState(false);

  const handlerModal = () => {
    setModal(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledWrapperDiv>
      <StyleWrapperBoy>
        <StyledLofo>
          <img src={Logo} alt="" />
          <img src={Boy} alt="" />
        </StyledLofo>
      </StyleWrapperBoy>
      <StyledWrapper>
        <StyledContainer>
          <StyledText>Добро пожаловать</StyledText>
          <p>
            <span>в</span> PEAKSOFT LMS !
          </p>
        </StyledContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <section>
            <StyledContainerInput>
              <label>Логин:</label>
              <StyledMessage>
                <StyledInput
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Введите email",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "не правильно введен email",
                    },
                  })}
                  type="email"
                  placeholder="Введите логин"
                  error={!!errors.email}
                />
                {errors.email && (
                  <StyledError>{errors.email.message}</StyledError>
                )}
              </StyledMessage>
            </StyledContainerInput>
            <StyledBox>
              <label>Пароль:</label>
              <StyledContainerInputt>
                <StyledInput
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Введите password",
                    },
                    minLength: {
                      value: 6,
                      message: "Пароль должен быть не менее 6 символов",
                    },
                    maxLength: {
                      value: 15,
                      message: "Слишком длинный пароль",
                    },
                  })}
                  type="password"
                  placeholder="Введите пароль"
                  error={!!errors.password}
                />
                {errors.password && (
                  <StyledError>{errors.password.message}</StyledError>
                )}
              </StyledContainerInputt>
              <p onClick={handlerModal}>Забыли пароль?</p>
            </StyledBox>
          </section>
          <StyledButton type="submit">войти</StyledButton>
        </StyledForm>
        <Modal
          headerText="Забыли пароль"
          open={modal}
          onClose={() => setModal(false)}
        >
          <FotgotPassword />
        </Modal>
      </StyledWrapper>
    </StyledWrapperDiv>
  );
};

const StyledLofo = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "90px",
});
const StyledWrapperDiv = styled("div")({
  display: "flex",
  width: "100%",
});

const StyleWrapperBoy = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  background: "rgba(55, 114, 255, 1)",
});

const StyledMessage = styled("div")(() => ({
  width: "100%",
  height: "66px",
  display: "flex",
  flexDirection: "column",
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  alignItems: "center",
  "& section": {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
}));
const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "54px",
  width: "100%",
  height: "100vh",
}));
const StyledBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "9px",
  "& label": {
    color: "#6A6A6A",
    paddingLeft: "4px",
  },
  "& p": {
    color: "#3772FF",
    textAlign: "end",
    cursor: "pointer",
  },
}));
const StyledContainer = styled("div")(() => ({
  "& p": {
    fontSize: "24px",
    fontWeight: 600,
    color: "#FA2B56",
  },
  "& span": {
    fontSize: "24px",
    fontWeight: 600,
    color: "#1F1F1F",
  },
}));
const StyledText = styled("a")(() => ({
  fontSize: "24px",
  fontWeight: 600,
  color: "#1F1F1F",
}));
const StyledContainerInput = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  "& label": {
    color: "#6A6A6A",
    paddingLeft: "4px",
  },
}));
const StyledContainerInputt = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));
const StyledInput = styled("input")(({ error }) => ({
  width: "440px",
  height: "42px",
  borderRadius: "10px",
  border: `0.5px solid ${error ? "red" : "#8D949E"}`,
  padding: "10px 22px",
  outline: "none",
  "&:focus": {
    border: `0.5px solid ${error ? "red" : "#3772FF"}`,
  },
}));
const StyledError = styled("span")(() => ({
  color: "red",
  fontSize: "14px",
  paddingLeft: "4px",
}));
const StyledButton = styled(Button)(() => ({
  width: "214px",
  height: "51px",
  background: "#3772FF",
  borderRadius: "10px",
  border: "none",
  color: "#FFFFFF",
  fontSize: "20px",
  fontWeight: 600,
}));
