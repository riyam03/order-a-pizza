import {Row, Col, Container, Button, ButtonGroup} from 'react-bootstrap'
import { BrowserRouter, Route, Router ,Routes} from 'react-router-dom'
import Addnewpizza from '../components/Admin/AddNewPizza'
import OrderList from '../components/Admin/OrderList'
import PizzaList from '../components/Admin/PizzaList'
import UserList from '../components/Admin/UserList'
import { createBrowserHistory } from '@remix-run/router'
import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const AdminScreen = ()=>{
    const history= useNavigate()
    return(
        <>
        <Container >
        <Row>
            <h1 className='text-center bg-dark text-light p-4'>Admin Pannel</h1>
            <Col md={4}>
                <ButtonGroup vertical style={{minHeight:"400px"}}>
                    <Button onClick={()=>history('/admin/userlist')}>All Users</Button>
                    <Button onClick={()=>history('/admin/pizzalist')}>All Pizzas</Button>
                    <Button onClick={()=>history('/admin/addnewpizza')}>Add New Pizza</Button>
                    <Button onClick={()=>history('/admin/orderlist')}>All Orders</Button>
                </ButtonGroup>
            </Col>
            <Col md={8} >
            
                <Routes>
                <Route  path="/admin/userlist" element={<UserList />} />
                    <Route path="/admin/pizzalist" element={<PizzaList/>} />
                    <Route path="/admin/addnewpizza" element={<Addnewpizza/>} />
                    <Route path="/admin/orderlist" element={<OrderList/>} />
                </Routes>
                
            </Col>
        </Row>
            </Container>
        </>
    )
}
export default AdminScreen