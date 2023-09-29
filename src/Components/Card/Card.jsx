import React, { useState } from "react";
import styles from './Card.module.css';

const Card = ({ name, amount, image, addCard, removeCard, shadowTheme }) => {
    const [buttonText, setButtonText] = useState('Add to Card')
    const [faHeart, setFaHeart] = useState("fa-solid fa-heart")
    const handleCard = () => {
        if (buttonText === 'Add to Card') {
            setButtonText('Remove from Card');
            addCard(name)
            setFaHeart(" ")
            
        } else {
            setButtonText('Add to Card');
            removeCard(name)
            setFaHeart("fa-solid fa-heart");
        }
    }
    


    return (
        <div>
            <div >
                <main style={{
                    border: 'none',
                    boxShadow: shadowTheme,
                    height: '340px',
                    width: '230px',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '30px',
                    textAlign: 'center',
                    backgroundColor: '#F7F9F9'
                }}>
                    <img className={styles.img} src={image} alt="" />
                    <h5 style={{
                        marginTop: "20px",
                    }}>{name}</h5>
                    <p>{amount}</p>
                    <button style={{
                        padding: '3px 10px',
                        borderRadius: "5px",
                        background: "#17202A",
                        fontSize: '13px',
                        border: 'none',
                        color: '#F0F3F4',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                        onClick={handleCard}
                    >{buttonText} <i className={faHeart} style={{ color: '#f41a1a' }}></i></button>
                </main>
            </div>
        </div>
    )
}

export default Card;