import axios from "axios";

const baseURL = "https://neuraflow-hack2hire.onrender.com";

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

export const getUser = async (setLoading) => {
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

export const updateUserDetails = async (data, setUpdateLoading) => {
  try {
    setUpdateLoading(true);
    const result = await axios.post(`${baseURL}/update_user_details`, data, {
      withCredentials: true,
    });
    return { data: result?.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setUpdateLoading(false);
  }
};

export const updateProfilePhoto = async (file, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.post(`${baseURL}/update_profile_photo`, file, {
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

export const getProjects = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(
      `${baseURL}/get_all_client_projects_controller`,
      {
        withCredentials: true,
      }
    );
    return { data: result?.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const createProject = async (data, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.post(`${baseURL}/create_client_project`, data, {
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

export const getRecommendedProjects = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_user_recommendations`, {
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
