import axiosInstance, { ApiResponse } from '../config/axios';
import { Contacts } from '../types/Contact';


export async function makeContact(contact: Contacts ) {
    try {
        console.log("Information taken", contact)
       console.log("Mkae the api here!!!")
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}