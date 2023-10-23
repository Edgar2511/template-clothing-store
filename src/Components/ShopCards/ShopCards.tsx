import "./ShopCards.css";

export const ShopCards = () => {
  return (
    <div className="ShopCards">
      <div className="itemQuantity">
        <p>8 items</p>
      </div>
      <div className="cardsContainer">
        <div>
          <img src="https://www.w3schools.com/w3images/jeans1.jpg" alt="#" />
          <p className="title">Ripped Skinny Jeans</p>
          <p className="price">$24.99</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="#" />
          <p className="title">Mega Ripped Jeans</p>
          <p className="price">$19.99</p>
          <span>New</span>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="#" />
          <p className="title">Washed Skinny Jeans</p>
          <p className="price">$20.50</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans4.jpg" alt="#" />
          <p className="title">Vintage Skinny Jeans</p>
          <p className="price">$14.99</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans2.jpg" alt="#" />
          <p className="title">Mega Ripped Jeans</p>
          <p className="price">$19.99</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="#" />
          <p className="title">Washed Skinny Jeans</p>
          <p className="price">$20.50</p>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans4.jpg" alt="#" />
          <p className="title">Vintage Skinny Jeans</p>
          <p className="price">$14.99</p>
          <span>Sale</span>
        </div>
        <div>
          <img src="https://www.w3schools.com/w3images/jeans1.jpg" alt="#" />
          <p className="title">Ripped Skinny Jeans</p>
          <p className="price">$24.99</p>
        </div>
      </div>
    </div>
  );
};
