import { Alert } from "react-bootstrap"

const Success = ({success})=>{
    return(
        <>
            <Alert varient="success">
                {success}
            </Alert>
        </>
    )
}
export default Success