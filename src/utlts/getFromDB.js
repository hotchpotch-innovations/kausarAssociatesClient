import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getAllDataFromDB = async (url) => {
  let response = await fetch(
    url,
    { cache: "no-store" },
    { next: { revalidate: 1000 } }
  );
  response = response.json();
  return response;
};

export const getData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
