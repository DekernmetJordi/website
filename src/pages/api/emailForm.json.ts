import type { APIRoute } from "astro";
import MailerLite from "@mailerlite/mailerlite-nodejs";

// Dit is ervoor om ervoor te zorgen dat dit gedeelte SSR is inplaats van MPA
export const prerender = false;

const API_TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2ZmMWU5ZDY2OWI1ZmVmNzA4YzM3ZmYxZWQ5YTY0ZTUxMmM5YmMyOTU4ZDE1MjYxZTcyYTMyMzJhMGZiZDlhMTA2ZGNlYjc0ZDA5MDUzNDEiLCJpYXQiOjE3MTQzMjcwOTcuNjI2MjMyLCJuYmYiOjE3MTQzMjcwOTcuNjI2MjM0LCJleHAiOjQ4NzAwMDA2OTcuNjIyNzAxLCJzdWIiOiI5MjI5NjAiLCJzY29wZXMiOltdfQ.vTm07HVG9WHvh8BDwDzyF8DR2ROjo8HintYIOfwF3BntIxLFmumCVcxx64qUfl6O0g5mFevy-iKCrzp6GodU6-RIlIvhX05TCReNhPzMkneOwhfL_AJFGtekZTCjd-wj83C8J3ztMMaTrx2xwKMmRi74YgESXuUzqSz1rEX4KaKz5_iR0FGqQRPMdHqtbXfZrC1mLa9GDgVLyuRw9bKNd1cTyl-Y6RtS5snlMNILJojpV24EKgeHxzRxTnZuimP_8gnLh5IYzZahVDhvi42ceLz9zstUSiVU31Sk-0qNlVnKYgnw4usxTgXGThyiXvTVeKW_UI2t39HgDpcwCqFB8chNf1thVhS-R5lALnqRu8EFLnETAGyyUGjdvBJFYSwgj-jlUOXRTXW7sLcOb4uFj0CjoOrT4c0VbLMUsNXYDl8Tw5CYnENI6c6zCNILQC8kGCkZbYiaaqOTA8Bz-UbT-1-jkzoO613X7vWpYgYR43_61gE2VjPuc5PsJvXZVtt8Vn_SttrY2hp4a40PKkLIioWV_Qj_6vtSVTTYpqPoZCNVmvgK3Tb0JHormQQY70wrqAHDIFXQI3VT74dFq-832cLgIRQUCG-DOpcgPz9ybDLix9zymLu63Eb3onp3s3dUdSC6-Q1xkJXmLTrIPCrEOxiur6tBH4MqcREb-GZVcBA"

export const POST: APIRoute = async ({ request }) => {
  // const key = import.meta.env.API_TOKEN;
  const key = API_TOKEN;
  // console.log("De key is: " + key);
  const data = await request.json();
  console.log(data);

  // const mailerlite = new MailerLite({
  //   api_key: key,
  // });

  // const params = {
  //   email: data.email,
  //   groups: ["118882712635311623"],
  //   status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
  // };

  // console.log(params);

  // mailerlite.subscribers
  //   .createOrUpdate(params)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     if (error.response) console.log(error.response.data);
  //   });

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //     // "Accept": "application/json",
  //     Authentication: `Bearer ${key}`,
  //   },

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  });

  console.log(res);

  const output = await res.json();
  console.log("output is: " + JSON.stringify(output));
  return new Response(
    JSON.stringify({
      message: output ? "success" : "failure",
    })
  );
};
