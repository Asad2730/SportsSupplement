import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/cartSlice";

const useCartOperations = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const add = (id) => dispatch(addToCart(id));
  const remove = (id) => dispatch(removeFromCart(id));
  const checkIfAlreadyAdded = (id) => cart.includes(id);

  return { add, remove, checkIfAlreadyAdded };
};

export default useCartOperations;
