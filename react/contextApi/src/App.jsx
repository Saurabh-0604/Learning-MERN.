import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen' >
      <UserContextProvider>
        {/* <h4 className='text-3xl text-center font-semibold'>React Context API Course</h4> */}
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
