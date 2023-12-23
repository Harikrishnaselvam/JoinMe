"use client"

import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <input className="py-5  px-12 rounded-sm outline-lime-400 mb-3 border-black border"
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input className="py-5 px-12 rounded-sm outline-lime-400  mb-3 border-black border"
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input className="py-5 px-12 rounded-sm outline-lime-400  mb-3 border-black border"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input className="py-5 px-12 rounded-sm outline-lime-400  border-black border"
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser} className="mt-5 py-5 px-16 bg-green-500 rounded-md hover:bg-lime-500"> Create User</button>
    </div>
  );
}

export default Form;