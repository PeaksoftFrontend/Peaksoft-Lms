import { Box, Container, styled, Typography } from "@mui/material";
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
import { Checkbox } from "../UI/Checkbox";
import { Icons } from "../../assets";
import { Button } from "../UI/Button";

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
    <Container>
      <MainBox>
        <TitleBox>
          <TitleTypography>Название теста</TitleTypography>
          <InputBox>
            <Input
              label="Введите название теста"
              value={testName}
              onChange={(e) => dispatch(setTestName(e.target.value))}
              fullWidth
              InputLabelProps={{
                style: {
                  width: "100%",
                  transform: "translate(20px, 53%)",
                },
              }}
            />
          </InputBox>
        </TitleBox>

        {questions.map((question, index) => (
          <QuestionBox key={index}>
            <TextQuestBox>
              <LinetTypography>{index + 1}</LinetTypography>
              <QuestInputBox>
                <Input
                  value={question.text}
                  label="Введите вопрос"
                  onChange={(e) =>
                    dispatch(
                      updateQuestionText({ index, text: e.target.value })
                    )
                  }
                  fullWidth
                />
              </QuestInputBox>

              <Checkboxes>
                <Checkbox
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
                <Checkbox
                  checked={!question.singleChoice}
                  label="Несколько из списков"
                  onChange={() =>
                    dispatch(
                      toggleSingleChoice({
                        questionIndex: index,
                        isSingleChoice: false,
                      })
                    )
                  }
                />
              </Checkboxes>
            </TextQuestBox>

            <OptionsBox>
              {question.options.map((option, optionIndex) => (
                <Box key={optionIndex}>
                  <OptionInputBox>
                    <Input
                      label={`Вариант ${optionIndex + 1}`}
                      value={option}
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
                  </OptionInputBox>
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
                </Box>
              ))}
              <Box>
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  <span
                    onClick={() =>
                      dispatch(addOption({ questionIndex: index }))
                    }
                    style={{
                      cursor: "pointer",
                      color: "blue",
                      marginRight: "8px",
                    }}
                  >
                    Добавить вариант
                  </span>
                  <span>или</span>
                  <span
                    onClick={() =>
                      dispatch(
                        addOption({
                          questionIndex: index,
                          value: "Другое", // Готовый текст "Другое"
                        })
                      )
                    }
                    style={{
                      cursor: "pointer",
                      color: "blue",
                      marginLeft: "8px",
                      textDecoration: "underline",
                    }}
                  >
                    добавить вариант "Другое"
                  </span>
                </Typography>

                <Icons.Duplicate
                  onClick={() =>
                    dispatch(addQuestion({ question: { ...question } }))
                  }
                />
                <Icons.Delete
                  onClick={() => dispatch(deleteQuestion({ index }))}
                />
              </Box>
            </OptionsBox>
          </QuestionBox>
        ))}

        <Box>
          <Button variant="cancellation" onClick={handleCancel}>
            Отмена
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Сохранить
          </Button>
        </Box>
      </MainBox>
    </Container>
  );
};

export default TestCreate;

const MainBox = styled(Box)(() => ({
  height: "875px",
  width: "1150px",
  backgroundColor: "#EFF0F4",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  overflow: "hidden", // Ограничиваем содержимое
}));

const TitleBox = styled(Box)(() => ({
  width: "1120px",
  height: "124px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const TitleTypography = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#1F6ED4",
  position: "absolute",
  top: "20px",
  left: "20px",
  bottom: "20px",
}));

const InputBox = styled(Box)(() => ({
  width: "1080px",
  display: "flex",
  justifyContent: "center",
  alignItems: " center",
  position: "absolute",
  top: "60px",
}));

const QuestionBox = styled(Box)(() => ({
  maxWidth: "1120px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  gap: "20px",
}));

const LinetTypography = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "600",
  lineHeight: "22px",
  color: "#1F6ED4",
  position: "absolute",
  top: "37px",
  left: "25px",
}));

const TextQuestBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  position: "relative",
  flexWrap: "wrap",
}));

const QuestInputBox = styled(Box)(() => ({
  width: "650px",
  position: "absolute",
  top: "26px",
  left: "56px",
}));

const Checkboxes = styled(Box)(() => ({
  position: "absolute",
  top: "25px",
  left: "720px",
}));

const OptionsBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  // position: "relative",
}));

const OptionInputBox = styled(Box)(() => ({
  width: "1050px",
  // position: "absolute",
  // top: "100px",
}));
