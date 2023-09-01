import {    Button, Card} from "react-bootstrap"
import { useState } from "react"
import { Modal, Container, Row, Col } from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux"
import { addToCart } from "../actions/cartAction"

const Pizza = ({ pizza }) => {
    const [varient, setVarient] = useState('small')
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const addToCartHandler= ()=>{
        dispatch(addToCart(pizza,quantity,varient))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: 'auto', margin: "30px 10px 10px 10px" }}>
                <Card.Img variant="top" src={pizza.image} style={{ height: '200px', cursor: 'pointer' }}
                    onClick={handleShow}
                />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Varients</h6>
                                <select value={varient} onChange={e => setVarient(e.target.value)}>
                                    {pizza.varients.map((x) => (
                                        <option >{x}
                                        </option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity</h6>
                                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}
                                        >{i + 1}
                                        </option>
                                    ))}
                                </select>
                            </Col>
                        </Row>

                    </Card.Text>
                    <Row>
                        <Col md={6}>Price: {pizza.price[varient] * quantity} /-Rs</Col>
                        <Col md={6} >
                            <Button 
                            onClick={addToCartHandler}
                            className="bg-warning text-white " style={{ height: "100%", fontSize: 10, margin: "0px" }}>Add to cart</Button>
                        </Col>
                    </Row>
                    {/* <Button variant="primary">"Add to cart"</Button> */}
                </Card.Body>
            </Card>
            {/* modal here */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Card.Img variant="top" src={pizza.image} style={{ height: '200px' }}

                    />
                    <h4>Description : </h4>{pizza.description}
                </Modal.Body>

            </Modal>
        </>
    )
}
export default Pizza