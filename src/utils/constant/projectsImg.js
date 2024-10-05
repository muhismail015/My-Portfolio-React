
const suikaWebImages = import.meta.glob('/src/assets/ProjectsImg/SuikaWeb/*.svg', { eager: true })
const suikaBotImages = import.meta.glob('/src/assets/ProjectsImg/SuikaBot/*.svg', { eager: true })
const waIntipImages = import.meta.glob('/src/assets/ProjectsImg/WaIntip/*.svg', { eager: true })
const bamManagementImages = import.meta.glob('/src/assets/ProjectsImg/BamManagement/*.svg', { eager: true })
const happyCatImages = import.meta.glob('/src/assets/ProjectsImg/HappyCat/*.svg', { eager: true })
const covidIdImages = import.meta.glob('/src/assets/ProjectsImg/CovidId/*.svg', { eager: true })
const movieAppImages = import.meta.glob('/src/assets/ProjectsImg/MovieApp/*.svg', { eager: true })
const siCloudImages = import.meta.glob('/src/assets/ProjectsImg/SiCloud/*.svg', { eager: true })
const siInKaImages = import.meta.glob('/src/assets/ProjectsImg/SiInKa/*.svg', { eager: true })
const portfolioPhpImages = import.meta.glob('/src/assets/ProjectsImg/PortfolioPhp/*.svg', { eager: true })

const suikaWeb = Object.keys(suikaWebImages);
const suikaBot = Object.keys(suikaBotImages);
const waIntip = Object.keys(waIntipImages);
const bamManagement = Object.keys(bamManagementImages);
const happyCat = Object.keys(happyCatImages);
const covidId = Object.keys(covidIdImages);
const movieApp = Object.keys(movieAppImages);
const siCloud = Object.keys(siCloudImages);
const siInKa = Object.keys(siInKaImages);
const portfolioPhp = Object.keys(portfolioPhpImages);

export { suikaWeb, suikaBot, waIntip, bamManagement, happyCat, covidId, movieApp, siCloud, siInKa, portfolioPhp }
