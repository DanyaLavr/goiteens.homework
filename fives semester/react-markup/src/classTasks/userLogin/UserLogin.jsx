import React from "react";
import { useState } from "react";
const UserLogin = () => {
  const [isLoginned, setIsLoginned] = useState(true);
  return (
    <p onClick={() => setIsLoginned((prev) => !prev)}>
      {isLoginned ? "Ви увійшли до системи" : "Будь ласка, увійдіть"}
    </p>
  );
};
export default UserLogin;
