import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-2xl">
        <ion-icon name="cart-outline"></ion-icon>
        <span className="hidden md:block text-xs">Giỏ Hàng</span>
      </div>
    </div>
  );
};

export default Cart;
