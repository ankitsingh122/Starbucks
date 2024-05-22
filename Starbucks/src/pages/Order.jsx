import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../component/Navbar";
import { removeItemFromCart } from "../component/Store/Slice/Cart";
import CircumIcon from "@klarr-agency/circum-icons-react";
import Footer from '../component/Footer'


function Order() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const handleRemoveItem = (itemName) => {
    dispatch(removeItemFromCart(itemName));
  };

  return (
    <>
      <div className="w-screen h-full bg-stone-200 py-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center py-20">
          <h1 className="text-4xl">Your Orders</h1>
           </div>
           
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {cartItems.length === 0 ? (
              <div>
                <CircumIcon name="shopping_cart" size="600px"/>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h5 className="text-lg font-semibold">{item.name}</h5>
                    <p className="text-gray-600">
                      {item.price} x {item.quantity}
                    </p>
                  </div>
                  <button onClick={() => handleRemoveItem(item.name)}>
                    <CircumIcon name="circle_minus" />
                  </button>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div className="text-right mt-4">
                <h2 className="text-2xl font-semibold">Total: ₹{totalPrice}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Order;
