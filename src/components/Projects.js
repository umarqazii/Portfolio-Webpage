import React from "react";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimg from '../Transport.png';
import lincenseimg from '../License.png';
import portfolioimg from '../Portfolio.png';
import cryptoimg from '../crypto.png';
import '../App.css';

function Projects() {
    return (
        <div className="App" >
            <Navbar />
            <h1 style={{fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px'}}>Projects</h1>
            <div className="CardsContainer"> {/* Custom margin-top */}
                <Card className="Card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cardimg} />
                    <Card.Body>
                        <Card.Title>Transport Booking App</Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}>
                            A dynamic MERN (MongoDB, Express.js, React, Node.js) application, streamlining the
                            online booking process for customers.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/umarqazii/Transport-Booking-App">Check it Out</Button>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={lincenseimg} />
                    <Card.Body>
                        <Card.Title>License Registration App</Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}>
                            A comprehensive MERN (MongoDB, Express.js, React, Node.js) application featuring. distinct dashboards for regular users and an admin,
                            who can manage product registrations, generate license keys, and oversee all user requests and
                            registered products.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/umarqazii/MERN-Product-Registration-App">Check it Out</Button>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={portfolioimg} />
                    <Card.Body>
                        <Card.Title>Portfolio Website</Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}>
                            A portfolio website using simple HTML, CSS, and JavaScript. Contains a single page with navigation through 
                            scrolling.
                        </Card.Text>
                        <Button variant="primary" href="https://www.umarqazi.me">Check it Out</Button>
                    </Card.Body>
                </Card>

                <Card className="Card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cryptoimg} />
                    <Card.Body>
                        <Card.Title>License Registration App</Card.Title>
                        <Card.Text style={{ fontSize: '15px' }}>
                        App designed made using Java/JavaFX to learn about cryptocurrencies and providing the necessary tools 
                        to help you in your trading journey
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/umarqazii/CryptoApp">Check it Out</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
}

export default Projects;