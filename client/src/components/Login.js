import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'
import {loginUser} from "../actions/userAction"
import { useState,useEffect } from 'react';
import './login.css'

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()

    const loginhandler= ()=>{
        const user= {email,password}
        dispatch(loginUser(user))
    }
    useEffect(()=>{
        if (localStorage.getItem('currentUser')){
            window.location.href="/pizzamap"
        }
    },[])
    return(
        <>
        <div className='login'>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button 
                variant="primary" 
               
                onClick={loginhandler}>
                    Submit
                </Button>
            </Form>
            <Button onClick={()=>{navigate('/')}}>Register as new User </Button>
            </div>
        </>
    )
}

export default Login