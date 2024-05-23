import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { removeAllItems } from "../Store/Slice/Cart";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Pay() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardname: "",
    cardnumber: "",
    expmonth: "",
    expyear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const {
      firstname,
      email,
      address,
      city,
      state,
      zip,
      cardname,
      cardnumber,
      expmonth,
      expyear,
      cvv,
    } = formData;

    

    if  (
      !firstname ||
      !email ||
      !address ||
      !city ||
      !state ||
      !zip ||
      !cardname ||
      !cardnumber ||
      !expmonth ||
      !expyear ||
      !cvv
    ) {
      toast.error("Fill all the inputs");
      return;

      
    }
    

    dispatch(removeAllItems());
    toast.success("Checkout Successfully");

    setTimeout(() => {
      navigate("/");
    }, 5000);
    
  };

  const handleLogin = () => {

    toast.error("Please Login");

    return;
  };

  
  return (
    <>
      <div className="w-screen h-full bg-stone-200 py-10">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div className="flex justify-center py-20 josefin-sans-uniqueProfile">
          <div className="row">
            <div className="col-75">
              <div className="container">
                <form onSubmit={handleSubmit}>
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
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      <label>
                        <i className="fa fa-envelope"></i> E-mail
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label>
                        <i className="fa fa-address-card-o"></i> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      <label>
                        <i className="fa fa-institution"></i> City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleChange}
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="NY"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="10001"
                            value={formData.zip}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-50">
                      <h3 className="mt-4 text-lg font-semibold">
                        Payment :- ₹ {totalPrice}
                      </h3>
                      <label className="mt-9">Accepted Cards</label>
                      <div className="icon-container space-x-5">
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
                        value={formData.cardname}
                        onChange={handleChange}
                      />
                      <label>Credit card number</label>
                      <input
                        type="text"
                        id="ccnum"
                        name="cardnumber"
                        placeholder="1111-2222-3333-4444"
                        value={formData.cardnumber}
                        onChange={handleChange}
                      />
                      <label>Exp Month</label>
                      <input
                        type="text"
                        id="expmonth"
                        name="expmonth"
                        placeholder="September"
                        value={formData.expmonth}
                        onChange={handleChange}
                      />

                      <div className="row">
                        <div className="col-50">
                          <label htmlFor="expyear">Exp Year</label>
                          <input
                            type="text"
                            id="expyear"
                            name="expyear"
                            placeholder="2018"
                            value={formData.expyear}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-50">
                          <label>CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="352"
                            value={formData.cvv}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" defaultChecked name="sameadr" />{" "}
                    Shipping address same as billing
                  </label>
                  {isLoggedIn ? (
                    <button className="btn ">Continue to Checkout</button>
                  ) : (
                    <button onClick={handleLogin} className="btn ">
                      Continue to Checkout
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
}

export default Pay;
