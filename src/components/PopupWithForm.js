

export function PopupWithForm({ isOpen, onClose, popupName, popupHeaderText, popupSubmitText, children }) {
    return (
        <section className={`popup popup_${popupName} ${isOpen ? 'popup_visible' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" onClick={onClose}></button>
                <form className={`popup__form popup__form_${popupName}`} name="editProfileForm">
                    <h2 className="popup__header">{popupHeaderText}</h2>
                    <section className="popup__section">
                        {children}
                    </section>
                    <button className={`popup__submit popup__submit_${popupName}`} type="submit">
                        {popupSubmitText}
                    </button>
                </form>
            </div>
        </section>
    )
}