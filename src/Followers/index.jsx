import { useState } from "react";

function Followers() {
  const [count, setCount] = useState(0);
  //
  //  function singned() {
  //    setCount(count + 1);
  //  }
  //
  //  function unsined() {
  //    setCount(count - 1);

  //    return (
  //      <>
  //        <button onClick={singned}>+</button>
  //        <span>{count}</span>
  //        <button onClick={unsined}>-</button>
  //      </>
  //    );
  // }
  function singned(e) {
    e.preventDefault();
    setCount(count - 1);
  }
  return (
    <>
      <button onSubmit={singned}>+</button>
    </>
  );
}

export default Followers;
