import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImCheckmark, ImCross } from "react-icons/im";

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
        if (response.data.find(filme => filme.id === props.movie)) {
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
            
        } else { 
            setAssistiu(true)
            
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
        <div className="text-4xl self-center flex items-center flex-col cursor-pointer" onClick={() => toggleWatch(props.movie)}>
          <ImCheckmark />
          <p className="my-1 text-center text-xs text-green-700">Assistiu</p>
        </div>
      ) : (
        <div className="text-4xl self-center flex items-center flex-col cursor-pointer" onClick={() => toggleWatch(props.movie)}>
          <ImCross />
          <p className="my-1 text-center text-xs text-red-700">Não assistiu</p>
        </div>
      )}
    </>
  );
};

export default Assistiu;
