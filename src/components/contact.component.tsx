import React from "react";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Contact = () => {
    return (
        <div>
            <h4>Contact</h4>
            <div>
                <h5>Contact me</h5>
                <p>email</p>
                <button>send</button>
            </div>
            <EmailOutlinedIcon />
            <LinkedInIcon />
            <TwitterIcon />
            
        </div>
    )
}

export default Contact ;
