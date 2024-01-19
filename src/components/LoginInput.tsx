import TextField from "@mui/material/TextField";
import React from "react";

type LoginInputProps = {
  value: string;
  onChange: (newVal: string) => void;
  isPassword?: boolean;
};
const LoginInput = (props: LoginInputProps) => {
  const { value, onChange, isPassword } = props;
  const type = isPassword ? "password" : undefined;
  const autoComplete = isPassword ? "current-password" : "username";

  return (
    <TextField
      margin="normal"
      fullWidth
      type={type}
      autoComplete={autoComplete}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      /*
      color={isPassword ? "secondary" : "primary"}
      sx={{
        color: isPassword ? "secondary.main" : "primary.main",
        height: "100px",
      }}
      */
    />
  );
};

export default LoginInput;
