import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { FaHeartBroken } from "react-icons/fa";
import "./basket.css"

function Basket() {
  const { basket, setBasket } = useContext(BasketContext);

  const handleDeleteBasket = (id) => {
    const filtered = basket.filter(x => x._id !== id);
    setBasket(filtered);
  };

  const handleDecrease = (item) => {
    if (item.count === 1) {
      const filtered = basket.filter(x => x._id !== item._id);
      setBasket(filtered);
    } else {
      const updated = basket.map(x =>
        x._id === item._id ? { ...x, count: x.count - 1 } : x
      );
      setBasket(updated);
    }
  };

  const handleIncrease = (item) => {
    const updated = basket.map(x =>
      x._id === item._id ? { ...x, count: x.count + 1 } : x
    );
    setBasket(updated);
  };

  const calcTotalPrice = () => {
    return basket.reduce((sum, item) => sum + item.count * item.price, 0);
  };
  const totalPrice = basket.reduce((sum, item) => {
  const price = Number(item.price) || 0;
  const count = Number(item.count) || 0;
  return sum + price * count;
}, 0);

  return (
    <div className="basket-carts">
      {
        basket.length > 0 ? (
          basket.map((a) => (
            <div className="basket-cart" key={a._id}>
              <img src={a.image} alt={a.title} />
              <h3>{a.title}</h3>
              <p>{a.price} AZN</p>
              <div className="buttons">
                <button className='btn btn-warning' onClick={() => handleDecrease(a)}>-</button>
                <span>{a.count}</span>
                <button className='btn btn-warning' onClick={() => handleIncrease(a)}>+</button>
              </div>
              <button className='btn btn-danger' onClick={() => handleDeleteBasket(a._id)}>
                <FaHeartBroken />
              </button>
            </div>
          ))
        ) : (
          <h1>Корзина пуста</h1>
        )
      }
      <h4>Итого: {totalPrice.toFixed(2)}$</h4>

    </div>
  );
}

export default Basket;
