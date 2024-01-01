import React, {useEffect} from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';


function Skills() {


    return(
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Skills</h1>

            <div className="SkillsContainer">
                
            </div>
        </div>
    );
}

export default Skills;