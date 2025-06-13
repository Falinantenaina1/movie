const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async (path: string) => {
  const url = BASE_URL + path;
  const r = await fetch(url, options);
  if (!r.ok) {
    throw new Error("An error occured");
  }
  return await r.json();
};
