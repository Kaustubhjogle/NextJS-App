import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      disabled={pending}
    >
      {pending ? "Loading.." : "Submit"}
    </button>
  );
};

export default SubmitBtn;
