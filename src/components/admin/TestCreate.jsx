import { Box, Paper, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/input/Input";
import {
  addOption,
  addQuestion,
  deleteOption,
  deleteQuestion,
  setTestName,
  toggleSingleChoice,
  updateOption,
  updateQuestionText,
} from "../../redux/slices/testSlice";
import { Icons } from "../../assets";
import { Button } from "../UI/Button";
import { Radio } from "../UI/Radio";
import { MultiInput } from "../UI/input/MultiInput";

const TestCreate = () => {
  const dispatch = useDispatch();
  const { testName, questions } = useSelector((state) => state.test);

  const handleSave = () => {
    console.log("Данные", { testName, questions });
  };

  const handleCancel = () => {
    console.log("Изменения отменены.");
  };

  return (
    <StyledMainBox>
      <StyledWrapperFormTitle elevation={2}>
        <StyledTitleTypography>Название теста</StyledTitleTypography>
        <Input
          placeholder="Введите название теста"
          value={testName}
          onChange={(e) => dispatch(setTestName(e.target.value))}
          fullWidth
        />
      </StyledWrapperFormTitle>

      {questions.map((question, index) => (
        <StyledQuestionBox key={index}>
          <StyledTextQuestBox>
            <StyledLineTypography>{index + 1}</StyledLineTypography>
            <StyledQuestInputBox>
              <Input
                value={question.text}
                placeholder="Введите вопрос"
                onChange={(e) =>
                  dispatch(updateQuestionText({ index, text: e.target.value }))
                }
                fullWidth
              />
            </StyledQuestInputBox>

            <StyledCheckboxes>
              <Radio
                checked={question.singleChoice}
                label="Один из списка"
                onChange={() =>
                  dispatch(
                    toggleSingleChoice({
                      questionIndex: index,
                      isSingleChoice: true,
                    })
                  )
                }
              />
              <Radio
                checked={!question.singleChoice}
                label="Несколько из списка"
                onChange={() =>
                  dispatch(
                    toggleSingleChoice({
                      questionIndex: index,
                      isSingleChoice: false,
                    })
                  )
                }
              />
            </StyledCheckboxes>
          </StyledTextQuestBox>

          <StyledOptionsBox>
            {question.options.map((option, optionIndex) => (
              <StyledOption key={optionIndex}>
                <StyledRadio />
                <MultiInput
                  placeholder={`Вариант ${optionIndex + 1}`}
                  value={option}
                  Icon={
                    <Icons.Cancel
                      onClick={() =>
                        dispatch(
                          deleteOption({
                            questionIndex: index,
                            optionIndex,
                          })
                        )
                      }
                    />
                  }
                  onChange={(e) =>
                    dispatch(
                      updateOption({
                        questionIndex: index,
                        optionIndex,
                        value: e.target.value,
                      })
                    )
                  }
                  fullWidth
                />
              </StyledOption>
            ))}
            <StyledOptionActions>
              <WrapperVariants>
                <StyledAddOptionText
                  onClick={() => dispatch(addOption({ questionIndex: index }))}
                >
                  Добавить вариант
                </StyledAddOptionText>
                <span>или</span>
                <StyledAddOptionText
                  onClick={() =>
                    dispatch(
                      addOption({
                        questionIndex: index,
                        value: "Другое",
                      })
                    )
                  }
                >
                  добавить вариант "Другое"
                </StyledAddOptionText>
              </WrapperVariants>
              <StyledIcons>
                <Icons.Duplicate
                  onClick={() =>
                    dispatch(addQuestion({ question: { ...question } }))
                  }
                />
                <Icons.Delete
                  onClick={() => dispatch(deleteQuestion({ index }))}
                />
              </StyledIcons>
            </StyledOptionActions>
          </StyledOptionsBox>
        </StyledQuestionBox>
      ))}

      <StyledActionBox>
        <StyledWrapperAction>
          <StyledCancelOutlinedButton variant="outlined" onClick={handleCancel}>
            Отмена
          </StyledCancelOutlinedButton>
          <StyledSaveButton variant="contained" onClick={handleSave}>
            Сохранить
          </StyledSaveButton>
        </StyledWrapperAction>
      </StyledActionBox>
    </StyledMainBox>
  );
};

export default TestCreate;

const StyledWrapperFormTitle = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(2.5),
  border: "1px solid #D4D4D4",
  boxShadow: "none",
  borderRadius: "10px",
}));

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
}));

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.125rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2.5),
}));

const StyledQuestionBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "10px",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const StyledLineTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

const StyledTextQuestBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

const StyledRadio = styled(Radio)({
  "&.MuiFormControlLabel-root": {
    marginRight: 0,
  },
});

const StyledQuestInputBox = styled(Box)(() => ({
  flex: 1,
}));

const StyledCheckboxes = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const StyledOptionsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

const StyledOption = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledOptionActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
}));

const StyledAddOptionText = styled(Typography)(() => ({
  cursor: "pointer",
  color: "blue",
  textDecoration: "underline",
}));

const StyledIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const StyledActionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "end",
}));

const StyledWrapperAction = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

const WrapperVariants = styled("div")({
  display: "flex",
  gap: "15px",
});

const StyledCancelOutlinedButton = styled(Button)({
  width: "103px",
  height: "40px",
  borderRadius: "8px",
});

const StyledSaveButton = styled(Button)({
  width: "125px",
  height: "40px",
  borderRadius: "8px",
});
