
export function Card({ item, onCardClick }) {

    function handleClick() {
        onCardClick(item)
    }

    return (
        <li className="cards__item">
            <img className="cards__photo" src={item.link} alt={item.name} onClick={()=>{handleClick()}} />
            <p className="cards__place">{item.name}</p>
            <button className="cards__delete"></button>
            <button className="cards__like"></button>
            <p className="cards__quantity-likes">{item.likes.length}</p>
        </li>
    )
}