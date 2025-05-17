import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        <Link to="/" className="flex items-center">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp"
            alt="Logo do Hudson"
          />
          <p className="text-primary-400 text-1 ml-2 font-bold">
            udson Viagens
          </p>
        </Link>

        <Link
          to="/"
          className="hidden items-center rounded-full border border-gray-400 py-2 pr-3 pl-5 shadow-md lg:flex"
        >
          <p className="border-r border-r-gray-400 pr-4">Qualquer Lugar</p>
          <p className="border-r border-r-gray-400 px-4">Qualquer Hora</p>
          <p className="px-2">Hospedes</p>
          <div className="bg-primary-400 rounded-full p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>

        <div>
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-full border border-gray-400 py-2 pr-3 pl-3 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <p className="max-w-20 sm:max-w-32">Usuario</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
