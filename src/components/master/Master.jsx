import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import { useRef, useState } from "react";
import Modal from "../modal/Modal";
import { CartContext } from "../store/cart-context";
import Search from "../search/Search";

export default function Master() {
  const modalRef = useRef();
  const [cart, setCart] = useState({
    cartItems: [],
  });

  const [searchValue, setSearchValue] = useState("");

  const handleViewCart = () => {
    modalRef.current.open();
  };

  const addToCart = (newItem) => {
    setCart((prev) => {
      let newCart;
      if (!prev.cartItems.length > 0) {
        newCart = { ...prev, ...prev.cartItems.push(newItem) };
      } else {
        newCart = { ...prev };
        let existingItemIndex = newCart.cartItems.findIndex(
          (item) => item.id === newItem.id
        );
        if (newCart.cartItems[existingItemIndex]) {
          newCart.cartItems[existingItemIndex] = {
            ...newCart.cartItems[existingItemIndex],
            amount: newCart.cartItems[existingItemIndex].amount + 1,
          };
        } else {
          newCart = { ...prev, ...prev.cartItems.push(newItem) };
        }
      }
      return newCart;
    });
  };

  const removeFromCart = (existingItem) => {
    let newCart;
    console.log(existingItem.amount);
    if (existingItem.amount === 1) {
      setCart((prev) => {
        newCart = { ...prev };
        newCart = {
          ...newCart,
          cartItems: newCart.cartItems.filter(
            (item) => item.id !== existingItem.id
          ),
        };
        return newCart;
      });
    } else {
      setCart((prev) => {
        newCart = { ...prev };
        let existingItemIndex = newCart.cartItems.findIndex(
          (item) => item.id === existingItem.id
        );
        newCart.cartItems[existingItemIndex] = {
          ...newCart.cartItems[existingItemIndex],
          amount: newCart.cartItems[existingItemIndex].amount - 1,
        };
        return newCart;
      });
    }
  };

  const getSearchValue = (searchName) => {
    setSearchValue(searchName);
  };

  const contextVal = {
    items: cart.cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <div>
      <CartContext.Provider value={contextVal}>
        <Modal ref={modalRef} >
          <Cart cart={cart}/>
        </Modal>

        <Navbar getCart={handleViewCart} />
        <Search getSearchValue={getSearchValue} />
        <Products searchValue={searchValue} />
      </CartContext.Provider>
    </div>
  );
}
