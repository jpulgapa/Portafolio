import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com',
  },
  {
    name: 'JavaScript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Spring Boot',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
    href: 'https://spring.io/projects/spring-boot',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Quien soy y más sobre mi</h2>
      <p>
        Me llamo Juan Sebastian soy un desarrollador de Software de Colombia con
        gran afición al mundo Tecnológico, autodidacta y apasionado por aprender
        más todos los días sobre nuevas tecnologias. <br />
        <br /> A lo largo de mi aventura en el mundo del desarrollo, me
        involucre en el desarrollo de pequeños proyectos, proponiéndome retos,
        los cuales me enseñaron a corregir mis propios errores al desarrollar
        software.
      </p>
      <h2>Trayectoria</h2>
      <p>
        Experiencia con equipos pequeños y en la participación de todo
        proceso de una aplicación (desde el planteamiento inicial, extracción
        de funcionalidades necesarias, desarrollo, pruebas y evolución).
        <br /> <br />
        Busco ampliar mis conocimientos en la programación y obtener experiencia
        formando parte de un productivo y exitoso equipo. Tengo habilidad para
        adaptarme rapido en cualquier espacio.
        <br /> <br />I have a basic level of english, knowing the necessary for
        communication, as well as consume documentation content in this
        language.
      </p>
      <h2>Intereses y Hobbies</h2>
      <p>
        Interesado en aprender cada dia más, mejorar mi ingles y escalabilidad
        en general.
        <br /> En mi tiempo libre veo muchos documentales, me llama la atencion
        interacturar en proyectos de personas por GIT, leer y jugar video
        juegos.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Tecnico en Desarrollo de Software (2020-2022) (Titulado)</h2>
      <h4>Universidad Pascual Bravo</h4>
      <p>
        Durante mi estudio tecnico obtuve capacidad de responsabilidad,
        esfuerzo y sacrificio, forme parte de equipos de trabajo y presente mi
        primer proyecto web
      </p>
      <span>
        Actualmente cursando Tecnologia Analisis y Desarrollo de Software (Sena)
        (2024-Actualidad)
      </span>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificados y cursos</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <span title="Certificado Técnico">
            • Técnico en Análisis y Desarrollo de Software - Universidad Pascual
            Bravo
          </span>
        </li>
        <li>
          <span title="Universidad Java">
            • Universidad Java - Cero a Experto - Actualizado (+155 hrs) - Udemy
          </span>
        </li>
        <li>
          <span title="Maestría JavaScript">
            • Maestría en JavaScript: Desde Principiante Hasta Experto - Udemy
          </span>
        </li>
        <li>
          <span title="Curso MySQL">
            • Curso Intensivo de MySQL: Aprende SQL desde Cero a Experto - Udemy
          </span>
        </li>
        <li>
          <span title="Universidad Python">
            • Universidad Python con ChatGPT - IA - De Cero a Avanzado - Udemy
          </span>
        </li>
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>CV Privado</h2>
      <p>Dirigete a la sección de contacto.</p>
    </>
  );
}
function Experience() {
  return (
    <>
      <p>
        Tengo experiencia en proyectos pequeños a medida de mi ruta de aprendizaje
      </p>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Actualizado el 2 de Febrero, 2026</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="Juan Sebastian Pulgarin Profile"
              className={styles.img}
            />
            <h1>Juan Sebastian Pulgarin</h1>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  formación
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificados"
                >
                  Certificados
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiencia
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
