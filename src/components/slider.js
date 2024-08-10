import React from 'react';
import Marquee from 'react-fast-marquee';
import skill1 from '../assets/7.png';
import skill2 from '../assets/8.png';
import skill3 from '../assets/9.png';
import skill4 from '../assets/10.png';
import skill5 from '../assets/11.png';
import skill6 from '../assets/12.png';
import skill7 from '../assets/13.png';
import skill8 from '../assets/14.png';
import skill9 from '../assets/15.png';
import skill10 from '../assets/16.png';
import skill11 from '../assets/17.png';
import skill12 from '../assets/18.png';
import skill13 from '../assets/19.png';
import bskill1 from '../assets/20.png';
import bskill2 from '../assets/21.png';
import bskill3 from '../assets/22.png';
import bskill4 from '../assets/23.png';
import bskill5 from '../assets/24.png';





const Slider = () => {
    return (
        <div className="slider" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 style={{color: 'white', fontFamily:"Audiowide"}}>Skills</h2>
            <Marquee gradient={false} speed={100} direction='right'>
                <img src={skill1} alt="skill1" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}} />
                <img src={skill2} alt="skill2" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill3} alt="skill3" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill4} alt="skill4" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill5} alt="skill5" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill6} alt="skill6" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill7} alt="skill7" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill8} alt="skill8" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill9} alt="skill9" className="skill" style=  {{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill10} alt="skill10" className="skill" style={{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill11} alt="skill11" className="skill" style={{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill12} alt="skill12" className="skill" style={{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
                <img src={skill13} alt="skill13" className="skill" style={{width:'200px', margin: '5px 30px', borderRadius:'5px'}}/>
            </Marquee>

            <h2 style={{color: 'white' , fontFamily:"Audiowide", marginTop:'60px'}}>Briefly Worked on</h2>
            <Marquee gradient={false} speed={50} direction='left' style={{marginBottom:'50px'}}>
                <img src={bskill1} alt="skill1" className="skill" style=  {{width:'200px', margin: '5px 50px', borderRadius:'5px'}} />
                <img src={bskill2} alt="skill2" className="skill" style=  {{width:'200px', margin: '5px 50px', borderRadius:'5px'}}/>
                <img src={bskill3} alt="skill3" className="skill" style=  {{width:'200px', margin: '5px 50px', borderRadius:'5px'}}/>
                <img src={bskill4} alt="skill4" className="skill" style=  {{width:'200px', margin: '5px 50px', borderRadius:'5px'}}/>
                <img src={bskill5} alt="skill5" className="skill" style=  {{width:'200px', margin: '5px 50px', borderRadius:'5px'}}/>
                
            </Marquee>
        </div>
    );
}

export default Slider;