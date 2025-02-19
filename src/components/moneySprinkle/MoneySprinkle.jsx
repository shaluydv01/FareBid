import React, { useEffect, useState } from "react";
import "./moneySprinkle.css"

const MoneySprinkle = () => {
  const [money, setMoney] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      setMoney((prevMoney) => [
        ...prevMoney,
        {
          id,
          left:
            Math.random() < 0.5
              ? `${Math.random() * 20}%`
              : `${80 + Math.random() * 20}%`, // Sprinkle from left & right
          animationDuration: `${2 + Math.random() * 3}s`,
        },
      ]);

      // Remove money after animation ends
      setTimeout(() => {
        setMoney((prevMoney) => prevMoney.filter((m) => m.id !== id));
      }, 5000);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {money.map((m) => (
        <div
          key={m.id}
          className="money m-0 p-0"
          style={{
            left: m.left,
            animationDuration: m.animationDuration,
          }}
        ></div>
      ))}
    </>
  );
};

export default MoneySprinkle;
