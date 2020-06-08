import React from 'react';
import Button from "../../component/SinglePage/Button";

const Home = () => (
    <div className="homepage">
        <div className="fullScreen__parent">
            <div className="fullScreen__content">
                <div className="fullScreen__img-parent"/>
                <div className="fullScreen__text">
                    <Button to="/watch-together" value="Watch Together"/>
                    <Button to="/discussions" value="Join Discussions"/>
                </div>
            </div>
        </div>
    </div>
);

export default Home;