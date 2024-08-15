import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import dotimg from '../assets/dot.png';
import '../timeline.css';
import '../App.css';
import PdfViewer from "./pdfViewer";
import cv from "../assets/UmarQaziCV.pdf";

function Experience() {
    let path = cv;
    console.log('Path:', path);
    
    return (
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Academic and Professional Experience</h1>

            <div class="timeline">

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>1st and 2nd Semester</h2>
                        <small>2020-2021</small>
                        <p>C++ for Programming Fundamentals. HTML Basics</p>
                        <p>C++ Object Oriented Programming</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont right-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>3rd and 4th Semester</h2>
                        <small>2021-2022</small>
                        <p>Data Structures and Algorithms. Assembly Language</p>
                        <p>SQL Database and Multithreading in C Language</p>
                        <div class="right-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>5th and 6th Semester</h2>
                        <small>2022-2023</small>
                        <p>Project in Java and JavaFX</p>
                        <p>Python for Artificial Intelligence. Parallel and Distributed Computing using MPI, OpenCL, Hadoop frameworks</p>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

                <div class="cont right-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>7th and 8th Semester</h2>
                        <small>2023-2024</small>
                        <p>Extensive study on Computer Networks. Made multiple web Development projects in React.js and Vue.js</p>
                        <p>Final Year Project (MindSight) brought to completion. AWS Cloud Computing. Distributed Data Engineering</p>
                        <div class="right-cont-arrow"></div>
                    </div>
                </div>

                

                <div class="cont left-cont">
                    <img src={dotimg} alt="" />
                    <div class="text-box">
                        <h2>Summer Internship</h2>
                        <small><b>Mugutech</b> June 2024- Aug 2024</small>
                        <p>Web Development Internship</p>
                        <p><b>Technologies:</b> React.js, Node.js, Express, MySQL, Wordpress, Figma</p>
                        <Link to={{pathname: "/pdfViewer", state: { path: path }}} >View Certificate</Link>
                        <div class="left-cont-arrow"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;