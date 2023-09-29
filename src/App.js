import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import CardData from './Components/CardData.json'


function App() {
  const [wishList, setWishList] = useState([]);
  // function to add card to the list
  const addCard = (item)=>{
    setWishList([...wishList, item])
  }
  //function to remove card from list
  const removeCard = (item)=>{
    setWishList(wishList.filter((cardItem) => cardItem !== item))
  }
const [theme, setTheme] = useState('#CACFD2')
const [shadowTheme, setShadowTheme] = useState('#2E86C1 0px 5px 15px')
const [textColor, setTextColor] = useState('#17202A')
const someTheme =()=>{
      if(theme === '#CACFD2'){
        setTheme('#101111')
        setShadowTheme('#2E86C1 0px 5px 15px')
        setTextColor('white')
      }
      else{
        setTheme('#CACFD2')
        setShadowTheme('#2E86C1 0px 5px 15px')
        setTextColor('#17202A')
      }
}

    
  return (
    <div className="App">
      <Header count={wishList.length}
      someTheme = {someTheme}
      theme = {theme}
      shadowTheme = {shadowTheme}
      textColor = {textColor}
      />
      <div className='container-fluid' style={{
        padding : '40px',
        width : '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : theme
      }}
      >
        {CardData.map(card => (
          <Card 
          shadowTheme = {shadowTheme}
          someTheme = {someTheme}
          theme = {theme}
          addCard = {addCard}
          removeCard = {removeCard}
          name = {card.name}
          amount = {card.amount}
          image = {card.image}
          key = {card.name}
          />
        ))}
        </div>
      
      <Footer />
    </div>
  );
}

export default App;