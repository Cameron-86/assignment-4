import axios from "axios";

const JSON_SERVER_HOST = "https://congruous-pastoral-krypton.glitch.me";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터를 로드할 수 없어요");
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    alert("데이터를 로드할 수 없어요");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (error) {
    console.log(error);
    alert("데이터를 추가할 수 없어요");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense; // id는 바뀌지 않지만 나머지는 바뀐다
  try {
    const { data } = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (error) {
    console.log(error);
    alert("데이터를 수정할 수 없어요");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    alert("데이터를 삭제할 수 없어요");
  }
};
