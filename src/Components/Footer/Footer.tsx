import { useDispatch, useSelector } from "react-redux";
import "./Footer.css";
import { Data } from "../../store/dataReducer";
import {
  setName,
  setEmail,
  setMessage,
  setSubject,
  changeDataAction,
} from "../../store/actions";
import { selectData } from "../../store/selectors";

export const Footer = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectData);

  const handleChange = (type: keyof Data, value: string) => {
    dispatch(changeDataAction({ type, value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="Footer">
      <div className="contactContainer">
        <p className="contactTitle">Contact</p>
        <p className="fillFieldTitle">Questions? Go ahead.</p>
        <form className="fillField">
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={data.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={data.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <button onClick={handleSubmit}>Send</button>
        </form>
      </div>
      <div className="aboutContainer">
        <p className="aboutTitle">About</p>
        <p>
          <a href="#">About us</a>
        </p>
        <p>
          <a href="#">We're hiring</a>
        </p>
        <p>
          <a href="#">Support</a>
        </p>
        <p>
          <a href="#">Find store</a>
        </p>
        <p>
          <a href="#">Shipment</a>
        </p>
        <p>
          <a href="#">Payment</a>
        </p>
        <p>
          <a href="#">Gift card</a>
        </p>
        <p>
          <a href="#">Return</a>
        </p>
        <p>
          <a href="#">Help</a>
        </p>
      </div>
      <div className="storeContainer">
        <p className="storeTitle">Store</p>
        <p> Company Name</p>
        <p> 0044123123</p>
        <p> ex@mail.com</p>
        <p className="acception">We accept</p>
        <p>Amex</p>
        <p> Credit Card</p>
        <p className="socialSites">Social sites</p>
      </div>
    </div>
  );
};
