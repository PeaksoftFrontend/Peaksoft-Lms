import React, { useState } from 'react';
import { Modal } from '../UI/Modal';
import { Button } from '../UI/Button';
import Input from '../UI/input/Input';
import { Box, styled } from '@mui/material';

export const ModalTeacher = () => {
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleConsole = () => {
    console.log("Имя:", username);
    console.log("Фамилия:", surname);
    console.log("Номер:", number);
    console.log("Email:", email);
    console.log("Пароль:", password);
    console.log("Специализация:", specialization);
  };

  const openClick = () => {
    setOpen(true);
  };

  const closeClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} headerText="Добавление учителя">
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
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Специализация"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </StyledInput>
        <ButtonContainer>
          <StyledButton onClick={closeClick}>Отмена</StyledButton>
          <Button onClick={handleConsole}>Добавить</Button>
        </ButtonContainer>
      </Modal>

      <Button onClick={openClick}>+ Добавить учителя</Button>
    </div>
  );
};
const StyledButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#3772FF',
  border:"2px solid #3772FF"
});
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