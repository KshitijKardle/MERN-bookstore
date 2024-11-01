import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useParams } from "react-router-dom";

const Showbook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF596] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#FF4545] mb-8">Book Details</h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner />
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex items-center border-b border-[#FBD288] pb-4">
                <span className="text-lg font-medium text-[#FF9C73] w-24">
                  ID:
                </span>
                <span className="text-gray-700">{books._id}</span>
              </div>
              <div className="flex items-center border-b border-[#FBD288] pb-4">
                <span className="text-lg font-medium text-[#FF9C73] w-24">
                  Title:
                </span>
                <span className="text-gray-700">{books.title}</span>
              </div>
              <div className="flex items-center border-b border-[#FBD288] pb-4">
                <span className="text-lg font-medium text-[#FF9C73] w-24">
                  Author:
                </span>
                <span className="text-gray-700">{books.author}</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-medium text-[#FF9C73] w-24">
                  Price:
                </span>
                <span className="text-gray-700">${books.price}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showbook;
