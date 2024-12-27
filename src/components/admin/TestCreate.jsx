import { Box, styled } from "@mui/material";

const TestCreate = () => {
  return (
    <StyleMainDiv>
      <StyledBox></StyledBox>
    </StyleMainDiv>
  );
};

export default TestCreate;

const StyledBox = styled(Box)(() => ({
  backgroundColor: "#FFFFFF",
  width: "1140px",
  height: "124px",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
}));

const StyleMainDiv = styled(Box)(() => ({
  backgroundColor: "#EFF0F4",
  width: "1150px",
  height: "875px",
}));
