export interface ExperienceEntry {
  id: string;
  company: string;
  location: { en: string; es: string };
  period: { en: string; es: string };
  role: { en: string; es: string };
  description: { en: string; es: string };
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "openbank",
    company: "Openbank",
    location: { en: "Madrid, Spain", es: "Madrid, España" },
    period: { en: "Mar 2023 — Present", es: "Mar 2023 — Actualidad" },
    role: {
      en: "Associate Software Engineer Manager (since Oct 2025) · previously Back End Developer",
      es: "Associate Software Engineer Manager (desde oct. 2025) · antes Back End Developer",
    },
    description: {
      en: "Joined as a backend engineer on Java and Spring Boot, and was promoted into engineering management after two and a half years. Now leads a team while staying technical, and is part of the bank's push to bring AI-assisted engineering into day-to-day delivery.",
      es: "Se incorporó como backend engineer en Java y Spring Boot, y fue promovido a gestión de ingeniería tras dos años y medio. Actualmente lidera un equipo sin dejar la parte técnica, y participa en la iniciativa del banco para llevar la ingeniería asistida por IA al día a día.",
    },
    tags: ["Java", "Spring Boot", "Engineering Management", "AI-assisted delivery"],
  },
  {
    id: "grant-thornton",
    company: "Grant Thornton España",
    location: { en: "Madrid, Spain", es: "Madrid, España" },
    period: { en: "Mar 2020 — Jan 2023", es: "Mar 2020 — Ene 2023" },
    role: { en: "Senior Software Engineer", es: "Senior Software Engineer" },
    description: {
      en: "Built and maintained web applications and microservices for BMW's automation suite, working across C#/.NET and Java/Spring Boot on the backend and React and Angular on the front end, against MySQL, Postgres and DynamoDB. Shipped on Docker with Jenkins and Drone CI on AWS.",
      es: "Desarrolló y mantuvo aplicaciones web y microservicios para la suite de automatización de BMW, alternando entre C#/.NET y Java/Spring Boot en backend, y React y Angular en frontend, sobre MySQL, Postgres y DynamoDB. Despliegues con Docker, Jenkins y Drone CI en AWS.",
    },
    tags: ["C#/.NET", "Java", "Spring Boot", "React", "Angular", "AWS", "Docker"],
  },
  {
    id: "john-deere",
    company: "John Deere",
    location: { en: "Mannheim, Germany", es: "Mannheim, Alemania" },
    period: { en: "Jan 2019 — Mar 2020", es: "Ene 2019 — Mar 2020" },
    role: { en: "Senior Full Stack Developer", es: "Senior Full Stack Developer" },
    description: {
      en: "Built Java/Spring Boot microservices supporting tractor and implement fleet operations, backed by MySQL, Postgres and DynamoDB, deployed to AWS Lambda and Elastic Beanstalk through a Jenkins CI/CD pipeline.",
      es: "Desarrolló microservicios en Java/Spring Boot para dar soporte a las operaciones de flotas de tractores e implementos, sobre MySQL, Postgres y DynamoDB, desplegados en AWS Lambda y Elastic Beanstalk mediante un pipeline de CI/CD en Jenkins.",
    },
    tags: ["Java", "Spring Boot", "AWS Lambda", "DynamoDB", "Jenkins", "DDD/TDD"],
  },
  {
    id: "ust-global",
    company: "UST Global",
    location: { en: "Madrid, Spain", es: "Madrid, España" },
    period: { en: "Nov 2017 — Jan 2019", es: "Nov 2017 — Ene 2019" },
    role: { en: ".NET Technical Lead — Development & QA", es: ".NET Technical Lead — Desarrollo y QA" },
    description: {
      en: "Led development and test strategy for Experian's application suite, including a GDPR compliance project. Built web apps in C#/ASP.NET MVC on AWS and Azure, and led automated testing with Selenium, Cucumber, SoapUI, Postman and Rest Assured.",
      es: "Lideró el desarrollo y la estrategia de testing de la suite de aplicaciones de Experian, incluyendo un proyecto de cumplimiento GDPR. Desarrolló aplicaciones en C#/ASP.NET MVC sobre AWS y Azure, y lideró el testing automatizado con Selenium, Cucumber, SoapUI, Postman y Rest Assured.",
    },
    tags: ["C#", "ASP.NET MVC", "Selenium", "Cucumber", "Test Leadership", "AWS/Azure"],
  },
  {
    id: "ncs",
    company: "NCS — Consultoría Tecnológica",
    location: { en: "Achilles South Europe", es: "Achilles South Europe" },
    period: { en: "Oct 2014 — Oct 2017", es: "Oct 2014 — Oct 2017" },
    role: { en: "Senior Programmer Analyst", es: "Analista Programador Senior" },
    description: {
      en: "Three years as a senior analyst-programmer on the Achilles South Europe engagement, the project that brought him from Venezuela to Spain.",
      es: "Tres años como analista programador senior en el proyecto Achilles South Europe, el encargo que lo trajo de Venezuela a España.",
    },
    tags: ["Consulting", "Enterprise Systems"],
  },
  {
    id: "ucab-professor",
    company: "UCAB — Universidad Católica Andrés Bello",
    location: { en: "Venezuela", es: "Venezuela" },
    period: { en: "Jan 2014 — Oct 2014", es: "Ene 2014 — Oct 2014" },
    role: { en: "Professor, Web Application Development", es: "Profesor, Desarrollo de Aplicaciones Web" },
    description: {
      en: "Taught web application development at his alma mater, covering CakePHP, Play, Struts2, Zend, ASP.NET MVC, Ruby on Rails and Django — seven frameworks across five languages, to students.",
      es: "Impartió desarrollo de aplicaciones web en su alma mater, cubriendo CakePHP, Play, Struts2, Zend, ASP.NET MVC, Ruby on Rails y Django — siete frameworks en cinco lenguajes, a sus alumnos.",
    },
    tags: ["Teaching", "CakePHP", "Rails", "Django", "ASP.NET MVC"],
  },
  {
    id: "aco-rent-a-car",
    company: "ACO Rent A Car",
    location: { en: "Venezuela", es: "Venezuela" },
    period: { en: "Mar 2013 — Oct 2014", es: "Mar 2013 — Oct 2014" },
    role: { en: "Senior .NET Developer — Web Project Leader", es: "Senior .NET Developer — Líder de Proyecto Web" },
    description: {
      en: "Led development of the company's new vehicle booking and quoting website and its corporate intranet, on .NET/WCF against SQL Server and Oracle, and deployed a SharePoint server for internal documentation — his first project-leadership role.",
      es: "Lideró el desarrollo del nuevo sitio de reservas y cotización de vehículos y de la intranet corporativa, sobre .NET/WCF contra SQL Server y Oracle, además de desplegar un servidor SharePoint para documentación interna — su primer rol de liderazgo de proyecto.",
    },
    tags: [".NET", "WCF", "SQL Server", "SharePoint", "Project Leadership"],
  },
  {
    id: "dayco-host",
    company: "Dayco host",
    location: { en: "Venezuela", es: "Venezuela" },
    period: { en: "Sep 2011 — Mar 2013", es: "Sep 2011 — Mar 2013" },
    role: { en: "Software Developer", es: "Software Developer" },
    description: {
      en: "First role out of university: built a Balanced Scorecard management tool, an ITIL-based Help Desk system, Active Directory/Exchange account-management tooling, and DaycoCloud, an internal virtual-machine provisioning app.",
      es: "Primer puesto tras la universidad: desarrolló una herramienta de Balanced Scorecard, un sistema de Help Desk basado en ITIL, herramientas de gestión de cuentas de Active Directory/Exchange, y DaycoCloud, una aplicación interna de aprovisionamiento de máquinas virtuales.",
    },
    tags: ["ITIL", "Active Directory", "Internal Tools"],
  },
];
