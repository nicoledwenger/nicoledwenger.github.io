import React from "react";
import logo from "../images/nicoledwengerlogo.svg";
import styled from "styled-components/macro";

const LogoImg = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  background-image: url(${logo});
  width: 100px;
  height: 50px;
  background-repeat: no-repeat;
  margin: 15px;
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;
