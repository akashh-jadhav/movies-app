import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsInstagram, BsGoogle, BsGithub} from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="/" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/akashh-jadhav-fed/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                                <li>
                            <a rel="noreferrer" href="https://www.instagram.com/akashh.jadhav/" target="_blank">
                                <BsInstagram />
                            </a>
                        </li>
                                
                                {/* <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li> */}
                                <li>
                            <a rel="noreferrer" href="https://github.com/akashh-jadhav" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Developed and Designed  by Akash Jadhav (FED).</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;