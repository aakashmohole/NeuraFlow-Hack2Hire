import axios from "axios";
const baseURL = "https://neuraflow-hack2hire.onrender.com";

export const getEvents = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_all_registration_details`, {
      withCredentials: true,
    });
    return { data: result?.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};
