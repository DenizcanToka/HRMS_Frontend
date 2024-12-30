import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../layout/css/FormContainer.css';

function Register() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        nationalId: '',
        phone: '',
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleRegister = () => {
        const newErrors = {};
        if (!form.firstName) newErrors.firstName = 'First Name is required';
        if (!form.lastName) newErrors.lastName = 'Last Name is required';
        if (!form.nationalId) newErrors.nationalId = 'National ID is required';
        if (!form.phone) newErrors.phone = 'Phone Number is required';
        if (!form.username) newErrors.username = 'Username is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!form.password) newErrors.password = 'Password is required';
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Register Request:', form);
            alert('Registration successful!');
        }
    };

    return (
        <div className="body-background">
            <div className="form-container">
                <h2 className="form-title">Register</h2>
                <form>
                    <div className="mb-3 text-start">
                        <label>First Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            value={form.firstName}
                            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="mb-3 text-start">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            value={form.lastName}
                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="mb-3 text-start">
                        <label>National ID (TC Kimlik No)</label>
                        <input
                            type="text"
                            className={`form-control ${errors.nationalId ? 'is-invalid' : ''}`}
                            value={form.nationalId}
                            onChange={(e) => setForm({ ...form, nationalId: e.target.value })}
                        />
                        {errors.nationalId && <div className="invalid-feedback">{errors.nationalId}</div>}
                    </div>
                    <div className="mb-3 text-start">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
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
                    <div className="mb-3 text-start">
                        <label>Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
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
                    <Button variant="primary" className="form-button" onClick={handleRegister}>
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register;
