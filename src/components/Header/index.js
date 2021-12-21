import React, { useState } from "react";

import { getImg } from "../../utils/Helper";
import Styles from './Header.module.scss';
// import Hamburger from 'hamburger-react';
// import styled from 'styled-components';

export const Header = () => {

    return (
        <header className={Styles.header}>
            <img className={Styles.logo} src={getImg('home/logohome.png')} alt="Logo" />
            <div className={Styles.header_menu}>
                {/* <a href="#">The Story</a>
                <a href="#">Roadmap</a>
                <a href="#">Housing a Crognome</a>
                <a href="#">FAQ</a> */}
            </div>
            <button className={Styles.header_btn}>CONNECT YOUR<br />WALLET</button>
        </header>
    )
}