import { Container, Row, Col, Table } from "react-bootstrap"
import {GiRotaryPhone} from 'react-icons/gi'
import {HiOutlineMail} from 'react-icons/hi'
import {GrInstagram} from 'react-icons/gr'
const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Pizza Ten Shop</h1>
                        <p>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</p>
                        <Table striped bordered hover  className="text-center">
                            <thead>
                                <tr>
                                    <th className="bg-success text-center " colSpan={3}> Contact Us !!</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    <GiRotaryPhone/>
                                    </td>
                                    <td>Phone</td>
                                    <td>12333-99999</td>
                                </tr>
                                <tr>
                                    <td>
                                    <GrInstagram/>
                                    </td>
                                    <td>Instagram</td>
                                    <td>Pizza_Ten</td>
                                </tr>
                                <tr>
                                    <td>
                                    <HiOutlineMail/>
                                    </td>
                                    <td>Email</td>
                                    <td>pizza10@pizzaten.com</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Contact 