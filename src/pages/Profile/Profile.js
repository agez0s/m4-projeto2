import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardProfile from "../../components/CardProfile/CardProfile";
import Header from "../../components/Header/Header";

const Profile = () => {
  const location = useLocation();
  const profileData = location.state;
  const [assistidos, setAssistidos] = useState([]);

  useEffect(() => {
    axios
      .get("/user/seeList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAssistidos(response.data);
        });
  }, []);

  const getToken = localStorage.getItem("token");
  if (!getToken) {
    return;
  }
  const token = JSON.parse(getToken).token;
  return (
    <>
      <Header />
      <div className="max-w-full m-8 items-center border-2 p-8 rounded-xl shadow-xl">
        <div className="text-6xl">Seu perfil</div>
        <div className="max-w-full my-8 flex justify-between gap-8">
          <div className="w-1/2 border-2 p-2 text-lg">
            <img
              src={profileData.imageUrl}
              alt={profileData.name}
              className="w-48 float-left mr-8"
            />
            <div className="text-2xl text-center">Informações pessoais</div>
            <p className="mt-8">Nome: {profileData.name}</p>
            <p>E-mail: {profileData.email}</p>
            <p>Data de Nascimento: {profileData.birthdate}</p>
          </div>
          <div className="w-1/2">
            <div className="text-2xl">
              Você já assistiu {assistidos.length} filmes!
            </div>
            <div className="grid grid-cols-4 gap-8 mt-8">
              {assistidos.map((item) => (
                <CardProfile
                  titulo={item.title}
                  imagem={item.cover}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
