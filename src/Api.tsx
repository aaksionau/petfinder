import pf from "petfinder-client";

if (!process.env.API_KEY || !process.env.API_SECRET) {
  throw new Error("API key and secret are not defined");
}

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export { petfinder };
