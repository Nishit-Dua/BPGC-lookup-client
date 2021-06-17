import axios from "axios";

const URI =
  "http://bitsstalkerserver-env.eba-epkdy8jm.ap-south-1.elasticbeanstalk.com";

export const searchData = async (searchQuery: string) => {
  try {
    const axiosResp = await axios.get(`${URI}/search/${searchQuery}`);
    return axiosResp.data;
  } catch (error) {
    console.log(`error in Fetching data source: API.ts`);
    console.log(error);
  }
};

export const personData = async (searchQuery: string) => {
  try {
    const { data } = await axios.get(`${URI}/data/${searchQuery}`);
    return data;
  } catch (error) {
    console.log(`error in Fetching data source: API.ts`);
    console.log(error);
  }
};
