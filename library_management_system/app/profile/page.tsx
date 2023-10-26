"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { cache, use } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = cache(() =>
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
);

export default function Profile() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  let users = use<User[]>(getUsers());

  return (
    <div className="bg-gradient-to-r from-[#9bf7f4] to-[#707df7] min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="border-2 border-gray-300 text-center rounded p-4"
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                className="h-48 w-48 mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">{user.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
