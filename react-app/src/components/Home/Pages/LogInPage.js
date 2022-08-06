import React, { useState } from "react";
import LoginForm from "../../auth/LoginForm";
import SignUpForm from "../../auth/SignUpForm";
import { Modal } from "../../Modal";
import "./login.css";

function LogInPage() {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <>
            {showSignUp && (
                <Modal onClose={() => setShowSignUp(false)}>
                    <SignUpForm />
                </Modal>
            )}
            <div id="login-page">
                <div id="login-content">
                    <div id="login-blurb">
                        <h1>bookface</h1>
                        <p>Connect with friends and the world around you on Bookface.</p>
                    </div>
                    <div id="login-container">
                        <LoginForm />
                        <button className="green-button" onClick={() => setShowSignUp(true)}>
                            Create new account
                        </button>
                    </div>
                </div>
                <div id="login-footer">
                    <h2>Patrick McPherson</h2>
                    <div id="gitlinked">
                        <div>Git Hub</div>
                        <div>Linked In</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogInPage;
