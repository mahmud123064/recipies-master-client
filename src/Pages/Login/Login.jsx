import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successfull, setSuccessfull] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (email, password) {
            loginUser(email, password)
                .then(result => {
                    console.log(result);
                    setSuccessfull("Successfully Logged In")
                })
                .catch(error => {
                    setError(error)
                })
        }
    }
    return (

        <Container className='mx-auto w-25 mt-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    <p>Don't have an account <Link to='/register'>Please register</Link></p>
                </Form.Text>


                <Form.Text className="text-success">
                    {successfull}
                </Form.Text>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>

    );
};

export default Login;