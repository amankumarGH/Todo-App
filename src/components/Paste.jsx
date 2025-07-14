import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import { removeFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes); //retrieve the data from cart or store of pasteslice
  const [searchItem, setSearchItem] = useState("");

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDeletePaste = (id) => {
    dispatch(removeFromPastes(id));
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copy to Clipborad");
  };

  return (
    <div className="p-2 w-[100%] flex flex-col items-center">
      <div className=" w-[35%] p-2 ">
        <input
          type="text"
          className="p-3 pl-4 rounded-lg w-[100%] text-black outline-none"
          placeholder="Search here!"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div className="mt-2 flex flex-col gap-4 w-[35%] p-4 border rounded-lg">
        <h1 className="text-4xl font-bold">All Paste</h1>
        {filterData.length > 0 ? (
          filterData.map((paste, ind) => (
            <div
              key={paste?._id || ind}
              className="flex flex-col gap-4 border w-[100%] p-1 pl-4 rounded-lg"
            >
              <div>
                <h1 className="font-bold text-3xl">{paste.title}</h1>
              </div>
              <div className="line-clamp-3 leading-tight">{paste.content}</div>

              <div className="flex place-content-evenly flex-wrap">
                {/* <button className="bg-red-500 px-4 py-1 rounded-lg">
                  <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                </button> */}
                <button className="bg-red-500 px-4 py-1 rounded-lg">
                  <Link to={`/pastes/${paste?._id}`} target="_blank">
                    View
                  </Link>
                </button>
                <button
                  className="bg-red-500 px-4 py-1 rounded-lg"
                  onClick={() => handleDeletePaste(paste?._id)}
                >
                  Delete
                </button>

                <button
                  className="bg-red-500 px-4 py-1 rounded-lg"
                  onClick={() => handleCopy(paste?.content)}
                >
                  Copy
                </button>
                {/* <button className="bg-red-500 px-4 py-1 rounded-lg">
                  Share
                </button> */}
              </div>
              <div>{new Date(paste.createdAt).toISOString().split("T")[0]}</div>
            </div>
          ))
        ) : (
          <div>This is empty</div>
        )}
      </div>
    </div>
  );
};

export default Paste;
