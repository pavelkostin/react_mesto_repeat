import { Input } from "./Input";
import { PopupWithForm } from "./PopupWithForm";

export function PopupEditProfile({isOpen, onClose}) {
    return (

        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            popupName='edit-profile'
            popupHeaderText='Редактировать профиль'
            popupSubmitText='Сохранить'
        >
            <Input
                inputName='input_name'
                placeholder="Жак-Ив Кусто"
                name='name'
                id='name'
            />
            <Input 
                inputName='input_job'
                placeholder="Исследователь океана"
                name='job'
                id='job'
            />
        </PopupWithForm>    
        
    )
}