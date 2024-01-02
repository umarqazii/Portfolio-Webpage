import React, { useEffect } from "react";
import Navbar from "./Navbar";
import '../timeline.css';
import dotimg from '../dot.png';



function Skills() {

    return (
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Skills and Experience</h1>

            <div class="timeline">

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>1st Semester</h2>
                        <small>2020-2021</small>
                        <p>C++ and HTML Basics</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont right-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>2nd Semester</h2>
                        <small>2020-2021</small>
                        <p>C++ Object Oriented Programming</p>
                        <div class="right-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>3rd Semester</h2>
                        <small>2020-2021</small>
                        <p>Data Structures and Algorithms. Assembly Language</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont right-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>4th Semester</h2>
                        <small>2020-2021</small>
                        <p>SQL Database and Multithreading in C Language</p>
                        <div class="right-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>5th Semester</h2>
                        <small>2020-2021</small>
                        <p>Project in Java and JavaFX</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont right-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>6th Semester</h2>
                        <small>2020-2021</small>
                        <p>Python for Artificial Intelligence. Parallel and Distributed Computing using MPI, OpenCL, Hadoop frameworks</p>
                        <div class="right-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>7th Semester</h2>
                        <small>2020-2021</small>
                        <p>Extensive study on Computer Networks. Made multiple web Development projects in React.js and Vue.js</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;