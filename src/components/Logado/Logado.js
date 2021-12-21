import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logado = (props) => {
  const [loggedUser, setLoggedUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (!getToken) {
      return;
    }
    const token = JSON.parse(getToken).token;
    axios
      .get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoggedUser(response.data);
      });
  }, []);
  const Logout = () => {
    localStorage.removeItem("token");
    props.setLogado(false);
    toast.info(`Usuário deslogado`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      });
    navigate("/");
  };
  const openProfile = () => {
    navigate("/profile", { state: loggedUser });
  };
  return (
    <div className="flex items-center mr-8">
      <div className="mr-8 text-center">
        Olá {loggedUser.name}!{" "}
        <span className="cursor-pointer hover:text-red-400" onClick={Logout}>
          (Sair)
        </span>
        <br />
        <span
          onClick={openProfile}
          className="cursor-pointer hover:text-blue-400"
        >
          Visualizar perfil
        </span>
      </div>

      <div>
        <img src={loggedUser.imageUrl} className="h-10 rounded-full" alt={loggedUser.name} />
      </div>
    </div>
  );
};

export default Logado;
