import { styled } from "@mui/material";
import { Button } from "../UI/Button";
import Input from "../UI/input/Input";

export const FotgotPassword = () => {
  return (
    <div>
      {/* <Modal>
        <h1>sdfghjk</h1>
      </Modal> */}
      <StyledBox>
        <StyledContainer>
          <StyledDiv>
            <StyledP>Забыли пароль?</StyledP>
          </StyledDiv>
          <StyledText>
            <p style={{ color: "grey" }}>
              Вам будет отправлена ссылка для сброса пароля
            </p>
          </StyledText>
          <StyledWrapper>
            <StyledInput
              type="text"
              label={"Введите ваш Email"}
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
const StyledText = styled("div")({
  padding: "16px 0 0 25px",
});
const StyledWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
});
const StyledP = styled("p")({
  fontWeight: "400",
  fontSize: "20px",
  lineheight: "27px",
  color: "rgba(255,255,255,1)",
  padding: "25px 0 0 190px",
});
const StyledDiv = styled("div")({
  height: "68px",
  background: "rgba(31,110,212,1)",
  borderRadius: "5px",
});
const StyledButton = styled(Button)({
  width: "483px",
  borderRadius: "8px",
});
const StyledInput = styled(Input)({
  width: "491px",
});
const StyledContainer = styled("div")({
  // width: "545px",
  // height: "241px",
  borderRadius: "10px",
});
