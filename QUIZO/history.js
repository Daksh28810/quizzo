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
    { question: "In what year did World War I begin?", options: ["1914", "1915", "1916", "1917"], answer: 0 },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], answer: 2 },
    { question: "Which ancient civilization built the Great Pyramid of Giza?", options: ["Romans", "Greeks", "Egyptians", "Persians"], answer: 2 },
    { question: "Who painted the Mona Lisa?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], answer: 1 },
    { question: "In what year did the French Revolution begin?", options: ["1776", "1789", "1799", "1815"], answer: 1 },
    { question: "Who was the leader of the Soviet Union during World War II?", options: ["Vladimir Lenin", "Leon Trotsky", "Joseph Stalin", "Nikita Khrushchev"], answer: 2 },
    { question: "Which country was divided by the Berlin Wall?", options: ["Austria", "France", "Germany", "Poland"], answer: 2 },
    { question: "Who wrote the play 'Hamlet'?", options: ["Christopher Marlowe", "Ben Jonson", "William Shakespeare", "John Milton"], answer: 2 },
    { question: "What year did Christopher Columbus first arrive in the Americas?", options: ["1492", "1498", "1502", "1510"], answer: 0 },
    { question: "Who was the Queen of England during the Elizabethan era?", options: ["Queen Victoria", "Queen Mary I", "Queen Elizabeth I", "Queen Anne"], answer: 2 },
    { question: "What was the name of the ship that the Pilgrims sailed on to America?", options: ["Mayflower", "Santa Maria", "Victoria", "Endeavour"], answer: 0 },
    { question: "Which war was fought between the North and South regions of the United States?", options: ["World War I", "World War II", "Civil War", "Revolutionary War"], answer: 2 },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], answer: 2 },
    { question: "What year did the Titanic sink?", options: ["1910", "1912", "1915", "1917"], answer: 1 },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"], answer: 2 },
    { question: "Which empire built the Colosseum in Rome?", options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"], answer: 1 },
    { question: "Who is known as the 'Father of the Nation' in India?", options: ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Sardar Patel"], answer: 2 },
    { question: "In what year did the Cold War end?", options: ["1985", "1989", "1991", "1995"], answer: 2 },
    { question: "Who was the first female Prime Minister of the United Kingdom?", options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Golda Meir"], answer: 0 },
    { question: "Which country did Adolf Hitler lead during World War II?", options: ["Italy", "Japan", "Germany", "Austria"], answer: 2 },
    { question: "Who was the famous nurse during the Crimean War?", options: ["Clara Barton", "Florence Nightingale", "Edith Cavell", "Mary Seacole"], answer: 1 },
    { question: "What was the name of the dynasty that ruled China from 1368 to 1644?", options: ["Tang Dynasty", "Song Dynasty", "Ming Dynasty", "Qing Dynasty"], answer: 2 },
    { question: "Who invented the printing press?", options: ["Leonardo da Vinci", "Johannes Gutenberg", "Benjamin Franklin", "Thomas Edison"], answer: 1 },
    { question: "Which ancient city was destroyed by a volcano in 79 AD?", options: ["Athens", "Rome", "Pompeii", "Alexandria"], answer: 2 },
    { question: "What was the name of the organization founded by Nelson Mandela to fight apartheid?", options: ["ANC", "PAC", "SACP", "NP"], answer: 0 },
    { question: "Who was the Russian Tsar who modernized Russia in the late 17th and early 18th centuries?", options: ["Ivan the Terrible", "Catherine the Great", "Peter the Great", "Alexander I"], answer: 2 },
    { question: "What was the name given to the period of the rebirth of art and literature in Europe between the 14th and 16th centuries?", options: ["Enlightenment", "Renaissance", "Reformation", "Industrial Revolution"], answer: 1 },
    { question: "Who commanded the Continental Army during the American Revolutionary War?", options: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"], answer: 2 },
    { question: "What was the name of the event that triggered World War I?", options: ["Invasion of Poland", "Sinking of the Lusitania", "Assassination of Archduke Franz Ferdinand", "Attack on Pearl Harbor"], answer: 2 },
    { question: "Who was the first Roman Emperor?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], answer: 1 },
    { question: "What was the name of the trade route that connected the East and West for centuries?", options: ["Spice Route", "Silk Road", "Gold Road", "Tea Route"], answer: 1 },
    { question: "Who was the leader of the Nazi Party in Germany?", options: ["Benito Mussolini", "Joseph Stalin", "Adolf Hitler", "Francisco Franco"], answer: 2 },
    { question: "What year did the United States declare its independence?", options: ["1774", "1776", "1783", "1789"], answer: 1 },
    { question: "Who was the first Prime Minister of India?", options: ["Indira Gandhi", "Rajiv Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"], answer: 2 },
    { question: "What was the name of the ancient civilization that lived in present-day Peru?", options: ["Aztec", "Inca", "Maya", "Olmec"], answer: 1 },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Robert Koch"], answer: 2 },
    { question: "What was the name of the battle in 1066 that changed the course of English history?", options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Agincourt"], answer: 0 },
    { question: "Who was the American Civil Rights leader known for his 'I Have a Dream' speech?", options: ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.", "Frederick Douglass"], answer: 2 },
    { question: "What year did the Russian Revolution take place?", options: ["1905", "1917", "1921", "1924"], answer: 1 },
    { question: "Who was the commander of the Allied forces during D-Day?", options: ["George Patton", "Bernard Montgomery", "Dwight D. Eisenhower", "Douglas MacArthur"], answer: 2 },
    { question: "What was the name of the ship Charles Darwin sailed on during his voyage of discovery?", options: ["Santa Maria", "Beagle", "Endeavour", "Discovery"], answer: 1 },
    { question: "Who was the first President of Russia after the collapse of the Soviet Union?", options: ["Mikhail Gorbachev", "Vladimir Putin", "Boris Yeltsin", "Dmitry Medvedev"], answer: 2 },
    { question: "What was the name of the war fought between Britain and France in the 18th century?", options: ["Hundred Years' War", "Thirty Years' War", "Seven Years' War", "Napoleonic Wars"], answer: 2 },
    { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"], answer: 0 },
    { question: "What was the name of the political and social system in France before the French Revolution?", options: ["Feudalism", "Absolutism", "Ancien Régime", "Manorialism"], answer: 2 },
    { question: "Who was the leader of the independence movement in Vietnam?", options: ["Ho Chi Minh", "Vo Nguyen Giap", "Pol Pot", "Sihanouk"], answer: 0 },
    { question: "What year did the Berlin Wall fall?", options: ["1987", "1989", "1990", "1991"], answer: 1 },
    { question: "Who was the first African American to play Major League Baseball?", options: ["Satchel Paige", "Jackie Robinson", "Willie Mays", "Hank Aaron"], answer: 1 },
    { question: "What was the name of the policy of racial segregation and discrimination enforced in South Africa?", options: ["Segregation", "Discrimination", "Apartheid", "Racism"], answer: 2 },
    { question: "Who was the key figure in the Protestant Reformation?", options: ["John Calvin", "Henry VIII", "Martin Luther", "Ulrich Zwingli"], answer: 2 },
    { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Liu Bang"], answer: 0 },
    { question: "Which ancient civilization built Machu Picchu?", options: ["Inca", "Maya", "Aztec", "Olmec"], answer: 0 },
    { question: "Who was the British Prime Minister during World War II?", options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Harold Macmillan"], answer: 0 },
    { question: "What year did the Magna Carta get signed?", options: ["1215", "1315", "1415", "1515"], answer: 0 },
    { question: "Who was the first female pharaoh of Egypt?", options: ["Hatshepsut", "Cleopatra", "Nefertiti", "Sobekneferu"], answer: 0 },
    { question: "Which empire was ruled by Genghis Khan?", options: ["Mongol Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"], answer: 0 },
    { question: "Who was the first President of South Africa after apartheid?", options: ["Nelson Mandela", "Thabo Mbeki", "Jacob Zuma", "F.W. de Klerk"], answer: 0 },
    { question: "In what year did India gain independence?", options: ["1947", "1950", "1945", "1939"], answer: 0 },
    { question: "Who was the leader of the Cuban Revolution?", options: ["Fidel Castro", "Che Guevara", "Raul Castro", "Batista"], answer: 0 },
    { question: "Which war ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Napoleonic Wars", "Crimean War"], answer: 0 },
    { question: "Who was the founder of the Mongol Empire?", options: ["Genghis Khan", "Kublai Khan", "Tamerlane", "Attila the Hun"], answer: 0 },
    { question: "Which civilization invented cuneiform writing?", options: ["Sumerians", "Egyptians", "Phoenicians", "Greeks"], answer: 0 },
    { question: "Who was the famous Greek philosopher who taught Alexander the Great?", options: ["Aristotle", "Plato", "Socrates", "Pythagoras"], answer: 0 },
    { question: "What year did the American Civil War end?", options: ["1865", "1861", "1870", "1855"], answer: 0 },
    { question: "Who was the first Tsar of Russia?", options: ["Ivan IV", "Peter the Great", "Nicholas II", "Alexander I"], answer: 0 },
    { question: "Which explorer is credited with circumnavigating the globe first?", options: ["Ferdinand Magellan", "Christopher Columbus", "James Cook", "Marco Polo"], answer: 0 },
    { question: "Who was the first female Prime Minister of India?", options: ["Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu", "Pratibha Patil"], answer: 0 },
    { question: "Which empire built the Hagia Sophia?", options: ["Byzantine Empire", "Ottoman Empire", "Roman Empire", "Greek Empire"], answer: 0 },
    { question: "Who was the first person to reach the South Pole?", options: ["Roald Amundsen", "Robert Scott", "Ernest Shackleton", "Edmund Hillary"], answer: 0 },
    { question: "What was the name of the last Queen of France before the French Revolution?", options: ["Marie Antoinette", "Catherine de Medici", "Anne of Austria", "Eleanor of Aquitaine"], answer: 0 },
    { question: "Which ancient city was known for its Hanging Gardens?", options: ["Babylon", "Nineveh", "Athens", "Alexandria"], answer: 0 },
    { question: "Who was the first President of the Republic of China?", options: ["Sun Yat-sen", "Chiang Kai-shek", "Mao Zedong", "Yuan Shikai"], answer: 0 },
    { question: "What year did the United Nations officially form?", options: ["1945", "1919", "1939", "1955"], answer: 0 },
    { question: "Who was the first European to reach India by sea?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], answer: 0 },
    { question: "Which country gifted the Statue of Liberty to the USA?", options: ["France", "England", "Spain", "Germany"], answer: 0 },
    { question: "Who was the Roman god of war?", options: ["Mars", "Jupiter", "Neptune", "Apollo"], answer: 0 },
    { question: "Which battle marked the end of Napoleon's rule?", options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Austerlitz"], answer: 0 },
    { question: "Who was the first woman in space?", options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Eileen Collins"], answer: 0 },
    { question: "What was the capital of the Aztec Empire?", options: ["Tenochtitlan", "Cuzco", "Teotihuacan", "Chichen Itza"], answer: 0 },
    { question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?", options: ["Nikita Khrushchev", "Joseph Stalin", "Leonid Brezhnev", "Mikhail Gorbachev"], answer: 0 },
    { question: "Which ancient civilization is credited with creating democracy?", options: ["Ancient Greece", "Ancient Rome", "Ancient Egypt", "Ancient China"], answer: 0 },
    { question: "Who was the first President of Turkey?", options: ["Mustafa Kemal Atatürk", "Ismet Inönü", "Recep Tayyip Erdoğan", "Süleyman Demirel"], answer: 0 },
    { question: "What year did the Wright brothers first fly?", options: ["1903", "1899", "1912", "1920"], answer: 0 },
    { question: "Who was the first emperor of the Roman Empire?", options: ["Augustus", "Julius Caesar", "Nero", "Tiberius"], answer: 0 },
    { question: "Which war was fought between the British and Zulu Kingdom in 1879?", options: ["Anglo-Zulu War", "Boer War", "Crimean War", "Opium War"], answer: 0 },
    { question: "Who was the first female Chancellor of Germany?", options: ["Angela Merkel", "Ursula von der Leyen", "Hannelore Kraft", "Annegret Kramp-Karrenbauer"], answer: 0 },
    { question: "Which ancient civilization built the city of Carthage?", options: ["Phoenicians", "Romans", "Greeks", "Egyptians"], answer: 0 },
    { question: "Who was the first President of France?", options: ["Louis-Napoléon Bonaparte", "Charles de Gaulle", "François Mitterrand", "Jacques Chirac"], answer: 0 },
    { question: "What year did the Black Death peak in Europe?", options: ["1347", "1200", "1400", "1500"], answer: 0 },
    { question: "Who was the first emperor of Japan?", options: ["Emperor Jimmu", "Emperor Meiji", "Emperor Hirohito", "Emperor Akihito"], answer: 0 },
    { question: "Which battle is considered the turning point of the American Revolution?", options: ["Battle of Saratoga", "Battle of Yorktown", "Battle of Bunker Hill", "Battle of Lexington"], answer: 0 },
    { question: "Who was the founder of the Maurya Empire?", options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"], answer: 0 },
    { question: "Which explorer gave the Pacific Ocean its name?", options: ["Ferdinand Magellan", "James Cook", "Vasco Núñez de Balboa", "Bartolomeu Dias"], answer: 0 },
    { question: "Who was the first President of Israel?", options: ["Chaim Weizmann", "David Ben-Gurion", "Golda Meir", "Shimon Peres"], answer: 0 },
    { question: "Which empire was ruled by Suleiman the Magnificent?", options: ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Persian Empire"], answer: 0 },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Barbara McClintock"], answer: 0 },
    { question: "What was the name of the first artificial satellite?", options: ["Sputnik 1", "Explorer 1", "Vostok 1", "Apollo 11"], answer: 0 },
    { question: "Who was the first President of Kenya?", options: ["Jomo Kenyatta", "Daniel arap Moi", "Uhuru Kenyatta", "Mwai Kibaki"], answer: 0 },
    { question: "Which ancient civilization built the Parthenon?", options: ["Greeks", "Romans", "Egyptians", "Persians"], answer: 0 },
    { question: "Who was the first President of Pakistan?", options: ["Iskander Mirza", "Liaquat Ali Khan", "Ayub Khan", "Zulfikar Ali Bhutto"], answer: 0 },
    { question: "What year did the Spanish Civil War begin?", options: ["1936", "1929", "1940", "1945"], answer: 0 },
    { question: "Who was the last Tsar of Russia?", options: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan IV"], answer: 0 },
    { question: "Which civilization is credited with inventing the wheel?", options: ["Sumerians", "Egyptians", "Romans", "Greeks"], answer: 0 },
    { question: "Who was the first Prime Minister of Canada?", options: ["John A. Macdonald", "Wilfrid Laurier", "William Lyon Mackenzie King", "Lester B. Pearson"], answer: 0 },
    { question: "What year did the Korean War begin?", options: ["1950", "1945", "1960", "1953"], answer: 0 },
    { question: "Who was the first emperor of the Byzantine Empire?", options: ["Constantine the Great", "Justinian I", "Theodosius I", "Heraclius"], answer: 0 },
    { question: "Which explorer discovered the sea route to Brazil?", options: ["Pedro Álvares Cabral", "Vasco da Gama", "Christopher Columbus", "Amerigo Vespucci"], answer: 0 },
    { question: "Who was the first President of the Philippines?", options: ["Emilio Aguinaldo", "Manuel L. Quezon", "Ferdinand Marcos", "Corazon Aquino"], answer: 0 },
    { question: "What year did the Apollo 11 moon landing occur?", options: ["1969", "1965", "1972", "1961"], answer: 0 },
    { question: "Who was the first President of Ghana?", options: ["Kwame Nkrumah", "John Kufuor", "Jerry Rawlings", "John Mahama"], answer: 0 },
    { question: "Which ancient civilization built the city of Petra?", options: ["Nabataeans", "Babylonians", "Assyrians", "Hittites"], answer: 0 },
    { question: "Who was the first President of Nigeria?", options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Goodluck Jonathan", "Muhammadu Buhari"], answer: 0 },
    { question: "What year did the Vietnam War end?", options: ["1975", "1970", "1969", "1979"], answer: 0 },
    { question: "Who was the first President of South Korea?", options: ["Syngman Rhee", "Kim Il-sung", "Park Chung-hee", "Kim Dae-jung"], answer: 0 },
    { question: "Which ancient civilization built the Terracotta Army?", options: ["Chinese", "Japanese", "Mongols", "Koreans"], answer: 0 },
    { question: "Who was the first President of Brazil?", options: ["Deodoro da Fonseca", "Getúlio Vargas", "Juscelino Kubitschek", "Luiz Inácio Lula da Silva"], answer: 0 },
    { question: "What year did the Berlin Wall fall?", options: ["1989", "1987", "1990", "1991"], answer: 0 },
    { question: "Who was the first President of Mexico?", options: ["Guadalupe Victoria", "Benito Juárez", "Porfirio Díaz", "Vicente Fox"], answer: 0 },
    { question: "Which civilization built the city of Angkor Wat?", options: ["Khmer", "Thai", "Vietnamese", "Burmese"], answer: 0 },
    { question: "Who was the first President of Indonesia?", options: ["Sukarno", "Suharto", "Joko Widodo", "Megawati Sukarnoputri"], answer: 0 },
    { question: "What year did the Spanish Armada sail against England?", options: ["1588", "1600", "1558", "1620"], answer: 0 },
    { question: "Who was the first President of Egypt?", options: ["Mohamed Naguib", "Gamal Abdel Nasser", "Anwar Sadat", "Hosni Mubarak"], answer: 0 },
    { question: "Which ancient civilization built the city of Persepolis?", options: ["Persians", "Greeks", "Romans", "Babylonians"], answer: 0 },
    { question: "Who was the first President of Zimbabwe?", options: ["Canaan Banana", "Robert Mugabe", "Emmerson Mnangagwa", "Morgan Tsvangirai"], answer: 0 },
    { question: "What year did the Suez Crisis occur?", options: ["1956", "1948", "1967", "1973"], answer: 0 },
    { question: "Who was the first President of South Sudan?", options: ["Salva Kiir Mayardit", "Riek Machar", "Omar al-Bashir", "Abel Alier"], answer: 0 },
    { question: "Which civilization built the Moai statues on Easter Island?", options: ["Rapa Nui", "Maori", "Inca", "Aztec"], answer: 0 },
    { question: "Who was the first President of Singapore?", options: ["Yusof bin Ishak", "Lee Kuan Yew", "Goh Chok Tong", "Tony Tan"], answer: 0 },
    { question: "What year did the Chernobyl disaster occur?", options: ["1986", "1980", "1990", "1989"], answer: 0 },
    { question: "Who was the first President of Bangladesh?", options: ["Sheikh Mujibur Rahman", "Ziaur Rahman", "Hussain Muhammad Ershad", "Abdul Hamid"], answer: 0 },
    { question: "Which ancient civilization built the city of Teotihuacan?", options: ["Aztec", "Maya", "Olmec", "Toltec"], answer: 0 },
    { question: "Who was the first President of Sri Lanka?", options: ["William Gopallawa", "J. R. Jayewardene", "Chandrika Kumaratunga", "Mahinda Rajapaksa"], answer: 0 },
    { question: "What year did the first modern Olympic Games take place?", options: ["1896", "1900", "1888", "1912"], answer: 0 },
    { question: "Who was the first President of the United Arab Emirates?", options: ["Sheikh Zayed bin Sultan Al Nahyan", "Sheikh Khalifa bin Zayed Al Nahyan", "Sheikh Rashid bin Saeed Al Maktoum", "Sheikh Mohammed bin Rashid Al Maktoum"], answer: 0 },
    { question: "Which ancient civilization built the city of Troy?", options: ["Hittites", "Greeks", "Romans", "Egyptians"], answer: 0 },
    { question: "Who was the first President of Algeria?", options: ["Ahmed Ben Bella", "Houari Boumediene", "Abdelaziz Bouteflika", "Chadli Bendjedid"], answer: 0 },
    { question: "What year did the Great Fire of London occur?", options: ["1666", "1620", "1700", "1750"], answer: 0 },
    { question: "Who was the first President of Tanzania?", options: ["Julius Nyerere", "Ali Hassan Mwinyi", "Benjamin Mkapa", "John Magufuli"], answer: 0 },
    { question: "Which ancient civilization built the city of Babylon?", options: ["Babylonians", "Assyrians", "Sumerians", "Persians"], answer: 0 },
    { question: "Who was the first President of Uganda?", options: ["Milton Obote", "Idi Amin", "Yoweri Museveni", "Tito Okello"], answer: 0 },
    { question: "What year did the Great Depression begin?", options: ["1929", "1918", "1939", "1945"], answer: 0 },
    { question: "Who was the first President of Malaysia?", options: ["Tunku Abdul Rahman", "Abdul Razak Hussein", "Mahathir Mohamad", "Abdullah Ahmad Badawi"], answer: 0 },
    { question: "Which ancient civilization built the city of Ur?", options: ["Sumerians", "Babylonians", "Assyrians", "Persians"], answer: 0 },
    { question: "Who was the first President of Zambia?", options: ["Kenneth Kaunda", "Frederick Chiluba", "Levy Mwanawasa", "Michael Sata"], answer: 0 },
    { question: "What year did the first manned spaceflight occur?", options: ["1961", "1957", "1969", "1972"], answer: 0 },
    { question: "Who was the first President of Botswana?", options: ["Seretse Khama", "Ketumile Masire", "Festus Mogae", "Ian Khama"], answer: 0 },
    { question: "Which ancient civilization built the city of Memphis?", options: ["Egyptians", "Greeks", "Romans", "Persians"], answer: 0 },
    { question: "Who was the first President of Ghana?", options: ["Kwame Nkrumah", "John Kufuor", "Jerry Rawlings", "John Mahama"], answer: 0 },
    { question: "What year did the Bosnian War begin?", options: ["1992", "1990", "1995", "1999"], answer: 0 },
    { question: "Who was the first President of Namibia?", options: ["Sam Nujoma", "Hifikepunye Pohamba", "Hage Geingob", "Theo-Ben Gurirab"], answer: 0 },
    { question: "Which ancient civilization built the city of Athens?", options: ["Greeks", "Romans", "Egyptians", "Persians"], answer: 0 },
    { question: "Who was the first President of Mozambique?", options: ["Samora Machel", "Joaquim Chissano", "Armando Guebuza", "Filipe Nyusi"], answer: 0 },
    { question: "What year did the Rwandan Genocide occur?", options: ["1994", "1990", "1996", "1999"], answer: 0 },
    { question: "Who was the first President of Angola?", options: ["Agostinho Neto", "José Eduardo dos Santos", "João Lourenço", "Manuel Vicente"], answer: 0 },
    { question: "Which ancient civilization built the city of Jerusalem?", options: ["Canaanites", "Egyptians", "Babylonians", "Romans"], answer: 0 },
    { question: "Who was the first President of Senegal?", options: ["Léopold Sédar Senghor", "Abdou Diouf", "Abdoulaye Wade", "Macky Sall"], answer: 0 },
    { question: "What year did the Falklands War occur?", options: ["1982", "1979", "1985", "1990"], answer: 0 },
    { question: "Who was the first President of Ivory Coast?", options: ["Félix Houphouët-Boigny", "Laurent Gbagbo", "Alassane Ouattara", "Henri Konan Bédié"], answer: 0 },
    { question: "Which ancient civilization built the city of Thebes?", options: ["Egyptians", "Greeks", "Romans", "Persians"], answer: 0 },
    { question: "Who was the first President of Cameroon?", options: ["Ahmadou Ahidjo", "Paul Biya", "John Fru Ndi", "Simon Pierre Tchoungui"], answer: 0 },
    { question: "What year did the Yom Kippur War occur?", options: ["1973", "1967", "1956", "1982"], answer: 0 },
    { question: "Who was the first President of the Democratic Republic of the Congo?", options: ["Joseph Kasa-Vubu", "Mobutu Sese Seko", "Laurent Kabila", "Joseph Kabila"], answer: 0 }
];
const storageKey = "usedHistoryIndices";

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