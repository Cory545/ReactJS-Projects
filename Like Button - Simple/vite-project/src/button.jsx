import handleClick from "./clickHandler";

function Button () {
    return (
    <>
      <button id='btn' onClick={handleClick}>
        Like!
        </button>
    </>
)}

export default Button;