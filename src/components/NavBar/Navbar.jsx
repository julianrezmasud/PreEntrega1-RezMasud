import { Cart } from "../Cart/Cart"

export const Navbar = () => {
    return (
        <nav>
            Shop
            <ul className="nav-list">
                <li>
                    🛒: <span className="cart-count">{0}</span>
                </li>
            </ul>
        </nav>
    )
}
