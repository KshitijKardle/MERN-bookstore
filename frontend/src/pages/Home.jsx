import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PlusCircle, Info, Edit, Trash2, Book } from "lucide-react";

import Spinner from "../components/Spinner";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF596] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Book className="mr-2 text-[#FF4545]" />
            Books List
          </h1>
          <Link
            to="/books/create"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4545] hover:bg-[#ff3131] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4545]"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Add Book
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner />
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-[#FBD288]">
              <thead className="bg-[#FBD288]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Book Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#FBD288]/30">
                {books.map((book, index) => (
                  <tr key={book._id} className="hover:bg-[#FCF596]/20">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {book.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${book.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-4">
                        <Link
                          to={`/books/details/${book._id}`}
                          className="text-[#FBD288] hover:text-[#f8c46e]"
                        >
                          <Info className="h-5 w-5" />
                        </Link>
                        <Link
                          to={`/books/edit/${book._id}`}
                          className="text-[#FF9C73] hover:text-[#ff8559]"
                        >
                          <Edit className="h-5 w-5" />
                        </Link>
                        <Link
                          to={`/books/delete/${book._id}`}
                          className="text-[#FF4545] hover:text-[#ff3131]"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
