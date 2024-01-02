import React, {useEffect} from "react";
import Navbar from "./Navbar";



function Skills() {

    var mySkills = ['C/C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MongoDB', 'Linux (Ubuntu)',
    'React.js', 'Vue.js', 'Web Development'];

    return(
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Skills and Experience</h1>

            <div className="SkillsContainer">
                
            </div>
        </div>
    );
}

export default Skills;