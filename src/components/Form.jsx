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
      className="flex flex-col justify-center items-center gap-4 w-full"
    >
      {messageSend && (
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0f1129] shadow-green-800 shadow-md w-full max-w-xs p-3 text-center rounded-lg font-yatra text-white"
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
        className="input bg-[#0f1129] shadow-blue-800 shadow-sm w-full max-w-xs"
      />
      <input
        type="email"
        value={email}
        name="user_email"
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
        className="input bg-[#0f1129] shadow-blue-800 shadow-sm w-full max-w-xs"
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
        className="btn btn-active mb-10 w-full max-w-xs bg-gradient custom-gradient-class text-white"
      >
        Send
      </button>
    </form>
  );
}

export default FormContact;
