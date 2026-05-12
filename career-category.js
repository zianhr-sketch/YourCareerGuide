const careerCategories = {
  "social-helping": {
    title: "Social & Helping Careers",
    tag: "Helping & Community",
    description: "This category focuses on careers that involve supporting, guiding, and improving people's well-being. These roles require strong emotional intelligence and communication skills.",
    who: ["You enjoy helping others solve problems", "You are patient and a good listener", "You care about people's mental or social well-being"],
    examples: "Counselor, Psychologist, Teacher, Social Worker, Therapist",
    skills: ["Empathy", "Communication", "Patience", "Critical thinking", "Good listening and emotional support"],
    pathway: [
      ["SPM", "Biology, Bahasa Melayu, English"],
      ["STPM / Diploma", "Psychology or Education"],
      ["Bachelor's Degree", "Counseling / Psychology / Education"],
      ["Career", "Counselor, Psychologist, Teacher, Social Worker, Therapist"]
    ]
  },
  "media-communication": {
    title: "Media & Communication",
    tag: "Creative & Media",
    description: "This category is about sharing information, telling stories, and creating engaging content through digital platforms, journalism, and media production.",
    who: ["You love social media, videos, or writing", "You enjoy expressing ideas creatively", "You are confident in communication"],
    examples: "Multimedia Journalist, Content Creator, Public Relations Specialist, Broadcaster, Copywriter",
    skills: ["Creativity", "Storytelling", "Communication", "Editing", "Confidence in expressing ideas"],
    pathway: [
      ["SPM", "English, Bahasa Melayu, ICT"],
      ["STPM / Diploma", "New Media Communication / Mass Communication"],
      ["Bachelor's Degree", "Journalism / Media Studies"],
      ["Career", "Journalist, Content Creator, PR Specialist, Broadcaster, Copywriter"]
    ]
  },
  "creative-design": {
    title: "Creative & Design",
    tag: "Design & Visual Arts",
    description: "This category focuses on visual creativity, design, and artistic expression. It involves creating visual content for branding, media, and digital platforms.",
    who: ["You enjoy drawing, designing, or editing", "You think creatively and visually", "You like making things look attractive"],
    examples: "Graphic Designer, UI/UX Designer, Animator, Illustrator, Photographer",
    skills: ["Creativity", "Attention to detail", "Design thinking", "Visual communication", "Creative tool skills"],
    pathway: [
      ["SPM", "Art, ICT"],
      ["Diploma", "Graphic Design / Multimedia"],
      ["Bachelor's Degree", "Creative Multimedia"],
      ["Career", "Graphic Designer, UI/UX Designer, Animator, Illustrator, Photographer"]
    ]
  },
  "technology-engineering": {
    title: "Technology & Engineering",
    tag: "Technology & Innovation",
    description: "This category involves solving problems using technology, systems, and innovation. It includes careers in IT, software, and engineering.",
    who: ["You enjoy solving problems", "You like computers or machines", "You think logically"],
    examples: "Software Developer, Data Analyst, Engineer, Cybersecurity Specialist",
    skills: ["Logical thinking", "Coding", "Problem-solving", "Analytical thinking", "Technical curiosity"],
    pathway: [
      ["SPM", "Math, Add Math, Science"],
      ["STPM / Diploma", "IT / Engineering"],
      ["Bachelor's Degree", "Computer Science / Engineering"],
      ["Career", "Software Developer, Data Analyst, Engineer, Cybersecurity Specialist"]
    ]
  },
  "business-entrepreneurship": {
    title: "Business & Entrepreneurship",
    tag: "Business & Leadership",
    description: "This category focuses on leadership, business management, and financial decision-making. It is suitable for individuals who want to lead or start their own business.",
    who: ["You like leading and organizing", "You are interested in money or business", "You enjoy decision-making"],
    examples: "Entrepreneur, Marketing Executive, Business Manager, Sales Manager",
    skills: ["Leadership", "Communication", "Decision-making", "Planning", "Team management"],
    pathway: [
      ["SPM", "Math, Business, Economics"],
      ["STPM / Diploma", "Business Studies"],
      ["Bachelor's Degree", "Business Administration"],
      ["Career", "Entrepreneur, Marketing Executive, Business Manager, Sales Manager"]
    ]
  },
  "science-healthcare": {
    title: "Science & Healthcare",
    tag: "Science & Health",
    description: "This category involves medical, scientific, and healthcare-related careers that focus on improving human health and conducting research.",
    who: ["You love science subjects", "You want to help people medically", "You are detail-oriented"],
    examples: "Doctor, Pharmacist, Nurse, Lab Scientist",
    skills: ["Attention to detail", "Critical thinking", "Discipline", "Scientific knowledge", "Care for patients"],
    pathway: [
      ["SPM", "Biology, Chemistry, Physics"],
      ["STPM", "Science Stream"],
      ["Bachelor's Degree", "Medicine / Pharmacy / Health Science"],
      ["Career", "Doctor, Pharmacist, Nurse, Lab Scientist"]
    ]
  },
  "law-public-service": {
    title: "Law & Public Service",
    tag: "Justice & Society",
    description: "This category focuses on justice, law enforcement, and government roles that maintain order and serve society.",
    who: ["You have a strong sense of justice", "You like debating or arguing", "You are disciplined"],
    examples: "Lawyer, Police Officer, Government Officer, Criminologist",
    skills: ["Critical thinking", "Communication", "Integrity", "Discipline", "Problem-solving"],
    pathway: [
      ["SPM", "History, Bahasa Melayu"],
      ["STPM", "Arts Stream"],
      ["Bachelor's Degree", "Law / Public Administration"],
      ["Career", "Lawyer, Police Officer, Government Officer, Criminologist"]
    ]
  },
  "technical-skilled-trades": {
    title: "Technical & Skilled Trades",
    tag: "Technical & Practical Work",
    description: "This category involves hands-on careers that require practical and technical skills rather than academic theory.",
    who: ["You prefer practical work", "You like fixing or building things", "You do not enjoy desk jobs"],
    examples: "Technician, Electrician, Mechanic, Construction Worker",
    skills: ["Practical skills", "Problem-solving", "Precision", "Tool handling", "Safety awareness"],
    pathway: [
      ["SPM", "Basic technical subjects"],
      ["TVET / Diploma", "Technical courses"],
      ["Certification", "Skill-based training"],
      ["Career", "Technician, Electrician, Mechanic, Construction Worker"]
    ]
  },
  "defense-security": {
    title: "Defense & Security Services",
    tag: "Safety & Protection",
    description: "This category focuses on careers that protect the country, maintain public safety, and enforce national laws. These roles require discipline, bravery, and strong physical and mental strength.",
    who: ["You are disciplined and responsible", "You want to serve the country", "You are physically active and brave", "You can work under pressure"],
    examples: "Police Officer, Firefighter, Navy Officer, Army Officer, Air Force Officer, Immigration Officer, Customs Officer",
    skills: ["Discipline", "Physical fitness", "Teamwork", "Decision-making", "Leadership"],
    pathway: [
      ["SPM", "Bahasa Melayu, Sejarah, English"],
      ["After SPM", "Training academies such as PDRM, Bomba, ATM"],
      ["Optional Diploma / Degree", "Security / Defense Studies"],
      ["Career", "Police, Firefighter, Navy, Army, Air Force, Immigration, Customs"]
    ]
  },
  "education-academia": {
    title: "Education & Academia",
    tag: "Teaching & Research",
    description: "This category focuses on teaching, research, and knowledge sharing. It plays an important role in shaping future generations.",
    who: ["You enjoy teaching and explaining", "You are patient and organized", "You love sharing knowledge", "You are academically strong"],
    examples: "Teacher, Lecturer, Tutor, Education Consultant",
    skills: ["Communication", "Patience", "Presentation skills", "Organization", "Mentoring"],
    pathway: [
      ["SPM", "Depends on subject specialization"],
      ["STPM / Diploma", "Education-related pathway"],
      ["Bachelor's Degree", "Education"],
      ["Career", "Teacher, Lecturer, Tutor, Education Consultant"]
    ]
  },
  "performing-arts": {
    title: "Performing Arts & Entertainment",
    tag: "Performance & Entertainment",
    description: "This category involves creative expression through music, acting, and performance. It focuses on entertaining and inspiring audiences.",
    who: ["You love performing or being on stage", "You are expressive and confident", "You enjoy music, acting, or entertainment"],
    examples: "Musician, Singer, Actor / Actress, Performer, Voice Artist",
    skills: ["Creativity", "Confidence", "Performance skills", "Discipline", "Stage presence"],
    pathway: [
      ["SPM", "Arts / Music optional"],
      ["Diploma", "Performing Arts / Music"],
      ["Bachelor's Degree", "Arts / Theatre / Music"],
      ["Career", "Musician, Singer, Actor, Performer, Voice Artist"]
    ]
  },
  "agriculture-farming": {
    title: "Agriculture & Farming",
    tag: "Food & Sustainability",
    description: "This category focuses on food production, farming, and agricultural innovation. It is essential for national food security and sustainability.",
    who: ["You enjoy nature and outdoor work", "You are practical and hardworking", "You are interested in plants or animals"],
    examples: "Farmer, Agricultural Officer, Plantation Manager, Agribusiness Entrepreneur",
    skills: ["Practical skills", "Patience", "Knowledge of agriculture", "Problem-solving", "Outdoor work"],
    pathway: [
      ["SPM", "Science / Agriculture subjects"],
      ["Diploma", "Agriculture"],
      ["Bachelor's Degree", "Agricultural Science"],
      ["Career", "Farmer, Agricultural Officer, Plantation Manager, Agribusiness Entrepreneur"]
    ]
  },
  "tourism-hospitality": {
    title: "Tourism & Hospitality",
    tag: "Travel & Service",
    description: "This category focuses on travel, tourism services, and hospitality industries. It plays a key role in Malaysia's economy.",
    who: ["You enjoy meeting new people", "You like traveling", "You are friendly and service-oriented"],
    examples: "Tour Guide, Hotel Manager, Travel Consultant, Event Planner",
    skills: ["Communication", "Customer service", "Organization", "Language skills", "People skills"],
    pathway: [
      ["SPM", "English, Geography"],
      ["Diploma", "Tourism / Hospitality"],
      ["Bachelor's Degree", "Tourism Management"],
      ["Career", "Tour Guide, Hotel Manager, Travel Consultant, Event Planner"]
    ]
  },
  "oil-gas-energy": {
    title: "Oil, Gas & Energy",
    tag: "Energy & Industry",
    description: "This category focuses on energy production, including oil, gas, and renewable energy industries. It is a high-demand and technical field.",
    who: ["You are interested in engineering or science", "You like working in technical environments", "You are willing to work in challenging locations"],
    examples: "Petroleum Engineer, Offshore Technician, Energy Analyst, Safety Officer",
    skills: ["Technical knowledge", "Problem-solving", "Physical and mental strength", "Safety awareness", "Discipline"],
    pathway: [
      ["SPM", "Physics, Math, Chemistry"],
      ["STPM / Diploma", "Engineering"],
      ["Bachelor's Degree", "Petroleum Engineering / Energy Studies"],
      ["Career", "Petroleum Engineer, Offshore Technician, Energy Analyst, Safety Officer"]
    ]
  },
  "aviation-cabin-crew": {
    title: "Aviation & Cabin Crew",
    tag: "Aviation & Travel",
    description: "This category focuses on careers in the aviation industry, including flying aircraft and ensuring passenger safety and comfort.",
    who: ["You enjoy traveling and exploring new places", "You are disciplined and responsible", "You can stay calm under pressure", "You enjoy interacting with people"],
    examples: "Pilot, Cabin Crew, Flight Dispatcher, Ground Crew",
    skills: ["Communication", "Discipline", "Decision-making", "Customer service", "Physical and mental fitness"],
    pathway: [
      ["SPM", "English, Mathematics, Physics"],
      ["After SPM", "Aviation academy / cabin crew training"],
      ["Professional Training", "Pilot license or airline training"],
      ["Career", "Pilot, Cabin Crew, Flight Dispatcher, Ground Crew"]
    ]
  },
  "accounting-finance": {
    title: "Accounting & Finance",
    tag: "Money & Analysis",
    description: "This category focuses on managing money, financial records, and business transactions. It plays a key role in ensuring organizations operate efficiently and legally.",
    who: ["You are good with numbers", "You are detail-oriented", "You like organizing and analyzing data", "You are responsible and careful"],
    examples: "Accountant, Auditor, Financial Analyst, Tax Consultant",
    skills: ["Numerical skills", "Attention to detail", "Analytical thinking", "Integrity", "Organization"],
    pathway: [
      ["SPM", "Mathematics, Accounting, Economics"],
      ["STPM / Diploma", "Accounting / Finance"],
      ["Bachelor's Degree", "Accounting / Finance"],
      ["Professional", "ACCA / CPA, then finance career"]
    ]
  },
  "language-translation": {
    title: "Language & Translation Services",
    tag: "Language & Global Communication",
    description: "This category focuses on communication across languages, helping people and organizations understand each other globally.",
    who: ["You enjoy learning languages", "You are good at writing and understanding meaning", "You are detail-oriented", "You are interested in global communication"],
    examples: "Translator, Interpreter, Language Specialist, Localization Specialist",
    skills: ["Language proficiency", "Attention to detail", "Cultural understanding", "Communication skills", "Writing skills"],
    pathway: [
      ["SPM", "Bahasa Melayu, English, additional languages"],
      ["STPM / Diploma", "Language Studies"],
      ["Bachelor's Degree", "Linguistics / Translation"],
      ["Career", "Translator, Interpreter, Language Specialist, Localization Specialist"]
    ]
  },
  "sports-athletics": {
    title: "Sports & Athletics",
    tag: "Sports & Fitness",
    description: "This category focuses on physical performance, competitive sports, and fitness-related careers.",
    who: ["You enjoy sports and physical activities", "You are disciplined and competitive", "You are physically active and committed", "You are willing to train consistently"],
    examples: "Professional Athlete, Football Player, Badminton Player, Fitness Trainer, Sports Coach",
    skills: ["Physical fitness", "Discipline", "Teamwork", "Mental strength", "Consistency"],
    pathway: [
      ["SPM", "Physical Education and general subjects"],
      ["After SPM", "Sports schools / training academies"],
      ["Diploma / Degree", "Sports Science / Coaching"],
      ["Career", "Athlete, Fitness Trainer, Sports Coach"]
    ]
  },
  "human-resource": {
    title: "Human Resource & People Management",
    tag: "People & Workplace",
    description: "This category focuses on managing people within organizations, including recruitment, employee relations, training, and workplace culture.",
    who: ["You enjoy working with people", "You are good at communication and listening", "You are organized and responsible", "You can handle conflicts and solve problems"],
    examples: "Human Resource Executive, Recruiter, Training & Development Officer, HR Manager",
    skills: ["Communication", "Interpersonal skills", "Problem-solving", "Organization", "Emotional intelligence"],
    pathway: [
      ["SPM", "English, Business, Mathematics"],
      ["STPM / Diploma", "Human Resource / Business Studies"],
      ["Bachelor's Degree", "Human Resource Management / Business Administration"],
      ["Career", "HR Executive, Recruiter, Training Officer, HR Manager"]
    ]
  },
  "diplomacy-international-relations": {
    title: "Diplomacy & International Relations",
    tag: "Global Affairs",
    description: "This category focuses on representing a country, managing international relationships, and handling global issues.",
    who: ["You are interested in global issues and politics", "You are confident in communication", "You are analytical and diplomatic", "You enjoy learning about different cultures"],
    examples: "Diplomat, Foreign Affairs Officer, Embassy Officer, International Relations Specialist",
    skills: ["Communication", "Negotiation", "Critical thinking", "Cultural awareness", "Language skills"],
    pathway: [
      ["SPM", "History, English, Bahasa Melayu"],
      ["STPM", "Arts / Social Science"],
      ["Bachelor's Degree", "International Relations / Political Science"],
      ["Career", "Diplomat, Foreign Affairs Officer, Embassy Officer, International Relations Specialist"]
    ]
  }
};

const categoryVisuals = {
  "social-helping": { image: "assets/career-icons/social-helping.jpeg", alt: "Social and helping careers icon", icon: "&#129309;", bg: "linear-gradient(135deg, #e9f8f2, #eef4ff)" },
  "media-communication": { image: "assets/career-icons/media-communication.jpeg", alt: "Media and communication icon", icon: "&#128227;", bg: "linear-gradient(135deg, #e8f5ff, #fff0e8)" },
  "creative-design": { image: "assets/career-icons/creative-design.jpeg", alt: "Creative and design icon", icon: "&#127912;", bg: "linear-gradient(135deg, #ffe7ef, #fff6d8)" },
  "technology-engineering": { image: "assets/career-icons/technology-engineering.jpeg", alt: "Technology and engineering icon", icon: "&#128187;", bg: "linear-gradient(135deg, #e8f5ff, #f2edff)" },
  "business-entrepreneurship": { image: "assets/career-icons/business-entrepreneurship.jpeg", alt: "Business and entrepreneurship icon", icon: "&#128202;", bg: "linear-gradient(135deg, #fff2cf, #f7f6ff)" },
  "science-healthcare": { image: "assets/career-icons/science-healthcare.jpeg", alt: "Science and healthcare icon", icon: "&#128300;", bg: "linear-gradient(135deg, #e8fff6, #f4fbff)" },
  "law-public-service": { image: "assets/career-icons/law-public-service.jpeg", alt: "Law and public service icon", icon: "&#9878;&#65039;", bg: "linear-gradient(135deg, #eef4ff, #fff4dd)" },
  "technical-skilled-trades": { image: "assets/career-icons/technical-skilled-trades.png", alt: "Technical and skilled trades icon", icon: "&#9881;&#65039;", bg: "linear-gradient(135deg, #eaf3ff, #f7f6ff)" },
  "defense-security": { image: "assets/career-icons/defense-security.png", alt: "Defense and security services icon", icon: "&#128737;&#65039;", bg: "linear-gradient(135deg, #e8f0ff, #fff4ee)" },
  "education-academia": { image: "assets/career-icons/education-academia.jpeg", alt: "Education and academia icon", icon: "&#127891;", bg: "linear-gradient(135deg, #fff7d8, #eef4ff)" },
  "performing-arts": { image: "assets/career-icons/performing-arts.jpeg", alt: "Performing arts and entertainment icon", icon: "&#127917;", bg: "linear-gradient(135deg, #ffe7ef, #eef4ff)" },
  "agriculture-farming": { image: "assets/career-icons/agriculture-farming.jpeg", alt: "Agriculture and farming icon", icon: "&#127806;", bg: "linear-gradient(135deg, #e9f8f2, #fff7d8)" },
  "tourism-hospitality": { image: "assets/career-icons/tourism-hospitality.jpeg", alt: "Tourism and hospitality icon", icon: "&#129523;", bg: "linear-gradient(135deg, #e7fbff, #fff0e8)" },
  "oil-gas-energy": { image: "assets/career-icons/oil-gas-energy.jpeg", alt: "Oil, gas, and energy icon", icon: "&#128738;&#65039;", bg: "linear-gradient(135deg, #fff1d6, #eaf7ff)" },
  "aviation-cabin-crew": { image: "assets/career-icons/aviation-cabin-crew.jpeg", alt: "Aviation and cabin crew icon", icon: "&#9992;&#65039;", bg: "linear-gradient(135deg, #e8f7ff, #fff2f7)" },
  "accounting-finance": { image: "assets/career-icons/accounting-finance.jpeg", alt: "Accounting and finance icon", icon: "&#128176;", bg: "linear-gradient(135deg, #fff2cf, #edf7ff)" },
  "language-translation": { image: "assets/career-icons/language-translation.jpeg", alt: "Language and translation icon", icon: "&#127757;", bg: "linear-gradient(135deg, #e8f5ff, #f7f6ff)" },
  "sports-athletics": { image: "assets/career-icons/sports-athletics.jpeg", alt: "Sports and athletics icon", icon: "&#127941;", bg: "linear-gradient(135deg, #fff1d8, #eef8ff)" },
  "human-resource": { image: "assets/career-icons/human-resource.jpeg", alt: "Human resource and people management icon", icon: "&#128101;", bg: "linear-gradient(135deg, #e8fff6, #f7f6ff)" },
  "diplomacy-international-relations": { image: "assets/career-icons/diplomacy-international-relations.jpeg", alt: "Diplomacy and international relations icon", icon: "&#127757;", bg: "linear-gradient(135deg, #eef4ff, #fff4dd)" }
};

function renderList(element, items) {
  element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderPathway(element, pathway) {
  element.innerHTML = pathway.map((step, index) => {
    const item = `
      <article>
        <span class="path-icon">${index + 1}</span>
        <h3>${step[0]}</h3>
        <p>${step[1]}</p>
      </article>
    `;

    if (index === pathway.length - 1) {
      return item;
    }

    return `${item}<span class="path-arrow" aria-hidden="true"></span>`;
  }).join("");
}

const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category") || "social-helping";
const category = careerCategories[categoryKey] || careerCategories["social-helping"];
const visual = categoryVisuals[categoryKey] || categoryVisuals["social-helping"];

document.title = `${category.title} | CareerGuide`;
document.getElementById("career-title").textContent = category.title;
document.getElementById("career-tag").textContent = category.tag;
document.getElementById("career-description").textContent = category.description;
document.getElementById("career-examples").textContent = category.examples;

const visualImage = document.getElementById("category-visual-image");
const visualIcon = document.getElementById("category-visual-icon");
if (visual.image) {
  visualImage.src = visual.image;
  visualImage.alt = visual.alt || `${category.title} icon`;
  visualImage.hidden = false;
  visualIcon.hidden = true;
} else {
  visualImage.hidden = true;
  visualIcon.hidden = false;
  visualIcon.innerHTML = visual.icon;
  document.querySelector(".category-detail-visual-card").style.setProperty("--detail-visual-bg", visual.bg);
}

renderList(document.getElementById("career-who"), category.who);
renderList(document.getElementById("career-skills"), category.skills);
renderPathway(document.getElementById("career-pathway"), category.pathway);


