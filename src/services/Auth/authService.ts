import api from "../api";

export type LoginResponse = {
  token: string;
  usuario: {
    nome: string;
    email: string;
  };
};

export async function login(email: string, senha: string): Promise<string> {
  console.log(email);
  console.log(senha);

  const response = await api.post("/Usuario/login", { email, senha });
  const token = response.data as string;

  if (!token) throw new Error("Token não retornado pela API");
  return token;
}

export async function cadastrar(email: string, senha: string): Promise<any> {
  const response = await api.post("/usuarios", { email, senha });
  return response.data;
}
