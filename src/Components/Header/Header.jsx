import React, { useState } from "react";
import styles from './Header.module.css';

const Header = ({ count, someTheme, theme, shadowTheme, textColor }) => {
    const [modeText, setModeText] = useState('Dark Mode')
    const [icon, setIcon] = useState('fas fa-solid fa-moon')
    const changeTheme = () => {
        if (icon === 'fas fa-solid fa-moon') {
            setIcon('fas fa-solid fa-sun')
            setModeText('Light Mode')
            someTheme()
        } else {
            setIcon('fas fa-solid fa-moon')
            setModeText('Dark Mode')
            someTheme()
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">Shop Here</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <p className="nav-link">Home</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link">About</p>
                            </li>
                            <li className="nav-item dropdown">
                                <p href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle='dropdown'>Shop</p>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">All products</li>
                                    <hr />
                                    <li className="dropdown-item">Popular items</li>
                                    <li className="dropdown-item">New Arrivals</li>
                                </ul>
                            </li>
                        </ul>
                        <div style={{
                            width: '150px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white'
                        }}
                            onClick={changeTheme}
                        >
                            <p style={{
                                marginTop: '13px',
                                cursor: 'pointer'
                            }}>{modeText}</p>
                            <button style={{
                                backgroundColor: 'transparent',
                                padding: '5px 10px',
                                border: 'none',
                                fontSize: '20px',
                            }}
                            // onClick={changeTheme}
                            >
                                <i className={icon} style={{
                                    color: 'white'
                                }}></i>
                            </button>
                        </div>
                        <div className={styles.cart}>
                            <i className="fa-solid fa-cart-shopping" style={{
                                color: '#b9c0ca',
                            }}></i>
                            <p style={{
                                padding: '10px',
                                marginTop: '13px',
                            }}>Cart</p>
                            <p style={{
                                marginTop: '13px',
                            }}>{count}</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{
                height: '28vh',
                backgroundColor: theme, 
                boxShadow: '#2E86C1 0px 3px 8px'
            }}>
                <div className={styles.title}
                    style={{
                        backgroundColor: '#2E86C1',
                        color: '#ECF0F1',
                        boxShadow: shadowTheme,
                        height: '25vh',
                        marginTop: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h1>Shop in style</h1>
                    <p>With this shop homepage template</p>
                </div>
            </div>
        </div>
    )
}

export default Header;