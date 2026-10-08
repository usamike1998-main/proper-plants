export default function ShopCart({ cart, onAddInCart, onSubstractInCart }) {
  const shopCart = cart.map((cartItem) => {
    <li key={cartItem.id}>
      <span onClick={onSubstractInCart}>-</span>
      <span> {cartItem.quantity}</span>
      <span onClick={onAddInCart}>+</span>
    </li>;
  });

  render();
}
