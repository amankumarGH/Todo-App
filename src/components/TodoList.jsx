import { useState } from "react";
import "./TodoList.css";
import React from "react";

const TodoList = () => {
  const [data, setData] = useState("");
  const [listData, setListData] = useState([]);

  const handleData = (e) => {
    setData(e.target.value);
  };
  const addActivity = () => {
    {
      data != "" &&
        setListData((listData) => {    //this is done to make it synchronous the rendering of data into a list
          const updateList = [...listData, data];
          setData("");
          return updateList;
        });
    }
    {
      data == "" && alert("enter the value");
    }
  };
  const removeActivity = (i) => {
    const updateListData = listData.filter((ele, id) => {
      return i != id;
    });
    setListData(updateListData);
  };
  const handleRemoveAll = () => {
    setListData([]);
  };
  return (
    <div className="main-content flex">
      <div className="header flex">
        <h1>TODO APP</h1>
      </div>

      <div className="input-field flex">
        <input
          type="text"
          placeholder="ENTER YOUR TODO"
          value={data}
          onChange={handleData}
        />
        <button onClick={addActivity} className="btn">
          add
        </button>
      </div>

      <h1>Here the List of Added items:</h1>
      {listData != [] &&
        listData.map((datas, i) => {
          return (
            <>
              <div key={i} className="listMain flex">
                <div className="listAdded">{datas}</div>
                <button
                  className="btn"
                  onClick={() => {
                    removeActivity(i);
                  }}
                >
                  remove
                </button>
              </div>
              <div></div>
            </>
          );
        })}
      {listData.length >= 1 && (
        <button className="btn" onClick={handleRemoveAll}>
          Remove ALL
        </button>
      )}
    </div>
  );
};

export default TodoList;
