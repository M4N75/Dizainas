import React from "react"
import {Container, Row, Col} from "react-bootstrap"

import Chart from "./chart"

import Style from "./section.module.css"

export default function FirstSection(){
    return (
        <div className={Style.Root}>
            <Row>
                <Col style={{backgroundColor: "#eeeeee"}} className="pt-5 pb-5">
                    <Chart/>
                </Col>
                <Col className="p-5" style={{backgroundColor: "#f8f8f8"}}>
                    <div className={Style.ColTitle}>
                        Quisque <span className="text-danger">&</span> <br/>
                        Siter Amet
                    </div>
                    <span className={Style.Line}></span>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi at fugiat quia incidunt exercitationem sequi facilis, molestias iure totam iusto animi praesentium enim delectus nostrum accusantium saepe! Odit, at non.
                    </div>
                    <hr/>
                    <Row>
                        <Col lg={4}>
                            <iframe className={Style.Video} src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
                        </Col>
                        <Col>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum, iste a consectetur autem eum ad illum. At, ipsam id quae non, dolor sed modi suscipit tempora quod odio error!
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}