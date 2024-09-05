import axiosInstance from "../config/axios";
import { Contacts } from "../types/Contact";

export async function makeContact(contact: Contacts) {
  const { fullName, email, phone, company, message } = contact;
  try {
    const result = await axiosInstance.post(
      "/contact",
      {
        fullName,
        email,
        phone,
        company,
        message,
      },
      {
        withCredentials: true,
      }
    );
    console.log(result.status);
    if (result.status == 200) {
      return 1;
    }
    return 0;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed to fetch data");
  }
}

export async function subscribe(id: string) {
  try {
    const result = await axiosInstance.put(`toggle-subscribe/${id}`);
    return result.data.subscribe;
  } catch (error) {
    console.log("error: ", error);
    throw new Error("Failed to fetch data");
  }
}
