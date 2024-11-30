import axios from "axios";

const baseURL = "https://neuraflow-hack2hire.onrender.com";

export const getProjectById = async (setLoading, project_id) => {
  try {
    setLoading(true);
    const result = await axios.get(
      `${baseURL}/get_client_project_by_id/${project_id}`,
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

export const getClientProject = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_client_projects`, {
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

export const getAllServices = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_all_services`, {
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

export const getService = async (setLoading, service_id) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_service/${service_id}`, {
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

export const applyToProject = async (setLoading, data, project_id) => {
  try {
    setLoading(true);
    const result = await axios.post(
      `${baseURL}/apply_for_work/${project_id}`,
      data,
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
