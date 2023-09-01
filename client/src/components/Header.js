
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap'
import { GiFullPizza } from 'react-icons/gi'
import { BsCartFill } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer)
  const cartState = useSelector((state) => state.cartReducer)
  console.log(cartState, userState)
  const { currentUser } = userState
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
        <Container >

          <Navbar.Brand className='text-light' >

            <GiFullPizza className='text-warning' />
            <LinkContainer to='/pizzamap' activeClassName>
              <Nav.Link className='text-light' >Pizza Ten</Nav.Link>


            </LinkContainer>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-light' />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ms-auto ">
              {
                currentUser ? (
                  <LinkContainer to='/pizzamap' >
                    {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                    <NavDropdown  title= <span className="text-light"> {currentUser.name} </span>  id="nav-dropdown">
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>
                              Orders
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    
                  </LinkContainer>
                ) :
                  <>
                    <LinkContainer to='/login' activeClassName>
                      <Nav.Link className='text-light' href="login">Login</Nav.Link>
                    </LinkContainer>
                  </>
              }
              <LinkContainer to='/pizzamap' activeClassName>
                <Nav.Link className='text-light' href="#features">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact' activeClassName>
                <Nav.Link className='text-light' href="contact">Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about' activeClassName>
                <Nav.Link className='text-light' href="#memes">
                  About
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart' activeClassName>
                <Nav.Link className='text-light' href="#memes">
                  <BsCartFill className='text-light' /><p>{cartState.cartItems.length}</p>
                </Nav.Link>
              </LinkContainer>

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>





    </>
  )
}

export default Header