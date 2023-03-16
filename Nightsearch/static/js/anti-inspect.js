// ANTI INSPECT 
document.addEventListener("DOMContentLoaded", function () {
    // Other code
  
    preventDeveloperTools();
  });
  
  function preventDeveloperTools() {
    document.addEventListener("keydown", (event) => {
      if (
        event.code === "F12" ||
        (event.ctrlKey && event.shiftKey && event.code === "KeyI")
      ) {
        event.preventDefault();
        alert("Developer tools are disabled on this page.");
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Other code
  
    disableRightClick();
  });
  
  function disableRightClick() {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      alert("Right-click is disabled on this page.");
    });
  }
  