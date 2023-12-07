import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSend, setMessageSend] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_eyfs3jh",
        "template_1gvxla6",
        form.current,
        "EdUqTpGbebxRIDJpr"
      );
      setMessageSend(true);
      resetForm();
    } catch (error) {
      console.error(error.text);
      setMessageError(true);
    }
    setLoading(false);
    setTimeout(() => {
      setMessageSend(false);
      setMessageError(false);
    }, 3000);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex relative flex-col gap-4 max-w-xs mx-auto w-full pt-16"
    >
      <div className="absolute top-0 left-0 w-full">
        {messageSend && (
          <div
            className={`${
              messageSend ? "opacity-1" : "opacity-0"
            } bg-[#0f1129] shadow-green-800 shadow-md w-full p-3 text-center rounded-lg font-yatra text-white transition-opacity duration-500`}
          >
            {"Votre message a été envoyé"}
          </div>
        )}
        {messageError && (
          <div
            className={`${
              messageError ? "opacity-1" : "opacity-0"
            } bg-[#0f1129] shadow-red-800 shadow-md w-full p-3 text-center rounded-lg font-yatra text-white transition-opacity duration-500`}
          >
            {"Votre message n'a pas été envoyé"}
          </div>
        )}
      </div>
      <input
        type="text"
        value={name}
        name="user_name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="input bg-[#0f1129] shadow-indigo-800 shadow-sm w-full hover:ring-2 hover:ring-indigo-800"
      />
      <input
        type="email"
        value={email}
        name="user_email"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
        className="input bg-[#0f1129] shadow-indigo-800 shadow-sm w-full max-w-xs hover:ring-2 hover:ring-indigo-800"
      />
      <textarea
        className="textarea bg-[#0f1129] shadow-blue-800 shadow-sm w-full max-w-xs mt-5 hover:ring-2 hover:ring-blue-800"
        placeholder="Your message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        required
      ></textarea>

      <button
        type="submit"
        disabled={!email || !message || loading}
        value="Send"
        className="flex items-center justify-center h-10 gap-2 p-3 rounded-lg font-yatra btn-active mb-10 w-full bg-gradient custom-gradient-class text-white transition-transform transform hover:scale-95 duration-200"
      >
        <FontAwesomeIcon
          className="mb-0.5"
          icon={faEnvelope}
          style={{ color: "#fafafa" }}
        />
        SEND
      </button>
    </form>
  );
}

export default FormContact;
