import { Row, Col } from 'react-bootstrap';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { registerUser } from '../actions/userAction';

import './signup.css'
const SignUp = () => {
    const navigate = useNavigate();
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpass,setConfirmpass] = useState('')

    const dispatch = useDispatch()


    const registerhandler =()=>{
        if (password!=confirmpass){
            alert('password do not match')
        }else{
            const user= {name,phone,email,password,confirmpass}
            dispatch(registerUser(user));
        }
    }
    return (
        <>
            <div className='signup'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="Number" placeholder="+91 01234455" value={phone} onChange={e=>setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" value={confirmpass} onChange={e=>setConfirmpass(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Button variant="primary" type="submit" onClick={registerhandler}>
                                Submit
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Button variant="primary" type="navigate" onClick={()=>{navigate("/login")}}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Form>




            </div>
        </>
    )
}

export default SignUp