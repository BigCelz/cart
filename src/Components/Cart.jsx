import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalUniqueItems,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
  return (
    <div className="cart">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 cart-page">
            <h5 className="total-items">
              Cart: {totalUniqueItems} Total Items: ({totalItems})
            </h5>
            <div className="table-responsive">
            <table className="table table-light table-hover m-0 mt-5">
              <tbody>
                <tr>
                <th className="table-head">Item</th>
                <th className="table-head">Name</th>
                <th className="table-head">Price</th>
                <th className="table-head">Qty</th>
                <th className="table-head">Reduce</th>
                <th className="table-head">Add</th>
                <th className="table-head">Remove</th>
                </tr>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      
                      <td>
                        <img src={item.img} alt="" className="cart-img" />
                      </td>
                      <td className="name">{item.name}</td>
                      <td className="name">${item.price}</td>
                      <td className="name">{item.quantity}</td>

                      <td>
                             {/* for - button */}
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-primary ms-3 text-white minus-btn"
                        >
                          -
                        </button>
                      </td>
                     

                      <td>
                            {/* for + button */}
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-primary ms-3 text-white plus-btn"
                        >
                          +
                        </button>
                      </td>


                      <td>
                        {/* for remove */}
                        <button
                          onClick={() =>
                            removeItem(item.id)
                          }
                          className="btn btn-danger ms-3 text-white remove-btn"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>

          <div>
            <div className="col-auto ms-auto mt-4">
              <h2 className="total-price">Total Price : ${cartTotal}</h2>
              <button className="btn btn-danger m-2 btn-clear"
                onClick={() => emptyCart()}
              >
                Clear Cart
              </button>

              <button className="m-2 btn btn-primary btn-clear">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
