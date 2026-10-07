export default function ShopCart({ cart, onAddToCart, onSubstractFromCart }) {
  const shopCart = cart.map((cartItem) => {
    <li key={cartItem.id}>
      <span onClick={onSubstractInCart}>-</span>
      <span> {cartItem.quantity}</span>
      <span onClick={onAddInCart}>+</span>
    </li>;
  });
}
