import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function Contact() {
  const [captchaValue, setCaptchaValue] = useState(null);

  function handleCaptcha(value) {
    setCaptchaValue(value);
  }

  return (
    <div className="flex-grow p-4">
      <div className="mt-3">
        <p className="font-roboto text-2xl">
          For any queries or suggestions for improvements, please fill out the form below! (We are in progress of finishing this up)
        </p>
      </div>

      <br />
      <div>
        <form>
          <label>First Name:</label>
          <br />
          <input
            type="text"
            id="fname"
            className="block w-1/3 p-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-400 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label>Second Name:</label>
          <br />
          <input
            type="text"
            id="sname"
            className="block w-1/3 p-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-400 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            id="email"
            className="block w-2/4 p-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-400 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br />
          <label>Message:</label>
          <br />
          <textarea
            id="message"
            className="block w-full p-4 text-gray-400 border border-gray-300 rounded-lg bg-gray-400 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pb-32"
          ></textarea>
        </form>
      </div>

      <div className="flex flex-col items-center mt-4">
        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />
        
        <button
          className={`bg-emerald-500 w-20 rounded-3xl border-blue-500 py-2 mt-6 hover:bg-emerald-600 text-white font-roboto motion-safe:animate-bounce ${
            !captchaValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!captchaValue}
        >
          Submit!
        </button>
      </div>
    </div>
  );
}

export default Contact;
