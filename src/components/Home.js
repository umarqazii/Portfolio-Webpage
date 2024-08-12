import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { Link } from "react-router-dom";
// import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "../App.css";
import myPic from "../assets/dp1.jpg"; // Import your image
import cv from "../assets/UmarQaziCV.pdf";
import resume from "../assets/UmarQaziResume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import Slider from "./slider";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  useEffect(() => {
    // const lenis = new Lenis();

    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // });

    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: "chars,words" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0,
        stagger: 0.5,
        duration: 4,
      });
    });

    gsap.fromTo(
      ".reveal-heading",
      {
        opacity: 0, // Initially invisible
        x: -1000, // Move it a bit downwards
        y: 0,
      },
      {
        opacity: 1, // Fully visible
        x: 0, // Move it to its original position
        y: 0,
        scrollTrigger: {
          trigger: ".reveal-heading",
          start: "top 90%", // Adjust as necessary
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".folder-icon",
      {
        opacity: 0, // Initially invisible
        y: 40, // Move it a bit downwards
      },
      {
        opacity: 1, // Fully visible
        y: 0, // Move it to its original position
        scrollTrigger: {
          trigger: ".folder-icon",
          start: "top 90%", // Adjust as necessary
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".slider-component",
      {
        opacity: 0, // Initially invisible
        y: 200, // Move it a bit downwards
      },
      {
        opacity: 1, // Fully visible
        y: 0, // Move it to its original position
        scrollTrigger: {
          trigger: ".slider-component",
          start: "top 90%", // Adjust as necessary
          end: "top 50%",
          scrub: true,
          markers: false,
        },
        duration: 1,
        ease: "power4.out",
      }
    );

    var typedName = new Typed(".typedName", {
      strings: ["Umar Qazi"],
      typeSpeed: 150,
      showCursor: false,
    });

    var typedSkill = new Typed(".typedSkill", {
      strings: ["Full Stack Developer"],
      typeSpeed: 70,
    });

    return () => {
      typedName.destroy();
      typedSkill.destroy();
      //lenis.destroy();
    };
  }, []);

  function downloadCV() {
    var link = document.createElement("a");
    link.href = cv;
    link.download = "UmarQaziCV.pdf";
    link.click();
  }

  function downloadResume() {
    var link = document.createElement("a");
    link.href = resume;
    link.download = "UmarQaziResume.pdf";
    link.click();
  }

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {" "}
        {/* Custom margin-top */}
        <div className="container">
          <div
            className="col align-items-center"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            {/* Image */}
            <div
              className="col-md-6 d-flex justify-content-center"
              style={{ marginBottom: "50px" }}
            >
              <img
                src={myPic}
                alt="My Picture"
                className="img-fluid"
                style={{ width: "43%", borderRadius: "50%" }}
              />
            </div>

            {/* Text  */}
            <div className="col-md-6">
              <div className="intro-text">
                <h1 className="intro-lead-in">
                  <h3>Hi! My name is</h3>
                  <span
                    className="typedName"
                    style={{
                      color: "#72c4bd",
                      fontFamily: "Audiowide, sans-serif",
                    }}
                  ></span>
                </h1>
                <h1 className="intro-heading">
                  <h3>and I am a</h3>
                  <span
                    id="element"
                    className="typedSkill"
                    style={{
                      color: "#72c4bd",
                      fontFamily: "Audiowide, sans-serif",
                    }}
                  ></span>
                </h1>
              </div>
              <br />
            </div>
          </div>
        </div>
      </header>

      <div className="responsive-section" >
        <section>
          <h1 className="reveal-heading" style={{}}>
            <b>More About Me</b>
          </h1>
          <p className="reveal-type">
            I am a motivated Computer Science graduate from Pakistan with strong
            skills in MERN stack. My academic journey, including a Bachelor's
            from FAST-NUCES, coupled with hands-on experience through
            internships and projects, has equipped me with a robust foundation
            in full-stack development. I’ve successfully led and contributed to
            projects like MindSight, a MERN-based anxiety detection system, and
            a Hospital Management System. My portfolio showcases my proficiency
            in building dynamic web applications and managing complex systems. I
            am eager to bring my knowledge and passion for technology to
            impactful real-world projects.
            <br />
            <br />
          </p>
            <Link
              to="/projects"
              className="folder-icon"
              style={{ textDecoration: "none", color: "#72c4bd", fontSize: "clamp(1rem, 3vw, 2rem)", fontFamily:'Audiowide' }}
            >
              Take a Look at my Projects
              <FontAwesomeIcon
                className=""
                icon={faFileCode}
                style={{ marginLeft: "8px", color: "#72c4bd" }}
              />
            </Link>
        </section>
      </div>

      <div className="slider-component" style={{marginTop:'-20px'}}>
      <Slider />
      </div>

      {/* Add a button that would download my resume*/}
      <div className="cv-container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col text-center">
            <button
              onClick={downloadCV}
              className="btn btn-outline-light btn-lg"
              style={{
                fontFamily: "Audiowide, sans-serif",
                marginRight: "15px",
                marginBottom: "15px",
              }}
            >
              Download My CV
            </button>
            <button
              onClick={downloadResume}
              className="btn btn-outline-light btn-lg"
              style={{
                fontFamily: "Audiowide, sans-serif",
                marginBottom: "15px",
              }}
            >
              Download My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
