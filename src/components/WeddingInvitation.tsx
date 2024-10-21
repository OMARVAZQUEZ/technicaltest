import React, { useState, useEffect } from "react";
import styles from "./WeddingInvitation.module.css";
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2024-11-09T18:00:00"); // Set your wedding date here
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.reveal_box}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}> Invitación</h1>
            <h2 className={styles.subtitle}>Conferencia para MATRIMONIOS </h2>
            <p className={styles.date}>9 • NOVIEMBRE • 24</p>
          </div>
          <div>
            <h2>CUPO LIMITADO</h2>
          </div>
        </header>
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <blockquote className={styles.textInvitation}>
            <p className={styles.subtitle}>QUERIDOS HERMANOS EN CRISTO.</p>

            <p>
              Con mucho cariño, les extendemos una cordial invitación a nuestra
              Conferencia para Matrimonios.
            </p>

            <p>
              Este evento especial está diseñado para fortalecer el amor y la
              unión en el matrimonio, y profundizar en temas que son esenciales
              para una vida en pareja plena y armoniosa.
            </p>

            <p>
              {" "}
              Esperamos verlos allí, listos para compartir un tiempo de
              bendición, reflexión y crecimiento.
            </p>
            <p>Con todo nuestro cariño.</p>
            <p> Apóstol Justo Cruz</p>
          </blockquote>
        </section>
        <section className={`${styles.section} ${styles.counter}`}>
          <h2 className={styles.sectionTitle}>Faltan</h2>
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.days}</span>
              <p>Días</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.hours}</span>
              <p>Horas</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.minutes}</span>
              <p>Minutos</p>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{timeLeft.seconds}</span>
              <p>Segundos</p>
            </div>
          </div>
          <div className={styles.date}> 9 • NOVIEMBRE • 24</div>
          <blockquote className={styles.textInvitationBiblia}>
            <p>
              "Y sobre todas estas cosas, vestíos de amor, que es el vínculo
              perfecto"
            </p>
            <p> Colosenses 3:14</p>
          </blockquote>
        </section>

        <section className={styles.section}>
          <div className={styles.churchContent}>
            <div className={styles.headerContent}>
            <h1 className={styles.title}> Bienvenidos a su Casa</h1>
            </div>
           
          <div className={styles.containerBtn}>
            <a
              className={styles.locationButton}
              href="https://maps.app.goo.gl/vayRnGAky3FRRydz5"
              target="_blank"
              rel="noreferrer noopener"
            >
             <FaMapMarkerAlt/>  Ver Ubicación
            </a>
            
            <a
              href="https://wa.me/529611080363?text=Hola,Bendiciones!%20quiero%20confirmar%20mi%20asistencia%20a%20la%20Conferencia%20de%20Matrimonios"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.whatsappButton}
            >
              <FaWhatsapp/>
              Si Asistiré
            </a>
            </div>
          </div>
        </section>

       
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Elohim Tuxtla Gtz</p>
      </footer>
    </div>
  );
}
