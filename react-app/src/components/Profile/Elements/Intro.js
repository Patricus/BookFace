import React from "react";
import "./intro.css";

function Intro({ profile }) {
    return (
        <div id="intro">
            <h3>Intro</h3>
            <p>
                Bio <br />
                {profile.bio}
            </p>
            <p>{`Lives in ${profile.lives_in}`}</p>
            <p>{`From ${profile.born_from}`}</p>
        </div>
    );
}

export default Intro;
