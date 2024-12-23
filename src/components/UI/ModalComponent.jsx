import { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { styled } from "@mui/system";

export const ModalComponent = ({ headerText = "", height = "auto" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledModal sx={{ width: "541px", height: height }}>
          <Header id="modal-title">{headerText}</Header>
        </StyledModal>
      </Modal>
    </div>
  );
};

const StyledModal = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "8px",
  boxShadow: theme.shadows
    ? theme.shadows[5]
    : "0px 4px 6px rgba(0, 0, 0, 0.1)",
  outline: "none",
}));

const Header = styled(Box)(() => ({
  background: "#1F6ED4",
  color: "#fff",
  padding: "16px",
  borderRadius: "8px 8px 0 0",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  height: "68px",
}));
