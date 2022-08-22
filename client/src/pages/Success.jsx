import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { cartinit } from "../redux/cartRedux";
import { useHistory } from "react-router-dom";

const Success = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(location);
  dispatch(cartinit(props));

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     history.push("/");
  //   }, 2000);
  // }, []);

  return <div>Success</div>;
};

export default Success;
