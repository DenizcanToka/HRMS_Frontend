import React from 'react';
import { Button } from 'react-bootstrap';
import '../layout/css/Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-box">
                <h1 className="home-title">Welcome HRMS</h1>
                <p className="home-subtitle">
                    Simplify your HR management with our powerful tools!
                </p>
                <Button
                    variant="primary"
                    size="lg"
                    className="home-button"
                    href="/login"
                >
                    Log In
                </Button>
                <Button
                    variant="secondary"
                    size="lg"
                    className="home-button"
                    href="/register"
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
}

export default Home;
