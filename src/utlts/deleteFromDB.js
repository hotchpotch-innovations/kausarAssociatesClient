export const deleteDataToDB = async (url) => {
  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  response = await response.json();
  return response;
};
