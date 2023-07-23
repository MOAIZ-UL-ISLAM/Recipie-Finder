import axios from "axios";

export const getresults = async (querysearch) => {
  try {
    let response = await axios.get(
      `https://forkify-api.herokuapp.com/api/search?q=${querysearch}`
    );
    return response.data;
  } catch (error) {
    console.log("Error while loading data", error.message);
    return error.response;
  }
};

export const getresult = async (querysearch) => {
  try {
    let response = await axios.get(
      `https://forkify-api.herokuapp.com/api/get?rId=${querysearch}`
    );
    return response.data;
  } catch (error) {
    console.log("Error while loading data", error.message);
    return error.response;
  }
};
