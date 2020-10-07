import React from "react"

import Style from "./section.module.css"
import {Image} from "./images/bubles.png"

import {Container, Row, Col} from "react-bootstrap"


export default function SecondSection(){
    return (
        <Container className="mt-5 mb-5 p-5 text-center">
            <div className={Style.Title}>Our Process</div>
            <span className={Style.Line}></span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum, deserunt beatae unde similique explicabo praesentium veniam eveniet dolorum dicta. Quaerat ipsam id rerum laboriosam beatae? Magnam nisi nulla inventore!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia, facere vitae ea nulla consequuntur enim neque! Sed officia doloremque laboriosam cupiditate, sequi voluptates suscipit vero, dignissimos, dolorum placeat veniam.
            </p>
            <div className={Style.Buble}></div>

            <Row className="text-left">
                <Col>
                    <span className={Style.ColTitle}>Meeting</span><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptate pariatur similique, cum doloribus eligendi totam iusto officia exercitationem et sunt aliquid eius in nisi corporis aut nihil perspiciatis animi.
                </Col>
                <Col>
                    <span className={Style.ColTitle}>Planning & organizing</span><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente id recusandae doloremque blanditiis praesentium, modi inventore aperiam eligendi eum, mollitia debitis, in explicabo quibusdam suscipit quasi cum consectetur ea.
                </Col>
                <Col>
                    <span className={Style.ColTitle}>execuite</span><br/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt numquam atque qui nam harum earum eius eaque, maxime voluptatum, suscipit dolorem optio soluta accusantium iusto dolorum ex! Rem, corporis odio!
                </Col>
                <Col>
                    <span className={Style.ColTitle}>deliver</span><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi id facere facilis at quis saepe assumenda omnis? Quia deserunt eos vel consectetur provident tempora est repellendus soluta excepturi harum.
                </Col>
            </Row>
        </Container>
    );
}