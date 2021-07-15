import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/AboutUs.css'
import {Navbar , Container , Nav} from 'react-bootstrap/'

export class Welcome extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>Portfolio</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/Home">Home</Nav.Link>
                                <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
                                <Nav.Link href="/Contact">Contact</Nav.Link>
                                <Nav.Link href="/Projects">Project</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div className='aboutUs-page'>
                    <div className='aboutUs-image'>
                    <img alt="" src=""></img>

                        <div className='aboutUs-overlay'>
                        </div>
                    </div>
                    <section className="team-member " id="team">
                        <article>
                            <img src="https://joshbersin.com/wp-content/uploads/2020/01/skills2.jpg" alt="" />
                            <h3>strength skills</h3>
                            <p>High Skills in HTML,CSS5</p>
                            <p>Write a clean code using JavaScript</p>
                            <p>High skills in MERN</p>
                            <section>
                            </section>
                        </article>
                        <article>
                            <img src="https://www.zyadda.com/wp-content/uploads/2019/11/%D8%A7%D8%B3%D8%AA%D8%B1%D8%AC%D8%A7%D8%B9-%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AC%D9%8A%D9%85%D9%8A%D9%84-%D8%B9%D9%86-%D8%B7%D8%B1%D9%8A%D9%82-%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D9%87%D8%A7%D8%AA%D9%81.jpg" alt="" />
                            <h3>Gmail</h3>
                            <p>aliakefsh@gmail.com</p>
                            <p>ali.shiyyab998@gmail.com</p>
                            <p>PhoneNumber:0780704421</p>
                            <section>

                            </section>
                        </article>
                        <article>
                            <img src="https://jahed.net/wp-content/uploads/2021/05/github-jahed.png" alt="" />
                            <h3>GitHub Account</h3>
                            <p>Using To Upload all works.</p>
                            <p>Deploye works using it.</p>
                            <p>Shring my Repositories</p>
                            <section>
                            </section>
                        </article>
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Welcome
