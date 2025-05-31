import React, { useEffect, useRef } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import keys from "../../utils/keys_emailjs";
import { useTranslation } from "react-i18next";
import { Notify } from "notiflix";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm(
        keys.service_id,
        keys.template_id,
        form.current,
        keys.public_key
      )
      .then(() => {
        Notify.success(t("submitSuccess"), {
          timeout: 3000,
        });
      })
      .catch((error) => {
        Notify.failure(t("submitFailure"), { timeout: 3000 });
        console.log(error);
      });
    form.current.reset();
  };

  return (
    <div
      data-aos="fade-up"
      className="text-black font-raleway mb-16 dark:text-white"
      id="contact"
    >
      <h2 className="font-roboto text-xl mb-4 lg:text-2xl 2xl:mb-6 2xl:text-4xl">
        {t("contactTitlePart1")}
        <span className="border-b-2 border-green">
          {t("contactTitlePart2")}
        </span>
      </h2>
      <form
        ref={form}
        className="flex flex-col max-w-[40rem] text-white sm:w-3/5 md:text-lg 2xl:text-2xl dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          className="mb-2 p-2 px-4 pt-2.5 outline-0 bg-black dark:bg-beige"
          id="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          required
        />
        <textarea
          name="message"
          className="mb-4 p-2 px-4 pt-2.5 outline-0 bg-black resize-none dark:bg-beige sm:h-28"
          id="message"
          placeholder={t("messagePlaceholder")}
          required
        />
        <button
          className="btn p-2 w-2/5 min-w-fit text-white sm:max-w-20"
          type="submit"
          name="submit"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Contact;