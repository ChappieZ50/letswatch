import React from 'react';
import {Button} from "../component/Landing/Button";

const Landing = () => (
    <div className="homepage">
        <div className="fullScreen__parent">
            <div className="fullScreen__content">
                <div className="fullScreen__img-parent"/>

                <div className="fullScreen__text">
                    <Button to="/watch-together">Watch Together</Button>
                    <Button to="/discussions">Join Discussions</Button>
                </div>
            </div>
        </div>
    </div>
);

export default Landing;