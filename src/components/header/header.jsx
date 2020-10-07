import React from "react"
import {Container, Row, Col, Navbar, Nav} from "react-bootstrap"

import Logo from "./Images/logo.png"
import Menu from "./Images/menu.png"
import Mouse from "./Images/computer-mouse.png"
import Style from "./header.module.css"

export default function Header(){
    return (
        <header className="pl-5 pr-5">
            <Navbar className="pt-5" expand="lg">
            <Navbar.Brand className={Style.LogoCol} href="/"><img className={Style.Logo} src={Logo} alt="LOGO" />Anveshan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className={Style.NavCol} id="basic-navbar-nav">
              <Nav>
                <Nav.Link className="text-light" href="/">Contact</Nav.Link>
                <Nav.Link className="text-light" href="/">
                    Menu
                    <img src={Menu} alt="menu" className={Style.MenuIcon}/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container className={Style.Content}>
              <div>
                  <span className={Style.ContentTitle}>research & analysis<br/><span className="text-danger">driving results</span></span><br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aliquid, ducimus laudantium assumenda obcaecati quae soluta 
              </div>
          </Container>
          <div className={Style.Scroll}>
            <img className={Style.ScrollIcon} src={Mouse} alt="Scroll"/> <br/>
            Scroll
          </div>
        </header>
    );
}