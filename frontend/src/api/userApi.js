import axios from "axios";

const baseURL = "http://localhost:5000";

export const registerUser = async (data, setLoading) => {
  try {
    setLoading(true);

    const result = await axios.post(`${baseURL}/register`, data);

    return { data: result, error: null };
  } catch (error) {
    const errMsg = "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const loginUser = async (data, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.post(`${baseURL}/login`, data, {
      withCredentials: true,
    });
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const getUser = async (token, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_user_details`, {
      withCredentials: true,
    });
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const logoutUser = async () => {
  try {
    const result = await axios.post(
      `${baseURL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  }
};
