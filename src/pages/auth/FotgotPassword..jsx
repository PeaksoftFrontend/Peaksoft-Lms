import { styled } from "@mui/material";
import { Button } from "../../components/UI/Button";
import Input from "../../components/UI/input/Input";
import { Modal } from "../../components/UI/Modal";

export const FotgotPassword = () => {
  return (
    <div>
      <Modal></Modal>
      <StyledBox>
        <StyledContainer>
          <StyledText>
            <p style={{ color: "grey" }}>
              Вам будет отправлена ссылка для сброса пароля
            </p>
          </StyledText>
          <StyledWrapper>
            <StyledInput
              label={"Введите ваш Email"}
              type="text"
              sx={{ marginTop: "10px" }}
            />
            <div>
              <StyledButton>Отправить</StyledButton>
            </div>
          </StyledWrapper>
        </StyledContainer>
      </StyledBox>
    </div>
  );
};
const StyledBox = styled("div")({
  alignItems: "center",
  justifyContent: "center",
});
const StyledText = styled("div")({});
const StyledWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
});

const StyledButton = styled(Button)({
  width: "483px",
  borderRadius: "8px",
});
const StyledInput = styled(Input)({
  paddingTop: "5px",
  width: "491px",
});
const StyledContainer = styled("div")({
  borderRadius: "10px",
});
