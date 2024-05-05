import type { APIRoute } from "astro";
import MailerLite from "@mailerlite/mailerlite-nodejs";

// Dit is ervoor om ervoor te zorgen dat dit gedeelte SSR is inplaats van MPA
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const key = import.meta.env.API_TOKEN;
  console.log("De key is: " + key);
  const data = await request.json();
  console.log(data);

  const mailerlite = new MailerLite({
    api_key: key,
  });

  const params = {
    email: data.email,
    groups: ["118882712635311623"],
    status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
  };

  console.log(params);

  mailerlite.subscribers
    .createOrUpdate(params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     // "Accept": "application/json",
  //     Authentication: `Bearer ${key}`,
  //   },

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     // "Accept": "application/json",
  //     Authentication: `Bearer ${key}`,
  //   },
  // });

  // const output = await res.json();
  // console.log("output is: " + JSON.stringify(output));
  // return new Response(
  //   JSON.stringify({
  //     message: output.id ? "success" : "failure",
  //   })
  // );
};
