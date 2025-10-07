// -------------------------------
// QUESTIONS DATA
// -------------------------------

// --- Fully Populated Cocktail Questions (Harder) ---
const cocktailQuestions = [
  // Coolcumber Cooler
  { type:"Premade Cocktails", question:"What is in the Coolcumber Cooler pre-made bottle?", answers:["Soju 750ml + Lychee Syrup 5oz + Cucumber Juice 400ml","Soju 750ml + Cucumber Juice 400ml","Soju 500ml + Lychee Syrup 5oz + Sprite 100ml","Lychee Syrup 4oz + Soda Water 400ml"], correct:0, tip:"💡 Premade = 750ml Soju + Lychee Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Coolcumber Cooler single-serving cocktail?", answers:["150ml pre-made + 100ml cucumber juice + 1 scoop ice","200ml pre-made + 100ml cucumber juice","150ml pre-made + 50ml soda + 1 scoop ice","Soju 150ml + Lychee Syrup 1oz"], correct:0, tip:"💡 Single serving = 150ml pre-made + cucumber juice." },
  { type:"Pitcher Size Cocktails", question:"What is in the Coolcumber Cooler cocktail pitcher?", answers:["1 bottle Fresh Soju + 4oz Lychee Syrup + 400ml Cucumber Juice + ice","1 bottle Fresh Soju + 4oz Lychee Syrup + 300ml Cucumber Juice + ice","1 bottle Fresh Soju + 5oz Lychee Syrup + 400ml Cucumber Juice + ice","200ml pre-made + 50ml soda"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Coolcumber Cooler mocktail?", answers:["We do not make this mocktail","150ml pre-made + cucumber juice","325ml Sprite + 1oz Lychee Syrup","200ml pre-made + ice"], correct:0, tip:"⚠️ Not available as a mocktail." },

  // Mango Tango
  { type:"Premade Cocktails", question:"What is in the Mango Tango pre-made bottle?", answers:["Soju 750ml + Mango Syrup 5oz + Yogurt Syrup 5oz","Soju 750ml + Mango Syrup 4oz + Yogurt Syrup 5oz","Soju 500ml + Mango Syrup 5oz + Yogurt Syrup 5oz","Lychee Syrup 5oz + Mango Syrup 5oz"], correct:0, tip:"💡 Premade = 750ml Soju + Mango Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Mango Tango single-serving cocktail?", answers:["200ml pre-made + 50ml soda + 1 scoop ice","200ml pre-made + 50ml soda","150ml pre-made + 50ml soda + 1 scoop ice","200ml pre-made + 50ml lemonade + 1 scoop ice"], correct:0, tip:"💡 Single serving = 200ml pre-made + soda." },
  { type:"Pitcher Size Cocktails", question:"What is in the Mango Tango cocktail pitcher?", answers:["1 bottle Fresh Soju + 4oz Mango Syrup + 4oz Yogurt Syrup + 400ml Soda + 4 scoops ice","1 bottle Fresh Soju + 3oz Mango Syrup + 4oz Yogurt Syrup + 400ml Soda + 4 scoops ice","1 bottle Fresh Soju + 4oz Mango Syrup + 4oz Yogurt Syrup + 350ml Soda + 4 scoops ice","200ml pre-made + 50ml soda"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Mango Tango mocktail?", answers:["325ml Sprite + 1oz Mango Syrup + 1oz Yogurt + 1 scoop ice","325ml Sprite + 1oz Mango Syrup + 1 scoop ice","200ml pre-made + ice","Cucumber Juice 400ml + Soda 100ml"], correct:0, tip:"💡 Mocktail = Sprite base, no alcohol." },

  // Melona Twist
  { type:"Premade Cocktails", question:"What is in the Melona Twist pre-made bottle?", answers:["Soju 500ml + Yogurt Syrup 5oz","Soju 500ml + Yogurt Syrup 4oz","Soju 500ml + Mango Syrup 5oz","Soju 400ml + Yogurt Syrup 5oz"], correct:0, tip:"💡 Premade = 500ml Soju + Yogurt Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Melona Twist single-serving cocktail?", answers:["150ml pre-made + 100ml Sprite + 1 ice cream bar + 1 scoop ice","150ml pre-made + 100ml Sprite + 1 scoop ice","150ml pre-made + 50ml Sprite + 1 ice cream bar + 1 scoop ice","200ml pre-made + 100ml Sprite + 1 ice cream bar + 1 scoop ice"], correct:0, tip:"💡 Single serving includes ice cream bar." },
  { type:"Pitcher Size Cocktails", question:"What is in the Melona Twist cocktail pitcher?", answers:["We do not make a Melona Twist pitcher","1 bottle Fresh Soju + Mango Syrup","Soju 500ml + Yogurt Syrup + Sprite","325ml Sprite + 1oz Yogurt Syrup"], correct:0, tip:"⚠️ Not available as pitcher." },
  { type:"Mocktail", question:"What is in the Melona Twist mocktail?", answers:["200ml Sprite + 1oz Yogurt + 1 ice cream bar + 1 scoop ice","150ml pre-made + 100ml Sprite + 1 scoop ice","325ml Sprite + Lychee","Cucumber Juice 400ml + Sprite"], correct:0, tip:"💡 Mocktail = Sprite + yogurt + ice cream bar." },

  // Strawberry Crush
  { type:"Premade Cocktails", question:"What is in the Strawberry Crush pre-made bottle?", answers:["Soju 750ml + Strawberry Syrup 3oz","Soju 500ml + Strawberry Syrup 3oz + Yogurt Syrup 5oz","Soju 750ml + Strawberry Syrup 4oz + Yogurt Syrup 5oz","Lychee Syrup 5oz + Yogurt Syrup"], correct:0, tip:"💡 Premade uses 750ml Soju + 3oz Strawberry Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Strawberry Crush single-serving cocktail?", answers:["200ml pre-made + 100ml lemonade + 1oz Blue Curacao","200ml pre-made + 50ml lemonade + 1oz Blue Curacao","150ml pre-made + 100ml lemonade + 1oz Blue Curacao","325ml Sprite + Strawberry Syrup"], correct:0, tip:"💡 Single serving = 200ml pre-made + lemonade + Blue Curacao." },
  { type:"Pitcher Size Cocktails", question:"What is in the Strawberry Crush cocktail pitcher?", answers:["1 bottle Fresh Soju + 2oz Strawberry Syrup + 400ml Lemonade + 4oz Blue Curacao + ice","1 bottle Fresh Soju + 4oz Strawberry Syrup + 400ml Lemonade + 3oz Blue Curacao + ice","1 bottle Fresh Soju + 3oz Strawberry Syrup + 400ml Lemonade + 4oz Blue Curacao + ice","Soju 500ml + Guava Syrup 5oz"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Strawberry Crush mocktail?", answers:["325ml Lemonade + 1/2 oz Strawberry Syrup + 1oz Blue Curacao + 1 scoop ice","200ml pre-made + ice","Cucumber Juice 400ml + Sprite","325ml Lemonade + 1oz Strawberry Syrup + 1oz Blue Curacao"], correct:0, tip:"💡 Mocktail uses lemonade + syrup." },

  // Lychee Daisy
  { type:"Premade Cocktails", question:"What is in the Lychee Daisy pre-made bottle?", answers:["Soju 750ml + Lychee Syrup 5oz + Yogurt Syrup 5oz","Soju 500ml + Lychee Syrup 5oz + Yogurt Syrup 5oz","Soju 750ml + Lychee Syrup 4oz + Yogurt Syrup 5oz","Cucumber Juice 400ml + Lychee Syrup 5oz"], correct:0, tip:"💡 Premade = 750ml Soju + Lychee + Yogurt Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Lychee Daisy single-serving cocktail?", answers:["200ml pre-made + 50ml soda + 1 scoop ice","150ml pre-made + 50ml soda + 1 scoop ice","200ml pre-made + 50ml lemonade + 1 scoop ice","325ml Sprite + Yogurt Syrup"], correct:0, tip:"💡 Single serving = pre-made + soda." },
  { type:"Pitcher Size Cocktails", question:"What is in the Lychee Daisy cocktail pitcher?", answers:["1 bottle Fresh Soju + 4oz Lychee Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 4oz Lychee Syrup + 3oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 5oz Lychee Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","Soju 500ml + Guava Syrup 5oz"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Lychee Daisy mocktail?", answers:["325ml Sprite + 1oz Lychee Syrup + 1oz Yogurt + 1 scoop ice","200ml pre-made + ice","Cucumber Juice 400ml + Sprite","325ml Sprite + 1oz Lychee Syrup + 1 scoop ice"], correct:0, tip:"💡 Mocktail = Sprite + syrups." },

  // Popping Pink
  { type:"Premade Cocktails", question:"What is in the Popping Pink pre-made bottle?", answers:["Soju 750ml + Strawberry Syrup 5oz + Yogurt Syrup 5oz","Soju 750ml + Strawberry Syrup 4oz + Yogurt Syrup 5oz","Soju 500ml + Strawberry Syrup 5oz + Yogurt Syrup 5oz","Lychee Syrup 5oz + Yogurt Syrup 5oz"], correct:0, tip:"💡 Premade uses Strawberry Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Popping Pink single-serving cocktail?", answers:["200ml pre-made + 50ml soda + 1 scoop ice","200ml pre-made + 50ml soda","150ml pre-made + 50ml soda + 1 scoop ice","325ml Sprite + Yogurt Syrup"], correct:0, tip:"💡 Single serving = pre-made + soda." },
  { type:"Pitcher Size Cocktails", question:"What is in the Popping Pink cocktail pitcher?", answers:["1 bottle Fresh Soju + 4oz Strawberry Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 3oz Strawberry Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 4oz Strawberry Syrup + 3oz Yogurt Syrup + 400ml Soda + ice","Soju 500ml + Guava Syrup 5oz"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Popping Pink mocktail?", answers:["325ml Sprite + 1oz Strawberry Syrup + 1oz Yogurt + 1 scoop ice","200ml pre-made + ice","Cucumber Juice 400ml + Sprite","325ml Sprite + 1oz Strawberry Syrup + 1 scoop ice"], correct:0, tip:"💡 Mocktail = Sprite + syrups." },

  // Sweet Heart
  { type:"Premade Cocktails", question:"What is in the Sweet Heart pre-made bottle?", answers:["Soju 750ml + Guava Syrup 5oz + Yogurt Syrup 5oz","Soju 750ml + Guava Syrup 4oz + Yogurt Syrup 5oz","Soju 500ml + Guava Syrup 5oz + Yogurt Syrup 5oz","Lychee Syrup 5oz + Yogurt Syrup 5oz"], correct:0, tip:"💡 Premade = 750ml Soju + Guava + Yogurt Syrup." },
  { type:"Single Serving Cocktail", question:"What is in the Sweet Heart single-serving cocktail?", answers:["200ml pre-made + 50ml soda + 1 scoop ice","200ml pre-made + 50ml soda","150ml pre-made + 50ml soda + 1 scoop ice","325ml Sprite + Yogurt Syrup"], correct:0, tip:"💡 Single serving = pre-made + soda." },
  { type:"Pitcher Size Cocktails", question:"What is in the Sweet Heart cocktail pitcher?", answers:["1 bottle Fresh Soju + 4oz Guava Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 3oz Guava Syrup + 4oz Yogurt Syrup + 400ml Soda + ice","1 bottle Fresh Soju + 4oz Guava Syrup + 3oz Yogurt Syrup + 400ml Soda + ice","Soju 500ml + Guava Syrup 5oz"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Sweet Heart mocktail?", answers:["325ml Sprite + 1oz Guava Syrup + 1oz Yogurt + 1 scoop ice","200ml pre-made + ice","Cucumber Juice 400ml + Sprite","325ml Sprite + 1oz Guava Syrup + 1 scoop ice"], correct:0, tip:"💡 Mocktail = Sprite + syrups." },

  // Twisted Thai Tea
  { type:"Premade Cocktails", question:"What is in the Twisted Thai Tea pre-made bottle?", answers:["Not available as premade","Soju 750ml + Thai Tea","Soju 750ml + Thai Tea + Yogurt Syrup","Cucumber Juice 400ml + Thai Tea"], correct:0, tip:"⚠️ Not premade." },
  { type:"Single Serving Cocktail", question:"What is in the Twisted Thai Tea single-serving cocktail?", answers:["1oz Han Fire + 1 scoop ice + Pre-made Thai Tea","1oz Han Fire + 1 scoop ice + Thai Tea base","200ml pre-made + ice","325ml Sprite + Yogurt Syrup"], correct:0, tip:"💡 Cocktail includes 1oz Han Fire." },
  { type:"Pitcher Size Cocktails", question:"What is in the Twisted Thai Tea cocktail pitcher?", answers:["Thai Tea + Han Fire","1 bottle Fresh Soju + Thai Tea","1 bottle Fresh Soju + Thai Tea + Yogurt Syrup","Soju 500ml + Guava Syrup 5oz"], correct:0, tip:"💡 Pitcher = 4 servings." },
  { type:"Mocktail", question:"What is in the Twisted Thai Tea mocktail?", answers:["1 scoop of ice and fill with pre-made pitcher","1 scoop of ice and fill with Thai Tea base","Cucumber Juice 400ml + Sprite","Soju 500ml + Yogurt Syrup 5oz"], correct:0, tip:"💡 Mocktail = Thai Tea without alcohol." }
];


// --- Fully Populated Support Q&A Questions ---
const supportQuestions = [
  // Soft Drinks
  { type: "Soft Drinks", question: "How many jiggers do we have in total?", answers:["3","4","5","6"], correct:2, tip:"💡 Tip: There are 5 in total." },
  { type: "Soft Drinks", question: "Name the soft drinks that use syrups?", answers:["Shirley Temple, Cherry Coke, Strawberry Lemonade","Coke, Sprite","Lemonade, Arnold Palmer","All drinks"], correct:0, tip:"💡 Tip: Shirley Temple, Cherry Coke, Strawberry Lemonade use syrups." },
  { type: "Soft Drinks", question: "What is Arnold Palmer?", answers:["Lemonade + Unsweetened Iced Tea","Lemonade only","Iced Tea only","Lemonade + Sprite"], correct:0, tip:"💡 Tip: Arnold Palmer = Lemonade + Unsweetened Iced Tea." },
  { type: "Soft Drinks", question: "How do you make Arnold Palmer?", answers:["50% Lemonade + 50% Unsweetened Iced Tea","Lemonade only","Iced Tea only","All drinks"], correct:0, tip:"💡 Tip: 50% Lemonade + 50% Unsweetened Iced Tea." },
  { type: "Soft Drinks", question: "How do you make strawberry lemonade?", answers:["Strawberry syrup + lemonade","Lemonade only","Iced Tea only","All drinks"], correct:0, tip:"💡 Tip: Strawberry syrup + lemonade." },
  { type: "Soft Drinks", question: "How much strawberry syrup do we use in strawberry lemonade?", answers:["0.25 oz","0.5 oz","1 oz","2 oz"], correct:1, tip:"💡 Tip: 0.5 oz of strawberry syrup." },
  { type: "Soft Drinks", question: "When do you put 1 scoop of ice for all the syrup soft drinks?", answers:["Beginning","Middle","End","Never"], correct:2, tip:"💡 Tip: At the very end." },
  { type: "Soft Drinks", question: "When do you use a spoon to mix the syrup and the soda?", answers:["Always","Never","At the beginning","Only for lemonade"], correct:1, tip:"💡 Tip: We do not use a spoon; syrup should be made when adding soda." },
  { type: "Soft Drinks", question: "What is in the Shirley Temple?", answers:["Grenadine + Sprite","Strawberry Syrup + Sprite","Lemonade + Grenadine","Coke + Grenadine"], correct:0, tip:"💡 Tip: Shirley Temple = Grenadine + Sprite." },
  { type: "Soft Drinks", question: "How much syrup do we use in a Shirley Temple?", answers:["0.25 oz","0.5 oz","1 oz","2 oz"], correct:1, tip:"💡 Tip: 0.5 oz grenadine." },
  { type: "Soft Drinks", question: "Which syrup do we use in the Shirley Temple?", answers:["Strawberry","Grenadine","Lychee","Guava"], correct:1, tip:"💡 Tip: Grenadine." },
  { type: "Soft Drinks", question: "What is grenadine?", answers:["Cherry","Strawberry","Lychee","Guava"], correct:0, tip:"💡 Tip: Grenadine = Cherry flavor." },
  { type: "Soft Drinks", question: "What is in the Cherry Coke?", answers:["Grenadine + Coke","Strawberry + Coke","Lemon + Coke","Cherry Syrup + Coke"], correct:0, tip:"💡 Tip: Cherry Coke = Grenadine + Coke." },
  { type: "Soft Drinks", question: "How much soda do you fill up before putting ice in the cup for Cherry Coke?", answers:["50%","75%","90%","100%"], correct:1, tip:"💡 Tip: Fill 75% before ice." },
  { type: "Soft Drinks", question: "What type of cokes do we have?", answers:["Coke, Diet Coke, Coke Zero, Cherry Coke","Coke only","Diet Coke only","All sodas"], correct:0, tip:"💡 Tip: Coke, Diet Coke, Coke Zero, Cherry Coke." },
  { type: "Soft Drinks", question: "Which drinks on our menu are made with lemonade?", answers:["Strawberry Lemonade, Lemonade, Arnold Palmer","Coke, Diet Coke","All teas","All sodas"], correct:0, tip:"💡 Tip: Strawberry Lemonade, Lemonade, Arnold Palmer." },
  { type: "Soft Drinks", question: "What types of teas do we have?", answers:["Raspberry Iced Tea, Unsweetened Iced Tea, Hot Green Tea, Iced Green Tea, Virgin Thai Tea","Raspberry Tea only","Green Tea only","Hot Tea only"], correct:0, tip:"💡 Tip: All listed teas." },
  { type: "Soft Drinks", question: "What other sodas do we offer that’s not a Coke product?", answers:["Dr. Pepper, Sprite, Shirley Temple, Soda Water","Pepsi, Mountain Dew","Fanta, Sprite","All sodas"], correct:0, tip:"💡 Tip: Dr. Pepper, Sprite, Shirley Temple, Soda Water." },
  { type: "Soft Drinks", question: "Are all soft drinks refillable?", answers:["Yes, all drinks","No drinks","All soft drinks are refillable except Virgin Thai Tea","Only Lemonade"], correct:2, tip:"💡 Tip: All soft drinks are refillable except Virgin Thai Tea." },

  // Mocktail & Cocktail
  { type: "Mocktail & Cocktail", question: "What is the difference between a mocktail vs cocktail?", answers:["Mocktail has no alcohol, Cocktail has alcohol","Mocktail has alcohol, Cocktail has no alcohol","Both have alcohol","Both have no alcohol"], correct:0, tip:"💡 Tip: Mocktail = no alcohol; Cocktail = alcohol." },
  { type: "Mocktail & Cocktail", question: "Can all cocktails be mocktails?", answers:["Yes","No, some cannot","All except Mango Tango","Only Melona Twist"], correct:1, tip:"💡 Tip: Not all cocktails can be mocktails; Coolcumber Cooler cannot." },
  { type: "Mocktail & Cocktail", question: "What serving sizes do we offer for mocktails?", answers:["Single serving only","Pitcher only","Both single and pitcher","None"], correct:0, tip:"💡 Tip: Mocktails only single serving." },
  { type: "Mocktail & Cocktail", question: "What serving sizes do we offer for cocktails?", answers:["Pitcher or by the glass","Single serving only","Pitcher only","Mocktail only"], correct:0, tip:"💡 Tip: Cocktails can be pitcher or single glass." },
  { type: "Mocktail & Cocktail", question: "Can all mocktails be made in a pitcher size?", answers:["Yes","No","Sometimes","Only Strawberry Lemonade"], correct:1, tip:"💡 Tip: No, mocktails are never pitchers." },
  { type: "Mocktail & Cocktail", question: "Can all cocktails be made in a pitcher size?", answers:["Yes, except Melona Twist","No","Only Mango Tango","All cocktails"], correct:0, tip:"💡 Tip: Melona Twist cannot be made as a pitcher." },

  // Wine
  { type: "Wine", question: "What is the measurement for wine?", answers:["100 mL","150 mL","175 mL","200 mL"], correct:2, tip:"💡 Tip: Wine = 175 mL." },
  { type: "Wine", question: "Which wine is served cold?", answers:["Chardonnay","Cabernet","Merlot","Sauvignon Blanc"], correct:0, tip:"💡 Tip: Chardonnay served cold." },
  { type: "Wine", question: "Which wine is served at room temperature?", answers:["Cabernet","Chardonnay","Merlot","Sauvignon Blanc"], correct:0, tip:"💡 Tip: Cabernet at room temperature." },

  // Sake
  { type: "Sake", question: "How many shots are in a hot sake bottle?", answers:["4","5","6","8"], correct:2, tip:"💡 Tip: Hot sake bottle = 6 shots." },
  { type: "Sake", question: "If you get a hot sake ticket, what must you do first?", answers:["Rinse bottle with hot water, dump water, pour hot sake","Pour directly","Shake bottle","Heat bottle in microwave"], correct:0, tip:"💡 Tip: Rinse with hot water first." },
  { type: "Sake", question: "Which shot glass is served with hot sake vs cold sake/soju?", answers:["Hot = white ceramic, Cold = clear","Hot = clear, Cold = white ceramic","Both = white ceramic","Both = clear"], correct:0, tip:"💡 Tip: Hot = ceramic, Cold = clear." },

  // Miso Prep
  { type: "Miso Prep", question: "What ingredients are inside a miso bowl?", answers:["Seaweed, green onions, tofu, miso broth","Seaweed only","Tofu only","Miso broth only"], correct:0, tip:"💡 Tip: All listed ingredients." },
  { type: "Miso Prep", question: "How many trays of miso do you need for the opening shift?", answers:["6","7","8","10"], correct:2, tip:"💡 Tip: 8 trays for opening shift." },
  { type: "Miso Prep", question: "Correct order for prepping miso bowls?", answers:["Seaweed → Green onions → Tofu","Tofu → Seaweed → Green onions","Green onions → Tofu → Seaweed","Seaweed → Tofu → Green onions"], correct:0, tip:"💡 Tip: Dry → Wet: Seaweed first." },
  { type: "Miso Prep", question: "How much tofu goes in miso bowls?", answers:["2 pieces","3-4 pieces","5 pieces","6 pieces"], correct:1, tip:"💡 Tip: 3-4 pieces." },

  // Ginger / Wasabi
  { type: "Ginger & Wasabi", question: "Where can you find the metal strainer?", answers:["Under water pitchers","Behind the fridge","In the walk-in","Under the sink"], correct:0, tip:"💡 Tip: Under water pitchers." },
  { type: "Ginger & Wasabi", question: "Where can you find backup ginger?", answers:["Underneath support fridge","Locker room","Sushi station","Behind register"], correct:0, tip:"💡 Tip: Backup ginger is under support fridge." },
  { type: "Ginger & Wasabi", question: "Where can you find backup wasabi container?", answers:["Under support fridge & walk-in cooler","Locker room","Behind register","Sushi station"], correct:0, tip:"💡 Tip: Under support fridge or walk-in." }
];

// -------------------------------
// ELEMENT REFERENCES
// -------------------------------
const progressTextEl = document.getElementById("progress-text");
const questionTypeEl = document.getElementById("question-type");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const tipEl = document.getElementById("tip");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const restartBtn = document.getElementById("restartBtn");
const resultEl = document.getElementById("result");
const resultListEl = document.getElementById("resultList");
const cocktailBtn = document.getElementById("cocktailBtn");
const supportBtn = document.getElementById("supportBtn");

// -------------------------------
// VARIABLES
// -------------------------------
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let recentQuestions = { cocktail: [], support: [] };
let currentQuizType = "cocktail";

// Store shuffled answers per question to maintain consistency
let shuffledQuestionData = {};

// -------------------------------
// SHUFFLE HELPER
// -------------------------------
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// -------------------------------
// GET SHUFFLED ANSWERS
// -------------------------------
function getShuffledAnswers(question) {
  if (shuffledQuestionData[question.question]) {
    return shuffledQuestionData[question.question];
  }

  const answersWithIndex = question.answers.map((ans, idx) => ({ ans, idx }));
  shuffle(answersWithIndex);
  const newCorrectIndex = answersWithIndex.findIndex(a => a.idx === question.correct);

  const shuffledData = { 
    answers: answersWithIndex.map(a => a.ans), 
    correctIndex: newCorrectIndex 
  };

  shuffledQuestionData[question.question] = shuffledData;
  return shuffledData;
}

// -------------------------------
// START QUIZ
// -------------------------------
function startQuiz(quizType) {
  if (currentQuestions.length && currentQuizType !== quizType) {
    const abandon = confirm("You have ongoing progress. Do you want to abandon the current quiz and start a new one?");
    if (!abandon) return;
  }

  currentQuizType = quizType;
  score = 0;
  currentIndex = 0;
  userAnswers = [];
  shuffledQuestionData = {};
  feedbackEl.innerText = "";
  tipEl.innerText = "";
  resultEl.style.display = "none";

  const pool = quizType === "cocktail" ? cocktailQuestions : supportQuestions;
  currentQuestions = selectRandomQuestions(pool, recentQuestions[quizType], 10);
  recentQuestions[quizType] = currentQuestions.map(q => q.question);

  updateToggleHighlight();
  showQuestion();
}

// -------------------------------
// TOGGLE BUTTON HIGHLIGHT
// -------------------------------
function updateToggleHighlight() {
  if (currentQuizType === "cocktail") {
    cocktailBtn.classList.add("active");
    supportBtn.classList.remove("active");
  } else {
    supportBtn.classList.add("active");
    cocktailBtn.classList.remove("active");
  }
}

// -------------------------------
// RANDOM QUESTION SELECTION WITH BIAS
// -------------------------------
function selectRandomQuestions(pool, recent, count) {
  const nonRecent = pool.filter((q) => !recent.includes(q.question));
  const recentFiltered = pool.filter((q) => recent.includes(q.question));

  shuffle(nonRecent);
  let selected = nonRecent.slice(0, count);

  if (selected.length < count) {
    shuffle(recentFiltered);
    selected = selected.concat(recentFiltered.slice(0, count - selected.length));
  }

  shuffle(selected);
  return selected.slice(0, count);
}

// -------------------------------
// SHOW QUESTION
// -------------------------------
function showQuestion() {
  const q = currentQuestions[currentIndex];
  const { answers: shuffledAnswers, correctIndex } = getShuffledAnswers(q);

  progressTextEl.innerText = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
  questionTypeEl.innerText = q.type;
  questionEl.innerText = q.question;

  answersEl.innerHTML = "";

  shuffledAnswers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.className = "answer-btn";

    // Highlight previously answered
    const prevAnswer = userAnswers[currentIndex];
    if (prevAnswer) {
      btn.disabled = true;
      if (prevAnswer.selected === answer) btn.classList.add(prevAnswer.isCorrect ? "correct" : "wrong");
      if (!prevAnswer.isCorrect && index === correctIndex) btn.classList.add("correct");
    }

    btn.onclick = () => selectAnswer(index, correctIndex, shuffledAnswers);
    answersEl.appendChild(btn);
  });

  feedbackEl.innerText = userAnswers[currentIndex]?.isCorrect
    ? "✅ Correct!"
    : userAnswers[currentIndex]?.selected
    ? `❌ Wrong! Correct: ${shuffledAnswers[correctIndex]}`
    : "";
  tipEl.innerText = userAnswers[currentIndex]?.tip || "";

  nextBtn.innerText = currentIndex === currentQuestions.length - 1 ? "Finish" : "Next";
  prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";

  const progressPercent = ((currentIndex + (userAnswers[currentIndex] ? 1 : 0)) / currentQuestions.length) * 100;
  document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;
}


// -------------------------------
// HANDLE ANSWER SELECTION
// -------------------------------
function selectAnswer(selectedIndex, correctIndex, shuffledAnswers) {
  const q = currentQuestions[currentIndex];
  const isCorrect = selectedIndex === correctIndex;
  if (isCorrect) score++;

  feedbackEl.innerText = isCorrect
    ? "✅ Correct!"
    : `❌ Wrong! Correct: ${shuffledAnswers[correctIndex]}`;
  tipEl.innerText = q.tip || "";

  userAnswers[currentIndex] = {
    question: q.question,
    selected: shuffledAnswers[selectedIndex],
    correct: shuffledAnswers[correctIndex],
    isCorrect: isCorrect,
    tip: q.tip,
  };

  Array.from(answersEl.children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === selectedIndex) {
      btn.classList.add(isCorrect ? "correct" : "wrong");
    }
    if (idx === correctIndex && !isCorrect) {
      btn.classList.add("correct");
    }
  });
}

// -------------------------------
// NEXT BUTTON
// -------------------------------
nextBtn.onclick = () => {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    document.getElementById("progress-bar-fill").style.width = `100%`;
    showResults();
  }
};

// -------------------------------
// PREVIOUS BUTTON
// -------------------------------
prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
};

// -------------------------------
// SHOW RESULTS
// -------------------------------
function showResults() {
  resultEl.style.display = "block";
  resultListEl.innerHTML = "";

  userAnswers.forEach((a, i) => {
    const div = document.createElement("div");
    div.className = "resultItem";
    div.innerHTML = `<strong>Q${i + 1}: ${a.question}</strong><br>
                     Your answer: ${a.selected} ${a.isCorrect ? "✅" : "❌"}<br>
                     ${!a.isCorrect ? `Correct: ${a.correct}<br>Tip: ${a.tip}` : ""}`;
    resultListEl.appendChild(div);
  });
}

// -------------------------------
// RESTART QUIZ
// -------------------------------
restartBtn.onclick = () => startQuiz(currentQuizType);

// -------------------------------
// TOGGLE QUIZ BUTTONS
// -------------------------------
cocktailBtn.onclick = () => startQuiz("cocktail");
supportBtn.onclick = () => startQuiz("support");

// -------------------------------
// INITIAL LOAD
// -------------------------------
document.addEventListener("DOMContentLoaded", () => startQuiz("cocktail"));

// -------------------------------
// KEYBOARD NAVIGATION
// -------------------------------
document.addEventListener("keydown", (e) => {
  if (resultEl.style.display === "block") return; // disable nav on results

  if (e.key === "ArrowRight") {
    // Next question
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    // Previous question
    prevBtn.click();
  }
});
