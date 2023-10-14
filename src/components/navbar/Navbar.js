import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    ButtonWrapper,
    Button

} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";







const Navbar = () => {

    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><Link to="/"><img src={logo} alt="logo" /></Link>
                </LogoContainer>
                <BigLinkContainer>
                    <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: '#0F160F' }} >Home</Link></NavbarLink>
                    <NavbarLink> <Link to='/market-place' style={{ textDecoration: 'none', color: '#0F160F' }}>Marketplace</Link></NavbarLink>
                    <NavbarLink><Link to='/about-us' style={{ textDecoration: 'none', color: '#0F160F' }}>About us </Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper><div class="dropdown">
                    <button class="dropbtn"><img src={user} alt="user" width={13} height={13} />
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <Link to='/sign-in' style={{ textDecoration: 'none', color: '#0F160F' }}>Sign in</Link>
                        <br></br>
                        <Link to='/sign-up' style={{ textDecoration: 'none', color: '#0F160F' }}>Sign up</Link>
                        <br></br>
                        <Link to='/dashboard' style={{ textDecoration: 'none', color: '#0F160F' }}>Dashboard</Link>
                    </div>
                </div>
                    <Button>Connect Wallet</Button>
                </ButtonWrapper>


            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;