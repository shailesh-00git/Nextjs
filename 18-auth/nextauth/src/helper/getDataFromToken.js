import JWT from "jsonwebtoken";

export const getDatafromToken = (request) => {
  try {
    
    //get cookies
    const token = request.cookies.get("token").value || "";

    //decode token
    const decodedToken = JWT.verify(token, process.env.TOKEN_SECRET);

    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};
