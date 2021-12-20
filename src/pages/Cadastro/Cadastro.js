import React from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cadastro = () => {
  const navigate = useNavigate();

  

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name = evento.target.name.value;
    const email = evento.target.email.value;
    const birthdate = evento.target.birthdate.value;
    const password = evento.target.password.value;
    const passwordConfirmation = evento.target.passwordConfirmation.value;
    const imageUrl = evento.target.imageUrl.value;

    if (name.length < 3) {
      toast.error(`Nome precisa ter no mínimo 3 caracteres`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
      return;
    }

    if (password !== passwordConfirmation) {
        toast.error(`As senhas não conferem!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        });
        return;
      }

    const newUser = {
      name,
      email,
      birthdate,
      password,
      passwordConfirmation,
      imageUrl,
    };
    axios
      .post("/user/create", newUser)
      .then((response) => {
        toast.success('Usuário criado! Você já pode fazer login', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
      })
      .catch((err) => {
        console.log(err.message);
      });

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto">
        <div className="text-4xl text-center w-screen my-8">
          Alguns dos filmes que estão lhe esperando!
        </div>

        
        <div className="flex p-4 text-xl border-2 m-auto rounded-xl shadow-xl w-1/2 justify-center">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Nome do Usuário
            </label>
            <input
              className="border rounded border-blue"
              id="name"
              type="text"
              placeholder="Nome"
              name="name"
              required
            />

            <label
              htmlFor="email"
              className="block text-gray-700 font-bold my-2 w-full"
            >
              E-mail
            </label>
            <input
              className="border rounded border-blue"
              id="email"
              type="email"
              placeholder="Email@email.com"
              name="email"
              required
            />

            <label
              htmlFor="birthdate"
              className="block text-gray-700 font-bold my-2 w-full"
            >
              Data de Nascimento
            </label>
            <input
              className="border rounded border-blue"
              id="birthdate"
              type="text"
              placeholder="01/01/1970"
              name="birthdate"
              required
            />

            <label
              htmlFor="imageUrl"
              className="block text-gray-700 font-bold my-2 w-full"
            >
              Imagem de perfil (URL)
            </label>
            <input
              className="border rounded border-blue"
              id="imageUrl"
              type="text"
              defaultValue="https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png"
              name="imageUrl"
              required
            />

            <label
              htmlFor="password"
              className="block text-gray-700 font-bold my-2 w-full"
            >
              Senha
            </label>
            <input
              className="border rounded border-blue"
              id="password"
              type="password"
              placeholder="Senha"
              name="password"
              required
            />

            <label
              htmlFor="passwordConfirmation"
              className="block text-gray-700 font-bold my-2 w-full"
            >
              Confirmação de senha
            </label>
            <input
              className="border rounded border-blue"
              id="passwordConfirmation"
              type="password"
              placeholder="Senha"
              name="passwordConfirmation"
              required
            />

            <button
              type="submit"
              id="botao"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mt-4 focus:shadow-outline w-full"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cadastro;
