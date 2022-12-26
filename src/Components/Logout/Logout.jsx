import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const handLogout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div className="w-full">
      <div className=" w-1/2 m-auto flex justify-center">
        <Button
          variant="contained"
          sx={{ margin: "auto" }}
          onClick={() => handLogout()}
        >
          Đăng Xuât
        </Button>
      </div>
    </div>
  );
};

export default Logout;
