import React from "react";
import HorizontalLogo from "../Assets/logo/Horizontal_Logo.png"
import HorizontalLogo2x from "../Assets/logo/Horizontal_Logo@2x.png"
import HorizontalLogo3x from "../Assets/logo/Horizontal_Logo@3x.png"
import { HeaderBtnContainer, HeaderContainer } from "./HeaderStyles";

const Header = (props) => {
    return (<HeaderContainer>
        <img src={HorizontalLogo} srcSet={`${HorizontalLogo} 200w, ${HorizontalLogo2x} 400w, ${HorizontalLogo3x} 600w`} alt="logo"/>
        <HeaderBtnContainer>RightSide</HeaderBtnContainer>
    </HeaderContainer>);
}

export default Header;