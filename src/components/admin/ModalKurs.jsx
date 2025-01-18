import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../UI/Modal";
import { Icons } from "../../assets";
import Input from "../UI/input/Input";
import { Button } from "../UI/Button";
import { Box, styled } from "@mui/material";
import Dropzone from "dropzone";

export const ModalKurs = () => {
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupDate, setGroupDate] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupPhoto, setGroupPhoto] = useState(null);
  const dropzoneRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const addGroupHandler = () => {
    console.log("Файл:", groupPhoto);
    console.log("Название группы:", groupName);
    console.log("Дата создания:", groupDate);
    console.log("Описание группы:", groupDescription);
  };

  useEffect(() => {
    if (dropzoneRef.current) {
      const dz = new Dropzone(dropzoneRef.current, {
        url: "/ServerUrl",
        maxFiles: 1,
        acceptedFiles: "image/*",
        init: function () {
          this.on("addedfile", (file) => {
            setGroupPhoto(file);
          });
        },
      });
      return () => {
        dz.destroy();
      };
    }
  }, []);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGroupPhoto(file);
    }
  };

  return (
    <div>
      <Modal open={open} headerText="Создать курс">
        <StyledIconWrapper ref={dropzoneRef} onClick={handleIconClick}>
          <StylePhoto
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <StyleIcons>
            <Icons.Photo />
          </StyleIcons>
          <div>Нажмите на иконку чтобы</div>
          <div>загрузить или перетащите фото</div>
        </StyledIconWrapper>

        <StyleInputs>
          <Input
            type="text"
            placeholder="название группы"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Input
            type="date"
            value={groupDate}
            onChange={(e) => setGroupDate(e.target.value)}
          />
        </StyleInputs>

        <Input
          type="text"
          placeholder="описание"
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
        />

        <ButtonContainer>
          <StyleButton>
            <StyledButton onClick={closeHandler}>Отмена</StyledButton>
            <Button onClick={addGroupHandler}>Добавить</Button>
          </StyleButton>
        </ButtonContainer>
      </Modal>
      <Button onClick={handleClick}> + Создать курс</Button>
    </div>
  );
};

const StyledIconWrapper = styled(Box)(() => ({
  textAlign: "center",
  marginBottom: "15px",
  color: "#666",
  border: "2px dashed #ccc",
  padding: "20px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const StyleInputs = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  marginBottom: "15px",
}));

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
}));

const StyleButton = styled(Box)(() => ({
  flex: 1,
  height: "100%",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  gap: "5px",
}));

const StyleIcons = styled("span")({
  "& svg": {
    width: "150px",
    height: "100px",
  },
  "& svg path": {
    fill: "#979797",
  },
});

const StylePhoto = styled("input")({
  outline: "none",
});

const StyledButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#3772FF",
  border: "2px solid #3772FF",
});
