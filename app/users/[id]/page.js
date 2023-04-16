import React from "react";

export async function generateMetadata({ params }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await data.json();

  console.log(user);

  return {
    title: user.name,
    description: user.email,
    openGraph: {
      title: ` ${user.name}`,
      description: `users details on ${user.name}`,
      url: "https://www.url.ie/",
      type: "website",
      images: "https://via.placeholder.com/600/24f355",
    },
  };
}

export default function User() {
  return <div>User</div>;
}
