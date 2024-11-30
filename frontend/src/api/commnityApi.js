import axios from "axios";

const baseURL = "https://neuraflow-hack2hire.onrender.com";

export const createCommunity = async (data, setLoading) => {
  try {
    setLoading(true);
    const result = await axios.post(`${baseURL}/channel_registration`, data, {
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

export const getChannels = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_channel_details`, {
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

export const getChannelById = async (setLoading, channel_id) => {
  try {
    setLoading(true);
    const result = await axios.get(
      `${baseURL}/get_channel_details_by_id/${channel_id}`,
      {
        withCredentials: true,
      }
    );
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const getAllChannels = async (setLoading) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_channels`, {
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

export const getAllMembers = async (setLoading, channel_id) => {
  try {
    setLoading(true);
    const result = await axios.get(`${baseURL}/get_all_members/${channel_id}`, {
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
export const getAllPosts = async (setLoading, channel_id) => {
  try {
    setLoading(true);
    const result = await axios.post(
      `${baseURL}/fetch_post_details_by_channel/${channel_id}`,
      {},
      {
        withCredentials: true,
      }
    );
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};

export const createPost = async (setLoading, data, channel_id) => {
  try {
    setLoading(true);
    const result = await axios.post(
      `${baseURL}/post_in_channel/${channel_id}`,
      data,
      {
        withCredentials: true,
      }
    );
    return { data: result.data, error: null };
  } catch (error) {
    const errMsg = error?.response.data.error || "An error occured";
    return { data: null, error: errMsg };
  } finally {
    setLoading(false);
  }
};
