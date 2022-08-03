import React from "react";
import LoginForm from "../../auth/LoginForm";
import SignUpForm from "../../auth/SignUpForm";

function LogInPage() {
    return (
        <div>
            <h1>LogInPage</h1>
            <LoginForm />
            <SignUpForm />
        </div>
    );
}

export default LogInPage;
