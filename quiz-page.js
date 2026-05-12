// Full quiz flow. Each answer gives career category points and hidden trait points.
const categoryNames = {
  SH: "Social & Helping Careers",
  MC: "Media & Communication",
  CD: "Creative & Design",
  TE: "Technology & Engineering",
  BE: "Business & Entrepreneurship",
  SC: "Science & Healthcare",
  LP: "Law & Public Service",
  TS: "Technical & Skilled Trades",
  DS: "Defense & Security Services",
  EA: "Education & Academia",
  PA: "Performing Arts & Entertainment",
  AF: "Agriculture & Farming",
  TH: "Tourism & Hospitality",
  OG: "Oil, Gas & Energy",
  AV: "Aviation & Cabin Crew",
  AFN: "Accounting & Finance",
  LT: "Language & Translation",
  SA: "Sports & Athletics",
  HR: "Human Resource & People Management",
  DI: "Diplomacy & International Relations"
};

const categoryLinks = {
  SH: "career-category.html?category=social-helping",
  MC: "career-category.html?category=media-communication",
  CD: "career-category.html?category=creative-design",
  TE: "career-category.html?category=technology-engineering",
  BE: "career-category.html?category=business-entrepreneurship",
  SC: "career-category.html?category=science-healthcare",
  LP: "career-category.html?category=law-public-service",
  TS: "career-category.html?category=technical-skilled-trades",
  DS: "career-category.html?category=defense-security",
  EA: "career-category.html?category=education-academia",
  PA: "career-category.html?category=performing-arts",
  AF: "career-category.html?category=agriculture-farming",
  TH: "career-category.html?category=tourism-hospitality",
  OG: "career-category.html?category=oil-gas-energy",
  AV: "career-category.html?category=aviation-cabin-crew",
  AFN: "career-category.html?category=accounting-finance",
  LT: "career-category.html?category=language-translation",
  SA: "career-category.html?category=sports-athletics",
  HR: "career-category.html?category=human-resource",
  DI: "career-category.html?category=diplomacy-international-relations"
};

const questions = [
  {
    text: "What activity would you enjoy the most during a school event?",
    answers: [
      { label: "Helping juniors who feel nervous", categories: ["SH", "HR"], traits: ["Empathy", "Communication"] },
      { label: "Filming TikTok content for the event", categories: ["MC", "PA"], traits: ["Creativity", "Communication"] },
      { label: "Designing posters and decorations", categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Managing the event system or website", categories: ["TE"], traits: ["Logical Thinking", "Analytical Skills"] },
      { label: "Selling products at booths", categories: ["BE", "AFN"], traits: ["Leadership", "Communication"] },
      { label: "Organizing the medical station", categories: ["SC"], traits: ["Discipline", "Empathy"] },
      { label: "Becoming the debate moderator", categories: ["LP", "DI"], traits: ["Leadership", "Critical Thinking"] },
      { label: "Fixing technical equipment backstage", categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Leading safety or crowd control", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Performing on stage", categories: ["PA", "TH"], traits: ["Confidence", "Creativity"] }
    ]
  },
  {
    text: "Which environment makes you feel the most motivated?",
    answers: [
      { label: "A peaceful counseling room", categories: ["SH"], traits: ["Empathy"] },
      { label: "A busy media studio", categories: ["MC"], traits: ["Communication"] },
      { label: "A creative design workspace", categories: ["CD"], traits: ["Creativity"] },
      { label: "A high-tech innovation lab", categories: ["TE"], traits: ["Logical Thinking"] },
      { label: "A corporate office meeting", categories: ["BE", "AFN"], traits: ["Leadership"] },
      { label: "A science laboratory", categories: ["SC"], traits: ["Analytical Skills"] },
      { label: "A courtroom or government office", categories: ["LP", "DI"], traits: ["Discipline", "Communication"] },
      { label: "A workshop with machines and tools", categories: ["TS", "OG"], traits: ["Practical Skills"] },
      { label: "A military training camp", categories: ["DS", "AV"], traits: ["Discipline", "Teamwork"] },
      { label: "A classroom full of students", categories: ["EA", "HR"], traits: ["Patience", "Communication"] }
    ]
  },
  {
    text: "Your friends usually come to you for...",
    answers: [
      { label: "Emotional advice", categories: ["SH", "HR"], traits: ["Empathy"] },
      { label: "Social media ideas", categories: ["MC"], traits: ["Creativity", "Communication"] },
      { label: "Aesthetic opinions", categories: ["CD", "PA"], traits: ["Creativity"] },
      { label: "Tech support", categories: ["TE"], traits: ["Logical Thinking"] },
      { label: "Business or money advice", categories: ["BE", "AFN"], traits: ["Leadership", "Analytical Skills"] },
      { label: "Homework explanations", categories: ["EA", "SC"], traits: ["Patience", "Intelligence"] },
      { label: "Solving arguments fairly", categories: ["LP", "DI"], traits: ["Integrity", "Leadership"] },
      { label: "Repairing broken items", categories: ["TS"], traits: ["Practical Skills"] },
      { label: "Motivation during hard times", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Language or translation help", categories: ["LT", "DI"], traits: ["Communication", "Cultural Awareness"] }
    ]
  },
  {
    text: "Which type of challenge sounds most exciting to you?",
    answers: [
      { label: "Helping someone overcome personal struggles", categories: ["SH"], traits: ["Empathy", "Patience"] },
      { label: "Building a personal online brand", categories: ["MC"], traits: ["Creativity", "Communication"] },
      { label: "Creating a viral design campaign", categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Coding an app from scratch", categories: ["TE"], traits: ["Logical Thinking", "Problem Solving"] },
      { label: "Starting your own business", categories: ["BE"], traits: ["Leadership", "Decision Making"] },
      { label: "Discovering a medical breakthrough", categories: ["SC"], traits: ["Analytical Skills", "Discipline"] },
      { label: "Defending someone in a major case", categories: ["LP"], traits: ["Critical Thinking", "Integrity"] },
      { label: "Building something with your hands", categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Completing intense physical training", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Traveling around the world for work", categories: ["TH", "AV", "DI"], traits: ["Adaptability", "Cultural Awareness"] }
    ]
  },
  {
    text: "What type of content appears most on your For You Page?",
    answers: [
      { label: "Mental health or motivational videos", categories: ["SH"], traits: ["Empathy", "Communication"] },
      { label: "Content creators and influencers", categories: ["MC"], traits: ["Creativity", "Communication"] },
      { label: "Art, fashion, or aesthetics", categories: ["CD", "PA"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Coding or gadget videos", categories: ["TE"], traits: ["Logical Thinking", "Analytical Skills"] },
      { label: "Business and money tips", categories: ["BE", "AFN"], traits: ["Leadership", "Analytical Skills"] },
      { label: "Science experiments or health facts", categories: ["SC"], traits: ["Analytical Skills", "Curiosity"] },
      { label: "Debate or crime documentaries", categories: ["LP", "DI"], traits: ["Critical Thinking", "Integrity"] },
      { label: "DIY repair videos", categories: ["TS"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Fitness or military edits", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Travel and culture videos", categories: ["TH", "AV", "LT"], traits: ["Cultural Awareness", "Adaptability"] }
    ]
  },
  {
    text: "When working in a group project, what role do you naturally take?",
    answers: [
      { label: "The listener who keeps everyone calm", categories: ["SH", "HR"], traits: ["Empathy", "Patience"] },
      { label: "The presenter/spokesperson", categories: ["MC", "DI"], traits: ["Communication", "Confidence"] },
      { label: "The designer/editor", categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: "The technical problem solver", categories: ["TE"], traits: ["Logical Thinking", "Problem Solving"] },
      { label: "The leader/manager", categories: ["BE"], traits: ["Leadership", "Decision Making"] },
      { label: "The researcher", categories: ["SC", "EA"], traits: ["Analytical Skills", "Curiosity"] },
      { label: "The rule checker", categories: ["LP", "AFN"], traits: ["Integrity", "Attention to Detail"] },
      { label: "The builder/setup person", categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "The disciplined coordinator", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "The note-taker and organizer", categories: ["EA", "AFN"], traits: ["Organization", "Patience"] }
    ]
  },
  {
    text: "Which compliment would make you happiest?",
    answers: [
      { label: '"You really understand people."', categories: ["SH", "HR"], traits: ["Empathy", "Communication"] },
      { label: '"You\'re so entertaining."', categories: ["MC", "PA"], traits: ["Confidence", "Creativity"] },
      { label: '"Your designs are beautiful."', categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: '"You\'re incredibly smart with technology."', categories: ["TE"], traits: ["Logical Thinking", "Analytical Skills"] },
      { label: '"You have strong leadership energy."', categories: ["BE", "DI"], traits: ["Leadership", "Communication"] },
      { label: '"You explain things so clearly."', categories: ["EA", "LT"], traits: ["Patience", "Communication"] },
      { label: '"You always stand up for what\'s right."', categories: ["LP"], traits: ["Integrity", "Critical Thinking"] },
      { label: '"You can fix almost anything."', categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: '"You\'re mentally strong."', categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: '"You adapt well anywhere."', categories: ["TH", "AV"], traits: ["Adaptability", "Cultural Awareness"] }
    ]
  },
  {
    text: "If you had a free weekend, what would you most likely do?",
    answers: [
      { label: "Volunteer or help people", categories: ["SH"], traits: ["Empathy", "Communication"] },
      { label: "Make content or vlog", categories: ["MC"], traits: ["Creativity", "Confidence"] },
      { label: "Visit art cafes or take photos", categories: ["CD", "PA"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Build a project or game", categories: ["TE"], traits: ["Logical Thinking", "Problem Solving"] },
      { label: "Plan a small business idea", categories: ["BE"], traits: ["Leadership", "Decision Making"] },
      { label: "Read science or psychology topics", categories: ["SC", "EA"], traits: ["Curiosity", "Analytical Skills"] },
      { label: "Watch documentaries about law or politics", categories: ["LP", "DI"], traits: ["Critical Thinking", "Cultural Awareness"] },
      { label: "Work on machines or practical tasks", categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Train physically or play sports", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Explore new places or cultures", categories: ["TH", "LT", "AV"], traits: ["Adaptability", "Cultural Awareness"] }
    ]
  },
  {
    text: "Which school subject feels the most natural to you?",
    answers: [
      { label: "Psychology or Moral Studies", categories: ["SH"], traits: ["Empathy", "Patience"] },
      { label: "English or Media Studies", categories: ["MC", "LT"], traits: ["Communication", "Creativity"] },
      { label: "Art or Multimedia", categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Mathematics or ICT", categories: ["TE", "AFN"], traits: ["Logical Thinking", "Analytical Skills"] },
      { label: "Business or Economics", categories: ["BE", "AFN"], traits: ["Leadership", "Analytical Skills"] },
      { label: "Biology or Chemistry", categories: ["SC"], traits: ["Analytical Skills", "Discipline"] },
      { label: "History or Civic Studies", categories: ["LP", "DI"], traits: ["Critical Thinking", "Cultural Awareness"] },
      { label: "Technical Skills or Engineering Basics", categories: ["TS", "OG"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Physical Education", categories: ["DS", "SA"], traits: ["Discipline", "Teamwork"] },
      { label: "Foreign Languages", categories: ["LT", "DI", "TH"], traits: ["Communication", "Cultural Awareness"] }
    ]
  },
  {
    text: "What kind of future lifestyle sounds most satisfying?",
    answers: [
      { label: "Making a positive impact on people's lives", categories: ["SH", "EA", "HR"], traits: ["Empathy", "Patience"] },
      { label: "Becoming publicly recognized online", categories: ["MC", "PA"], traits: ["Confidence", "Communication"] },
      { label: "Living creatively and expressing ideas freely", categories: ["CD"], traits: ["Creativity", "Attention to Detail"] },
      { label: "Innovating future technology", categories: ["TE", "OG"], traits: ["Logical Thinking", "Problem Solving"] },
      { label: "Building financial success and freedom", categories: ["BE", "AFN"], traits: ["Leadership", "Analytical Skills"] },
      { label: "Saving lives or discovering solutions", categories: ["SC"], traits: ["Empathy", "Discipline"] },
      { label: "Protecting justice and society", categories: ["LP", "DI"], traits: ["Integrity", "Critical Thinking"] },
      { label: "Building real-world systems and structures", categories: ["TS"], traits: ["Practical Skills", "Problem Solving"] },
      { label: "Serving the country with pride", categories: ["DS", "SA", "AV"], traits: ["Discipline", "Teamwork"] },
      { label: "Traveling internationally while working", categories: ["TH", "LT", "AV", "DI"], traits: ["Adaptability", "Cultural Awareness"] }
    ]
  }
];

const resultGroups = [
  {
    codes: ["SH", "HR", "EA"],
    career: "Counselor",
    category: "Social, Helping & Education",
    primary: ["Counselor", "Psychologist", "Teacher", "Human Resource Executive"],
    secondary: ["Therapist", "Recruiter", "Social Worker"],
    description: "You are emotionally intelligent, caring, and supportive. People naturally trust you because you listen well and understand emotions deeply.",
    traits: ["Empathy", "Communication", "Patience", "Leadership"]
  },
  {
    codes: ["MC", "CD", "PA"],
    career: "Content Creator",
    category: "Media, Creative & Performing Arts",
    primary: ["Multimedia Journalist", "Content Creator", "Creative Director"],
    secondary: ["Broadcaster", "Actor", "Social Media Strategist"],
    description: "You are expressive, imaginative, and naturally creative. You enjoy inspiring others through visuals, storytelling, and communication.",
    traits: ["Creativity", "Communication", "Confidence"]
  },
  {
    codes: ["TE", "OG", "TS"],
    career: "Software Engineer",
    category: "Technology, Engineering & Technical",
    primary: ["Software Engineer", "Petroleum Engineer", "Cybersecurity Specialist"],
    secondary: ["Technician", "Data Analyst", "Energy Engineer"],
    description: "You enjoy solving complex problems and understanding how systems work. You think logically and stay focused under pressure.",
    traits: ["Logical Thinking", "Analytical Skills", "Practical Skills"]
  },
  {
    codes: ["DI", "LT", "TH"],
    career: "Diplomat",
    category: "Global, Language & Tourism",
    primary: ["Diplomat", "Interpreter", "International Relations Officer"],
    secondary: ["Cabin Crew", "Tourism Consultant", "Embassy Officer"],
    description: "You are adaptable, socially aware, and curious about the world. You communicate well with different people and cultures.",
    traits: ["Communication", "Cultural Awareness", "Adaptability"]
  },
  {
    codes: ["BE", "AFN"],
    career: "Business Manager",
    category: "Business, Accounting & Finance",
    primary: ["Entrepreneur", "Business Manager", "Financial Analyst"],
    secondary: ["Marketing Executive", "Accountant", "Sales Manager"],
    description: "You are strategic, organized, and motivated by growth. You enjoy making decisions, leading plans, and turning ideas into results.",
    traits: ["Leadership", "Analytical Skills", "Communication"]
  },
  {
    codes: ["SC"],
    career: "Healthcare Specialist",
    category: "Science & Healthcare",
    primary: ["Doctor", "Pharmacist", "Nurse", "Lab Scientist"],
    secondary: ["Research Assistant", "Healthcare Officer"],
    description: "You are curious, disciplined, and careful with details. You enjoy using science to understand problems and improve people's lives.",
    traits: ["Discipline", "Analytical Skills", "Empathy"]
  },
  {
    codes: ["LP", "DS", "SA"],
    career: "Public Safety Officer",
    category: "Law, Security & Sports",
    primary: ["Lawyer", "Police Officer", "Army Officer", "Sports Coach"],
    secondary: ["Criminologist", "Firefighter", "Professional Athlete"],
    description: "You are disciplined, fair, and mentally strong. You care about responsibility, teamwork, and standing up for what matters.",
    traits: ["Discipline", "Teamwork", "Critical Thinking"]
  },
  {
    codes: ["AV"],
    career: "Pilot",
    category: "Aviation & Cabin Crew",
    primary: ["Pilot", "Cabin Crew", "Flight Dispatcher"],
    secondary: ["Ground Crew", "Tourism Consultant"],
    description: "You are calm under pressure, service-minded, and excited by travel. You can follow procedures while connecting with people.",
    traits: ["Communication", "Discipline", "Adaptability"]
  },
  {
    codes: ["AF"],
    career: "Agricultural Officer",
    category: "Agriculture & Farming",
    primary: ["Agricultural Officer", "Plantation Manager", "Agribusiness Entrepreneur"],
    secondary: ["Farmer", "Food Production Assistant"],
    description: "You are practical, patient, and interested in sustainability. You enjoy work that supports food, nature, and real-world problem solving.",
    traits: ["Practical Skills", "Patience", "Problem Solving"]
  }
];

const quizScreen = document.querySelector("#quiz-screen");
const quizIntroScreen = document.querySelector("#quiz-intro-screen");
const quizVideoScreen = document.querySelector("#quiz-video-screen");
const quizTransitionVideo = document.querySelector("#quiz-transition-video");
const showResultAfterVideoButton = document.querySelector("#show-result-after-video");
const resultScreen = document.querySelector("#result-screen");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const questionCounter = document.querySelector("#question-counter");
const progressBar = document.querySelector("#progress-bar");
const backButton = document.querySelector("#back-question");
const nextButton = document.querySelector("#next-question");
const startButton = document.querySelector("#start-quiz");
const retakeButton = document.querySelector("#retake-quiz");
const matchedCareer = document.querySelector("#matched-career");
const matchedCategory = document.querySelector("#matched-category");
const matchPercent = document.querySelector("#match-percent");
const suitList = document.querySelector("#suit-list");
const pathwayList = document.querySelector("#pathway-list");
const exploreResultLink = document.querySelector("#explore-result-link");

let currentQuestion = 0;
const answers = new Array(questions.length).fill(null);
let audioContext;

quizTransitionVideo.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

quizTransitionVideo.addEventListener("pause", () => {
  if (!quizVideoScreen.classList.contains("hidden") && !quizTransitionVideo.ended) {
    quizTransitionVideo.play().catch(() => {});
  }
});

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone({ frequency, endFrequency = frequency, duration = 0.18, type = "sine", volume = 0.08, delay = 0 }) {
  const context = getAudioContext();
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(1, endFrequency), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playQuizSound(sound) {
  try {
    if (sound === "start") {
      playTone({ frequency: 520, endFrequency: 780, duration: 0.16, type: "triangle", volume: 0.07 });
      playTone({ frequency: 980, endFrequency: 1320, duration: 0.22, type: "sine", volume: 0.055, delay: 0.09 });
      return;
    }

    if (sound === "answer") {
      playTone({ frequency: 880, endFrequency: 1175, duration: 0.14, type: "sine", volume: 0.06 });
      return;
    }

    if (sound === "try-again") {
      playTone({ frequency: 260, endFrequency: 190, duration: 0.18, type: "triangle", volume: 0.045 });
      return;
    }

    if (sound === "next") {
      playTone({ frequency: 420, endFrequency: 700, duration: 0.14, type: "sine", volume: 0.045 });
      return;
    }

    if (sound === "result") {
      playTone({ frequency: 523, endFrequency: 523, duration: 0.18, type: "triangle", volume: 0.06 });
      playTone({ frequency: 659, endFrequency: 659, duration: 0.2, type: "triangle", volume: 0.06, delay: 0.16 });
      playTone({ frequency: 784, endFrequency: 1046, duration: 0.34, type: "sine", volume: 0.07, delay: 0.34 });
    }
  } catch (error) {
    // Audio can be blocked by browser settings; the quiz should still work normally.
  }
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  backButton.disabled = currentQuestion === 0;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "See Results" : "Next";

  answerList.innerHTML = question.answers
    .map((answer, index) => `
      <label class="quiz-option">
        <input type="radio" name="quiz-answer" value="${index}" ${answers[currentQuestion] === index ? "checked" : ""}>
        <span>${answer.label}</span>
      </label>
    `)
    .join("");
}

function addPoints(scoreMap, key, points) {
  scoreMap[key] = (scoreMap[key] || 0) + points;
}

function calculateScores() {
  const categoryScores = {};
  const traitScores = {};

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;

    const answer = questions[questionIndex].answers[answerIndex];
    answer.categories.forEach((category, index) => {
      addPoints(categoryScores, category, index === 0 ? 3 : 1);
    });

    (answer.traits || []).forEach((trait) => {
      addPoints(traitScores, trait, 2);
    });
  });

  return { categoryScores, traitScores };
}

function getSortedEntries(scoreMap) {
  return Object.entries(scoreMap).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function getBestResultGroup(categoryScores) {
  const rankedGroups = resultGroups.map((group) => ({
    ...group,
    score: group.codes.reduce((total, code) => total + (categoryScores[code] || 0), 0)
  }));

  return rankedGroups.sort((a, b) => b.score - a.score)[0];
}

function getMatchPercent(topScore) {
  const percent = 76 + Math.min(22, Math.round((topScore / 30) * 22));
  return `${percent}% Match`;
}

function populateResult() {
  const { categoryScores, traitScores } = calculateScores();
  const topCategories = getSortedEntries(categoryScores);
  const topTraits = getSortedEntries(traitScores).map(([trait]) => trait);
  const topCategory = topCategories[0]?.[0] || "SH";
  const result = getBestResultGroup(categoryScores);
  const strongestTraits = [...new Set([...topTraits, ...result.traits])].slice(0, 5);

  matchedCareer.textContent = result.career;
  matchedCategory.textContent = result.category;
  matchPercent.textContent = getMatchPercent(topCategories[0]?.[1] || 0);

  suitList.innerHTML = [
    result.description,
    `Top category match: ${categoryNames[topCategory]}`,
    `Strongest traits: ${strongestTraits.join(", ")}`
  ].map((item) => `<li>${item}</li>`).join("");

  pathwayList.innerHTML = [
    `Primary career matches: ${result.primary.join(", ")}`,
    `Secondary matches: ${result.secondary.join(", ")}`,
    `Related categories: ${topCategories.slice(0, 4).map(([code]) => categoryNames[code]).join(", ")}`
  ].map((item) => `<li>${item}</li>`).join("");

  exploreResultLink.href = categoryLinks[topCategory] || "explore-careers.html";
}

function revealResult() {
  playQuizSound("result");
  quizVideoScreen.classList.add("hidden");
  showResultAfterVideoButton.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showVideoBeforeResult() {
  populateResult();
  quizScreen.classList.add("hidden");
  quizVideoScreen.classList.remove("hidden");
  quizTransitionVideo.currentTime = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });

  const playRequest = quizTransitionVideo.play();
  if (playRequest) {
    playRequest.catch(() => {
      showResultAfterVideoButton.classList.remove("hidden");
    });
  }
}

startButton.addEventListener("click", () => {
  playQuizSound("start");
  quizIntroScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
});

answerList.addEventListener("change", (event) => {
  answers[currentQuestion] = Number(event.target.value);
  playQuizSound("answer");
});

backButton.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  const selected = answerList.querySelector("input:checked");
  if (!selected) {
    playQuizSound("try-again");
    answerList.classList.add("answer-list-warning");
    return;
  }

  answerList.classList.remove("answer-list-warning");
  answers[currentQuestion] = Number(selected.value);

  if (currentQuestion === questions.length - 1) {
    showVideoBeforeResult();
    return;
  }

  playQuizSound("next");
  currentQuestion += 1;
  renderQuestion();
});

retakeButton.addEventListener("click", () => {
  answers.fill(null);
  currentQuestion = 0;
  quizTransitionVideo.pause();
  quizTransitionVideo.currentTime = 0;
  resultScreen.classList.add("hidden");
  quizVideoScreen.classList.add("hidden");
  showResultAfterVideoButton.classList.add("hidden");
  quizScreen.classList.add("hidden");
  quizIntroScreen.classList.remove("hidden");
  renderQuestion();
});

quizTransitionVideo.addEventListener("ended", revealResult);
showResultAfterVideoButton.addEventListener("click", revealResult);

renderQuestion();
