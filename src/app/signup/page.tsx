"use client";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const signupData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    try {
      // Make a POST request to the signup API endpoint with the entered user data
      const response = await fetch("../../pages/api/signup.ts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        // Redirect to the login page upon successful signup
        window.location.href = "/login";
      } else {
        // Display error message if signup fails
        setError("Failed to sign up");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Failed to sign up");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm w-full p-6 bg-white rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.username && <p className="text-red-500">Name is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full border border-gray-300 rounded py-2 px-3"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign Up
        </button>
        <p className="mt-2 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
