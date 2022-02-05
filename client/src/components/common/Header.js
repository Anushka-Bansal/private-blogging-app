import React from "react";
import {
    Navbar,
    Button,
    Container,
    Nav,
    Form,
    Dropdown,
    DropdownButton,
    FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { PersonCircle } from "react-bootstrap-icons";

export default function Header() {
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("_token") != undefined;

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/login");
    };
    return (
        <div>
            <Navbar bg="dark" fixed expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white text-bold">
                        <h4>
                            Neo<span className="text-danger">BLOG</span>
                        </h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarscroll" />
                    <Navbar.Collapse id="navbarscroll">
                        <Container
                            className="d-flex justify-content-center"
                            style={{ maxHeight: "100px", fontSize: "18px" }}
                        >
                            {/* Nav links */}
                            {/* <Button variant="outline-secondary"> */}
                            <Nav.Link href="/" className="text-white">
                                Home
                            </Nav.Link>
                            {/* </Button> */}
                            {isLogin ? (
                                <>
                                    {/* <Button variant="outline-warning"> */}
                                    <Nav.Link href="/" className="text-white">
                                        My Posts
                                    </Nav.Link>
                                    {/* </Button> */}
                                    {/* <Button variant="outline-success"> */}
                                    <Nav.Link
                                        href="/login"
                                        className="text-white"
                                    >
                                        Create Blogs
                                    </Nav.Link>
                                    {/* </Button> */}
                                </>
                            ) : (
                                " "
                            )}
                        </Container>
                        &nbsp;&nbsp;
                        {isLogin ? (
                            //    Dropdown after login(profile and logout)
                            <DropdownButton
                                title={
                                    <PersonCircle
                                        style={{ fontSize: "25px" }}
                                    />
                                }
                                id="dropdown-basic-button"
                                variant="light"
                                style={{ marginRight: "20px" }}
                            >
                                <Dropdown.Item href="/profile">
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => logout(e)}>
                                    Logout
                                </Dropdown.Item>
                            </DropdownButton>
                        ) : (
                            //  Dropdown before login(login and register)
                            <DropdownButton
                                title={
                                    <PersonCircle
                                        style={{ fontSize: "25px" }}
                                    />
                                }
                                id="dropdown-basic-button"
                                variant="light"
                                style={{ marginRight: "20px" }}
                            >
                                <Dropdown.Item href="/login">
                                    Login
                                </Dropdown.Item>
                                <Dropdown.Item href="/signup">
                                    Sign-Up
                                </Dropdown.Item>
                            </DropdownButton>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
