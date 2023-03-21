import { createElement, useRef, useState } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Contact = () => {
  const { Contact } = content;
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [messageTitle, setMessageTitle] = useState("");
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");
  const form = useRef();

  // Sending Email
  function sendEmail(e) {
    setError("");
    setSuccess("");
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      phone: phone,
      messageTitle: messageTitle,
      message: message,
      month: "7",
      year: "2023",
    };

    axios
      .post(
        "https://o91tfmyjkh.execute-api.us-east-1.amazonaws.com/v1/contact",
        data
      )
      .then((response) => {
        debugger;
        console.log(response);
        setSuccess(response.data);
      })
      .catch((error) => {
        debugger;
        console.log("error" + error.message);
        setError(error.message);
      });
  }

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />

     <div className="grid grid-cols-2 gap-4 pr-5 py-2">
     {success && (
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">SUCCESSS</p>
                <p class="text-sm">
                  {success}
                </p>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">ERROR</strong>
            <span class="block sm:inline">
            {error}
            </span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
     </div>
        <div className="flex gap-10 md:flex-row flex-col">
    
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="border border-slate-600 p-3 rounded"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="message_title"
              placeholder="Message Title"
              required
              className="border border-slate-600 p-3 rounded"
              onChange={(e) => setMessageTitle(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-33"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
