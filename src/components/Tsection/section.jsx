import React from "react"
import Style from "./section.module.css"

import {Container, Row, Col} from "react-bootstrap"

import FArrow from "./images/first-arrow.png"
import SArrow from "./images/second-arrow.png"
import TArrow from "./images/third-arrow.png"


export default function ThirdSection(){
    const FirstA = <img className={Style.Arrows} src={FArrow} alt="First Arrow"/>;
    const SecondA = <img className={Style.Arrows} src={SArrow} alt="Second Arrow"/>;
    const ThirdA = <img className={Style.Arrows} src={TArrow} alt="Third Arrow"/>;

    const FLFC = {backgroundColor: "#802c64", padding: "5rem 3rem"};
    const FLSC = {backgroundColor: "#7a225d", padding: "3rem", textAlign: "left"};

    const SLFC = {backgroundColor: "#500c50", padding: "5rem 3rem"};
    const SLSC = {backgroundColor: "#480048", padding: "3rem", textAlign: "left"};

    const TLFC = {backgroundColor: "#3a0c3a", padding: "5rem 3rem"};
    const TLSC = {backgroundColor: "#300030", padding: "3rem", textAlign: "left"};

    const ColText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum perspiciatis blanditiis, eius tempore totam corporis ";

    return (
        <div className={Style.Root}>
            <Container fluid>
                <Container className={Style.TitleContent}>
                    <span className={Style.Title}>Services <span className="text-danger">&</span> Terms</span><br/>
                    <span className={Style.Line}></span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus illum? Dolores recusandae temporibus unde consectetur, dolor perferendis ea quis quia non numquam, id officia enim aspernatur alias sapiente minus.
                    </p>
                </Container>
                <Container fluid className={Style.Content}>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg={2}style={FLFC}>{FirstA}</Col>
                                <Col style={FLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={FLFC}>{FirstA}</Col>
                                <Col style={FLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={FLFC}>{FirstA}</Col>
                                <Col style={FLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Row>
                                <Col lg={2} style={SLFC}>{SecondA}</Col>
                                <Col style={SLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={SLFC}>{SecondA}</Col>
                                <Col style={SLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={SLFC}>{SecondA}</Col>
                                <Col style={SLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Row>
                                <Col lg={2} style={TLFC}>{ThirdA}</Col>
                                <Col style={TLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={TLFC}>{ThirdA}</Col>
                                <Col style={TLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg={2} style={TLFC}>{ThirdA}</Col>
                                <Col style={TLSC}>
                                    <div className={Style.ColTitle}>Collumn Title</div>
                                    {ColText}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}