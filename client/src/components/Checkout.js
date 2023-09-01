import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux';
import { placeOrder } from '../actions/OrderAction';
import Loader from './Loader';
import Error from './Error';
import Success from './success';
const Checkout=({subTotal})=>{
    const dispatch =useDispatch()
    const orderState= useSelector(state=>state.placeOrderReducer)
    const {loading,error,success}= orderState
    const tokenHandler = (token)=>{
        dispatch(placeOrder(token,subTotal))
        console.log(token)
    }
    return(
        <>
        {loading && <Loader/>}
        {error && <Error error="something went wrong"/>}
        {success && <Success success="order placed success"/>}
            <StripeCheckout
            amount={subTotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey="pk_test_51MixYVSJt2ivNj4mVvs18B1izj0LumFIJGZ5EwsKz5VaYjuIWppAGA9XxBzKMISUfPuGt8FOrESTNRBtgClDwhbW00wtOcElWw"
            currency='INR'
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </>
    )
}
export default Checkout