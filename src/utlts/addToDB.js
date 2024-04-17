// import axios from "axios";

export const postDataToDB = async (url, data) => {
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const postData = async (url, data) => {
//   let loading;
//   try {
//     loading = true;
//     let response = await axios.post(url, data);
//     const result = await response.json();
//     loading = false;
//     return {
//       result,
//       loading,
//     };
//   } catch (error) {
//     console.log(error);
//     loading = false;
//   }
// };
