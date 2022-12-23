import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsInstagram, BsGoogle, BsGithub } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        // {name:'Facebook', link:'', text:'Follow to my facebook.'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/akashh-jadhav-fed/', text:'Follow to my linkedin.'},
        {name:'Instagram', link:'https://www.instagram.com/akashh.jadhav/', text:'Follow to my Instagram.'},
        // {name:'Blog', link:'', text:'Follow to my blog.'},
        {name:'GitHub', link:'https://github.com/akashh-jadhav', text:'Follow to my github account.'},
        {name:'Email', link:'mailto:er.akashjadhav1997@gmail.com',  text:'Write to me a mail.'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        <li>
                            <a rel="noreferrer" href="" target="_blank">
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
                            <a rel="noreferrer" href="#" target="_blank">
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;