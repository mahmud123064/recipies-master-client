import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");


    const { registerUser } = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);


        // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        //     setError("password not valid need 8 char ");
        //     return;
        //   }

        if (!/ (?=.*[A-Z])  /.test(password)) {
            setError("should contain at least one upper case");
            return;
        }
        if(!/([a-zA-Z0-9]{8,})/.test.apply(password)){
            setError("should contain at least 8 from the mentioned characters");
            return;
        }

        if (name, email, photo, password) {
            registerUser()

                .then((result) => {
                    console.log(result.user);
                    setError(" ")
                })
                .catch((err) => {
                    setError(err.message);
                });
        }
    }

    return (
        <Container className='mx-auto w-25 mt-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Your Photo Url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accepts' label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    <p>Already have an account <Link to='/login'>Please login</Link></p>
                </Form.Text>


                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">
                    <p >{error}</p>
                </Form.Text>
            </Form>

            {/* <p className='danger'>{error.message}</p> */}
        </Container>
    );
};

export default Register;