import * as React from 'react';
import "../../scss/footer.scss";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Disclaimer from "../../other/disclaimer.pdf";
import PrivacyPolicy from "../../other/privacy-policy.pdf";
import TermsOfUse from "../../other/terms-of-use.pdf";


const Footer = (props) => {
    return (
        <Box id="footer-container" sx={{ flexGrow: 1 }}>
            <Toolbar id="footer-toolbar">
                <div className="link-box">
                    <a className="footer-object footer-link" href={Disclaimer} target="_blank">
                        Disclaimer
                    </a>
                    <a className="footer-object footer-link" href={PrivacyPolicy} target="_blank">
                        Privacy Policy
                    </a>
                    <a className="footer-object footer-link" href={TermsOfUse} target="_blank">
                        Terms of Use
                    </a>
                </div>
                <span className="footer-object copyright">&copy; Copyright 2022, Time 4 OT</span>
            </Toolbar>
        </Box>
    );
}

export default Footer;
