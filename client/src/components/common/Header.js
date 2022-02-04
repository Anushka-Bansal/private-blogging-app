import React from "react";
import { Navbar, Button, Container, Nav } from "react-bootstrap";

export default function Header() {
    return (
        <div>
            <Navbar className="bg-dark" variant="dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="./images/blogger-logo.jpg"
                        width="150"
                        height="80"
                        className="d-inline-block align-top "
                    />
                </Navbar.Brand>
                {/* <div className=" ml-auto ">
        <Button variant="outline-secondary" className="mr-4 ml-4 "> <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</a></Button>
        <Button variant="outline-warning" className="mr-5 ml-4"><a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</a></Button>
        <Button variant="outline-success"><a href="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</a></Button>
      </div> */}

                <Nav className="justify-content-left">
                    <Button variant="outline-secondary">
                        <Nav.Link href="/" className="text-white">
                            Home
                        </Nav.Link>
                    </Button>
                    <Button variant="outline-warning">
                        <Nav.Link href="/" className="text-white">
                            Sign Up
                        </Nav.Link>
                    </Button>
                    <Button variant="outline-success">
                        <Nav.Link href="/login" className="text-white">
                            Login
                        </Nav.Link>
                    </Button>
                </Nav>

                {/* <Container
        className="ml-auto"
        style={{ maxHeight: '100px', fontSize: "18px" }}>
            
            <Button variant="outline-secondary" >
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
            </Button>
        
        <Nav.Link href="/products" className="text-white">Products</Nav.Link>
        <Nav.Link href="/orders" className="text-white">Order</Nav.Link>
      </Container> */}
            </Navbar>
        </div>
    );
}
