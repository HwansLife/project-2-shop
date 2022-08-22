import React from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { cartinit } from "../redux/cartRedux";


const Success = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location);
  dispatch(cartinit(props));
  return <div>Success</div>;
};

export default Success;
