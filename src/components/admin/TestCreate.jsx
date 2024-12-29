import { Box, styled, Typography } from "@mui/material";
import Input from "../UI/input/Input";

const TestCreate = () => {
  return (
    <MainBox>
      <StyleBox>
        <StyledBox>
          <StyleTypography>Название теста</StyleTypography>
          <Input label="Введите название теста" name="test" />
        </StyledBox>
      </StyleBox>
    </MainBox>
  );
};

export default TestCreate;

const MainBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));

const StyleBox = styled(Box)(() => ({
  width: "1150px",
  height: "875px",
  backgroundColor: "#EFF0F4",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
}));

const StyledBox = styled(Box)(() => ({
  width: "1140px",
  height: "124px",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #D4D4D4",
  marginTop: "24px",
}));

const StyleTypography = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "22px",
  padding: "20px 0 0 20px",
  color: "#1F6ED4",
}));
