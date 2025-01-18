import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { Icons } from "../../assets";

export const Select = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <SelectContainer onClick={handleIconClick}>
        <SelectedValue style={{ display: "none" }}>
          {selectedOption || ""}
        </SelectedValue>
        <IconWrapper>
          <Icons.CheckMark />
        </IconWrapper>
      </SelectContainer>
      {isOpen && (
        <OptionList>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              <OptionText>{option}</OptionText>
            </Option>
          ))}
        </OptionList>
      )}
    </div>
  );
};
const SelectContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  width: "100%",
  justifyContent: "space-between",
  fontSize: "14px",
});
const SelectedValue = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  flex: 1,
});
const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    fontSize: "20px",
  },
});
const OptionList = styled(Box)({
  maxHeight: "200px",
  overflowY: "auto",
  backgroundColor: "#fff",
  borderRadius: "4px",
  position: "absolute",
  top: "100%",
  left: "calc(100% + 5px)",
  zIndex: 1,
  marginTop: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  width: "150px",
  fontSize: "14px",
});
const Option = styled(Box)({
  padding: "8px 16px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});
const OptionText = styled(Box)({
  flex: 1,
});
