"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBell, FaPlus, FaUser } from "react-icons/fa";

const NavbarFirst = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Search submitted:", searchValue);
  };

  const handleCreatePostClick = () => {
    // Handle create post functionality
    console.log("Create post clicked");
  };

  const handleLoginClick = () => {
    // Handle login functionality
    console.log("Login clicked");
  };

  const handleNotificationClick = () => {
    // Handle notification functionality
    console.log("Notification clicked");
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-xl font-bold">My Blog</p>
        </Link>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchChange}
              className="px-2 py-1 border rounded-md"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-2 py-1 rounded-md"
            >
              Search
            </button>
          </form>
          <button
            onClick={handleCreatePostClick}
            className="bg-green-500 flex items-center text-white px-2 py-1 rounded-md"
          >
            <FaPlus /> Create Post
          </button>

          <Link
            href="/dashboard"
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            {" "}
            Admin dashboard
          </Link>
          <Link
            href="/login"
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            Login
          </Link>

          <button
            onClick={handleLoginClick}
            className="bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            <FaUser />
          </button>
          <button
            onClick={handleNotificationClick}
            className="bg-yellow-500 text-white px-2 py-1 rounded-md"
          >
            <FaBell />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarFirst;
