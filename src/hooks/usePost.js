import axiosInstance from "../MockAPI/Main"
const usePost=async(url,data)=>{

    const response = await axiosInstance //🟥 different name to avoid wrong import
    .post(url,JSON.stringify(data))
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;

}

export default usePost;