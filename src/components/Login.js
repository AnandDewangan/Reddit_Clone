import React, { useContext } from 'react'
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ToggleContext from '../context/ToggleContext';

export default function Login() {
    const {name, password, setName, setPassword, user, setUser} = useContext(ToggleContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!name || !password) {
            alert("All fields are required!!");
            return;
        }
        navigate("/home");
    }
    const addItem=()=>{
        setUser(oldItem=>[...oldItem, name]);
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center' style={{ width: '100vw', height: '100vh', backgroundColor: '#f5f6fa' }}>
            <Form onSubmit={handleSubmit} className='w-50 d-flex flex-column justify-content-center align-items-center gap-4'>
                <h1 style={{ color: '#e84393' }}>Login Form</h1>
                <div className='w-100'>
                    <label htmlFor='username' style={{ color: '#0984e3' }}>Enter Your Name</label><br />
                    <Form.Control className='w-100' id='username' type='text' placeholder='Enter Your Name...' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='w-100'>
                    <label htmlFor="password" style={{ color: '#0984e3' }}>Enter your password</label><br />
                    <Form.Control className='w-100' id='password' type='password' placeholder='Enter Your Password...' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='w-100 btn btn-outline-success' onClick={addItem}>Continue Application</button>
            </Form>
        </Container>
    )
}
