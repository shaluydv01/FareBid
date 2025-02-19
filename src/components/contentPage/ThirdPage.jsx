import React from "react";
import Button from "../button/Button";

const ThirdPage = () => {
  return (
    <>
    <div className="text-center p-5">
      <h3 className="text-danger">Join the Auction Revolution!</h3>
      <p>Sign up today and start bidding or selling!</p>
      <Button name="SignUp" />
    </div>

    {/* <!---------------------------------Footer-----------------------------> */}
    <footer className="p-5">
        <p>Copyright</p>
    </footer>
    </>
  );
};

export default ThirdPage;
