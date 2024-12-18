import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const QuizComponent = ({ correctAnswer, ...props }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isCorrect, setIsCorrect] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === "correct") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <FormControlLabel
          value="correct"
          control={
            


            <Radio
              sx={{
                "&.Mui-checked": {
                  color: correctAnswer === true ? "green" : "red",
                },
              }}
            />



          }
        />
        <FormControlLabel
          value="wrong1"
          control={





            <Radio
              sx={{
                "&.Mui-checked": {
                  color: correctAnswer === false ? "red" : "green",
                },
              }}
            />




          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default QuizComponent;

// import React, { useState } from "react";
// import {
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormControl,
// } from "@mui/material";

// const RadioColor = ({ correctAnswer, ...props }) => {
//   const [isTrue, setIsTrue] = useState(true);

//   const handleChange = (event) => {
//     setIsTrue(event.target.value === "true");
//   };

//   return (
//     <FormControl component="fieldset">
//       <RadioGroup>
//         <FormControlLabel
//           value="true"
//           control={
//             <Radio
//               correctAnswer={isTrue ? "true" : "false"}
//               onChange={handleChange}
//               sx={{
//                 "&.Mui-checked": {
//                   color: "green",
//                 },
//               }}
//             />
//           }
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default RadioColor;

// value={isTrue ? "true" : "false"} onChange={handleChange}
{
  /* <FormControlLabel
          value="false"
          control={
            <Radio`
              sx={{
                "&.Mui-checked": {
                  color: "red",
                },
                "&.Mui-checked:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                },
              }}
            />
          }
          label="False"
        /> */
}
