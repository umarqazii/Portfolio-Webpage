import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, Nav, Button } from 'react-bootstrap';
import '../Contact.css';
import githubimg from '../github.png';
import linkedinimg from '../linkedin.png';
import facebookimg from '../fb.png';
import instagramimg from '../insta.png';
import gmailimg from '../gmail.png';
function Contact() {
    const [selectedTab, setSelectedTab] = useState('github'); // State to track the selected tab

    const renderContent = () => {
        switch (selectedTab) {
            case 'facebook':
                return (
                    <Card.Body>
                        <Card.Img variant="top" src={facebookimg} style={{ borderRadius: '5px' }} />
                        <Card.Text>
                            Username: Umar Qazi
                            <br />
                            Link: <a href="https://www.facebook.com/hafiz.umarqazi.7">https://www.facebook.com/hafiz.umarqazi.7</a>
                        </Card.Text>
                        <Button variant="dark" href="https://www.facebook.com/hafiz.umarqazi.7" target="_blank" rel="noopener noreferrer">Go to Facebook</Button>
                    </Card.Body>
                );
            case 'instagram':
                return (
                    <Card.Body>
                        <Card.Img variant="top" src={instagramimg} style={{ borderRadius: '5px' }} />
                        <Card.Text>
                            Username: umarqazii
                            <br />
                            Link: <a href="https://www.instagram.com/umarqazii/">https://www.instagram.com/umarqazii/</a>
                        </Card.Text>
                        <Button variant="dark" href="https://www.instagram.com/umarqazii/" target="_blank" rel="noopener noreferrer">Go to Instagram</Button>
                    </Card.Body>
                );
            case 'github':
                return (
                    <Card.Body>
                        <Card.Img variant="top" src={githubimg} style={{ borderRadius: '5px' }} />
                        <Card.Text>
                            Username: umarqazii
                            <br />
                            Link: <a href="https://github.com/umarqazii">https://github.com/umarqazii</a>
                        </Card.Text>
                        <Button variant="dark" href="https://github.com/umarqazii" target="_blank" rel="noopener noreferrer">Go to GitHub</Button>
                    </Card.Body>
                );
            case 'linkedin':
                return (
                    <Card.Body>
                        <Card.Img variant="top" src={linkedinimg} style={{ borderRadius: '5px' }} />
                        <Card.Text>
                            Username: Umar Qazi
                            <br />
                            Link: <a href="https://www.linkedin.com/in/umar-qazi-61b62a24a/">https://www.linkedin.com/in/umar-qazi-61b62a24a/</a>
                        </Card.Text>
                        <Button variant="dark" href="https://www.linkedin.com/in/umar-qazi-61b62a24a/" target="_blank" rel="noopener noreferrer">Go to LinkedIn</Button>
                    </Card.Body>
                );

            case 'gmail':
                return (
                    <Card.Body>
                        <Card.Img variant="top" src={gmailimg} style={{ borderRadius: '5px' }} />
                        <Card.Text>
                            Personal: umarqazii983@gmail.com
                            {/* Button to copy the email address */}
                            <button
                                className="btn btn-dark" // Apply Bootstrap classes
                                onClick={() => navigator.clipboard.writeText('umarqazii983@gmail.com')}
                                style={{ marginLeft: '10px' }}
                            >
                                Copy
                            </button>
                            <br />
                            <br />
                            University: i200968@nu.edu.pk
                            <button
                                className="btn btn-dark" // Apply Bootstrap classes
                                onClick={() => navigator.clipboard.writeText('i200968@nu.edu.pk')}
                                style={{ marginLeft: '10px' }}
                            >
                                Copy
                            </button>
                        </Card.Text>
                    </Card.Body>

                );

            default:
                return null;
        }
    };

    return (
        <div className="App">
            <Navbar />
            <h1 style={{ fontFamily: 'Audiowide, sans-serif', color: 'white', marginTop: '50px' }}>Contact Me</h1>

            <div className="ContactContainer">
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#github">
                            <Nav.Item>
                                <Nav.Link href="#github" onClick={() => setSelectedTab('github')}>GitHub</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#linkedin" onClick={() => setSelectedTab('linkedin')}>LinkedIn</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#facebook" onClick={() => setSelectedTab('facebook')}>Facebook</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#instagram" onClick={() => setSelectedTab('instagram')}>Instagram</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#gmail" onClick={() => setSelectedTab('gmail')}>Gmail</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Card.Header>
                    {renderContent()} {/* Render content based on the selected tab */}
                </Card>
            </div>
        </div>
    );
}

export default Contact;
