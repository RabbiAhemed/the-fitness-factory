import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Complete = () => {
  const showToast = () => {
    toast(
      " Congratulations! You have successfully completed todays exercises!"
    );
  };
  return (
    <div>
      <button
        onClick={showToast}
        className="btn btn-info text-white fw-bold complete-btn mx-auto"
      >
        Activity Completed
      </button>
      <ToastContainer />
    </div>
  );
};

export default Complete;
