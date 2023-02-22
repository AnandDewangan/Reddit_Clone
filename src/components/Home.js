import React, { useContext, useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import TodoList from './TodoList';
import ToggleContext from '../context/ToggleContext';

const getLocalStorage = () => {
    let list = localStorage.getItem("lists")
    return list ? JSON.parse(localStorage.getItem("lists")): [];
}

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isTyping, setIsTyping] = useState(false);
    const [textmsg, setTextmsg] = useState('');
    const [todolist, setTodolist] = useState(getLocalStorage());
    const {name, password} = useContext(ToggleContext);

    const navigate = useNavigate();
    useEffect(()=>{
        if(!name || !password){
            navigate('/');
        }
    })
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(todolist))
    }, [todolist])
    
    const addItem = () => {
        if (!textmsg) {
            alert("Add some title");
            return;
        }
        const item = {
            id: new Date().getTime(),
            name: textmsg,
        }
        setTodolist(oldItems => [...oldItems, item]);
        setTextmsg("");
        setIsTyping(!isTyping);
    }

    return (
        <>
            <Container fluid className="d-flex align-items-center justify-content-center p-2 navbar">
                <Button variant="primary" onClick={handleShow}>Add new post</Button>
            </Container>
            <div style={{ position: 'absolute', top: "10%", left: '20%', zIndex: '1' }}>
                {todolist.map(item => {
                    return (
                        <TodoList item={item}/>
                    )
                })}
            </div>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Post title</Form.Label>
                            <Form.Control as="textarea" rows={3} value={textmsg} onChange={(e)=>setTextmsg(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addItem}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home;