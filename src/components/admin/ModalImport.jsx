import React, { useState, useRef } from "react";
import { Modal } from "../UI/Modal";
import Input from "../UI/input/Input";
import { Box, styled } from "@mui/material";
import { Button } from "../UI/Button";
import { Select } from "../UI/Select";
export const ModalImport = () => {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState("");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [selectedOptionGroup, setSelectedOptionGroup] = useState("");
  const options = ["Онлайн", "Оффлайн", "Все"];
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleAddClick = () => {
    if (file && group) {
      console.log("Файл:", file.name);
      console.log("Группа:", group);
    } else {
      console.log("ты не выбрал  файл, иди и выбери файл ");
    }
  };
  const handleSelectGroupChange = (option) => {
    setSelectedOptionGroup(option);
    setGroup(option);
  };
  const handleGroupSelect = (value) => {
    setGroup(value);
  };
  return (
    <div>
      <Modal open={open} headerText="Импорт Excel в БД">
        <Input
          placeholder="группа"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          InputProps={{
            endAdornment: (
              <StyledDiv position="end">
                <Select
                  options={options}
                  selectedOption={selectedOptionGroup}
                  onSelect={handleSelectGroupChange}
                />
              </StyledDiv>
            ),
          }}
        />

        <StyledInput>
          <Input placeholder="Выберите Excel файл для импорта" />
          <StyledFileInputButton onClick={handleFileClick}>
            Обзор ...
          </StyledFileInputButton>

          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </StyledInput>

        <StyledButtonModal>
          <StyledButtonOff onClick={handleClose}>Отмена</StyledButtonOff>
          <StyledButtonAdd onClick={handleAddClick}>Добавить</StyledButtonAdd>
        </StyledButtonModal>
      </Modal>

      <StyledButton onClick={handleClick}>Import Excel </StyledButton>
    </div>
  );
};

const StyledInput = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  marginTop: "15px",
}));

const StyledFileInputButton = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#3772FF",
  border: "2px solid #3772FF",
  padding: "6px 12px",
  cursor: "pointer",
  height: "40px",
  borderRadius: "10px",
  width: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#3772FF",
  border: "2px solid #3772FF",
}));

const StyledDiv = styled("div")({
  paddingLeft: "40px",
});

const StyledButtonModal = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  paddingLeft: "260px",
  paddingTop: "15px",
}));

const StyledButtonOff = styled(Button)(() => ({
  backgroundColor: "#fff",
  color: "#3772FF",
  border: "2px solid #3772FF",
  width: "250px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
}));

const StyledButtonAdd = styled(Button)(() => ({
  width: "300px",
}));
