import { Alert } from "react-bootstrap"

const Error =({error})=>{
    return(
        <>
        <Alert varient="danger">{error}</Alert>
        </>
    )
}
export default Error