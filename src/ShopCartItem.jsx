export default function ShopCartItem({
  cartItem,
  onAddInCart,
  onSubstractInCart,
}) {
  return (
    <li className="cart__item">
      <span onClick={() => onSubstractInCart(cartItem)}>-</span>
      <span> {cartItem.quantity}</span>
      <span onClick={() => onAddInCart(cartItem)}>+</span>
    </li>
  );
}
