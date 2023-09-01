import React,{useEffect} from "react"
import { Col, Container, Row } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import AllPizza from '../PizzaData'
import {getAllPizzas} from '../actions/pizzaAction'
import Pizza from '../components/Pizza'
import Loader from "../components/Loader"
import Success from "../components/success"
import Error from "../components/Error"
const PizzaMap = () => {
    const dispatch = useDispatch()
    const pizzastate= useSelector((state)=>state.getAllPizzaReducer)
    const {loading,pizzas,error} =pizzastate
    // console.log(pizzas,AllPizza)
    useEffect(()=>{dispatch(getAllPizzas())},[dispatch])
    return (
        <>
            <Container>
            {loading? (<Loader/>)
                    : error?(<Error/>)
                    :
                    (<Row>

                    {
                        pizzas.map(pizza =>
                            <Col md={4}>
                                <Pizza pizza={pizza} />
                            </Col>
                        )
                    }
                </Row>)
                
                }
                
            </Container>

        </>
    )
}
export default PizzaMap