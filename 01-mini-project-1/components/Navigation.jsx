"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navigation() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl p-4 mx-auto">
        <div className="flex justify-between items-center h-12">
          {/* logog */}
          <div className="flex shrink-0">
            <Link href={"/"} className="text-2xl font-bold text-gray-800">
              MyWebsite
            </Link>
          </div>
          {/* navigation links */}
          <div className="hidden md:block">
            <div className="flex ml-10 justify-between space-x-8">
              <Link href={"/"} className="text-2xl font-bold text-gray-800">
                Home
              </Link>{" "}
              <Link
                href={"/about"}
                className="text-2xl font-bold text-gray-800"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="text-2xl font-bold text-gray-800"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* for mobile navigation */}
          <div className="md:hidden  flex items-center">
            {!IsOpen ? (
              <button
                className="text-gray-800"
                onClick={() => setIsOpen(!IsOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="text-gray-800"
                onClick={() => setIsOpen(!IsOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
          {/* mobile nav */}
          <div
            className={`fixed top-21 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-350 ease-in-out z-40 md:hidden ${
              IsOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col pt-10 px-6 space-y-6">
              <Link
                href="/home"
                className="text-xl font-bold text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xl font-bold text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-xl font-bold text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
