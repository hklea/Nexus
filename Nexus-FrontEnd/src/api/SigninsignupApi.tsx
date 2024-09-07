import AxiosInstance from "../config/axios";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const result = await AxiosInstance.post("/register", {
      email,
      password,
      username,
    });

    if (result.status === 201) {
      return 1;
    } else {
      console.error("Registration failed with status code: " + result.status);
    }
  } catch (err: any) {
    if (err.response) {
      if (err.response.data.message == "User already exists!!!") {
        return 2;
      }
    } else if (err.request) {
      console.error("No response received from server.");
    } else {
      console.error("Error message:", err.message);
    }
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await AxiosInstance.post(
      "/login",
      { email, password },
      { withCredentials: true }
    );

    if (response.status == 200) {
      return 1;
    } else {
      return 0;
    }
  } catch (error: any) {
    if (error.response.status == 401) {
      return 0;
    } else {
      console.log("An error accured");
    }
  }
};

export async function status() {
  try {
    const response = await AxiosInstance.get("/status", {
      withCredentials: true,
    });
    const data = response.data;

    return data;
  } catch (error) {
    console.error("An error occurred during authentication:", error);
  }
}

export const handleLogout = async () => {
  try {
    // Send a POST request to the server to log the user out
    const data = await AxiosInstance.post(
      "/logout",
      {},
      { withCredentials: true }
    );
    console.log("data: ", data);
    localStorage.clear();
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};
