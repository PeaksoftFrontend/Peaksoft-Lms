import { Box, Modal as MuiModal, styled } from "@mui/material";

export const Modal = ({ open, onClose, children, headerText = "" }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <StyledModal>
        <StyledContent>
          <StyledHeader id="modal-title">{headerText}</StyledHeader>

          <StyledBody>{children}</StyledBody>
        </StyledContent>
      </StyledModal>
    </MuiModal>
  );
};

const StyledModal = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledContent = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "541px",
  borderRadius: "8px",
  boxShadow: theme.shadows[5],
  overflow: "hidden",
}));

const StyledHeader = styled(Box)(() => ({
  backgroundColor: "#1F6ED4",
  color: "#fff",
  padding: "16px",
  borderRadius: "8px 8px 0 0",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  height: "68px",
}));

const StyledBody = styled(Box)(() => ({
  padding: "16px",
}));
