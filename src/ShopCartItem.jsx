export default function ShopCartItem({
  cartItem,
  onAddInCart,
  onSubstractInCart,
}) {
  return (
    <div>
      <li className="cart__item">
        <div>
          {cartItem.image} {cartItem.name}
        </div>
      </li>
      <li className="cart__item-quantity">
        <span onClick={() => onSubstractInCart(cartItem)}>-</span>
        <span> {cartItem.quantity}</span>
        <span onClick={() => onAddInCart(cartItem)}>+</span>
      </li>
    </div>
  );
}
