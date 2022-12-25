import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const { setOpen } = props;
  return (
    <div>
      <Dialog
        open={true}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Thêm sản phẩm vào giỏ hàng thành công.Bạn muốn ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/cart">
            <Button>Thanh Toán</Button>
          </Link>

          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Mua tiếp
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
