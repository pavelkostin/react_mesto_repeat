
export function PopupGallery({card, onClose}) {
    return (
        <section className={`popup popup_gallery ${card.link ? 'popup_visible' : ''}`}>
            <div className="popup__container popup__container_gallery">
                <button className="popup__close" onClick={onClose}></button>
                <img className="popup__image" src={card.link} alt={card.name} />
                <p className="popup__caption">{card.name}</p>
            </div>
        </section>
    )
}