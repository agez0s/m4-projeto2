import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const login = {
      email: emailLogin,
      password: senha,
    };

    axios
      .post("/auth/login", login)
      .then((response) => {
        const token = response.data.token;
        const now = new Date();
        const itemFinal = {
          token: token,
          expira: now.getTime() + 1800000,
        };
        localStorage.setItem("token", JSON.stringify(itemFinal));
        props.setLogado(true)
        navigate("/")
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          toast.error(`Usuário "${login.email}" não encontrado!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
        }
        if (err.message === "Request failed with status code 401") {
          toast.error(`Senha incorreta!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
        }
      });

 
  };

  return (
    <div className="flex">
      <form className="mx-8" onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="E-mail"
          id="emailLogin"
          className="mx-4 w-48 text-black"
          onChange={(event) => setEmailLogin(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Senha"
          id="senha"
          className="w-48 text-black"
          onChange={(event) => setSenha(event.target.value)}
        />
        <input
          type="submit"
          value="Entrar"
          className="mx-4 border-white border-2 p-1 px-4 hover:border-blue-500 hover:cursor-pointer"
        />
        <input
          type="button"
          value="Novo usuário"
          className="ml-4 border-white border-2 p-1 px-4 hover:border-blue-500 hover:cursor-pointer"
          onClick={() => navigate("/cadastro")}
        />
      </form>
    </div>
  );
};

export default Login;
