import React, { useContext, useEffect, useState } from "react";
import redditLogo from "../Images/reddit-logo-reddit-icon-115628658968pe8utyxjt.png";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import TodoList from "./TodoList";
import ToggleContext from "../context/ToggleContext";

const getLocalStorage = () => {
  let list = localStorage.getItem("lists");
  return list ? JSON.parse(localStorage.getItem("lists")) : [];
};

function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isTyping, setIsTyping] = useState(false);
  const [textmsg, setTextmsg] = useState("");
  const [todolist, setTodolist] = useState(getLocalStorage());
  const { name, password } = useContext(ToggleContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!name || !password) {
      navigate("/");
    }
  });
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todolist));
  }, [todolist]);

  const addItem = () => {
    if (!textmsg) {
      alert("Add some title");
      return;
    }
    const item = {
      id: new Date().getTime(),
      name: textmsg,
    };
    setTodolist((oldItems) => [...oldItems, item]);
    setTextmsg("");
    setIsTyping(!isTyping);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div
          className="logo_section"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={redditLogo}
              alt="reddit"
              style={{
                width: "35px",
              }}
            />
            <h4
              style={{
                display: "inline-block",
                marginLeft: "10px",
              }}
            >
              reddit
            </h4>
          </div>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Add new post
            </Button>
          </div>
          <div>
            <Button
              variant="outline-primary"
              onClick={() => {
                navigate("/");
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </Navbar>

      <main>
      <div style={{ position: "relative"}}>
        <div style={{ position: "absolute", top: "10vh", left: "10%" }}>
          <h5>Treding Today</h5>
          <div class="picture">
            <div
              id="box"
              className="col-2"
              style={{backgroundImage:'url(https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600)'}}
            >
              Beach with sunder si swing
            </div>
            <div
              id="box"
              className="row-2"
              style={{backgroundImage:"url(https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600)"}}
            >
              Waterfall with fog
            </div>
            <div
              id="box"
              className="row-2"
              style={{backgroundImage:"url(https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=600)"}}
            >
              Star Light
            </div>
            <div
              id="box"
              className="row-2"
              style={{backgroundImage:"url(https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600)"}}
            >
              NewYork City
            </div>
          </div>
        </div>
        <div
        style={{ position: "absolute", top: "50vh", left: "20%", zIndex: "1" }}
      >
        {todolist.map((item) => {
          return <TodoList item={item} />;
        })}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
              <Form.Control
                as="textarea"
                rows={3}
                value={textmsg}
                onChange={(e) => setTextmsg(e.target.value)}
              />
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
      </div>
      </main>

      <footer>
        <Container>
        <p>Created by Anand Dewangan 2023</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;
