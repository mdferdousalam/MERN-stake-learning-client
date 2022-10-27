import React, { useContext, useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState(user.displayName)
    const photoURLRef = useRef(user.photoURL)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, photoURLRef);

    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly type="email" defaultValue={user?.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="text" defaultValue={name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} type="text" defaultValue={user?.photoURL} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default Profile;