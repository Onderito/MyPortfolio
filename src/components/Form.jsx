import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSend, setMessageSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eyfs3jh",
        "template_1gvxla6",
        form.current,
        "EdUqTpGbebxRIDJpr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSend("Votre message a bien été envoyé !");
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      className="flex flex-col gap-4 max-w-xs mx-auto w-full"
    >
      {messageSend && (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0f1129] shadow-green-800 shadow-md w-full  p-3 text-center rounded-lg font-yatra text-white"
        >
          {messageSend}
        </motion.p>
      )}
      <input
        type="text"
        value={name}
        name="user_name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="input bg-[#0f1129] shadow-indigo-800 shadow-sm w-full "
      />
      <input
        type="email"
        value={email}
        name="user_email"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
        className="input bg-[#0f1129] shadow-indigo-800 shadow-sm w-full max-w-xs"
      />
      <textarea
        className="textarea bg-[#0f1129] shadow-blue-800 shadow-sm w-full max-w-xs mt-5 "
        placeholder="Your message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>

      <button
        type="submit"
        value="Send"
        className="flex items-center justify-center h-10 gap-2 p-3 rounded-lg font-yatra btn-active mb-10 w-full  bg-gradient custom-gradient-class text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
          />
        </svg>
        SEND
      </button>
    </form>
  );
}

export default FormContact;
