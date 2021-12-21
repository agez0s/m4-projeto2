import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";
import { toast } from "react-toastify";

const Assistiu = (props) => {
  const [assistiu, setAssistiu] = useState(false);

  useEffect(() => {
    axios
      .get("/user/seeList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.find(filme => filme.id === props.movie.id)) {
            setAssistiu(true)
        }
      });
  }, [assistiu]);

  const toggleWatch = (id) => {
      axios.patch(`/user/addList/${id}`,"", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      }).then((response) => {
          if (assistiu) { 
              setAssistiu(false)
              toast.info(`${props.movie.title} retirado da sua lista!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                });
              
            
        } else { 
            setAssistiu(true)
            toast.success(`${props.movie.title} adicionado à sua lista! `, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              });
        }
            
      })
  }

  const getToken = localStorage.getItem("token");
  if (!getToken) {
    return;
  }
  const token = JSON.parse(getToken).token;

  return (
      <>
      {assistiu ? (
        <div className="text-4xl self-center flex items-center flex-col cursor-pointer" onClick={() => toggleWatch(props.movie.id)}>
          <ImCheckmark />
          <p className="my-1 text-center text-xs text-green-700">Assistiu</p>
        </div>
      ) : (
        <div className="text-4xl self-center flex items-center flex-col cursor-pointer" onClick={() => toggleWatch(props.movie.id)}>
          <ImCross />
          <p className="my-1 text-center text-xs text-red-700">Não assistiu</p>
        </div>
      )}
    </>
  );
};

export default Assistiu;
