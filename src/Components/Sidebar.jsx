import React from "react";
import { Link, NavLink } from "react-router-dom";
import Userinfo from "./userinfo";

const Sidebar = () => {
  return (
    <div className="pt-20 pr-32 pl-20 pb-44">
      <Userinfo />

      <div className="flex flex-col gap-2 mt-28 text-white/50">
        <NavLink
          className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`}
          to="/"
        >
          Dashboard
        </NavLink>

        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/expense">Expense</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
        <NavLink  className={({ isActive }) => `${(isActive ? "text-white  " : "")} transition-all duration-300 font-bold`} to="/wallets">Wallets</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
