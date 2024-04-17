export const updateIntoDB = async (url, data) => {
  let response = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  response = await response?.json();
  return response;
};
