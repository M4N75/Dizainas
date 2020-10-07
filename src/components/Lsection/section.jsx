import React from "react"
import { Container } from "react-bootstrap"
import Style from "./section.module.css"

export default function LastSection(){
    return (
        <div className={Style.Root}>
            <div className={Style.BcLines}></div>
            <Container className={Style.ContentContainer} style={{position: "relative", zIndex: 10}}>
                <div className={Style.Title}>
                    take <span id={Style.Text} className="text-light">the next</span> step
                </div>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime adipisci perferendis, velit expedita, corporis doloremque deleniti molestias ipsam ducimus itaque officia quas consequuntur nostrum esse cum non hic quam!</div>
                <Container className={Style.FormContainer}>
                    <form className={Style.Form}>
                        <input className={Style.Inputs} type="text" placeholder="Name"/>
                        <input className={Style.Inputs} type="text" placeholder="Email"/>
                        <input className={Style.Inputs} type="text" placeholder="Telephone"/>
                        <input className={Style.Inputs} type="text" placeholder="Message"/><br/>
                        <button className={Style.Button}>Submit</button>
                    </form>
                </Container>
            </Container>
        </div>
    );
}