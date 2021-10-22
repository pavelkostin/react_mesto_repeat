
export function PopupConfirm() {
    return (
        <section className="popup popup_confirm">
            <div className="popup__container">
                <button className="popup__close popup__close_gallery"></button>
                <h2 className="popup__header">Вы уверены?</h2>
                <form className="popup__form popup__form_delete">
                    <button className="popup__submit popup__submit-delete" type="submit">
                        Да
                    </button>
                </form>
            </div>
        </section>
    )
}