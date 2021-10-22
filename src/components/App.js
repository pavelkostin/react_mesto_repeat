import React, { useState } from 'react';


import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { PopupAddCard } from "./PopupAddCard";
import { PopupAvatar } from "./PopupAvatar";
import { PopupConfirm } from "./PopupConfirm";
import { PopupEditProfile } from "./PopupEditProfile";
import { PopupGallery } from "./PopupGallery";


function App() {


  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false)
  const [isPopupAvatarOpen, setIsPopupAvatarOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddCardPopupOpen(false)
    setIsPopupAvatarOpen(false)
    setSelectedCard({})
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true)
  }

  function handleOpenAvatarPopup() {
    setIsPopupAvatarOpen(true)
  }


  return (

    <div className="page">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onEditAvatar={handleOpenAvatarPopup}
        onCardClick={handleCardClick}
        />
      <Footer />

      <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupAddCard isOpen={isAddCardPopupOpen} onClose={closeAllPopups} />
      <PopupAvatar isOpen={isPopupAvatarOpen} onClose={closeAllPopups} />
      <PopupGallery card={selectedCard} onClose={closeAllPopups} />
      <PopupConfirm />

    </div>

  )
}

export default App;
