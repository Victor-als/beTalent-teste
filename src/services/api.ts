import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getEmployees = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
};