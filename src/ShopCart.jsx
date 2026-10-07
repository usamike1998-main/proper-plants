export default function ShopCart({ cart, onAddToCart, onSubstractFromCart }) {
  const shopCart = cart.map((cartItem) => {
    <li key={cartItem.id}>
      <span onClick={onSubstractFromCart}>-</span>
      <span> {cartItem.quantity}</span>
      <span onClick={onAddToCart}>+</span>
    </li>;
  });
}
