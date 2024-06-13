import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

// sign_up
export const register = async ({ id, password, nickname }) => {
  const response = await axios.post(`${AUTH_API_HOST}/register`, {
    id: id,
    password: password,
    nickname: nickname,
  });
  return response;
};
