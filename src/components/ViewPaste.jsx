import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const paste = useSelector((state) => state.paste.pastes);
  const { id } = useParams();

  const pasteData = paste.filter((p) => p._id === id)[0];

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copy to Clipborad");
  };

  return (
    <div className="flex flex-col p-4 ml-auto mr-auto w-[35%] ">
      <div className="flex gap-7 items-center">
        <input
          className="p-2 rounded-2xl text-black w-[80%] outline-none pl-4 bg-white"
          type="text"
          placeholder="Title"
          value={pasteData.title}
          disabled
        />
        <button className="bg-white px-5 py-2 text-black rounded-xl" onClick={() => handleCopy(pasteData?.content)}>
          Copy
        </button>
      </div>

      <div className="flex place-content-between ">
        <textarea
          className="rounded-2xl p-4 mt-5 text-black w-[100%] outline-none resize-none bg-white"
          placeholder="Write your content here..."
          value={pasteData.content}
          disabled
          rows={15}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
