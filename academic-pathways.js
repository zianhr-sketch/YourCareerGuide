// Academic pathway data: each array item becomes one horizontal pathway card.
const pathwayData = {
  spm: [
    ["SPM", "STPM", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["SPM", "STPM", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["SPM", "Foundation/Matriculation", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["SPM", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["SPM", "TVET/Certificate", "Diploma", "Bachelor's Degree", "Master's Degree"],
    ["SPM", "Polytechnic Diploma", "Bachelor's Degree", "Master's Degree"],
    ["SPM", "Work Experience", "Part-Time Diploma", "Bachelor's Degree"],
    ["SPM", "Skills Certificate", "Workforce", "Further Studies"],
    ["SPM", "A-Level", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["SPM", "IB (International Baccalaureate)", "Bachelor's Degree", "Master's Degree"],
    ["SPM", "STPM", "Professional Certification (ACCA/CCNA/TESOL)", "Career"],
    ["SPM", "Diploma", "Professional Certification", "Career Advancement"],
    ["SPM", "Military/Police Academy", "Professional Training", "Career Progression"],
    ["SPM", "Nursing Diploma", "Degree in Nursing", "Specialist/Master's"],
    ["SPM", "Culinary Diploma", "Hotel/Culinary Industry", "Restaurant Manager/Chef"],
    ["SPM", "Multimedia Diploma", "Degree in Mass Communication", "Media Career"],
    ["SPM", "Agriculture/TVET", "Agropreneur/Farming Industry", "Business Owner"],
    ["SPM", "Aviation Diploma", "Pilot/Cabin Crew Training", "Aviation Career"],
    ["SPM", "STPM Science Stream", "Medical Degree", "Specialist", "PhD/Research"],
    ["SPM", "STPM Arts Stream", "Law Degree", "Chambering", "Lawyer Career"]
  ],
  stpm: [
    ["STPM", "Bachelor's Degree", "Master's Degree", "PhD"],
    ["STPM", "Diploma", "Bachelor's Degree", "Master's Degree"],
    ["STPM", "Bachelor's Degree", "Professional Certification", "Career"],
    ["STPM", "Teaching Degree", "Teacher", "Master's Degree"],
    ["STPM", "Law Degree", "Chambering", "Lawyer"],
    ["STPM", "Medical Degree", "Housemanship", "Specialist"],
    ["STPM", "Engineering Degree", "Engineer", "Professional Engineer (Ir.)"],
    ["STPM", "Accounting Degree", "ACCA/CPA", "Accountant"],
    ["STPM", "Mass Communication Degree", "Journalist/Media Career"],
    ["STPM", "IT/Computer Science Degree", "Software Developer/Data Analyst"],
    ["STPM", "Hospitality/Tourism Degree", "Tourism Industry", "Management Position"],
    ["STPM", "Agriculture Degree", "Agropreneur/Agriculture Officer"],
    ["STPM", "Psychology Degree", "Counsellor/HR Career"],
    ["STPM", "International Relations Degree", "Diplomat/Government Office"],
    ["STPM", "Music/Performing Arts Degree", "Musician/Actor/Creative Industry"],
    ["STPM", "Sports Science Degree", "Athlete/Coach/Fitness Industry"],
    ["STPM", "Maritime/Aviation Degree", "Pilot/Aviation Industry"],
    ["STPM", "Degree Overseas", "International Career Opportunities"],
    ["STPM", "Workforce", "Part-Time Degree", "Career Advancement"],
    ["STPM", "Entrepreneurship", "Business Owner/Startup Founder"]
  ]
};

const pathwayDetails = {
  spm: [
    { courses: "Science Stream, Arts Stream, Business, Social Science, Education", duration: "8 - 12 years", careers: "Lecturer, Researcher, Scientist, Analyst, University Professor", skills: "Critical thinking, Research skills, Communication, Academic writing", institutions: "UM, UKM, USM, UTM, UniMAP, IIUM" },
    { courses: "Business, IT, Communication, Engineering, Hospitality", duration: "9 - 13 years", careers: "Educator, Research Assistant, Industry Specialist, Academic Consultant", skills: "Adaptability, Technical knowledge, Research skills, Problem solving", institutions: "UiTM, UPM, UTHM, UniMAP" },
    { courses: "Medicine, Engineering, Accounting, Law, Computer Science", duration: "7 - 11 years", careers: "Doctor, Engineer, Lecturer, Researcher, Corporate Professional", skills: "Leadership, Communication, Analytical thinking, Academic skills", institutions: "UM, UKM, USM, UTP, Taylor's University" },
    { courses: "Mass Communication, Business, Multimedia, Nursing, IT", duration: "7 - 10 years", careers: "Manager, Lecturer, Industry Expert, Consultant", skills: "Professional communication, Technical skills, Leadership", institutions: "UiTM, MMU, UNITEN, UCSI" },
    { courses: "Automotive, Electrical, Culinary, Welding, Construction", duration: "6 - 9 years", careers: "Technician, Engineer, Supervisor, Technical Instructor", skills: "Hands-on skills, Technical problem solving, Practical knowledge", institutions: "Politeknik Malaysia, GiatMARA, UniKL" },
    { courses: "Mechanical Engineering, Civil Engineering, IT, Design Technology, Mechatronics", duration: "6 - 9 years", careers: "Engineer, Technologist, Project Executive, Technical Officer", skills: "Industry skills, Technical expertise, Teamwork", institutions: "Politeknik Malaysia, UTHM, UniMAP" },
    { courses: "Business Management, Human Resource, Marketing, IT", duration: "5 - 8 years", careers: "Executive, Supervisor, Manager, Entrepreneur", skills: "Workplace communication, Time management, Leadership", institutions: "OUM, WOU, UiTM" },
    { courses: "Hospitality, Automotive, Beauty, Culinary, Electrical", duration: "3 - 6 years", careers: "Skilled Worker, Technician, Small Business Owner", skills: "Practical skills, Customer service, Technical expertise", institutions: "GiatMARA, IKM, Kolej Komuniti", institutionLabel: "Example Institutions" },
    { courses: "Medicine, Law, Engineering, Economics, International Studies", duration: "8 - 12 years", careers: "Doctor, Lawyer, International Professional, Researcher", skills: "Academic excellence, Research, Critical thinking", institutions: "Sunway College, Taylor's College, International Universities" },
    { courses: "International Relations, Business, Science, Arts", duration: "6 - 10 years", careers: "Diplomat, Corporate Executive, Researcher", skills: "Global communication, Leadership, Analytical thinking", institutions: "HELP University, International Schools, Overseas Universities" },
    { courses: "ACCA, CCNA, TESOL, Digital Marketing", duration: "4 - 6 years", careers: "Accountant, Network Engineer, English Trainer, Marketing Specialist", skills: "Professional certification skills, Technical expertise", institutions: "Sunway College, TARUMT, Professional Training Centers", institutionLabel: "Example Institutions" },
    { courses: "Accounting, IT, HR, Marketing", duration: "4 - 7 years", careers: "Senior Executive, Certified Specialist, Team Leader", skills: "Industry certification, Professional communication", institutions: "UiTM, MMU, Professional Bodies", institutionLabel: "Example Institutions" },
    { courses: "Law Enforcement, Defence Studies, Public Safety", duration: "4 - 7 years", careers: "Police Officer, Army Officer, Immigration Officer, Customs Officer", skills: "Discipline, Leadership, Crisis management, Teamwork", institutions: "PULAPOL, ATM Academy, Akademi Bomba", institutionLabel: "Example Institutions" },
    { courses: "Nursing, Healthcare, Clinical Practice", duration: "5 - 8 years", careers: "Nurse, Specialist Nurse, Healthcare Educator", skills: "Patient care, Communication, Medical knowledge", institutions: "IIUM, UiTM, MAHSA University" },
    { courses: "Culinary Arts, Hospitality, Bakery", duration: "3 - 6 years", careers: "Chef, Restaurant Manager, Hotel Supervisor", skills: "Cooking skills, Creativity, Customer service", institutions: "KDU University, BERJAYA University College" },
    { courses: "Broadcasting, Journalism, Graphic Design, Digital Media", duration: "5 - 7 years", careers: "Journalist, Content Creator, Multimedia Designer, Producer", skills: "Creativity, Video editing, Communication, Storytelling", institutions: "UiTM, MMU, Limkokwing University" },
    { courses: "Agriculture, Agribusiness, Farming Technology", duration: "3 - 6 years", careers: "Farmer, Agropreneur, Agriculture Officer", skills: "Business management, Farming techniques, Entrepreneurship", institutions: "UPM, UniKL, Kolej Pertanian" },
    { courses: "Aviation Management, Pilot Training, Cabin Crew Training", duration: "4 - 7 years", careers: "Pilot, Cabin Crew, Aviation Executive", skills: "Communication, Safety management, Leadership", institutions: "MST Aviation, HM Aerospace, CAE Kuala Lumpur", institutionLabel: "Example Institutions" },
    { courses: "Medicine, Biomedical Science, Surgery", duration: "10 - 15 years", careers: "Doctor, Specialist, Medical Researcher", skills: "Medical expertise, Critical thinking, Patient care", institutions: "UM, UKM, USM, IMU" },
    { courses: "Law, Criminal Justice, International Law", duration: "6 - 8 years", careers: "Lawyer, Legal Advisor, Prosecutor", skills: "Public speaking, Critical thinking, Legal analysis", institutions: "IIUM, UM, UKM, Taylor's University" }
  ],
  stpm: [
    { courses: "Science, Business, Education, Social Science", duration: "6 - 10 years", careers: "Lecturer, Researcher, Academic Professional", skills: "Research, Leadership, Communication", institutions: "UM, UKM, USM" },
    { courses: "Business, IT, Communication", duration: "5 - 8 years", careers: "Executive, Consultant, Industry Specialist", skills: "Adaptability, Professional communication", institutions: "UiTM, MMU, UNITEN" },
    { courses: "Accounting, IT, Marketing", duration: "4 - 7 years", careers: "Certified Professional, Manager, Consultant", skills: "Industry certification skills, Leadership", institutions: "Sunway College, ACCA Malaysia", institutionLabel: "Example Institutions" },
    { courses: "Education, TESL, Early Childhood Education", duration: "5 - 8 years", careers: "Teacher, Lecturer, Education Officer", skills: "Teaching skills, Leadership, Communication", institutions: "UPSI, UKM, UiTM" },
    { courses: "Law, International Law, Criminal Law", duration: "5 - 7 years", careers: "Lawyer, Legal Advisor, Magistrate", skills: "Debating, Legal writing, Critical thinking", institutions: "UM, IIUM, Taylor's University" },
    { courses: "Medicine, Surgery, Healthcare", duration: "8 - 12 years", careers: "Doctor, Specialist, Surgeon", skills: "Medical knowledge, Patient care, Problem solving", institutions: "UM, UKM, IMU" },
    { courses: "Mechanical, Civil, Electrical Engineering", duration: "5 - 7 years", careers: "Engineer, Project Manager, Technical Consultant", skills: "Technical expertise, Analytical thinking", institutions: "UTM, UMP, UniMAP" },
    { courses: "Accounting, Finance, Auditing", duration: "5 - 7 years", careers: "Accountant, Auditor, Financial Analyst", skills: "Financial analysis, Communication, Problem solving", institutions: "UiTM, TARUMT, Sunway University, UniMAP" },
    { courses: "Journalism, Broadcasting, Public Relations", duration: "4 - 6 years", careers: "Journalist, News Presenter, Media Producer", skills: "Communication, Storytelling, Creativity", institutions: "UiTM, MMU, Taylor's University" },
    { courses: "Computer Science, Cybersecurity, Data Science, Artificial Intelligence", duration: "4 - 6 years", careers: "Software Developer, Data Analyst, IT Specialist", skills: "Programming, Problem solving, Technical thinking", institutions: "UTM, MMU, APU, UniMAP" },
    { courses: "Tourism Management, Hospitality, Event Management", duration: "4 - 6 years", careers: "Tourism Manager, Event Planner, Hotel Executive", skills: "Customer service, Event planning, Leadership", institutions: "UCSI, BERJAYA University College" },
    { courses: "Agriculture, Agribusiness, Plantation Management", duration: "4 - 6 years", careers: "Agriculture Officer, Agropreneur, Farm Manager", skills: "Business management, Farming knowledge", institutions: "UPM, UniKL" },
    { courses: "Psychology, Human Resource, Counselling", duration: "4 - 6 years", careers: "Counsellor, HR Executive, Therapist", skills: "Communication, Emotional intelligence, Problem solving", institutions: "HELP University, UKM, UPM, UMS" },
    { courses: "International Relations, Political Science, Diplomacy", duration: "4 - 6 years", careers: "Diplomat, Government Officer, Policy Analyst", skills: "Negotiation, Public speaking, Leadership", institutions: "UM, IIUM, UKM" },
    { courses: "Music, Theatre, Performing Arts", duration: "4 - 6 years", careers: "Musician, Actor, Performer, Creative Producer", skills: "Creativity, Performance skills, Confidence", institutions: "ASWARA, UiTM" },
    { courses: "Sports Science, Coaching, Fitness Management", duration: "4 - 6 years", careers: "Coach, Athlete, Fitness Trainer", skills: "Leadership, Fitness training, Communication", institutions: "UPSI, UiTM" },
    { courses: "Aviation Management, Maritime Studies", duration: "4 - 7 years", careers: "Pilot, Aviation Executive, Maritime Officer", skills: "Leadership, Navigation skills, Communication", institutions: "MST Aviation, ALAM", institutionLabel: "Example Institutions" },
    { courses: "Business, Engineering, International Studies", duration: "4 - 8 years", careers: "International Consultant, Global Executive, Researcher", skills: "Global exposure, Communication, Adaptability", institutions: "Monash University, University of Melbourne, NUS" },
    { courses: "Business, Human Resource, IT", duration: "4 - 7 years", careers: "Manager, Executive, Entrepreneur", skills: "Time management, Leadership, Workplace communication", institutions: "OUM, WOU" },
    { courses: "Entrepreneurship, Marketing, Business Management", duration: "3 - 5 years", careers: "Business Owner, Startup Founder, Entrepreneur", skills: "Leadership, Marketing, Financial management", institutions: "UiTM, UUM, Taylor's University" }
  ]
};

const iconMap = [
  { match: /spm|stpm|a-level|ib/i, icon: "school" },
  { match: /diploma|foundation|matriculation|degree|master|phd|studies/i, icon: "study" },
  { match: /certificate|certification|training|chambering/i, icon: "cert" },
  { match: /career|workforce|teacher|lawyer|accountant|engineer|developer|analyst|diplomat|musician|actor|athlete|coach|pilot|founder|owner|manager|chef|officer|counsellor/i, icon: "career" },
  { match: /medical|nursing|specialist|housemanship/i, icon: "health" },
  { match: /military|police|aviation|maritime/i, icon: "service" },
  { match: /agriculture|agropreneur|farming/i, icon: "growth" },
  { match: /multimedia|mass communication|media/i, icon: "media" }
];

const pathwayTabs = document.querySelectorAll("[data-pathway-tab]");
const pathwayPanels = document.querySelectorAll("[data-pathway-panel]");
const pathwayLists = document.querySelectorAll("[data-pathway-list]");

function getIconType(label) {
  const found = iconMap.find((item) => item.match.test(label));
  return found ? found.icon : "default";
}

function renderDetailGrid(detail) {
  const institutionLabel = detail.institutionLabel || "Example Universities";
  return `
    <div class="pathway-detail-grid">
      <section>
        <h3>Courses</h3>
        <p>${detail.courses}</p>
      </section>
      <section>
        <h3>Duration</h3>
        <p>${detail.duration}</p>
      </section>
      <section>
        <h3>Career Opportunities</h3>
        <p>${detail.careers}</p>
      </section>
      <section>
        <h3>Skills You Will Gain</h3>
        <p>${detail.skills}</p>
      </section>
      <section>
        <h3>${institutionLabel}</h3>
        <p>${detail.institutions}</p>
      </section>
    </div>
  `;
}

function renderPathways() {
  pathwayLists.forEach((list) => {
    const level = list.dataset.pathwayList;
    const pathways = pathwayData[level] || [];

    list.innerHTML = pathways.map((steps, index) => {
      const detail = pathwayDetails[level]?.[index];
      const stepMarkup = steps.map((step, stepIndex) => `
        <span class="pathway-mini-step">
          <span class="pathway-mini-icon ${getIconType(step)}" aria-hidden="true"></span>
          <span>${step}</span>
        </span>
        ${stepIndex < steps.length - 1 ? '<span class="pathway-mini-arrow" aria-hidden="true"></span>' : ''}
      `).join("");

      return `
        <details class="academic-pathway-card">
          <summary>
            <span class="pathway-number">${index + 1}</span>
            <span class="pathway-mini-steps">${stepMarkup}</span>
          </summary>
          ${detail ? renderDetailGrid(detail) : ""}
        </details>
      `;
    }).join("");
  });
}

pathwayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.pathwayTab;

    pathwayTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    pathwayPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.pathwayPanel === selected);
    });
  });
});

renderPathways();
