import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="Subscribe">
      <p className="subscribeTitle">Subscribe</p>
      <p className="offerSection">To get special offers and VIP treatment:</p>
      <form action="">
        <input type="text" placeholder="Enter e-mail" />
      </form>
      <button className="button">Subscribe</button>
    </div>
  );
};
