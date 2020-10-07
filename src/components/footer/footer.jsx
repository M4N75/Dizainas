import React from "react"
import Style from "./footer.module.css"

import {Container, Row, Col} from "react-bootstrap"

import G from "./images/google.svg"
import F from "./images/fb.svg"
import T from "./images/twitter.svg"

export default function Footer(){
    return (
        <footer>
            <div className={Style.Hide}></div>
            <Container className={Style.RootContainer}>
                <Row>
                    <Col className="text-center"><img className={Style.Icons} src={T} alt="Twitter"/></Col>
                    <Col className="text-center"><img className={Style.Icons} src={F} alt="FaceBook"/></Col>
                    <Col className="text-center"><img className={Style.Icons} src={G} alt="Google +"/></Col>
                </Row>
                <div className="mt-4">&copy; All rights reserved. Anveshan Inc.</div>
                <div>P.O. Box 6894</div>
                <div>Ahmedabad, India 25698</div>
                <div><b>Phone: </b> 1234 - 567 - 890</div>
                <div className="mt-4">Designed by <span className="text-danger">MadanPatil.com</span></div>
            </Container>
        </footer>
    );
}