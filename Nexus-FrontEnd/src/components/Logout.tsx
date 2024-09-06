import axiosInstance from '../config/axios'; // Assuming you have Axios instance configured

function Logout() {

  const handleLogout = async () => {
    try {
      // Send a POST request to the server to log the user out
     const data =  await axiosInstance.post('/logout', {}, { withCredentials: true });
      console.log("data: ", data)
      localStorage.clear();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
