import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiSpring,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiIntellijidea,
} from 'react-icons/si'

const header = {
  homepage: 'https://github.com/danialvarado472',
  title: 'DA.',
}

const about = {
  name: 'Daniela Alvarado',
  role: {
    es: 'Ingeniera de Software',
    en: 'Software Engineer',
  },
  description: {
    es: 'Soy una Ingeniería de Software apasionada por la tecnología, el desarrollo web y la creación de soluciones que impacten positivamente a las personas. Me gusta aprender constantemente y aplicar mis conocimientos en proyectos prácticos que me permitan crecer profesional y personalmente. Tengo experiencia trabajando tanto en el frontend como en el backend, y me interesa especialmente el desarrollo de aplicaciones completas que integren diseño, funcionalidad y buena experiencia de usuario.',
    en: 'I am a Software Engineer passionate about technology, web development, and creating solutions that positively impact people. I enjoy constantly learning and applying my knowledge to practical projects that allow me to grow both professionally and personally. I have experience working in both frontend and backend development, and I am especially interested in building full applications that integrate design, functionality, and a good user experience.',
  },
  resume: 'https://drive.google.com/uc?export=download&id=1dbkyTaR49RTFObuV6arony03c9VOKohn',
}

const projects = [
  {
    name: {
      es: 'Proyecto Gestión de Multas',
      en: 'Traffic Fines Management Project',
    },
    description: {
      es: 'Como proyecto de la universidad, desarrollamos una aplicación web completa para la gestión de multas, que permite registrar, consultar, modificar y eliminar sanciones de manera eficiente. El sistema cuenta con un frontend interactivo y fácil de usar, y un backend robusto que gestiona la lógica de negocio y la persistencia de datos.',
      en: 'As a university project, we developed a complete web application for managing traffic fines, allowing users to register, consult, modify, and delete sanctions efficiently. The system features an interactive and user-friendly frontend and a robust backend to handle business logic and data persistence.',
    },
    stack: ['JavaScript', 'HTML', 'CSS', 'C#', 'TSQL'],
    sourceCode: 'https://github.com/NotFabianML/Proyecto2-GestionDeMultas-Frontend.git',
    
  },
  {
    name: {
      es: 'Juego de Pokémon',
      en: 'Pokémon Game',
    },
    description: {
      es: 'Desarrollé una aplicación web interactiva inspirada en el universo Pokémon, que permite a los usuarios crear equipos, registrar batallas y gestionar sus Pokémon favoritos. La plataforma permite el registro de dos jugadores por partida, quienes pueden seleccionar sus equipos y enfrentarse en batallas simuladas.',
      en: 'I developed an interactive web application inspired by the Pokémon universe, allowing users to create teams, record battles, and manage their favorite Pokémon. The platform supports two-player matches where users select their teams and engage in simulated battles.',
    },
    stack: ['JavaScript', 'HTML', 'CSS', 'EJS#'],
    sourceCode: 'https://github.com/Pabloscode23/PokemonBattleUCENFOTEC.github.io.git',
  },
  {
    name: {
      es: 'Mi Portafolio',
      en: 'My Portfolio',
    },
    description: {
      es: 'Diseñé y desarrollé un portafolio web profesional desde cero para presentar mis proyectos, habilidades y experiencia como estudiante de Ingeniería de Software. El sitio está construido con un diseño limpio, moderno y responsive, pensado para ofrecer una navegación intuitiva desde cualquier dispositivo.',
      en: 'I designed and developed a professional web portfolio from scratch to showcase my projects, skills, and experience as a Software Engineering student. The site features a clean, modern, and responsive design for smooth navigation across devices.',
    },
    stack: ['JavaScript', 'HTML', 'CSS',],
    sourceCode: 'https://github.com/danialvarado472/mydportfolio',
  },
]

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Photoshop', icon: SiAdobephotoshop },
  { name: 'Illustrator', icon: SiAdobeillustrator },
  { name: 'Figma', icon: SiFigma },
  { name: 'Postman', icon: SiPostman },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Spring Boot', icon: SiSpring },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'IntelliJ IDEA', icon: SiIntellijidea },
]

const contact = {
  email: 'danialvarado472@gmail.com',
  title: {
    es: 'Contacto',
    en: 'Contact',
  },
  button: {
    es: 'Correo',
    en: 'Email',
  },
}

const footer = {
  text: {
    es: 'Creado por Daniela Alvarado',
    en: 'Created by Daniela Alvarado',
  },
}

export { header, about, projects, skills, contact, footer }