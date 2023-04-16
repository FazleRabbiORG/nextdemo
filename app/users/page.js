import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Users",
  description: "Users list of the website",
};

export default async function Users() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <>
            <li key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </div>
  );
}
