import {Link} from "react-router-dom";
import CSS from 'csstype';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

/* 
 CSS for Nav Component
*/
const footerStyles: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',// flexDirection: 'column' for mobile
    height: '100%',
    borderBottom: '0.1rem solid grey'
};
const waveFooterStyles: CSS.Properties = {
    background: 'url(' + process.env.PUBLIC_URL + 'SVG/wavefooter.svg) center center/cover no-repeat',
    height: '24rem',
    width: '100%',
};
const footerDivStyles: CSS.Properties = {
    background: '#F2C2C7',
    // height: ,
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
};
const footerFirstStyles: CSS.Properties = {
    flex: '1',
    textAlign: 'center'
};
const footerSecondStyles: CSS.Properties = {
    flex: '1',
    textAlign: 'center'
};
const footerThirdStyles: CSS.Properties = {
    flex: '1',
    textAlign: 'center'
};
export const Footer = () => {
    const location = useLocation().pathname;

    return (
        <footer className={(location == '/') ? 'footer-home' : `footer-${location.replace('/','')}`} style={footerStyles}>
        <div style={waveFooterStyles}></div>
        <div style={footerDivStyles}>
            <div style={footerFirstStyles}>
                    {/* <h4>Whitepaper</h4>
                    <h4>About</h4>
                    <h4>Copyright </h4> */}
            </div>
            <div style={footerSecondStyles}>
                    <h5>Find us at:</h5>
                    <h2>sundae@near.com</h2>
            </div>
            <div style={footerThirdStyles}>

            </div>
        </div>
        </footer>
    );
}