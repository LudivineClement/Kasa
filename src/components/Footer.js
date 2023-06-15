import React from 'react';
import LogoFooter from '../assets/logo_footer.png.png'

const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} alt="logo Kasa"  />
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;