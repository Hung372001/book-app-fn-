import React from "react";
import { useState } from "react";
import AuthAPI from "../api/auth.api";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import AlertDialog from "../Components/Diaglog/Diaglog";
import { SignupSchema } from "./../utils/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: yupResolver(SignupSchema),
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();

  const [open, setOpen] = useState(false);

  const handleLogin = async (data) => {
    console.log(data);
    const response = await AuthAPI.register(data)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((error) => {
        console.log(error);
        // setMessage(error.response.data);
        // setStatus(error.response.status);
        setOpen(true);
      });
  };

  return (
    <div className="max-w-[1230px] mx-auto mt-4 bg-[white]">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          maxWidth: "calc(100vw - 20px)",
          width: "100%",
          margin: " 0 auto",
          padding: "46px 16px",
          paddingTop: "0",
        }}
        onSubmit={handleSubmit(handleLogin)}
      >
        <TextField
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          onBlur={(e) => {
            setValue("email", e.target.value, { shouldValidate: true });
          }}
        />
        {errors.email && (
          <Typography sx={{ color: "red" }}>{errors.email.message}</Typography>
        )}
        <TextField
          id="outlined-basic"
          type="text"
          label="Tên"
          variant="outlined"
          name="LastName"
          onBlur={(e) => {
            setValue("LastName", e.target.value, {
              shouldValidate: true,
            });
          }}
        />
        {errors.LastName && (
          <Typography sx={{ color: "red" }}>
            {errors.LastName.message}
          </Typography>
        )}
        <TextField
          id="outlined-basic"
          type="text"
          label="Họ"
          variant="outlined"
          name="FirstName"
          onBlur={(e) => {
            setValue("FirstName", e.target.value, {
              shouldValidate: true,
            });
          }}
        />
        {errors.FirstName && (
          <Typography sx={{ color: "red" }}>
            {errors.FirstName.message}
          </Typography>
        )}
        <TextField
          id="outlined-basic"
          type="number"
          label="Số Điện Thoại"
          variant="outlined"
          name="phoneNumber"
          onBlur={(e) => {
            setValue("phoneNumber", e.target.value, {
              shouldValidate: true,
            });
          }}
        />
        {errors.phoneNumber && (
          <Typography sx={{ color: "red" }}>
            {errors.phoneNumber.message}
          </Typography>
        )}
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          onBlur={(e) => {
            setValue("password", e.target.value, {
              shouldValidate: true,
            });
          }}
        />
        {errors.password && (
          <Typography sx={{ color: "red" }}>
            {errors.password.message}
          </Typography>
        )}
        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            setOpen(true);
          }}
        >
          Đăng Kí
        </Button>
        {!errors.email &&
          open &&
          !errors.password &&
          !errors.phoneNumber &&
          !errors.LastName &&
          !errors.FirstName && (
            <AlertDialog message={message} setOpen={setOpen} />
          )}
      </Box>
    </div>
  );
};

export default Register;
