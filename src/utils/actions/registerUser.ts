"use server";

import { UserData } from "@/app/register/page";

export const registerUser = async (data: UserData) => {
  // Implement user registration logic here
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};
