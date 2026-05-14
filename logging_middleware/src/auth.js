import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

const authenticate = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      email: "ganeshragolu23@lpu.in",

      name: "Ragolu Ganesh",

      rollNo: "12314994",

      accessCode: "TRvZWq",

      clientID: "0bf89886-15ff-4c7f-82b5-adf27d838c7f",

      clientSecret: "VJrwTBYEGgtcRkSg",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

authenticate();
