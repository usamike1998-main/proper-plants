import ShopCartItem from "./ShopCartItem";

export default function ShopCart({ cart, onAddInCart, onSubstractInCart }) {
  const shopCart = cart.map((cartItem) => {
    return (
      <ShopCartItem
        key={cartItem.id}
        cartItem={cartItem}
        onAddInCart={onAddInCart}
        onSubstractInCart={onSubstractInCart}
      ></ShopCartItem>
    );
  });

  return (
    <section className="shopCart">
      <h2>Cart</h2>
      <ul className="shopCart__list">{shopCart}</ul>
    </section>
  );
}
