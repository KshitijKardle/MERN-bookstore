import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const Addbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      price,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error occured");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#FCF596] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#FF4545]">
            Add New Book
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FCF596]/50 rounded-lg">
              <Spinner />
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="book-title"
                className="block text-sm font-medium leading-6 text-[#FF9C73]"
              >
                Book Title
              </label>
              <input
                id="book-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#FBD288] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF9C73] sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="book-author"
                className="block text-sm font-medium leading-6 text-[#FF9C73]"
              >
                Book Author
              </label>
              <input
                id="book-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#FBD288] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF9C73] sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="book-price"
                className="block text-sm font-medium leading-6 text-[#FF9C73]"
              >
                Price
              </label>
              <input
                id="book-price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#FBD288] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#FF9C73] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSaveBook}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4545] hover:bg-[#ff3131] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9C73] transition-colors duration-200"
            >
              Save Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addbook;
