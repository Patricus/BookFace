import React from "react";
import "./contactPage.css";
import githubLogo from "../../images/GitHub_Logo.png";
import linkedinLogo from "../../images/LI-Logo.png";

function ContactPage() {
    return (
        <div id="contact-page">
            <div className="contact-tile">
                <strong>By</strong>
                <h1>Patrick James McPherson</h1>
            </div>
                <div className="contact-tile">
            <a href="https://github.com/Patricus" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt="git hub" />
            </a>
                </div>
                <div className="contact-tile">
            <a
                href="https://www.linkedin.com/in/patrick-mcpherson-438385117/"
                target="_blank"
                rel="noreferrer">
                    <img src={linkedinLogo} alt="linked in" />
            </a>
                </div>
        </div>
    );
}

export default ContactPage;
