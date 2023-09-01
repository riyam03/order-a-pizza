import { useEffect } from "react"
import { getUserOrders } from "../actions/OrderAction"
import { useDispatch,useSelector } from "react-redux"
import {Row,Col} from 'react-bootstrap'
import Loader from '../components/Loader'
import Error from '../components/Error'
const OrderScreen = ()=>{
    const ordreState = useSelector(state=>state.getUserOrdersReducer)
    const {loading,error,orders} = ordreState
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserOrders())
    })
    return(
        <>
            <h1>order Screen</h1>
            {loading && (<Loader/>)}
            {error && (<Error error="Something went wrong"/>)}
            {
                orders && orders.map(order =>{
                    <Row>
                        <Col md={4}>
                            {order.orderItems.map(item=>
                                <div>
                                    <h1> {item.name} [{item.varient}] * {item.quantity} ={" "} 
                                    {item.price}</h1>
                                </div>
                            )}
                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>

                        </Col>
                    </Row>
                })
            }
        </>
    )
}

export default OrderScreen