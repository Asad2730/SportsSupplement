import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { clearCart } from "../../store/cart/cartSlice";

const LogoutUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    dispatch(logout());
  });

  return <></>;
};

export default LogoutUser;
