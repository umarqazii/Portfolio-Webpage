import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Typed from 'typed.js';
import '../App.css';
import myPic from '../assets/dp.jpg'; // Import your image

function Home() {
  useEffect(() => {
    var typedName = new Typed('.typedName', {
      strings: ['Umar Qazi'],
      typeSpeed: 150,
      showCursor: false,
    });

    var typedSkill = new Typed('.typedSkill', {
      strings: [
        'C/C++, Java, Python',
        'HTML, CSS, JavaScript',
        'SQL , MongoDB',
        'Linux (Ubuntu)',
        'React.js', 'Vue.js',
        'Web Development',
      ],
      typeSpeed: 70,
    });

    return () => {
      typedName.destroy();
      typedSkill.destroy();
    };
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <header className="App-header" style={{ marginTop: '-80px' }}> {/* Custom margin-top */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="intro-text">
                <h1 className="intro-lead-in" >
                  <h3>Hi! My name is</h3>
                  <span className="typedName" style={{ color: '#72c4bd', fontFamily: 'Audiowide, sans-serif' }}></span>
                </h1>
                <h1 className="intro-heading">
                  <h3>and I am proficient in</h3>
                  <span id="element" className="typedSkill" style={{ color: '#72c4bd', fontFamily: 'Audiowide, sans-serif' }}></span>
                </h1>
              </div>
              <br />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src={myPic} alt="My Picture" className="img-fluid" style={{ width: '40%', borderRadius: '35%' }} />
            </div>
          </div>
        </div>
      </header>
      {/* Add a button that would download my resume*/}
      <div className="container" style={{ marginTop: '-120px' }}>
        <div className="row">
          <div className="col text-center">
            <a href="https://drive.google.com/file/d/1ceXMyZQeL3ckBce_3quPR7R71khKHZRt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" style={{ fontFamily: 'Audiowide, sans-serif', marginRight:'15px' }}>Download My CV</a>
            <a href="https://drive.google.com/file/d/1L-UDtbKUbHxFXltagb9ULCRCQ8QmStjg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" style={{ fontFamily: 'Audiowide, sans-serif' }}>Download My Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
