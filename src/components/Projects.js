import React from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimg from '../assets/Transport.png';
import lincenseimg from '../assets/License.png';
import portfolioimg from '../assets/Portfolio.png';
import cryptoimg from '../assets/crypto.png';
import mindsight from '../assets/mind-sight.png'
import laundryimg from '../assets/laundry.png'
import hospitalimg from '../assets/hospital.png'
import cookimg from '../assets/cookbook.png'
import '../App.css';

function Projects() {
    return (
        <div className="App" >
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Projects</h1>

            <div className="CardsContainer">

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={mindsight} style={{ borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>MindSight</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                        A system that uses artificial intelligence to track emotions, monitor speech sentiment
                        and physiological cues to detect anxiety in a person while the person answers a series of
                        questions. <b>MERN, Flask</b>
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="dark" href="https://github.com/umarqazii/Final-Year-Project" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={cookimg} style={{ borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Cook Book</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                        Application that enables you to access millions of recipes from all over the world. You can search based
                        on your ingredients and cuisine. <b>MERN, Typescript</b> <br /><br />
                        <b>Work in Progress!!</b>
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="dark" href="https://cook-book-fe.vercel.app/" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={laundryimg} style={{  borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Laundry Tracking Application</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                        A simple system built using <b>MERN</b> to enter your laundry clothes, calculate the total and save the record datewise in the 
                        database 
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="dark" href="https://laundry-app-fe.vercel.app/" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey'}}>
                    <Card.Img variant="top" src={hospitalimg} style={{  borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Hospital Management System</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                        A system made using <b>MERN</b> that can register and display doctors and patients. CRUD operations implemented. Billing and invoice generation with a downloadable invoice. 
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="dark" href="https://github.com/umarqazii/Hospital-Management-System-FE" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={cardimg} style={{ borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Transport Booking App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                            A dynamic <b>MERN</b> (MongoDB, Express.js, React, Node.js) application, streamlining the
                            online booking process for customers.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                            <Button variant="dark" href="https://github.com/umarqazii/Transport-Booking-App" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey'}}>
                    <Card.Img variant="top" src={lincenseimg} style={{ borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>License Registration App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto' }}>
                            A comprehensive <b>MERN</b> (MongoDB, Express.js, React, Node.js) application featuring. distinct dashboards for regular users and an admin,
                            who can manage product registrations, generate license keys, and oversee all user requests and
                            registered products.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="dark" href="https://github.com/umarqazii/MERN-Product-Registration-App" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={portfolioimg} style={{  borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Portfolio Website</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto'  }}>
                            A portfolio website (Non-Responsive) using simple <b>HTML, CSS, and JavaScript</b>. Contains a single page with navigation through
                            scrolling.
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="dark" href="https://www.umarqazi.me" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem', background: 'grey' }}>
                    <Card.Img variant="top" src={cryptoimg} style={{ borderRadius: '5px', width: '100%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'  }} />
                    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                        <Card.Title>Crypto Portfolio Tracking App</Card.Title>
                        <Card.Text style={{ fontSize: '13px', flex: '1 0 auto'  }}>
                            App designed made using <b>Java/JavaFX </b>to learn about cryptocurrencies and providing the necessary tools
                            to help you in your trading journey
                        </Card.Text>
                        <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
                        <Button variant="dark" href="https://github.com/umarqazii/CryptoApp" target="_blank" rel="noopener noreferrer">Check it Out</Button>
                        </div>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
}

export default Projects;