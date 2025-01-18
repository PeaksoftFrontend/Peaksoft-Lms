import React, { useState } from "react";
import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import Input from "../UI/input/Input";
import { Box, styled } from "@mui/material";
import { Select } from "../UI/Select";

export const ModalStudent = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [format, setFormat] = useState("");

  const handleConsole = () => {
    console.log("Имя:", username);
    console.log("Фамилия:", surname);
    console.log("Номер:", number);
    console.log("Email:", email);
    console.log("Группа:", group);
    console.log("Форма обучения:", format);
  };

  const [selectedOptionGroup, setSelectedOptionGroup] = useState("");
  const [selectedOptionFormat, setSelectedOptionFormat] = useState("");

  const handleSelectGroupChange = (option) => {
    setSelectedOptionGroup(option);
    setGroup(option);
  };

  const handleSelectFormatChange = (option) => {
    setSelectedOptionFormat(option);
    setFormat(option);
  };

  const options = ["Онлайн", "Оффлайн", "Все"];
  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} headerText="Добавление студента">
        <StyledInput>
          <Input
            type="text"
            placeholder="Имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Фамилия"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Input
            type="text"
            placeholder="+996 ___ __ __ __"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Группа"
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
          <Input
            type="text"
            placeholder="Формат обучение"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            InputProps={{
              endAdornment: (
                <StyledDiv position="end">
                  <Select
                    options={options}
                    selectedOption={selectedOptionFormat}
                    onSelect={handleSelectFormatChange}
                  />
                </StyledDiv>
              ),
            }}
          />
        </StyledInput>
        <ButtonContainer>
          <StyledButton onClick={closeClick}>Отмена</StyledButton>
          <Button onClick={handleConsole}>Добавить</Button>
        </ButtonContainer>
      </Modal>
      <Button onClick={openClick}>+ Добавить студента</Button>
    </div>
  );
};

const StyledInput = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "20px",
}));

const StyledButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#3772FF",
  border: "2px solid #3772FF",
});

const StyledDiv = styled("div")({
  paddingLeft: "40px",
});
