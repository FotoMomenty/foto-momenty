"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        "service_fu75mcp",
        "template_donetgf",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "PQT94TSDorvLQJUwy"
      );

      alert("Dziękujemy! Wiadomość została wysłana.");

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd podczas wysyłania wiadomości.");
    }

    setSending(false);
  };

  return (
    <FadeIn>
      <section
        id="kontakt"
        className="bg-black text-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[6px] text-yellow-400">
            Kontakt
          </p>

          <h2 className="text-center text-5xl font-light mt-4 mb-16">
            Zarezerwuj swój termin
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">

            <div className="space-y-8">

              <div>

                <h3 className="text-3xl mb-4">
                  FotoMomenty
                </h3>

                <p className="text-gray-300 leading-8">
                  Fotografujemy chrzciny, komunie,
                  roczki, sesje rodzinne,
                  ciążowe i narzeczeńskie.
                </p>

              </div>

              <div className="space-y-4">

                <p>📍 Legionowo • Warszawa • okolice</p>

                <p>
                  📞 Piotr
                  <br />
                  <a
                    href="tel:+48511337594"
                    className="text-yellow-400"
                  >
                    511 337 594
                  </a>
                </p>

                <p>
                  📞 Natalia
                  <br />
                  <a
                    href="tel:+48507241669"
                    className="text-yellow-400"
                  >
                    507 241 669
                  </a>
                </p>

                <p>📧 piotrekn2110@wp.pl</p>
                <p>📧 nataliabrzez@o2.pl</p>

              </div>

            </div>

            <form
              onSubmit={sendEmail}
              className="space-y-5"
            >              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 focus:border-yellow-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Adres e-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 focus:border-yellow-400 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 focus:border-yellow-400 outline-none"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 focus:border-yellow-400 outline-none"
              >
                <option value="">Wybierz usługę</option>
                <option value="Chrzciny">Chrzciny</option>
                <option value="Komunia">Komunia</option>
                <option value="Roczek">Roczek</option>
                <option value="Sesja rodzinna">Sesja rodzinna</option>
                <option value="Sesja ciążowa">Sesja ciążowa</option>
                <option value="Sesja narzeczeńska">Sesja narzeczeńska</option>
                <option value="18-stka">18-stka</option>
              </select>

              <textarea
                name="message"
                rows={6}
                placeholder="Opisz krótko wydarzenie lub sesję..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-zinc-900 border border-zinc-700 p-4 focus:border-yellow-400 outline-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-xl bg-yellow-500 py-4 text-black font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
              >
                {sending ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>            </form>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}