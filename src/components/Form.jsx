import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      ></textarea>

      <button
        type="submit"
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
