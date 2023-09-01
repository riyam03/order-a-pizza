import {Container,Row,Col} from "react-bootstrap"

const About=()=>{
    return(
        <>
            <Container style={{marginTop:'50px'}}>
            <h1>Who we are ??</h1>
            <p>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</p>
            <h1>Our Speciality</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</p>
                </Col>
                <Col md={6}>
                    <p>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</p>
                </Col>
            </Row>
            <Row>
                <h1>Our Cheif</h1>
                <Col md={3}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</Col>
                <Col md={3}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</Col>
                <Col md={3}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</Col>
                <Col md={3}>Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is text copy that serves to fill a space without saying anything meaningful. It's essentially nonsense text that still gives an idea of what real words will look like in the final product.</Col>
            </Row>
            </Container>
        </>
    )
}

export default About