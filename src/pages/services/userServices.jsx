import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import '../layout/css/FormContainer.css';

function Login() {
    const [form, setForm] = useState({ username: '', password: '', rememberMe: false });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleLogin = async () => {
        const newErrors = {};

        // Zorunlu alan kontrolü
        if (!form.username) newErrors.username = 'Username is required';
        if (!form.password) newErrors.password = 'Password is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/login', {
                    username: form.username,
                    password: form.password
                });

                setModalMessage(response.data); // Backend'den gelen mesaj
                setShowModal(true);
            } catch (error) {
                setModalMessage(error.response?.data || 'An error occurred');
                setShowModal(true);
            }
        }
    };

    const handleCheckboxChange = () => {
        setForm({ ...form, rememberMe: !form.rememberMe });
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="body-background">
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form>
                    {/* Username Input */}
                    <div className="mb-3 text-start">
                        <label>Username</label>
                        <input
                            type="text"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>

                    {/* Password Input */}
                    <div className="mb-3 text-start">
                        <label>Password</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="form-check text-start mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={form.rememberMe}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember Me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button variant="primary" className="form-button" onClick={handleLogin}>
                        Log In
                    </Button>
                </form>

                {/* Footer */}
                <div className="form-footer">
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login;
