import React, { useState } from "react";
import AliceCarousel from 'react-alice-carousel';

import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Home.module.scss';

export const Home = () => {
    const [input, setInput] = useState(10);

    const increse = () => {
        if (input < 20) {
            setInput(input + 1);
        }
    };

    const decrease = () => {
        if (input >= 1) {
            setInput(input - 1);
        }
    };

    const getmax = () => {
        setInput(20);
    };

    return (
        <div className={Styles.home}>
            <Header />
            <div className={Styles.container}>
                <div className={Styles.cardcontent}>
                    <div className={Styles.home_title}>
                        House your Crognomes
                    </div>
                    <div className={Styles.home_amount_title}>
                        Amount
                    </div>
                    <div className={Styles.home_amount}>
                        <button onClick={decrease}></button>
                        <input value={input} defaultValue={10} />
                        <button onClick={increse}></button>
                        <a onClick={getmax}>Get Max</a>
                    </div>
                    <div className={Styles.home_total}>
                        Total {Math.round(1.2 * input * 100) / 100} CRO
                    </div>
                    <div className={Styles.home_mint}>
                        <button className={Styles.mint_btn}>MINT</button>
                    </div>
                    <div className={Styles.home_available}>
                        <div className={Styles.available_container}>
                            <div className={Styles.available}>
                                <div className={Styles.available_first}>Available</div>
                                <div className={Styles.available_second}>2.000 / 2.000</div>
                                <div>
                                    <img className={Styles.available_img1} src={getImg('home/Export-1.png')} alt="Logo" />
                                    <img className={Styles.available_img2} src={getImg('home/Export-2.png')} alt="Logo" />
                                    <img className={Styles.available_img3} src={getImg('home/Export-3.png')} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
