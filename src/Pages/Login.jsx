import React, { useState } from "react";
import AuthAPI from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertDialog from "../Components/Diaglog/Diaglog";
import { SigninSchema } from "./../utils/yupGlobal";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
    criteriaMode: "all",
  });

  const handleLogin = async (data) => {
    console.log(data);
    const response = await AuthAPI.login(data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data);

        setOpen(true);
      });
  };

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  // const navigate = useNavigate();

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
          required
          // onChange={handChange}
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
          required
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
          // onChange={handChange}
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
          Dang nhap
        </Button>
        {!errors.email && open && !errors.password && (
          <AlertDialog message={message} setOpen={setOpen} />
        )}
      </Box>
    </div>
  );
};

export default Login;
