import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

const registerAndAuth = async () => {

  try {


    const registerResponse = await axios.post(
      `${BASE_URL}/register`,
      {
        email: "ganeshragolu23@lpu.in",
        name: "Ragolu Ganesh",
        mobileNo: "8500300732",
        githubUsername: "GaneshRagolu001",
        rollNo: "12314994",
        accessCode: "TRvZWq",
      }
    );

    console.log("REGISTER RESPONSE:");
    console.log(registerResponse.data);

    const { clientID, clientSecret } = registerResponse.data;

    const authResponse = await axios.post(
      `${BASE_URL}/auth`,
      {
        email: "ganeshragolu23@lpu.in",
        name: "Ragolu Ganesh",
        rollNo: "12314994",
        accessCode: "TRvZWq",
        clientID,
        clientSecret,
      }
    );

    console.log("\nAUTH RESPONSE:");
    console.log(authResponse.data);

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );
    
  }
};

registerAndAuth();