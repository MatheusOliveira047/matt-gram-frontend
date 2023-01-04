export const api = "https://app-matt-gram.onrender.com/api"
export const upload = "https://app-matt-gram.onrender.com/uploads"


export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method: method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};