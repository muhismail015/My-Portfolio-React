import { suikaWeb, suikaBot, waIntip, bamManagement, happyCat, covidId, movieApp, siCloud, siInKa, portfolioPhp } from "./projectsImg";

let id = 1;

const projectsData = [
  {
    id: id++,
    title: "SuikaWeb",
    category: "Website",
    type: "Frontend & Backend",
    desc: "Website to manage information about SuikaBot number, monitoring virtual machine, and others. This website is made with React.js Vite and Express.js for backend.",
    img: [suikaWeb],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: false,
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: "https://suika.pw/",
        icon: "fa-solid fa-globe",
      }
    ],
    tag: [
      "React.js Vite",
      "TailwindCSS",
      "Flowbite",
      "Flowbite-React",
      "Apex Charts",
      "React-Data-Table-Component",
      "Express.js",
      "MySQL",
      "JWT",
    ],
  },
  {
    id: id++,
    title: "SuikaBot",
    category: "Bot",
    type: "Backend",
    desc: "A Whatsapp bot with many useful features, such as: create sticker, create image from text, ai gemini, downloader, converter file, and more. This bot is made with Node.js and WhatsApp-Web.js.",
    img: [suikaBot],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: false,
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: "https://api.whatsapp.com/send/?phone=6285179910233&text=p&type=phone_number&app_absent=0",
        icon: "fa-brands fa-whatsapp",
      }
    ],
    tag: [
      "Node.js",
      "WhatsApp-Web.js",
      "Midtrans",
      "Gemini API",
      "Imagen API",
      "DEEPL API",
      "OpenAI API",
      "Google Cloud Platform",
      "Azure",
    ],
  },
  {
    id: id++,
    title: "WA Intip",
    category: "Bot",
    type: "Backend",
    desc: "A Whatsapp bot to see one time view message from whatsapp, using whatsapp-web-js. Soon integrated in website version for easier use.",
    img: [waIntip],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/WA-Intip",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: false,
        icon: "fa-brands fa-whatsapp",
      }
    ],
    tag: ["WhatsApp-Web.js", "Node.js", "FFMPEG"],
  },
  {
    id: id++,
    title: "BAM Management",
    category: "Website",
    type: "Frontend & Backend",
    desc: "BAM Management is a Bengkel Aulia Motor Management, web to manage inventory and financial data for Aulia Motor Workshop.",
    img: [bamManagement],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/Bengkel-Aulia-Motor_Inventory-Management",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: false,
        icon: "fa-solid fa-globe",
      }
    ],
    tag: [
      "React.js Vite",
      "TailwindCSS",
      "PrelineUI",
      "Sweetalert2",
      "Express.js",
      "JWT",
      "MySQL",
    ],
  },
  {
    id: id++,
    title: "Happy Cat",
    category: "Website",
    type: "Frontend",
    desc: "Happy Cat is a website and shelter for homeless cats, dedicated to providing protection, adoption services, and education on cat care, ensuring a loving environment for every cat in need.",
    img: [happyCat],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/Happy-Cats_Macro-Project",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: "https://happy-cats-macro-project.vercel.app/",
        icon: "fa-solid fa-globe",
      }
    ],
    tag: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Vercel",
    ],
  },
  {
    id: id++,
    title: "Covid ID",
    category: "Website",
    type: "Frontend",
    desc: "Covid ID is a web information about covid-19. The covid data is using from @aufaroot18, this project is made with React.js.",
    img: [covidId],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/mytask-frontend-sabtu/tree/final-project/react-covid",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: "https://react-covid-pi.vercel.app/",
        icon: "fa-solid fa-globe",
      }
    ],
    tag: ["React.js", "Consume API", "Styled Components", "Vercel"],
  },
  {
    id: id++,
    title: "Movie App",
    category: "Website",
    type: "Frontend",
    desc: "Movie App is a web to see recomendation movie. The movie data using TMdb API, this project is made with React.js.",
    img: [movieApp],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/mytask-frontend-sabtu/tree/pertemuan-13",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: "https://mytask-frontend-sabtu.vercel.app/",
        icon: "fa-solid fa-globe",
      }
    ],
    tag: ["React.js", "TMdb API", "Styled Components", "Vercel"],
  },
  {
    id: id++,
    title: "SiCloud",
    category: "Website",
    type: "Frontend & Backend",
    desc: "SiCloud is a web to manage online course, with main feature to see free course about AWS. This project is made with Laravel.",
    img: [siCloud],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/SiCloud-Cloud_Online_Course",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: false,
        icon: "fa-solid fa-globe",
      }
    ],
    tag: ["Laravel", "PHP", "Bootstrap", "MySQL", "Sweetalert2", "Laravel-DOM-PDF", "Sanctum", "Livewire", "MVC"],
  },
  {
    id: id++,
    title: "SIINKA",
    category: "Website",
    type: "Frontend & Backend",
    desc: "SIINKA (Sistem Inventaris Kantor), is a web-based Office Inventory System enables efficient management of inventory items. The user can add, edit, and monitor stock and ordering needs.",
    img: [siInKa],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/php/tree/Tugas7_PDO_Mini-Project",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: false,
        icon: "fa-solid fa-globe",
      }
    ],
    tag: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL", "Template/Layouting", "MVC"],
  },
  {
    id: id++,
    title: "Portfolio (Archived)",
    category: "Website",
    type: "Frontend",
    desc: "This is my old portfolio website, made with PHP and Bootstrap.",
    img: [portfolioPhp],
    additionals: [
      {
        show: true,
      },
      {
        text: "Github",
        link: "https://github.com/muhismail015/php/tree/Tugas7_PDO_Mini-Project",
        icon: "fa-brands fa-github",
      },
      {
        text: "Demo",
        link: false,
        icon: "fa-solid fa-globe",
      }
    ],
    tag: ["HTML", "CSS", "PHP", "Bootstrap", "Template/Layouting"],
  },
];

export default projectsData;
