import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToPastes, updatePastes } from "../redux/PasteSlice";

const Home = () => {
  const [tittle, setTittle] = useState("");
  const [valueText, setValueText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const allpaste = useSelector((state) => state.paste.pastes);

  const inputRef=useRef(null);

  useEffect(() => {
    if (pasteId) {
      const paste = allpaste.find((p) => p._id === pasteId);
      setTittle(paste.title);
      setValueText(paste.content);
      inputRef.current.focus();
    }
  }, [pasteId]);

  const createPaste = () => {
    const paste = {
      title: tittle,
      content: valueText,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      // If pasteId is present, update the paste
      dispatch(updatePastes(paste));
      setTittle("");
      setValueText("");
      // Remove the pasteId from the URL after creating/updating a paste
      setSearchParams({});
    } else {
      if (paste.title && paste.content) {
        dispatch(addToPastes(paste));
        setTittle("");
        setValueText("");
        // Remove the pasteId from the URL after creating/updating a paste
        setSearchParams({});
      } else {
        alert("enter the value");
      }
    }
  };

  return (
    <div className="flex flex-col p-4 ml-auto mr-auto w-[35%]">
      <div className="flex gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 text-black w-[65%] outline-none pl-4"
          type="text"
          placeholder="Title"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <button className="p-2 rounded-2xl mt-2 bg-black" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create my Paste"}
        </button>
      </div>

      <div className="flex place-content-between ">
        <textarea
          className="rounded-2xl p-4 mt-5 text-black w-[100%] outline-none resize-none"
          placeholder="Write your content here..."
          value={valueText}
          rows={15}
          ref={inputRef}
          onChange={(e) => setValueText(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
