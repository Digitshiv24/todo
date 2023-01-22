import React, { useState } from "react";

function Todo() {
  const [goals, setGoals] = useState("");
  const [listData, setListData] = useState("");
  function addGoals() {
    //(...) using spread operator to quickly copy all data
    // setListData([...listData, goals]);
    // console.log(listData)
    setListData((listData) => {
      const updatedList = [...listData, goals];
      console.log(updatedList);
      setGoals("");
      return updatedList;
    });
  }
  function removeGoals(index) {
    const updatedListData = listData.filter((elem, id) => {
      return index != id;
    });
    setListData(updatedListData);
  }
  function removeall() {
    setListData([]);
  }

  return (
    <>
      <div className="Container">
        <div className="header">Todo-list</div>
        <input
          type="text"
          placeholder="Add Goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <button onClick={addGoals}>
          <span>➽</span>
        </button>
        <p className="heading-list">Here is your list :{")"}</p>
        {listData != [] &&
          listData.map((data, index) => {
            return (
              <>
                <p key={index}>
                  <div className="data-list">{data} </div>
                  <div className="remove">
                    <button onClick={() => removeGoals(index)}>✘</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button className="remove" onClick={removeall}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
}

export default Todo;
