const QUESTIONS_PER_ROUND = 15;
let timeLeft = 120; // 1 minute in seconds
const timerDisplay = document.getElementById('timer');

const countdown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerDisplay.innerHTML = 'Time is up!';

    disableOptions();  // Disable buttons so user cannot continue

    // After 3 seconds, show the results using your existing function
    setTimeout(() => {
      showResults();
    }, 3000);
  } else {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft <= 30) {
      timerDisplay.classList.add('low-time');
    }
  }
}, 1000);

function disableOptions() {
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.disabled = true);
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.disabled = true;
}
const questions = [
  {
    "question": "Which country hosted the 2024 G20 Summit?",
    "options": ["India", "Brazil", "Italy", "Japan"],
    "answer": 1
  },
  {
    "question": "Who is the current President of France as of June 2025?",
    "options": ["Emmanuel Macron", "Marine Le Pen", "François Hollande", "Nicolas Sarkozy"],
    "answer": 0
  },
  {
    "question": "Which Indian state recently launched the 'Green Energy Corridor' project in 2025?",
    "options": ["Gujarat", "Tamil Nadu", "Maharashtra", "Rajasthan"],
    "answer": 3
  },
  {
    "question": "Who won the 2024 Nobel Peace Prize?",
    "options": ["Narges Mohammadi", "Maria Ressa", "Alexei Navalny", "Greta Thunberg"],
    "answer": 0
  },
  {
    "question": "Which country topped the 2025 World Happiness Report?",
    "options": ["Denmark", "Finland", "Sweden", "Norway"],
    "answer": 1
  },
  {
    "question": "Who is the current Chief Justice of India as of June 2025?",
    "options": ["D.Y. Chandrachud", "U.U. Lalit", "N.V. Ramana", "S.A. Bobde"],
    "answer": 0
  },
  {
    "question": "Which country recently became the newest member of BRICS in 2024?",
    "options": ["Egypt", "Argentina", "Saudi Arabia", "UAE"],
    "answer": 2
  },
  {
    "question": "Which Indian city was declared the cleanest in the 2025 Swachh Survekshan rankings?",
    "options": ["Indore", "Surat", "Bhopal", "Mysuru"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's T20 World Cup?",
    "options": ["India", "Australia", "England", "Pakistan"],
    "answer": 1
  },
  {
    "question": "Which company became the world's most valuable in 2025?",
    "options": ["Apple", "Microsoft", "Saudi Aramco", "Amazon"],
    "answer": 1
  },

  {
    "question": "Who is the current Secretary-General of the United Nations as of June 2025?",
    "options": ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Amina J. Mohammed"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Shakti' scheme for women's empowerment in 2025?",
    "options": ["Odisha", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
    "answer": 1
  },
  {
    "question": "Which country won the most gold medals at the 2024 Paris Olympics?",
    "options": ["USA", "China", "Japan", "Russia"],
    "answer": 0
  },
  {
    "question": "Who is the current Prime Minister of the United Kingdom as of June 2025?",
    "options": ["Rishi Sunak", "Keir Starmer", "Boris Johnson", "Liz Truss"],
    "answer": 1
  },
  {
    "question": "Which Indian scientist was awarded the 2025 Abel Prize?",
    "options": ["Manjul Bhargava", "Ashoke Sen", "C.R. Rao", "Akshay Venkatesh"],
    "answer": 2
  },
  {
    "question": "Which country launched the 'Lunar Gateway' space station module in 2025?",
    "options": ["USA", "Russia", "China", "Japan"],
    "answer": 0
  },
  {
    "question": "Who is the current President of South Africa as of June 2025?",
    "options": ["Cyril Ramaphosa", "Jacob Zuma", "Julius Malema", "Mmusi Maimane"],
    "answer": 0
  },
  {
    "question": "Which Indian city hosted the 2025 International Film Festival of India?",
    "options": ["Goa", "Mumbai", "Bangalore", "Delhi"],
    "answer": 0
  },
  {
    "question": "Which country introduced the world's first digital-only central bank currency in 2025?",
    "options": ["China", "Sweden", "India", "USA"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 Australian Open Men's Singles title?",
    "options": ["Carlos Alcaraz", "Novak Djokovic", "Daniil Medvedev", "Jannik Sinner"],
    "answer": 0
  },
  {
    "question": "Which Indian state announced the 'Jal Jeevan Mission 2.0' in 2025?",
    "options": ["Punjab", "Karnataka", "Uttar Pradesh", "Bihar"],
    "answer": 2
  },
  {
    "question": "Which country hosted the 2025 World Economic Forum Annual Meeting?",
    "options": ["Switzerland", "USA", "Singapore", "UAE"],
    "answer": 0
  },
  {
    "question": "Who is the current Prime Minister of Canada as of June 2025?",
    "options": ["Justin Trudeau", "Pierre Poilievre", "Jagmeet Singh", "Chrystia Freeland"],
    "answer": 0
  },
  {
    "question": "Which Indian bank merged with HDFC Bank in 2024?",
    "options": ["HDFC Ltd", "ICICI Bank", "Axis Bank", "SBI"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Booker Prize for Fiction?",
    "options": ["Shehan Karunatilaka", "Sarah Bernstein", "Jonathan Escoffery", "Paul Murray"],
    "answer": 1
  },
  {
    "question": "Which country launched the 'Green Hydrogen Mission' in 2025?",
    "options": ["India", "Germany", "Australia", "Japan"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the United States as of June 2025?",
    "options": ["Joe Biden", "Donald Trump", "Kamala Harris", "Ron DeSantis"],
    "answer": 0
  },
  {
    "question": "Which Indian state topped the 2025 NITI Aayog Innovation Index?",
    "options": ["Karnataka", "Maharashtra", "Tamil Nadu", "Kerala"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 FIFA U-20 World Cup?",
    "options": ["Argentina", "Brazil", "France", "Nigeria"],
    "answer": 1
  },
  {
    "question": "Who was appointed as the new CEO of Twitter in 2025?",
    "options": ["Linda Yaccarino", "Elon Musk", "Jack Dorsey", "Parag Agrawal"],
    "answer": 0
  },
  {
    "question": "Which Indian state started the 'Har Ghar Dastak 2.0' vaccination campaign in 2025?",
    "options": ["Uttar Pradesh", "Maharashtra", "West Bengal", "Tamil Nadu"],
    "answer": 1
  },
  {
    "question": "Which country won the 2025 Women's Cricket World Cup?",
    "options": ["Australia", "England", "India", "New Zealand"],
    "answer": 2
  },
  {
    "question": "Who won the 2025 Pritzker Architecture Prize?",
    "options": ["Riken Yamamoto", "David Chipperfield", "Francis Kéré", "Anne Lacaton"],
    "answer": 0
  },
  {
    "question": "Which Indian airport was ranked the best in South Asia in 2025?",
    "options": ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 COP30 Climate Conference?",
    "options": ["Brazil", "Egypt", "India", "France"],
    "answer": 0
  },
  {
    "question": "Who is the current Prime Minister of Japan as of June 2025?",
    "options": ["Fumio Kishida", "Yoshihide Suga", "Shinzo Abe", "Taro Kono"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mukhyamantri Ladli Behna Yojana' in 2025?",
    "options": ["Madhya Pradesh", "Chhattisgarh", "Rajasthan", "Odisha"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 Asian Cup Football Championship?",
    "options": ["Japan", "Qatar", "South Korea", "Australia"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 Pulitzer Prize for Fiction?",
    "options": ["Paul Harding", "Hernan Diaz", "Barbara Kingsolver", "Jesmyn Ward"],
    "answer": 2
  },
  {
    "question": "Which Indian state topped the 2025 SDG India Index?",
    "options": ["Kerala", "Tamil Nadu", "Himachal Pradesh", "Goa"],
    "answer": 0
  },
  {
    "question": "Which country assumed the presidency of the UN Security Council in June 2025?",
    "options": ["India", "Russia", "China", "France"],
    "answer": 1
  },
  {
    "question": "Who is the current President of Iran as of June 2025?",
    "options": ["Ebrahim Raisi", "Mohammad Mokhber", "Hassan Rouhani", "Ali Khamenei"],
    "answer": 1
  },
  {
    "question": "Which Indian state declared 2025 as the 'Year of Millet'?",
    "options": ["Karnataka", "Rajasthan", "Odisha", "Telangana"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 ASEAN Summit?",
    "options": ["Indonesia", "Vietnam", "Thailand", "Malaysia"],
    "answer": 2
  },
  {
    "question": "Who won the 2025 French Open Women's Singles title?",
    "options": ["Iga Swiatek", "Aryna Sabalenka", "Coco Gauff", "Ons Jabeur"],
    "answer": 0
  },
  {
    "question": "Which Indian state topped the 2025 Ease of Doing Business ranking?",
    "options": ["Andhra Pradesh", "Gujarat", "Maharashtra", "Tamil Nadu"],
    "answer": 0
  },
  {
    "question": "Who is the current Chancellor of Germany as of June 2025?",
    "options": ["Olaf Scholz", "Angela Merkel", "Annalena Baerbock", "Friedrich Merz"],
    "answer": 0
  },
  {
    "question": "Which country launched the world’s first commercial fusion power plant in 2025?",
    "options": ["USA", "China", "UK", "Japan"],
    "answer": 1
  },
  {
    "question": "Who was awarded the 2025 Templeton Prize?",
    "options": ["Jane Goodall", "Dalai Lama", "Desmond Tutu", "Malala Yousafzai"],
    "answer": 0
  },
  {
    "question": "Which Indian state implemented the 'One District One Product' scheme in 2025?",
    "options": ["Uttar Pradesh", "Maharashtra", "Gujarat", "West Bengal"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 FIBA Basketball World Cup?",
    "options": ["USA", "Spain", "France", "Serbia"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Sri Lanka as of June 2025?",
    "options": ["Ranil Wickremesinghe", "Maithripala Sirisena", "Gotabaya Rajapaksa", "Sajith Premadasa"],
    "answer": 0
  },
  {
    "question": "Which Indian city hosted the 2025 Pravasi Bharatiya Divas?",
    "options": ["Indore", "Ahmedabad", "Delhi", "Bengaluru"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 ICC Women's T20 World Cup?",
    "options": ["Australia", "India", "England", "South Africa"],
    "answer": 1
  },
  {
    "question": "Which country launched the 'Mars Sample Return Mission' in 2025?",
    "options": ["USA", "China", "Russia", "India"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Brazil as of June 2025?",
    "options": ["Luiz Inácio Lula da Silva", "Jair Bolsonaro", "Dilma Rousseff", "Michel Temer"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Startup India Seed Fund Scheme' in 2025?",
    "options": ["Kerala", "Karnataka", "Delhi", "Maharashtra"],
    "answer": 1
  },
  {
    "question": "Which country hosted the 2025 World Chess Championship?",
    "options": ["Russia", "India", "Norway", "USA"],
    "answer": 2
  },
  {
    "question": "Who won the 2025 Grammy Award for Album of the Year?",
    "options": ["Taylor Swift", "SZA", "Olivia Rodrigo", "Billie Eilish"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Chief Minister's Breakfast Scheme' for school children in 2025?",
    "options": ["Tamil Nadu", "Kerala", "Punjab", "Madhya Pradesh"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 Rugby World Cup?",
    "options": ["South Africa", "New Zealand", "England", "France"],
    "answer": 3
  },
  {
    "question": "Who is the current President of the European Commission as of June 2025?",
    "options": ["Ursula von der Leyen", "Jean-Claude Juncker", "Charles Michel", "Josep Borrell"],
    "answer": 0
  },
  {
    "question": "Which Indian state implemented the 'Digital Health Mission' in 2025?",
    "options": ["Kerala", "Gujarat", "Delhi", "Haryana"],
    "answer": 2
  },
  {
    "question": "Who won the 2025 Oscar for Best Picture?",
    "options": ["Oppenheimer", "Barbie", "Killers of the Flower Moon", "Poor Things"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 Commonwealth Heads of Government Meeting?",
    "options": ["Rwanda", "Australia", "India", "UK"],
    "answer": 1
  },
  {
    "question": "Who is the current President of Turkey as of June 2025?",
    "options": ["Recep Tayyip Erdoğan", "Ekrem İmamoğlu", "Kemal Kılıçdaroğlu", "Ahmet Davutoğlu"],
    "answer": 0
  },
  {
    "question": "Which Indian city hosted the 2025 World Book Fair?",
    "options": ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Nobel Prize in Literature?",
    "options": ["Jon Fosse", "Annie Ernaux", "Ngugi wa Thiong'o", "Salman Rushdie"],
    "answer": 2
  },
  {
    "question": "Which country hosted the 2025 World Expo?",
    "options": ["Japan", "UAE", "USA", "France"],
    "answer": 0
  },
  {
    "question": "Who is the current Prime Minister of Italy as of June 2025?",
    "options": ["Giorgia Meloni", "Mario Draghi", "Giuseppe Conte", "Matteo Renzi"],
    "answer": 0
  },
  {
    "question": "Which Indian state declared 2025 as the 'Year of Tourism'?",
    "options": ["Goa", "Kerala", "Rajasthan", "Sikkim"],
    "answer": 2
  },
  {
    "question": "Which country won the 2025 Davis Cup Tennis?",
    "options": ["Spain", "Italy", "USA", "Australia"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 Miss Universe title?",
    "options": ["Sheynnis Palacios", "R'Bonney Gabriel", "Andrea Meza", "Priyanka Chopra"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Green Mobility Corridor' in 2025?",
    "options": ["Delhi", "Maharashtra", "Karnataka", "Gujarat"],
    "answer": 0
  },
  {
    "question": "Which country topped the 2025 Global Innovation Index?",
    "options": ["Switzerland", "USA", "Sweden", "Singapore"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Mexico as of June 2025?",
    "options": ["Claudia Sheinbaum", "Andrés Manuel López Obrador", "Felipe Calderón", "Enrique Peña Nieto"],
    "answer": 0
  },
  {
    "question": "Which Indian state implemented the 'Digital Village' project in 2025?",
    "options": ["Gujarat", "Punjab", "Odisha", "Assam"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's Cricket World Cup Player of the Tournament?",
    "options": ["Virat Kohli", "Pat Cummins", "Ben Stokes", "Kane Williamson"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 UN Biodiversity Conference?",
    "options": ["India", "China", "Brazil", "Canada"],
    "answer": 2
  },
  {
    "question": "Who is the current Prime Minister of Australia as of June 2025?",
    "options": ["Anthony Albanese", "Scott Morrison", "Peter Dutton", "Malcolm Turnbull"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Smart Anganwadi' project in 2025?",
    "options": ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Ballon d'Or?",
    "options": ["Erling Haaland", "Kylian Mbappé", "Lionel Messi", "Jude Bellingham"],
    "answer": 1
  },
  {
    "question": "Which country became the first to legalize lab-grown meat in 2025?",
    "options": ["Singapore", "USA", "Israel", "Netherlands"],
    "answer": 1
  },
  {
    "question": "Who is the current President of South Korea as of June 2025?",
    "options": ["Yoon Suk-yeol", "Moon Jae-in", "Lee Jae-myung", "Park Geun-hye"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Buniyaad' education program in 2025?",
    "options": ["Delhi", "Uttar Pradesh", "Bihar", "Madhya Pradesh"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 ICC Men's U19 Cricket World Cup?",
    "options": ["India", "Australia", "Bangladesh", "England"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Man Booker International Prize?",
    "options": ["Geetanjali Shree", "David Diop", "Han Kang", "Olga Tokarczuk"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Kisan Drone Yatra' in 2025?",
    "options": ["Madhya Pradesh", "Punjab", "Haryana", "Uttar Pradesh"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Nigeria as of June 2025?",
    "options": ["Bola Tinubu", "Muhammadu Buhari", "Goodluck Jonathan", "Yemi Osinbajo"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Athletics Championships?",
    "options": ["USA", "Hungary", "Japan", "Qatar"],
    "answer": 2
  },
  {
    "question": "Who won the 2025 ICC Men's Test Cricketer of the Year?",
    "options": ["Joe Root", "Steve Smith", "Ravindra Jadeja", "Pat Cummins"],
    "answer": 2
  },
  {
    "question": "Which Indian state launched the 'Digital Learning Initiative' in 2025?",
    "options": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "answer": 2
  },
  {
    "question": "Who is the current President of Egypt as of June 2025?",
    "options": ["Abdel Fattah el-Sisi", "Mohamed Morsi", "Ahmed Shafik", "Hosni Mubarak"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 ICC Women's U19 Cricket World Cup?",
    "options": ["India", "Australia", "England", "South Africa"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Golden Globe for Best Motion Picture – Drama?",
    "options": ["Oppenheimer", "Barbie", "Anatomy of a Fall", "Maestro"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'One Family One Doctor' scheme in 2025?",
    "options": ["Gujarat", "Maharashtra", "Punjab", "Tamil Nadu"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the Philippines as of June 2025?",
    "options": ["Ferdinand Marcos Jr.", "Rodrigo Duterte", "Leni Robredo", "Manny Pacquiao"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 International Film Festival?",
    "options": ["France", "India", "USA", "Italy"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's ODI Cricketer of the Year?",
    "options": ["Babar Azam", "Shubman Gill", "Virat Kohli", "Travis Head"],
    "answer": 1
  },
  {
    "question": "Which Indian state implemented the 'Digital Ration Card' system in 2025?",
    "options": ["West Bengal", "Odisha", "Tamil Nadu", "Karnataka"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Indonesia as of June 2025?",
    "options": ["Prabowo Subianto", "Joko Widodo", "Megawati Sukarnoputri", "Susilo Bambang Yudhoyono"],
    "answer": 0
  },
  {
    "question": "Which country won the 2025 Women's Hockey World Cup?",
    "options": ["Netherlands", "Argentina", "Australia", "India"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's T20I Cricketer of the Year?",
    "options": ["Suryakumar Yadav", "Jos Buttler", "Glenn Maxwell", "Babar Azam"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Shiksha' in 2025?",
    "options": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Israel as of June 2025?",
    "options": ["Isaac Herzog", "Benjamin Netanyahu", "Naftali Bennett", "Reuven Rivlin"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Water Forum?",
    "options": ["Indonesia", "Brazil", "India", "South Africa"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's ODI Cricketer of the Year?",
    "options": ["Smriti Mandhana", "Alyssa Healy", "Heather Knight", "Mithali Raj"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Parivar Vikas' in 2025?",
    "options": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Odisha"],
    "answer": 0
  },
  {
    "question": "Who is the current President of Ukraine as of June 2025?",
    "options": ["Volodymyr Zelenskyy", "Petro Poroshenko", "Arseniy Yatsenyuk", "Viktor Yanukovych"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Economic Forum on Africa?",
    "options": ["South Africa", "Nigeria", "Kenya", "Egypt"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's T20I Cricketer of the Year?",
    "options": ["Harmanpreet Kaur", "Beth Mooney", "Sophie Devine", "Shafali Verma"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Youth' in 2025?",
    "options": ["Jammu & Kashmir", "Punjab", "Assam", "Odisha"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the World Bank as of June 2025?",
    "options": ["Ajay Banga", "David Malpass", "Kristalina Georgieva", "Jim Yong Kim"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 Global Entrepreneurship Summit?",
    "options": ["India", "USA", "UK", "Singapore"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Emerging Player of the Year?",
    "options": ["Yashasvi Jaiswal", "Shubman Gill", "Cameron Green", "Harry Brook"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission 100' for school education in 2025?",
    "options": ["Haryana", "Maharashtra", "Punjab", "Kerala"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the International Olympic Committee as of June 2025?",
    "options": ["Thomas Bach", "Sebastian Coe", "Jacques Rogge", "Juan Antonio Samaranch"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Urban Forum?",
    "options": ["Poland", "UAE", "India", "Brazil"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Spirit of Cricket Award?",
    "options": ["Kane Williamson", "Joe Root", "Virat Kohli", "Pat Cummins"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Shakti' for women empowerment in 2025?",
    "options": ["Odisha", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
    "answer": 1
  },
  {
    "question": "Who is the current President of the Asian Development Bank as of June 2025?",
    "options": ["Masatsugu Asakawa", "Takehiko Nakao", "Haruhiko Kuroda", "Jin Liqun"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Anti-Corruption Conference?",
    "options": ["Austria", "India", "USA", "Brazil"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Umpire of the Year?",
    "options": ["Nitin Menon", "Richard Illingworth", "Kumar Dharmasena", "Aleem Dar"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Vatsalya' for child welfare in 2025?",
    "options": ["Maharashtra", "Kerala", "Tamil Nadu", "Uttar Pradesh"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the Asian Infrastructure Investment Bank as of June 2025?",
    "options": ["Jin Liqun", "Masatsugu Asakawa", "Takehiko Nakao", "Kristalina Georgieva"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Food Summit?",
    "options": ["Italy", "India", "USA", "France"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's Emerging Player of the Year?",
    "options": ["Shafali Verma", "Richa Ghosh", "Alice Capsey", "Phoebe Litchfield"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Karmayogi' for government employees in 2025?",
    "options": ["Maharashtra", "Gujarat", "Uttar Pradesh", "Karnataka"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the IMF as of June 2025?",
    "options": ["Kristalina Georgieva", "Christine Lagarde", "David Malpass", "Ajay Banga"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Renewable Energy Congress?",
    "options": ["India", "Germany", "USA", "China"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's Associate Cricketer of the Year?",
    "options": ["Gerhard Erasmus", "Sandeep Lamichhane", "Richie Berrington", "Paul Stirling"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Rozgar' for employment generation in 2025?",
    "options": ["Uttar Pradesh", "Maharashtra", "Punjab", "Tamil Nadu"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the African Union as of June 2025?",
    "options": ["Azali Assoumani", "Cyril Ramaphosa", "Paul Kagame", "Moussa Faki Mahamat"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Science Forum?",
    "options": ["South Africa", "India", "Hungary", "Brazil"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's Associate Cricketer of the Year?",
    "options": ["Kathryn Bryce", "Esha Oza", "Sterre Kalis", "Natthakan Chantham"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Shakti' for women safety in 2025?",
    "options": ["Odisha", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
    "answer": 1
  },
  {
    "question": "Who is the current President of the United Nations General Assembly as of June 2025?",
    "options": ["Dennis Francis", "Csaba Kőrösi", "Abdulla Shahid", "Volkan Bozkır"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Social Forum?",
    "options": ["Brazil", "India", "USA", "France"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Fair Play Award?",
    "options": ["New Zealand", "India", "Australia", "England"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Nirmal Bangla' in 2025?",
    "options": ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
    "answer": 0
  },
  {
    "question": "Which country announced the world's first AI-powered parliament in 2025?",
    "options": ["Estonia", "Singapore", "UAE", "South Korea"],
    "answer": 2
  },
  {
    "question": "Who is the current President of the Maldives as of June 2025?",
    "options": ["Mohamed Muizzu", "Ibrahim Mohamed Solih", "Abdulla Yameen", "Mohamed Nasheed"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mukhya Mantri Udyami Yojana' in 2025?",
    "options": ["Bihar", "Jharkhand", "Odisha", "Chhattisgarh"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Laureus World Sportsman of the Year award?",
    "options": ["Novak Djokovic", "Lionel Messi", "Max Verstappen", "Erling Haaland"],
    "answer": 0
  },
  {
    "question": "Which country launched the 'Digital Silk Road' initiative in 2025?",
    "options": ["China", "India", "USA", "Japan"],
    "answer": 0
  },
  {
    "question": "Who is the current Prime Minister of Nepal as of June 2025?",
    "options": ["Pushpa Kamal Dahal", "Sher Bahadur Deuba", "K P Sharma Oli", "Madhav Kumar Nepal"],
    "answer": 0
  },
  {
    "question": "Which Indian city hosted the 2025 World Environment Day celebrations?",
    "options": ["Mumbai", "Delhi", "Chennai", "Bengaluru"],
    "answer": 1
  },
  {
    "question": "Which country became the first to approve a malaria vaccine for children in 2025?",
    "options": ["Ghana", "Nigeria", "Kenya", "Uganda"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 ICC Men's Emerging Player of the Year?",
    "options": ["Yashasvi Jaiswal", "Cameron Green", "Harry Brook", "Matheesha Pathirana"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'e-Cabinet' initiative in 2025?",
    "options": ["Himachal Pradesh", "Kerala", "Goa", "Assam"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the European Council as of June 2025?",
    "options": ["Charles Michel", "Donald Tusk", "Jean-Claude Juncker", "Josep Borrell"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Robotics Olympiad?",
    "options": ["Japan", "USA", "Germany", "India"],
    "answer": 3
  },
  {
    "question": "Who won the 2025 Wimbledon Women's Singles title?",
    "options": ["Aryna Sabalenka", "Iga Swiatek", "Elena Rybakina", "Coco Gauff"],
    "answer": 3
  },
  {
    "question": "Which Indian state launched the 'Mission Vatsalya' for child welfare in 2025?",
    "options": ["Maharashtra", "Uttar Pradesh", "West Bengal", "Odisha"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the World Health Organization as of June 2025?",
    "options": ["Tedros Adhanom Ghebreyesus", "David Nabarro", "Margaret Chan", "Gro Harlem Brundtland"],
    "answer": 0
  },
  {
    "question": "Which country topped the 2025 Global Peace Index?",
    "options": ["Iceland", "New Zealand", "Denmark", "Portugal"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's Emerging Player of the Year?",
    "options": ["Shafali Verma", "Alice Capsey", "Phoebe Litchfield", "Richa Ghosh"],
    "answer": 2
  },
  {
    "question": "Which Indian state launched the 'Mukhya Mantri Solar Pump Yojana' in 2025?",
    "options": ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Gujarat"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the International Court of Justice as of June 2025?",
    "options": ["Joan E. Donoghue", "Ronny Abraham", "Abdulqawi Yusuf", "Peter Tomka"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Youth Festival?",
    "options": ["Russia", "India", "Brazil", "China"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 Golden Boot at the UEFA Euro Championship?",
    "options": ["Kylian Mbappé", "Harry Kane", "Cristiano Ronaldo", "Romelu Lukaku"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Shiksha' for teachers' training in 2025?",
    "options": ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the Asian Football Confederation as of June 2025?",
    "options": ["Salman bin Ibrahim Al-Khalifa", "Sheikh Ahmad Al-Fahad Al-Sabah", "Shaikh Salman bin Ebrahim Al Khalifa", "Dato' Windsor John"],
    "answer": 0
  },
  {
    "question": "Which country launched the 'Ocean Cleanup 2.0' project in 2025?",
    "options": ["Netherlands", "Australia", "Canada", "USA"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Women's ODI Cricketer of the Year?",
    "options": ["Smriti Mandhana", "Alyssa Healy", "Heather Knight", "Beth Mooney"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Rozgar' for employment in 2025?",
    "options": ["Uttar Pradesh", "Bihar", "Odisha", "West Bengal"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the African Union as of June 2025?",
    "options": ["Azali Assoumani", "Paul Kagame", "Cyril Ramaphosa", "Moussa Faki Mahamat"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 International Renewable Energy Conference?",
    "options": ["Germany", "India", "France", "USA"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 ICC Men's ODI Cricketer of the Year?",
    "options": ["Shubman Gill", "Babar Azam", "Travis Head", "Virat Kohli"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Parivar Vikas' in 2025?",
    "options": ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the United Nations General Assembly as of June 2025?",
    "options": ["Dennis Francis", "Csaba Kőrösi", "Abdulla Shahid", "Volkan Bozkır"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Social Forum?",
    "options": ["Brazil", "India", "USA", "France"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Fair Play Award?",
    "options": ["New Zealand", "India", "Australia", "England"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Nirmal Bangla' in 2025?",
    "options": ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the International Olympic Committee as of June 2025?",
    "options": ["Thomas Bach", "Sebastian Coe", "Jacques Rogge", "Juan Antonio Samaranch"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Urban Forum?",
    "options": ["Poland", "UAE", "India", "Brazil"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Spirit of Cricket Award?",
    "options": ["Kane Williamson", "Joe Root", "Virat Kohli", "Pat Cummins"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mission Karmayogi' for government employees in 2025?",
    "options": ["Maharashtra", "Gujarat", "Uttar Pradesh", "Karnataka"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the IMF as of June 2025?",
    "options": ["Kristalina Georgieva", "Christine Lagarde", "David Malpass", "Ajay Banga"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Mukhya Mantri Ladli Yojana' for girl child welfare in 2025?",
    "options": ["Bihar", "Madhya Pradesh", "Rajasthan", "Haryana"],
    "answer": 0
  },
  {
    "question": "Who is the current President of the World Bank as of June 2025?",
    "options": ["Ajay Banga", "David Malpass", "Jim Yong Kim", "Kristalina Georgieva"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 International Yoga Day global event?",
    "options": ["India", "USA", "France", "Australia"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 ICC Women's U19 T20 World Cup?",
    "options": ["India", "Australia", "England", "South Africa"],
    "answer": 0
  },
  {
    "question": "Which Indian state launched the 'Harit Path' mobile app for highway plantation monitoring in 2025?",
    "options": ["Uttar Pradesh", "Maharashtra", "Madhya Pradesh", "Gujarat"],
    "answer": 2
  },
  {
    "question": "Who is the current President of Argentina as of June 2025?",
    "options": ["Javier Milei", "Alberto Fernández", "Mauricio Macri", "Cristina Fernández de Kirchner"],
    "answer": 0
  },
  {
    "question": "Which country became the first to ban disposable vapes in 2025?",
    "options": ["UK", "Australia", "New Zealand", "Canada"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 Nobel Prize in Physics?",
    "options": ["Pierre Agostini", "Ferenc Krausz", "Anne L'Huillier", "All of the above"],
    "answer": 3
  },
  {
    "question": "Which Indian city hosted the 2025 BRICS Summit?",
    "options": ["Delhi", "Hyderabad", "Mumbai", "Chennai"],
    "answer": 2
  },
  {
    "question": "Who is the current President of the Asian Development Bank as of June 2025?",
    "options": ["Masatsugu Asakawa", "Takehiko Nakao", "Haruhiko Kuroda", "Jin Liqun"],
    "answer": 0
  },
  {
    "question": "Which country launched the 'Global AI Partnership' in 2025?",
    "options": ["USA", "UK", "India", "Japan"],
    "answer": 1
  },
  {
    "question": "Who won the 2025 Pulitzer Prize for Public Service?",
    "options": ["Reuters", "The New York Times", "The Washington Post", "Associated Press"],
    "answer": 1
  },
  {
    "question": "Which Indian state became the first to implement 100% e-vehicle public transport in 2025?",
    "options": ["Kerala", "Delhi", "Goa", "Sikkim"],
    "answer": 1
  },
  {
    "question": "Who is the current President of the International Monetary Fund as of June 2025?",
    "options": ["Kristalina Georgieva", "Christine Lagarde", "Ajay Banga", "David Malpass"],
    "answer": 0
  },
  {
    "question": "Which country hosted the 2025 World Economic Forum on Africa?",
    "options": ["South Africa", "Nigeria", "Egypt", "Kenya"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's Test Cricketer of the Year?",
    "options": ["Joe Root", "Pat Cummins", "Ravindra Jadeja", "Steve Smith"],
    "answer": 2
  },
  {
    "question": "Which Indian state launched the 'Mission Swachhta Aur Paani' in 2025?",
    "options": ["Maharashtra", "Uttar Pradesh", "Punjab", "Rajasthan"],
    "answer": 2
  },
  {
    "question": "Who is the current President of the United Arab Emirates as of June 2025?",
    "options": ["Mohamed bin Zayed Al Nahyan", "Khalifa bin Zayed Al Nahyan", "Mohammed bin Rashid Al Maktoum", "Sultan bin Zayed Al Nahyan"],
    "answer": 0
  },
  {
    "question": "Which country became the first to approve a gene-edited wheat variety in 2025?",
    "options": ["Argentina", "USA", "India", "Australia"],
    "answer": 0
  },
  {
    "question": "Who won the 2025 ICC Men's ODI Cricketer of the Year?",
    "options": ["Shubman Gill", "Babar Azam", "Virat Kohli", "Travis Head"],
    "answer": 0
  },
  {
    "question": "Which Indian city was declared the UNESCO World Heritage Site in 2025?",
    "options": ["Varanasi", "Ahmedabad", "Hampi", "Gwalior"],
    "answer": 3
  }
];
const storageKey = "usedSportsIndices";

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let usedIndices = [];

function loadUsedIndices() {
  const data = localStorage.getItem(storageKey);
  if (data) usedIndices = JSON.parse(data);
  else usedIndices = [];
}

function saveUsedIndices() {
  localStorage.setItem(storageKey, JSON.stringify(usedIndices));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  loadUsedIndices();
  let availableIndices = [];
  for (let i = 0; i < questions.length; i++) {
    if (!usedIndices.includes(i)) availableIndices.push(i);
  }
  if (availableIndices.length < QUESTIONS_PER_ROUND) {
    usedIndices = [];
    availableIndices = Array.from({ length: questions.length }, (_, i) => i);
  }
  shuffle(availableIndices);
  currentQuestions = availableIndices.slice(0, QUESTIONS_PER_ROUND).map(i => ({ ...questions[i], index: i }));
  currentQuestionIndex = 0;
  score = 0;
  coins = 0;
  usedIndices = usedIndices.concat(currentQuestions.map(q => q.index));
  saveUsedIndices();
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} of ${QUESTIONS_PER_ROUND}`;
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => selectOption(idx);
    optionsDiv.appendChild(btn);
  });
  document.getElementById('next-btn').disabled = true;
}

const optionButtons = document.querySelectorAll('.option-btn');
optionButtons.forEach(button => {
  button.addEventListener('click', () => {
    optionButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});
document.getElementById('next-btn').disabled = true;

function selectOption(selectedIdx) {
  const q = currentQuestions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
    if (idx === selectedIdx && idx !== q.answer) btn.classList.add('incorrect');
  });
  if (selectedIdx === q.answer) {
    score++;
    coins += 10;
  }
  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'flex';
  document.getElementById('score').textContent = `Your Score: ${score} / ${QUESTIONS_PER_ROUND}`;
  document.getElementById('coins').textContent = `Coins earned: ${coins}`;
}

function restartQuiz() {
  loadUsedIndices();
  if (usedIndices.length >= QUESTIONS_PER_ROUND) {
    usedIndices.splice(-QUESTIONS_PER_ROUND, QUESTIONS_PER_ROUND);
    saveUsedIndices();
  }
  document.getElementById('result-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  startQuiz();
}

window.onload = startQuiz;
