import { useEffect, useState } from "react"
import { newApi } from '../utils/Api';
import { Card } from "./Card";

export function Main({ onCardClick, onEditProfile, onAddCard, onEditAvatar }) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(newApi.getUSerInfoFromServer()
            .then((res) => {
                console.log(res);
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            }))
    }, [])

    useEffect(() => {
        fetch(newApi.getCardsFromServer()
            .then((res) => {
                setCards(res)
            }))
    }, [])

    return (
        <>
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src={userAvatar} alt="avatar" onClick={onEditAvatar} />
                    <div className="profile__table">
                        <div className="profile__name">{userName}</div>
                        <button className="profile__edit" type="button" onClick={onEditProfile}></button>
                        <div className="profile__job">{userDescription}</div>
                    </div>
                </div>
                <button className="profile__add" type="button" onClick={onAddCard}></button>
            </section>

            <section className="cards">
                <ul className="cards__list">
                    {
                        cards.map(item => {
                            return (
                                <Card
                                    key={item._id}
                                    item={item}
                                    onCardClick={onCardClick}
                                />
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}