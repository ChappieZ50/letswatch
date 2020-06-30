import * as React from 'react';
import {useState, useEffect} from "react";

import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Radio} from "./Radio";

export const Gender = ({handleGender}) => {

    const [gender, setGender] = useState('male');

    useEffect(() => {
        handleGender(gender);
    }, [gender]);

    const handleChange = (e) => {
        setGender((e.target.value == 'true') ? 'male' : 'female');
    };

    return (
        <div className="gender d-inline mt-3 mb-2">
            <Radio id="1" handleChange={handleChange} name="gender" value={true} defaultChecked={true}>
                Male <FontAwesomeIcon icon={faMars}/>
            </Radio>
            <Radio id="2" handleChange={handleChange} name="gender" value={false}>
                Female <FontAwesomeIcon icon={faVenus}/>
            </Radio>
        </div>
    );
};