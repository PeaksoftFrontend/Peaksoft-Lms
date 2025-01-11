import { Box, Container, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/input/Input";
import {
  setTestName,
  toggleSingleChoice,
  updateOption,
  updateQuestionText,
  addOption,
  deleteOption,
  addQuestion,
  deleteQuestion,
} from "../../redux/slices/testSlice";
import { Checkbox } from "../UI/Checkbox";
import { Button } from "../UI/Button";
import { Delete, CopyAll, Close } from "@mui/icons-material";

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
            />
          </InputBox>
        </TitleBox>

        {questions.map((question, index) => (
          <QuestionBox key={index}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>{index + 1}. Вопрос</Typography>
              <Box>
                <CopyAll
                  sx={{ cursor: "pointer", marginRight: 2 }}
                  onClick={() =>
                    dispatch(addQuestion({ question: { ...question } }))
                  }
                />
                <Delete
                  sx={{ cursor: "pointer" }}
                  onClick={() => dispatch(deleteQuestion({ index }))}
                />
              </Box>
            </Box>

            <Input
              value={question.text}
              label="Введите вопрос"
              onChange={(e) =>
                dispatch(updateQuestionText({ index, text: e.target.value }))
              }
              fullWidth
            />

            <Box>
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
            </Box>

            <Box>
              {question.options.map((option, optionIndex) => (
                <Box
                  key={optionIndex}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  marginBottom={1}
                >
                  <Box position="relative" width="100%">
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
                      sx={{ paddingRight: "40px" }}
                    />
                    <Close
                      sx={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: "red",
                      }}
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
                </Box>
              ))}
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                <span
                  onClick={() => dispatch(addOption({ questionIndex: index }))}
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
            </Box>
          </QuestionBox>
        ))}

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          marginTop={4}
        >
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
  height: "auto",
  width: "1150px",
  backgroundColor: "#EFF0F4",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
}));

const TitleBox = styled(Box)(() => ({
  width: "1120px",
  height: "124px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
  padding: "16px",
}));

const TitleTypography = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "22px",
  color: "#1F6ED4",
}));

const InputBox = styled(Box)(() => ({
  width: "100%",
}));

const QuestionBox = styled(Box)(() => ({
  width: "1120px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  border: "1px solid #D4D4D4",
  padding: "16px",
  marginBottom: "16px",
}));
