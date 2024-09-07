import SuikaImg from "../../assets/suikabot.png";
import WaIntipImg from "../../assets/wa-intip.png";
import BamImg from "../../assets/bam.png";
import SiCloudImg from "../../assets/sicloud.png";
import MovieAppImg from "../../assets/movieapp.png";

const projectsData = [
  {
    id: 1,
    title: "SuikaBot",
    category: "Web/Bot",
    desc: "WhatsApp Bot with many usefull feature and integrated with AI using Google Gemini AI and Google Imagen. This bot is made with Node.js and WhatsApp-Web.js library. Website is made with React.js and Express.js for manage data, API and information.",
    img: SuikaImg,
    link: "https://suika.pw",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "Node.js",
      "WhatsApp-Web.js",
      "Midtrans",
      "Gemini API",
      "Imagen API",
      "Google Cloud Platform",
      "DEEPL API",
      "OpenAI API",
      "React.js Vite",
      "Express.js",
      "TailwindCSS",
      "Flowbite",
    ],
  },
  {
    id: 2,
    title: "WA Intip",
    category: "Bot",
    desc: "A whatsapp bot to see one time view message from whatsapp, using whatsapp-web-js. Soon integrated in website version",
    img: WaIntipImg,
    link: "https://github.com/muhismail015/WA-Intip",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["WhatsApp-Web.js", "Node.js", "FFMPEG"],
  },
  {
    id: 3,
    title: "Bengkel Aulia Motor Management",
    category: "Web",
    desc: "Website to manage inventory and financial data for Aulia Motor Workshop",
    img: BamImg,
    link: "https://github.com/muhismail015/Bengkel-Aulia-Motor_Inventory-Management",
    additionals: [
      {
        show: false,
      },
    ],
    tag: [
      "React.js Vite",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "MySQL",
      "PrelineUI",
      "Sweetalert2",
    ],
  },
  {
    id: 4,
    title: "SiCloud - Cloud Online Course",
    category: "Web",
    desc: "Web application to manage online course, with main feature to see free course about AWS. This project is made with Laravel",
    img: SiCloudImg,
    link: "https://github.com/muhismail015/SiCloud-Cloud_Online_Course",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["Laravel", "PHP", "Bootstrap", "MySQL", "Sweetalert2"],
  },
  {
    id: 5,
    title: "Movie App",
    category: "Web",
    desc: "Movie App is a web application to see and watch movie fom TMdb API, this project is made with React.js",
    img: MovieAppImg,
    link: "https://mytask-frontend-sabtu.vercel.app/",
    additionals: [
      {
        show: false,
      },
    ],
    tag: ["React.js", "TMdb API", "Styled Components", "Vercel"],
  },
];

export default projectsData;
