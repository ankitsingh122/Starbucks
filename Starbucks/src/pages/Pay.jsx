import React from 'react'
import Navbar from '../component/Navbar';
import { useSelector } from 'react-redux';


function Pay() {
   const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems.reduce(
      (total, item) =>
        total + parseInt(item.price.replace("₹", "")) * item.quantity,
      0
    );

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <>
      <div className="w-screen h-full bg-stone-200 py-10 ">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center py-20 josefin-sans-uniqueProfile">
          <div className="row">
            <div className="col-75">
              <div className="container">
                <form>
                  <div className="row">
                    <div className="col-50">
                      <h3 className="mt-4 text-lg font-semibold">
                        Billing Address
                      </h3>
                      <label className="mt-9">
                        <i className="fa fa-user"></i> Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Name"
                      />
                      <label>
                        <i className="fa fa-envelope"></i> E-mail
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                      />
                      <label>
                        <i className="fa fa-address-card-o"></i> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                      />
                      <label>
                        <i className="fa fa-institution"></i> City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                          />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-50">
                      <h3 className="mt-4  text-lg font-semibold">
                        Payment :-  ₹ {totalPrice}
                      </h3>
                      <label className="mt-9">Accepted Cards</label>
                      <div className="icon-container space-x-5 ">
                        <i
                          className="fa fa-cc-visa"
                          style={{ color: "navy" }}
                        ></i>
                        <i
                          className="fa fa-cc-amex"
                          style={{ color: "blue" }}
                        ></i>
                        <i
                          className="fa fa-cc-mastercard"
                          style={{ color: "red" }}
                        ></i>
                        <i
                          className="fa fa-cc-discover"
                          style={{ color: "orange" }}
                        ></i>
                      </div>
                      <label htmlFor="cname">Name on Card</label>
                      <input
                        type="text"
                        id="cname"
                        name="cardname"
                        placeholder="Card Name"
                      />
                      <label>Credit card number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                      />
                      <label>Exp Month</label>
                      <input
                        type="text"
                        id="expmonth"
                        name="expmonth"
                        placeholder="September"
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="expyear">Exp Year</label>
                          <input
                            type="text"
                            id="expyear"
                            name="expyear"
                            placeholder="2018"
                          />
                        </div>
                        <div className="col-50">
                          <label>CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="352"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" defaultChecked name="sameadr" />{" "}
                    Shipping address same as billing
                  </label>
                  <input
                    type="submit"
                    value="Continue to checkout"
                    className="btn"
                    onClick={handleSubmit}
                  
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay
