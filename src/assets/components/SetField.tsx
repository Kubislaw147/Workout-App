import React from "react";

const SetField = () => {
  return (
    <>
      <div className="border-2 border-red-600 p-1 rounded-lg m-1">
        <div className="inline">reps </div>
        <div className="inline">rest time</div>
        <form className="inline">
          <input type="number" name="weight" className="w-15 "></input>
          <label>KG x </label>
          <input type="number" name="set" className="w-15"></input>
          <button type="submit">Zatwierdz</button>
        </form>
      </div>
    </>
  );
};

export default SetField;
