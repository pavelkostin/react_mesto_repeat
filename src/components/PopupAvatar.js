import { Input } from "./Input";
import { PopupWithForm } from "./PopupWithForm";


export function PopupAvatar({isOpen, onClose}) {
    return (

        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            popupName='avatar'
            popupHeaderText='Обновить аватар'
            popupSubmitText='Сохранить'
        >
            <Input
                inputName='input_place'
                placeholder="Ссылка на новый аватар"
                name='avatar'
                id='avatar'
            />

        </PopupWithForm>  


/*         <section className="popup popup_avatar">
            <div className="popup__container">
                <button className="popup__close popup__close_gallery"></button>
                <h2 className="popup__header">Обновить аватар</h2>
                <form className="popup__form popup__form_add-place popup__form_edit-avatar" name="editAvatar">
                    <section className="popup__section">
                        <input
                            className="popup__input popup__input_avatar popup__input_place"
                            placeholder="Ссылка на новый аватар"
                            required
                            type="url"
                            name="avatar"
                            id="avatar"
                        />
                        <span className="popup__input-error" id="avatar-error"></span>
                    </section>
                    <span className="popup__input-error"></span>
                    <button className="popup__submit popup__submit_add-card" id="popupSubmitAvatar" type="submit">
                        Сохранить
                    </button>
                </form>
            </div>
        </section> */
    )
}