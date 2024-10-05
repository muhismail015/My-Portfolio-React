
const suikaWebImages = import.meta.glob('../../assets/ProjectsImg/SuikaWeb/*.svg', { eager: true, })
const suikaBotImages = import.meta.glob('../../assets/ProjectsImg/SuikaBot/*.svg', { eager: true, })
const waIntipImages = import.meta.glob('../../assets/ProjectsImg/WaIntip/*.svg', { eager: true, })
const bamManagementImages = import.meta.glob('../../assets/ProjectsImg/BamManagement/*.svg', { eager: true, })
const happyCatImages = import.meta.glob('../../assets/ProjectsImg/HappyCat/*.svg', { eager: true, })
const covidIdImages = import.meta.glob('../../assets/ProjectsImg/CovidId/*.svg', { eager: true, })
const movieAppImages = import.meta.glob('../../assets/ProjectsImg/MovieApp/*.svg', { eager: true, })
const siCloudImages = import.meta.glob('../../assets/ProjectsImg/SiCloud/*.svg', { eager: true, })
const siInKaImages = import.meta.glob('../../assets/ProjectsImg/SiInKa/*.svg', { eager: true, })
const portfolioPhpImages = import.meta.glob('../../assets/ProjectsImg/PortfolioPhp/*.svg', { eager: true, })

const suikaWeb = Object.values(suikaWebImages).map(img => img.default);
const suikaBot = Object.values(suikaBotImages).map(img => img.default); 
const waIntip = Object.values(waIntipImages).map(img => img.default); 
const bamManagement = Object.values(bamManagementImages).map(img => img.default); 
const happyCat = Object.values(happyCatImages).map(img => img.default); 
const covidId = Object.values(covidIdImages).map(img => img.default); 
const movieApp = Object.values(movieAppImages).map(img => img.default); 
const siCloud = Object.values(siCloudImages).map(img => img.default); 
const siInKa = Object.values(siInKaImages).map(img => img.default); 
const portfolioPhp = Object.values(portfolioPhpImages).map(img => img.default); 

export { suikaWeb, suikaBot, waIntip, bamManagement, happyCat, covidId, movieApp, siCloud, siInKa, portfolioPhp }
