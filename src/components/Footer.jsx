import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-5 w-full bg-[#0f1129] shadow-inner shadow-indigo-950 py-32 rounded-tl-3xl rounded-tr-3xl">
      <h3 className="text-white custom-tailwind-class rounded-xl px-1 text-4xl font-black lg:text-4xl font-yatra">
        Contact me{" "}
      </h3>
      <div className="flex items-center">
        <svg
          className="h-10 pr-2"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            className="text-white fill-current "
            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
          />
        </svg>
        <p className="custom-gradient-text text-2xl font-bold lg:text-4xl font-yatra">
          ulas.onder@outlook.fr
        </p>
      </div>
    </div>
  );
}

export default Footer;
