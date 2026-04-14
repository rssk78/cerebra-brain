import React from 'react';
import './global.css'; // Assuming you have a global.css for custom styles

const Layout = ({ children }) => {
    return (
        <div>
            <head>
                <title>Cerebra Brain</title>
                <meta name="description" content="Cerebra Brain - Your resource for cognitive neuroscience." />
            </head>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; 2026 Cerebra Brain</p>
            </footer>
        </div>
    );
};

export default Layout;
