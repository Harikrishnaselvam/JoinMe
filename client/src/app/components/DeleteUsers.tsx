"use client"

import React, { useState } from "react";
import { REMOVE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";


const FormForDeleteUsers = () => {
  const [id, setId] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [removeUser, { error }] = useMutation(REMOVE_USER_MUTATION);

  const deleteUser = () => {
    console.log(id)
    console.log(email)
    console.log(password)
    console.log(removeUser)

    removeUser({
      variables: {
        id:id,
        email: email,
        password: password,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
       <input className="py-5 px-12 rounded-sm outline-lime-400  border-black border"
        type="text"
        placeholder="Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
       <button onClick={deleteUser} className="mt-5 py-5 px-16 bg-green-500 rounded-md hover:bg-lime-500"> Remove User</button>
    </div>
  )
}

export default FormForDeleteUsers
