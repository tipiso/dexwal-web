export function showToast(message:string | {success:boolean; message:string}, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    console.log(message)
    if (typeof message === "string") {
      toast.textContent = message;
    } else {
      toast.textContent = message.message;
    }

 
  
    if (type === "error") {
      toast.style.backgroundColor = "#f44336"; // red
    }
  
    container.appendChild(toast);
  
    // Remove after animation completes
    setTimeout(() => {
      toast.remove();
    }, 4000); // match animation duration
  }