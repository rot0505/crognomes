import React from "react";
import ReactFlagsSelect from "react-flags-select";


import { getImg } from "../../utils/Helper";
import Styles from './Footer.module.scss';


class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className={Styles.footer}>
                <div className={Styles.footertop}>
                    <center>
                        <p className={Styles.footertop_content1}> Do you know where your CRO cards actually come from?</p>
                        <p className={Styles.footertop_content2}>Come say hi to the early birds in the discord</p>
                        <button className={Styles.footertop_button} >Meet the <br></br>Crognomes</button>
                    </center>
                </div>
                <div className={Styles.footerbottom}>
                    <center>
                        <div className={Styles.footerbottom_img}>
                            <img src={getImg('home/logo.png')} />
                        </div>
                        <p className={Styles.footerbottom_context}>Copyright © CROGNOMES 2021<br></br>
                            *Not affiliated with crypto.com</p>
                        <div className={Styles.radius}>
                            <div className={Styles.radius_content}></div>
                            <div className={Styles.radius_content}></div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
}

export default Footer