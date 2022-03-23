import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {

    return (
        <div>
            0<FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

export default CartWidget