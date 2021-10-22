import { Input } from "./Input";
import { PopupWithForm } from "./PopupWithForm";

export function PopupAddCard({ isOpen, onClose }) {
    return (

        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            popupName='add-card'
            popupHeaderText='Новое место'
            popupSubmitText='Создать'
        >
            <Input
                inputName='input_place'
                placeholder="Название"
                name='place'
                id='place'
            />
            <Input
                inputName='input_link'
                placeholder="Ссылка на картинку"
                name='url'
                id='url'
            />
        </PopupWithForm>

    )
}