import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer_section">
            <div className="container">
                <p>
                    &copy; <span>{year}</span> All Rights Reserved By
                    <a href="https://html.design/"> Free Html Templates</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer; 