/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";

import React, {useState} from "react";
import {post} from "../config";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = async () => {
        // const response = fetch("http://localhost:1337/api/users",{
        //   method:"POST",
        //   headers:{
        //     "Content-Type":"application/json"
        //   },
        //   body:JSON.stringify({
        //     name,
        //     email,
        //     password
        //   })
        // }).then(res=>res.json)
        // .then(data=>{
        //   console.log("USER CREATED---------------->>>",data)
        // })

        const credentials = {
            username,
            email,
            password,
        };

        const response = await post("/users", credentials); // /auth/local/register
        localStorage.setItem("jwt", response.data.jwt)
    };

    return (
        <>
            <Col lg="6" md="8">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5">
                        <div className="text-muted text-center mt-2 mb-4">
                            <small>Sign up with</small>
                        </div>
                        <div className="text-center">
                            <Button
                                className="btn-neutral btn-icon mr-4"
                                color="default"
                                href="http://localhost:1337/api/connect/github"
                            >
                <span className="btn-inner--icon">
                  <img
                      alt="..."
                      src={
                          require("../assets/img/icons/common/github.svg")
                              .default
                      }
                  />
                </span>
                                <span className="btn-inner--text">Github</span>
                            </Button>
                            <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                <span className="btn-inner--icon">
                  <img
                      alt="..."
                      src={
                          require("../assets/img/icons/common/google.svg")
                              .default
                      }
                  />
                </span>
                                <span className="btn-inner--text">Google</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                            <small>Or sign up with credentials</small>
                        </div>
                        <Form role="form">
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-hat-3"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Username"
                                        type="text"
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        autoComplete="new-email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        autoComplete="new-password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <div className="text-muted font-italic">
                                <small>
                                    password strength:{" "}
                                    <span className="text-success font-weight-700">strong</span>
                                </small>
                            </div>
                            {/*<Row className="my-4">*/}
                            {/*    <Col xs="12">*/}
                            {/*        <div className="custom-control custom-control-alternative custom-checkbox">*/}
                            {/*            <input*/}
                            {/*                className="custom-control-input"*/}
                            {/*                id="customCheckRegister"*/}
                            {/*                type="checkbox"*/}
                            {/*            />*/}
                            {/*            <label*/}
                            {/*                className="custom-control-label"*/}
                            {/*                htmlFor="customCheckRegister"*/}
                            {/*            >*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                            <div className="text-center">
                                <Button
                                    className="mt-4"
                                    color="primary"
                                    type="button"
                                    onClick={() => {
                                        formSubmitHandler();
                                    }}
                                >
                                    Create account
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Register;
