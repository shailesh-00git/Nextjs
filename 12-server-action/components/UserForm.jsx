import { CreateUser } from "@/actions";
import React from "react";

function UserForm() {
  //create user function
  // async function CreateUser(formdata) {
  //   "use server";
  //   const name = formdata.get("name");
  //   console.log(name);
  // }
  return (
    <form action={CreateUser}>
      <div className="max-w-100 mx-auto my-50 p-10 bg-gray-200">
        Name:{" "}
        <input type="text" name="name" className="border p-1 mb-3"></input>
        Password:{" "}
        <input
          type="password"
          passwordd="password"
          placeholder="password"
          className="border p-1"
        ></input>
        <button
          type="submit"
          className="mt-5 rounded-lg bg-green-800 text-white px-4 py-2 text-md"
        >
          create
        </button>
      </div>
    </form>
  );
}

export default UserForm;
