import React from 'react'
import Button from "../button/Button";
import home from "/src/assets/images/home.png";


const FirstPage = () => {
  return (
    <div>
        {/* <!-------------------------------------------Buttons/text----------------------------------> */}
      <div className="position-absolute h-100 z-1 d-flex justify-content-center align-items-center flex-column gap-1">
        <p className="fs-1 text-center">
          Bid, Win, Sell – Your Ultimate Online Auction Platform!
        </p>
        <p className="fs-3 text-center">
          Find Rare Deals. Sell with Ease. Win Big.
        </p>
        <p className="text-center w-50">
          Join thousands of buyers and sellers on the most dynamic online
          auction marketplace. Whether you're hunting for exclusive
          collectibles, the latest tech, or selling to a global audience, we've
          got you covered!
        </p>

        {/* <!---------------------------Buttons: Login, Signup---------------------> */}
        <div className="d-flex gap-5">
          <Button name="Login" />
          <Button name="SignUp" />
        </div>
      </div>

      {/* <!----------------------------------------Image-----------------------> */}
      <div className="m-0 p-0 d-flex align-content-center justify-content-center opacity-25 z-0">
        <img
          src={home}
          alt="auction image"
          className="w-75 position-absolute"
        />
      </div>
    </div>
  )
}

export default FirstPage