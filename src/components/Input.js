
export function Input({ inputName, placeholder, name, id }) {
    return (
        <section className="popup__section">
            <input
                className={`popup__input popup__${inputName}`}
                placeholder={placeholder}
                name={name}
                id={id}
            />
        </section>
    )
}