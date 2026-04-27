export type Lang = 'en' | 'es'

export const t = {
  en: {
    nav: { portfolio: 'Portfolio', experience: 'Experience', volunteering: 'Volunteering', contact: 'Contact', lang_toggle: 'ES', lang_href: '/es/' },
    hero: {
      line1: 'I build apps &',
      highlight: 'experiences',
      subtitle: 'Systems Engineering student at UNAL focused on Front-End, Mobile & UX/UI development.',
      cta: 'See portfolio',
    },
    service: {
      heading: 'What I build and the tools I use',
      stats: [
        { name: 'projects', value: '6+' },
        { name: 'certifications', value: '3' },
        { name: 'experience', value: '3 years' },
      ],
      items: [
        { name: 'Frontend Dev', desc: 'Responsive web interfaces with React, HTML5, CSS3 & TypeScript' },
        { name: 'Mobile Dev', desc: 'Cross-platform mobile apps with Flutter & Dart' },
        { name: 'UX/UI Design', desc: 'User-centered design, wireframes & prototypes with Figma' },
        { name: 'Data Science', desc: 'Data analysis & ML workflows with Python, Pandas & NumPy' },
      ],
    },
    works: { heading: 'My Portfolio' },
    education: {
      heading: 'Education & Languages',
      degree: 'Systems Engineering',
      university: 'Universidad Nacional de Colombia',
      period: '2022 – 2027',
      lang_heading: 'Languages',
      langs: [
        { name: 'Spanish', level: 'C2 – Native' },
        { name: 'English', level: 'C1 – Advanced' },
        { name: 'German', level: 'B1 – Intermediate' },
        { name: 'French', level: 'A2 – Elementary' },
        { name: 'Korean', level: 'A2 – Elementary' },
      ],
    },
    experience: {
      heading: 'Work Experience',
      jobs: [
        {
          role: 'Developer',
          org: 'Vicedecanatura de Investigación y Extensión · UNAL, Facultad de Ingeniería',
          period: 'May 2025 – December 2025',
          bullets: [
            'Advanced Excel VBA macro automation for student grant management and result validation',
            'Backend & frontend maintenance of the appointment booking system',
            'Google Apps Script web systems for institutional data management',
            'Web page updates and digital communication strategy for the department',
          ],
        },
      ],
    },
    volunteering: {
      heading: 'Volunteering & Certifications',
      vol_label: 'Volunteering',
      cert_label: 'Certifications',
      award_label: 'Award',
      items: [
        {
          org: 'KOCO Supporters — KOICA Colombia',
          role: 'Content Creator & Cultural Events Coordinator',
          period: 'Apr 2025 – Nov 2025',
          desc: 'Audiovisual and graphic content for KOICA Colombia channels, fostering intercultural connectivity between Korea and Colombia.',
        },
        {
          org: 'Data Science Research Perú',
          role: 'Social Media Leader',
          period: 'Aug 2024 – Dec 2024',
          desc: 'Social media strategy to empower women in Data Science, AI and emerging tech across Latin America.',
        },
        {
          org: 'Haneul Ssem (하늘쌤)',
          role: 'English Area Coordinator & PM',
          period: '2021 – 2023',
          desc: 'Led 15+ weekly educational resources about Korean culture in English. Managed content planning, branding and team coordination.',
        },
      ],
      certs: [
        { name: 'Full Stack Development', issuer: 'Talento Tech Región 3', date: 'Dec 2024' },
        { name: 'Data Science', issuer: 'Bedu', date: 'Mar 2024' },
        { name: 'Mobile App Development', issuer: 'Atenea', date: 'Nov 2023' },
      ],
      award: {
        name: '2021 Global Youth Environmental Essay Contest',
        issuer: 'Korean Educational Association for Empowerment of Software · Aug 2021',
      },
    },
    cta: {
      heading: "Let's build something together",
      subtitle: 'Looking for a collaborator or have a project idea? Let\'s talk.',
      button: 'Contact me',
    },
    footer: { copy: 'All rights reserved.' },
  },

  es: {
    nav: { portfolio: 'Portafolio', experience: 'Experiencia', volunteering: 'Voluntariados', contact: 'Contacto', lang_toggle: 'EN', lang_href: '/' },
    hero: {
      line1: 'Construyo apps &',
      highlight: 'experiencias',
      subtitle: 'Estudiante de Ingeniería de Sistemas en la UNAL con enfoque en Front-End, Móvil y UX/UI.',
      cta: 'Ver portafolio',
    },
    service: {
      heading: 'Qué construyo y con qué herramientas',
      stats: [
        { name: 'proyectos', value: '6+' },
        { name: 'certificaciones', value: '3' },
        { name: 'experiencia', value: '3 años' },
      ],
      items: [
        { name: 'Desarrollo Frontend', desc: 'Interfaces web responsivas con React, HTML5, CSS3 y TypeScript' },
        { name: 'Desarrollo Móvil', desc: 'Apps multiplataforma con Flutter y Dart' },
        { name: 'Diseño UX/UI', desc: 'Diseño centrado en el usuario, wireframes y prototipos con Figma' },
        { name: 'Ciencia de Datos', desc: 'Análisis de datos y flujos de ML con Python, Pandas y NumPy' },
      ],
    },
    works: { heading: 'Mi Portafolio' },
    education: {
      heading: 'Formación e Idiomas',
      degree: 'Ingeniería de Sistemas y Computación',
      university: 'Universidad Nacional de Colombia',
      period: '2022 – 2027',
      lang_heading: 'Idiomas',
      langs: [
        { name: 'Español', level: 'C2 – Nativo' },
        { name: 'Inglés', level: 'C1 – Avanzado' },
        { name: 'Alemán', level: 'B1 – Intermedio' },
        { name: 'Francés', level: 'A2 – Básico' },
        { name: 'Coreano', level: 'A2 – Básico' },
      ],
    },
    experience: {
      heading: 'Experiencia Laboral',
      jobs: [
        {
          role: 'Desarrolladora',
          org: 'Vicedecanatura de Investigación y Extensión · UNAL, Facultad de Ingeniería',
          period: 'Mayo 2025 – Diciembre 2025',
          bullets: [
            'Automatizaciones avanzadas con Excel VBA para gestión y validación de convocatorias estudiantiles',
            'Mantenimiento del backend y frontend del aplicativo de citas de la Vicedecanatura',
            'Sistemas web en Google Apps Script para gestión de información institucional',
            'Actualización de páginas web y estrategia de comunicación digital',
          ],
        },
      ],
    },
    volunteering: {
      heading: 'Voluntariados y Certificaciones',
      vol_label: 'Voluntariados',
      cert_label: 'Certificaciones',
      award_label: 'Premio',
      items: [
        {
          org: 'KOCO Supporters — KOICA Colombia',
          role: 'Creadora de contenido y coordinadora de eventos culturales',
          period: 'Abr 2025 – Nov 2025',
          desc: 'Contenido audiovisual y gráfico para los canales de KOICA Colombia, fomentando la conectividad intercultural entre Corea y Colombia.',
        },
        {
          org: 'Data Science Research Perú',
          role: 'Líder de redes sociales',
          period: 'Ago 2024 – Dic 2024',
          desc: 'Estrategia de redes sociales para empoderar mujeres en Ciencia de Datos, IA y tecnologías emergentes en Latinoamérica.',
        },
        {
          org: 'Haneul Ssem (하늘쌤)',
          role: 'Coordinadora del área de inglés y PM',
          period: '2021 – 2023',
          desc: 'Más de 15 recursos educativos semanales sobre cultura coreana en inglés. Gestión de contenido, branding y coordinación del equipo.',
        },
      ],
      certs: [
        { name: 'Diplomado en Desarrollo Full Stack', issuer: 'Talento Tech Región 3', date: 'Dic 2024' },
        { name: 'Diplomado en Ciencia de Datos', issuer: 'Bedu', date: 'Mar 2024' },
        { name: 'Diplomado en Desarrollo Móvil Básico', issuer: 'Atenea', date: 'Nov 2023' },
      ],
      award: {
        name: '2021 Global Youth Environmental Essay Contest',
        issuer: 'Korean Educational Association for Empowerment of Software · Ago 2021',
      },
    },
    cta: {
      heading: 'Construyamos algo juntos',
      subtitle: '¿Buscas un colaborador o tienes una idea de proyecto? Hablemos.',
      button: 'Contáctame',
    },
    footer: { copy: 'Todos los derechos reservados.' },
  },
}
