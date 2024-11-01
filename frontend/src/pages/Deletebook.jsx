import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Deletebook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? <Spinner /> : ""}
      <div className="min-h-screen bg-[#FCF596] flex flex-col justify-center items-center">
        <h3 className="mt-6 text-center text-3xl font-extrabold ">
          Do you want to delete this book
        </h3>
        <button
          className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4545] hover:bg-[#ff3131] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9C73] transition-colors duration-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Deletebook;
