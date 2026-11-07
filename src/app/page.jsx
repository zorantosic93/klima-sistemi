"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Snowflake,
  Sun,
  Wind,
  Wrench,
  ShieldCheck,
  Leaf,
  Check,
  Menu,
  X,
  Plus,
  Minus,
  House,
  Building2,
  Download,
  Instagram,
  Phone,
} from "lucide-react";

function Logo() {
  return (
    <a href="#" className="logo" aria-label="Klima Sistemi početna">
      <Image
        src="/klima-sistemi-logo.png"
        alt="Klima Sistemi"
        width={360}
        height={132}
        priority
      />
    </a>
  );
}
const services = [
  {
    icon: Snowflake,
    title: "Ugradnja klima uređaja",
    text: "Pravi uređaj, na pravom mjestu. Od izbora sistema do pažljive montaže i puštanja u rad.",
    tag: "Komfor počinje ovdje",
  },
  {
    icon: Wrench,
    title: "Servis i održavanje",
    text: "Redovna briga za pouzdan rad. Pregled, dijagnostika i servis vašeg klima uređaja.",
    tag: "Spremni za svaku sezonu",
  },
  {
    icon: Wind,
    title: "Čišćenje i dezinfekcija",
    text: "Svježina koju možete osjetiti. Temeljito čišćenje filtera i unutrašnje jedinice.",
    tag: "Čistiji zrak u vašem prostoru",
  },
  {
    icon: ShieldCheck,
    title: "Stručna podrška",
    text: "Odgovori na vaša pitanja i pomoć pri odabiru rješenja za dom ili poslovni prostor.",
    tag: "Tu smo za vas",
  },
];
const faqs = [
  [
    "Koji klima uređaj odgovara mom prostoru?",
    "Izbor zavisi od površine, izolacije, osunčanosti i načina korištenja prostora. Opišite nam svoj prostor i potrebe kako bismo zajedno odabrali odgovarajuće rješenje.",
  ],
  [
    "Koliko često treba servisirati klimu?",
    "Učestalost zavisi od uređaja i intenziteta korištenja. Pratite upute proizvođača, čistite filtere prema preporuci i dogovorite pregled prije sezone intenzivnog rada.",
  ],
  [
    "Može li klima grijati prostor zimi?",
    "Uređaji s funkcijom grijanja mogu grijati prostor. Učinak na niskim temperaturama zavisi od modela, pa je važno odabrati uređaj prema uslovima u kojima će raditi.",
  ],
  [
    "Kako mogu zatražiti ponudu?",
    "Pozovite nas na 064 449 4547 ili u kontakt sekciji odaberite uslugu i opišite prostor. Obrazac priprema datoteku s vašim upitom koju možete sačuvati na uređaju.",
  ],
];
export default function Home() {
  const [menu, setMenu] = useState(false),
    [faq, setFaq] = useState(0),
    [service, setService] = useState("Ugradnja klima uređaja"),
    [ready, setReady] = useState(false),
    [mode, setMode] = useState("cool"),
    [temperature, setTemperature] = useState(22),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(
        ".section-head,.service,.about-image,.about-copy,.space-item,.steps>div,.faq-section>div,.contact-copy,form",
      )
      .forEach((el, i) => {
        el.classList.add("reveal");
        el.style.setProperty("--delay", `${(i % 4) * 75}ms`);
        observer.observe(el);
      });
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    if (!menu) return;
    const close = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const content = `UPIT — KLIMA SISTEMI\n\nIme: ${data.get("ime")}\nKontakt: ${data.get("kontakt")}\nUsluga: ${service}\n\n${data.get("poruka")}`;
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "klima-sistemi-upit.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setReady(true);
  }
  return (
    <>
      <a className="skip-link" href="#sadrzaj">
        Preskoči na sadržaj
      </a>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav-wrap">
          <Logo />
          <nav id="main-navigation" className={menu ? "open" : ""}>
            {[
              ["Usluge", "usluge"],
              ["Zašto mi", "zasto-mi"],
              ["Kako radimo", "proces"],
              ["Česta pitanja", "pitanja"],
              ["Kontakt", "kontakt"],
            ].map(([label, id]) => (
              <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a href="tel:+387644494547" className="nav-cta" aria-label="Pozovite Klima Sistemi na 064 449 4547">
            <Phone size={16} /> <span>064 449 4547</span>
          </a>
          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Zatvori meni" : "Otvori meni"}
            aria-controls="main-navigation"
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="sadrzaj">
        <section className="hero">
          <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
            fetchPriority="high"
            alt="Svijetao i udoban dnevni boravak s prirodnim detaljima"
          />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="eyebrow">
              <span /> SARAJEVO I OKOLINA · VAŠ KOMFOR. NAŠA BRIGA.
            </div>
            <h1>
              Hladno ljeto.
              <br />
              Topla zima.
              <br />
              <em>Baš kako treba.</em>
            </h1>
            <p>
              Ugradnja, servis i održavanje klima uređaja.
              <br />
              Za prostor u kojem je uvijek ugodno biti.
            </p>
            <a className="button orange" href="#kontakt">
              Pronađimo vaše rješenje <ArrowUpRight size={20} />
            </a>
            <div className="hero-note">
              <ShieldCheck size={18} /> Stručna ugradnja <i /> Pažljiv pristup{" "}
              <i /> Čistiji zrak
            </div>
          </div>
          <div className={"climate " + mode}>
            <div className="climate-top">
              <span className="climate-icon">
                {mode === "cool" ? <Snowflake size={20} /> : <Sun size={20} />}
              </span>
              <span>VAŠA ZONA KOMFORA</span>
              <span className="live-dot" />
            </div>
            <div className="temperature" aria-live="polite">
              {temperature}
              <span>°C</span>
            </div>
            <div className="temperature-controls">
              <button
                type="button"
                onClick={() => setTemperature((t) => Math.max(16, t - 1))}
                disabled={temperature === 16}
                aria-label="Smanji temperaturu"
              >
                <Minus size={16} />
              </button>
              <span>Isprobajte svoj komfor</span>
              <button
                type="button"
                onClick={() => setTemperature((t) => Math.min(30, t + 1))}
                disabled={temperature === 30}
                aria-label="Povećaj temperaturu"
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="climate-modes">
              <button
                type="button"
                aria-pressed={mode === "cool"}
                onClick={() => {
                  setMode("cool");
                  setTemperature(22);
                }}
              >
                <Snowflake size={14} /> Hlađenje
              </button>
              <button
                type="button"
                aria-pressed={mode === "heat"}
                onClick={() => {
                  setMode("heat");
                  setTemperature(24);
                }}
              >
                <Sun size={14} /> Grijanje
              </button>
            </div>
            <div className="climate-bottom">
              Demonstracija temperature <Wind size={24} />
            </div>
          </div>
          <div className="hero-bottom">
            <span>RJEŠENJA ZA DOM I POSLOVNI PROSTOR</span>
            <a href="#usluge">
              Istražite usluge <ArrowRight size={17} />
            </a>
          </div>
          <span className="photo-credit">
            Fotografija prostora · ilustracija
          </span>
        </section>
        <div className="benefit-bar">
          <span>
            <Snowflake />
            Hlađenje i grijanje
          </span>
          <span>
            <Leaf />
            Pametnija potrošnja
          </span>
          <span>
            <Wind />
            Svjež i čist zrak
          </span>
          <span>
            <House />
            Komfor tokom cijele godine
          </span>
        </div>
        <section id="usluge" className="section services">
          <div className="section-head">
            <div>
              <div className="eyebrow green">01 / NAŠE USLUGE</div>
              <h2>
                Sve što vašoj
                <br />
                klimi treba.
              </h2>
            </div>
            <p>
              Od prve ideje do svježeg zraka.
              <br />
              Brinemo o svakom koraku, da vi možete
              <br />
              uživati u svom prostoru.
            </p>
          </div>
          <div className="service-grid grid grid-cols-2 gap-3 min-[370px]:gap-4 xl:grid-cols-4">
            {services.map((s, i) => (
              <a
                href="#kontakt"
                onClick={() => setService(s.title)}
                className="service"
                key={s.title}
              >
                <div className="service-top">
                  <s.icon size={29} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="service-foot">
                  <span>{s.tag}</span>
                  <ArrowUpRight size={21} />
                </div>
              </a>
            ))}
          </div>
        </section>
        <section id="zasto-mi" className="about section grid grid-cols-1 md:grid-cols-2">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
              alt="Miran, ugodan enterijer doma"
              loading="lazy"
            />
            <div className="image-caption">
              <span className="little-sun">
                <Sun />
              </span>
              <span>
                Vaš prostor.
                <br />
                <strong>Vaša idealna temperatura.</strong>
              </span>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow green">02 / VIŠE OD DOBRE TEMPERATURE</div>
            <h2>
              Dobar osjećaj
              <br />
              počinje kod kuće.
            </h2>
            <p>
              Klima nije samo uređaj na zidu. To je miran san ljeti, ugodno
              jutro zimi i prostor u kojem se osjećate dobro.
            </p>
            <p>
              Zato svakom prostoru pristupamo pažljivo — od izbora odgovarajućeg
              uređaja do održavanja koje mu pomaže da radi kako treba.
            </p>
            <div className="check-list">
              <span>
                <Check />
                Rješenja prilagođena vašem prostoru
              </span>
              <span>
                <Check />
                Jasan dogovor prije početka radova
              </span>
              <span>
                <Check />
                Podrška pri korištenju i održavanju
              </span>
            </div>
            <a href="#kontakt" className="text-link">
              Razgovarajmo o vašem prostoru <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
        <section className="spaces">
          <div className="spaces-inner grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] [&>div:first-child]:col-span-2 md:[&>div:first-child]:col-span-1">
            <div>
              <div className="eyebrow">KOMFOR NEMA SAMO JEDNU ADRESU</div>
              <h2>
                Za vaš dom.
                <br />
                Za vaš posao.
              </h2>
            </div>
            <div className="space-item">
              <House />
              <h3>Stambeni prostori</h3>
              <p>
                Stanovi i kuće u kojima svaka prostorija zaslužuje pravu
                temperaturu.
              </p>
            </div>
            <div className="space-item">
              <Building2 />
              <h3>Poslovni prostori</h3>
              <p>
                Ugodna atmosfera za rad, vaše saradnike i ljude koji vam dolaze.
              </p>
            </div>
          </div>
        </section>
        <section id="proces" className="section process">
          <div className="section-head">
            <div>
              <div className="eyebrow green">03 / JEDNOSTAVNO DO KOMFORA</div>
              <h2>
                Vi kažete šta trebate.
                <br />
                Mi brinemo o koracima.
              </h2>
            </div>
            <a className="text-link" href="#kontakt">
              Započnimo razgovor <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="steps grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {[
              [
                "Razgovor i procjena",
                "Slušamo vaše potrebe i upoznajemo prostor.",
              ],
              [
                "Prijedlog i dogovor",
                "Predlažemo rješenje i dogovaramo detalje.",
              ],
              ["Ugradnja ili servis", "Pažljivo obavljamo dogovorene radove."],
              [
                "Uživajte u komforu",
                "Objašnjavamo korištenje i daljnje održavanje.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="pitanja" className="faq-section section grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="eyebrow green">04 / DOBRO JE ZNATI</div>
            <h2>
              Imate pitanja?
              <br />
              Tu smo.
            </h2>
            <p>Nekoliko odgovora za lakši početak.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className={"faq " + (faq === i ? "active" : "")} key={q}>
                <button
                  aria-expanded={faq === i}
                  aria-controls={"answer-" + i}
                  onClick={() => setFaq(faq === i ? -1 : i)}
                >
                  {q}
                  {faq === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div
                  id={"answer-" + i}
                  className="faq-answer"
                  inert={faq !== i}
                  aria-hidden={faq !== i}
                >
                  <div>
                    <p>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="kontakt" className="contact section grid grid-cols-1 md:grid-cols-2">
          <div className="contact-copy">
            <div className="eyebrow">05 / NAPRAVITE PRVI KORAK</div>
            <h2>
              Ugodniji prostor
              <br />
              počinje jednim
              <br />
              <em>razgovorom.</em>
            </h2>
            <p>
              Trebate ugradnju, servis ili samo savjet?
              <br />
              Opišite nam šta vam je potrebno.
            </p>
            <div className="contact-status">
              <span /> Područje rada: Sarajevo i okolina
            </div>
            <a className="contact-phone" href="tel:+387644494547">
              <span className="contact-phone-icon"><Phone size={22} /></span>
              <span>
                <small>Pozovite nas</small>
                064 449 4547
              </span>
              <ArrowUpRight size={20} />
            </a>
            <p className="contact-explain">
              Ili pripremite i preuzmite svoj upit.
              <br />
              Ovaj obrazac još ne šalje poruke.
            </p>
          </div>
          <form onSubmit={submit}>
            <div className="form-row grid grid-cols-1 gap-x-4 lg:grid-cols-2">
              <label>
                Vaše ime
                <input
                  name="ime"
                  placeholder="Ime i prezime"
                  required
                  autoComplete="name"
                />
              </label>
              <label>
                Telefon ili e-mail
                <input
                  name="kontakt"
                  placeholder="Kako vas možemo kontaktirati?"
                  required
                  autoComplete="on"
                />
              </label>
            </div>
            <label>
              Šta vam je potrebno?
              <select
                name="usluga"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Recite nam malo više
              <textarea
                name="poruka"
                rows="3"
                placeholder="Vrsta prostora, površina i šta vam je potrebno…"
                required
              />
            </label>
            <button className="button orange" type="submit">
              Preuzmite pripremljeni upit <Download size={18} />
            </button>
            <p className="form-note" role="status">
              {ready
                ? "Upit je pripremljen za preuzimanje. Nije poslan firmi."
                : "Podaci se koriste samo za pripremu datoteke na vašem uređaju."}
            </p>
          </form>
        </section>
      </main>
      <footer>
        <Logo />
        <span>Udobnost u svakoj sezoni.</span>
        <div className="footer-actions">
          <a href="tel:+387644494547" className="footer-phone">
            <Phone size={16} /> 064 449 4547
          </a>
          <a
            className="instagram-placeholder"
            href="https://www.instagram.com/klimasistemi/"
            target="_blank"
            rel="noreferrer"
            title="Klima Sistemi na Instagramu"
            aria-label="Otvorite Klima Sistemi Instagram profil"
          >
            <Instagram size={19} />
          </a>
          <a href="#">Nazad na vrh ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Klima Sistemi</span>
          <span>Hladno ljeto, topla zima.</span>
        </div>
      </footer>
    </>
  );
}
