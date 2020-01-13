import whatInput from "what-input";

document.addEventListener("click", e => {
  if (whatInput.ask() === "mouse") {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target)
      e.target.blur();
    }
  }
});