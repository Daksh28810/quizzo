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
    { question: "In 'Naruto', what is Naruto's signature jutsu?", options: ["Chidori", "Rasengan", "Shadow Clone Jutsu", "Amaterasu"], answer: 2 },
    { question: "Which anime features the character Edward Elric?", options: ["Fullmetal Alchemist", "Attack on Titan", "Death Note", "Bleach"], answer: 0 },
    { question: "What is the name of the giant humanoid creatures in 'Attack on Titan'?", options: ["Titans", "Colossi", "Kaiju", "Demons"], answer: 0 },
    { question: "In 'One Piece', what is the name of Luffy’s ship?", options: ["Going Merry", "Thousand Sunny", "Black Pearl", "Nostromo"], answer: 1 },
    { question: "Which anime is set in the world of Alola?", options: ["Pokémon Sun and Moon", "Dragon Ball", "My Hero Academia", "Sword Art Online"], answer: 0 },
    { question: "Who is the creator of 'Dragon Ball'?", options: ["Masashi Kishimoto", "Eiichiro Oda", "Akira Toriyama", "Tite Kubo"], answer: 2 },
    { question: "What is the name of the organization Light Yagami belongs to in 'Death Note'?", options: ["Kira", "Task Force", "Shinigami", "L's Team"], answer: 0 },
    { question: "In 'My Hero Academia', what is All Might’s real name?", options: ["Toshinori Yagi", "Izuku Midoriya", "Shoto Todoroki", "Katsuki Bakugo"], answer: 0 },
    { question: "Which anime features a character named Goku?", options: ["Dragon Ball", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "What kind of creature is Totoro in 'My Neighbor Totoro'?", options: ["Spirit", "Cat", "Owl", "Dog"], answer: 0 },
    { question: "In 'Sword Art Online', what is Kirito’s real name?", options: ["Kazuto Kirigaya", "Kirigaya Kazuto", "Kirito Kazuto", "Kazuto Kirito"], answer: 0 },
    { question: "Which anime features the 'Sharingan' eye technique?", options: ["Naruto", "Bleach", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "Who is the captain of the Gotei 13’s 13th Division in 'Bleach'?", options: ["Kenpachi Zaraki", "Byakuya Kuchiki", "Jushiro Ukitake", "Shunsui Kyoraku"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Tokyo Ghoul'?", options: ["Kaneki Ken", "Todoroki Shoto", "Eren Yeager", "Natsu Dragneel"], answer: 0 },
    { question: "In 'One Punch Man', what is Saitama’s hero rank?", options: ["S-Class", "A-Class", "B-Class", "C-Class"], answer: 0 },
    { question: "Which anime features the 'Titan Shifter' ability?", options: ["Attack on Titan", "Naruto", "Bleach", "My Hero Academia"], answer: 0 },
    { question: "Who is the author of 'One Piece'?", options: ["Masashi Kishimoto", "Eiichiro Oda", "Tite Kubo", "Yoshihiro Togashi"], answer: 1 },
    { question: "Which anime features the character 'Levi Ackerman'?", options: ["Attack on Titan", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the school in 'My Hero Academia'?", options: ["UA High School", "Konoha Academy", "Soul Society", "Death City High"], answer: 0 },
    { question: "In 'Naruto', who is Naruto’s father?", options: ["Minato Namikaze", "Hiruzen Sarutobi", "Tobirama Senju", "Jiraiya"], answer: 0 },
    { question: "Which anime features the 'Bankai' technique?", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "Who is the main antagonist in 'Death Note'?", options: ["Light Yagami", "L", "Ryuk", "Near"], answer: 0 },
    { question: "In 'Dragon Ball Z', what is the name of Goku’s son?", options: ["Gohan", "Vegeta", "Trunks", "Goten"], answer: 0 },
    { question: "Which anime features the 'Quirk' system?", options: ["My Hero Academia", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "What is the main weapon used by Kirito in 'Sword Art Online'?", options: ["Elucidator", "Excalibur", "Dark Repulser", "Dragon Slayer"], answer: 0 },
    { question: "Who is the captain of the 6th Division in 'Bleach'?", options: ["Byakuya Kuchiki", "Kenpachi Zaraki", "Renji Abarai", "Shunsui Kyoraku"], answer: 0 },
    { question: "Which anime features a character named 'Natsu Dragneel'?", options: ["Fairy Tail", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the demon slayer in 'Demon Slayer: Kimetsu no Yaiba'?", options: ["Tanjiro Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Giyu Tomioka"], answer: 0 },
    { question: "In 'Naruto', what is the name of the village where Naruto lives?", options: ["Konoha", "Suna", "Kiri", "Iwa"], answer: 0 },
    { question: "Which anime features the character 'Light Yagami'?", options: ["Death Note", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "Which anime features the character 'Sasuke Uchiha'?", options: ["Naruto", "Bleach", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main female protagonist in 'Sword Art Online'?", options: ["Asuna Yuuki", "Sinon", "Leafa", "Kirito"], answer: 0 },
    { question: "Which anime features the 'Kamehameha' attack?", options: ["Dragon Ball", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "Who is the strongest member of the Akatsuki in 'Naruto'?", options: ["Pain", "Itachi Uchiha", "Kisame Hoshigaki", "Konan"], answer: 0 },
    { question: "What is the name of the pirate crew led by Monkey D. Luffy?", options: ["Straw Hat Pirates", "Red Hair Pirates", "Blackbeard Pirates", "Heart Pirates"], answer: 0 },
    { question: "Which anime features a giant robot called 'Eva Unit-01'?", options: ["Neon Genesis Evangelion", "Gundam", "Code Geass", "Macross"], answer: 0 },
    { question: "In 'Tokyo Ghoul', what is Kaneki’s eye called when transformed?", options: ["Kakugan", "Sharingan", "Byakugan", "Rinnegan"], answer: 0 },
    { question: "Which anime features the phrase 'I am gonna be King of the Pirates!'?", options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "Who is the main antagonist in 'Fullmetal Alchemist: Brotherhood'?", options: ["Father", "Scar", "Lust", "Envy"], answer: 0 },
    { question: "What is the name of the cat-like character in 'Fairy Tail'?", options: ["Happy", "Carla", "Panther Lily", "Luna"], answer: 0 },
    { question: "Which anime features the 'Death Scythe' weapon?", options: ["Soul Eater", "Bleach", "Naruto", "One Piece"], answer: 0 },
    { question: "What is the name of the main protagonist in 'One Punch Man'?", options: ["Saitama", "Genos", "Garou", "Mumen Rider"], answer: 0 },
    { question: "Which anime features the 'Bankai' technique?", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "Who is the creator of 'Attack on Titan'?", options: ["Hajime Isayama", "Eiichiro Oda", "Masashi Kishimoto", "Tite Kubo"], answer: 0 },
    { question: "Which anime features the 'Spirit Gun' attack?", options: ["Yu Yu Hakusho", "Dragon Ball", "Naruto", "Bleach"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Death Parade'?", options: ["Decim", "Nona", "Ginti", "Clavis"], answer: 0 },
    { question: "Which anime features the 'Geass' power?", options: ["Code Geass", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "Who is the main protagonist in 'Hunter x Hunter'?", options: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio"], answer: 0 },
    { question: "Which anime features the 'Spirit Detective'?", options: ["Yu Yu Hakusho", "Bleach", "Naruto", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Steins;Gate'?", options: ["Rintarou Okabe", "Kurisu Makise", "Mayuri Shiina", "Itaru Hashida"], answer: 0 },
    { question: "Which anime features the 'Gomu Gomu no Mi' fruit?", options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "Who is the main protagonist in 'Black Clover'?", options: ["Asta", "Yuno", "Noelle Silva", "Yami Sukehiro"], answer: 0 },
    { question: "Which anime features the 'Fullbring' power?", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Mob Psycho 100'?", options: ["Shigeo Kageyama", "Reigen Arataka", "Teruki Hanazawa", "Ritsu Kageyama"], answer: 0 },
    { question: "Which anime features the 'Spirit Gun' attack?", options: ["Yu Yu Hakusho", "Dragon Ball", "Naruto", "Bleach"], answer: 0 },
    { question: "Which anime features the character 'Sasuke Uchiha'?", options: ["Naruto", "Bleach", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main female protagonist in 'Sword Art Online'?", options: ["Asuna Yuuki", "Sinon", "Leafa", "Kirito"], answer: 0 },
    { question: "Which anime features the 'Kamehameha' attack?", options: ["Dragon Ball", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "Who is the strongest member of the Akatsuki in 'Naruto'?", options: ["Pain", "Itachi Uchiha", "Kisame Hoshigaki", "Konan"], answer: 0 },
    { question: "What is the name of the pirate crew led by Monkey D. Luffy?", options: ["Straw Hat Pirates", "Red Hair Pirates", "Blackbeard Pirates", "Heart Pirates"], answer: 0 },
    { question: "Which anime features a giant robot called 'Eva Unit-01'?", options: ["Neon Genesis Evangelion", "Gundam", "Code Geass", "Macross"], answer: 0 },
    { question: "In 'Tokyo Ghoul', what is Kaneki’s eye called when transformed?", options: ["Kakugan", "Sharingan", "Byakugan", "Rinnegan"], answer: 0 },
    { question: "Which anime features the phrase 'I am gonna be King of the Pirates!'?", options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "Who is the main antagonist in 'Fullmetal Alchemist: Brotherhood'?", options: ["Father", "Scar", "Lust", "Envy"], answer: 0 },
    { question: "What is the name of the cat-like character in 'Fairy Tail'?", options: ["Happy", "Carla", "Panther Lily", "Luna"], answer: 0 },
    { question: "Which anime features the 'Death Scythe' weapon?", options: ["Soul Eater", "Bleach", "Naruto", "One Piece"], answer: 0 },
    { question: "What is the name of the main protagonist in 'One Punch Man'?", options: ["Saitama", "Genos", "Garou", "Mumen Rider"], answer: 0 },
    { question: "Which anime features the 'Bankai' technique?", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "Who is the creator of 'Attack on Titan'?", options: ["Hajime Isayama", "Eiichiro Oda", "Masashi Kishimoto", "Tite Kubo"], answer: 0 },
    { question: "Which anime features the 'Spirit Gun' attack?", options: ["Yu Yu Hakusho", "Dragon Ball", "Naruto", "Bleach"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Death Parade'?", options: ["Decim", "Nona", "Ginti", "Clavis"], answer: 0 },
    { question: "Which anime features the 'Geass' power?", options: ["Code Geass", "Naruto", "Bleach", "One Piece"], answer: 0 },
    { question: "Who is the main protagonist in 'Hunter x Hunter'?", options: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio"], answer: 0 },
    { question: "Which anime features the 'Spirit Detective'?", options: ["Yu Yu Hakusho", "Bleach", "Naruto", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Steins;Gate'?", options: ["Rintarou Okabe", "Kurisu Makise", "Mayuri Shiina", "Itaru Hashida"], answer: 0 },
    { question: "Which anime features the 'Gomu Gomu no Mi' fruit?", options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"], answer: 0 },
    { question: "Who is the main protagonist in 'Black Clover'?", options: ["Asta", "Yuno", "Noelle Silva", "Yami Sukehiro"], answer: 0 },
    { question: "Which anime features the 'Fullbring' power?", options: ["Bleach", "Naruto", "One Piece", "Dragon Ball"], answer: 0 },
    { question: "What is the name of the main protagonist in 'Mob Psycho 100'?", options: ["Shigeo Kageyama", "Reigen Arataka", "Teruki Hanazawa", "Ritsu Kageyama"], answer: 0 },
    { question: "Which anime features the 'Spirit Gun' attack?", options: ["Yu Yu Hakusho", "Dragon Ball", "Naruto", "Bleach"], answer: 0 },
    { question: "In 'Cowboy Bebop', what is the name of Spike Spiegel's ship?", options: ["Bebop", "Hammerhead", "Red Tail", "Swordfish II"], answer: 3 },
    { question: "Which anime features a game where players are trapped inside a virtual reality MMORPG?", options: ["Sword Art Online", "Log Horizon", "Overlord", "No Game No Life"], answer: 0 },
    { question: "Who is the main character in 'Code Geass'?", options: ["Lelouch Lamperouge", "Suzaku Kururugi", "C.C.", "Kallen Stadtfeld"], answer: 0 },
    { question: "In 'Hunter x Hunter', what is Gon's Nen type?", options: ["Enhancer", "Transmuter", "Emitter", "Conjurer"], answer: 0 },
    { question: "What is the name of the organization that opposes the Straw Hat Pirates in 'One Piece'?", options: ["World Government", "Marines", "Cipher Pol", "Shichibukai"], answer: 1 },
    { question: "Which anime features a school for assassins?", options: ["Assassination Classroom", "My Hero Academia", "Soul Eater", "Code Geass"], answer: 0 },
    { question: "In 'Death Note', what is the name of the Shinigami who gives Light the Death Note?", options: ["Ryuk", "Rem", "Sidoh", "Armonia Justin Beyondormason"], answer: 0 },
    { question: "Who is the female protagonist in 'Your Name' (Kimi no Na wa)?", options: ["Mitsuha Miyamizu", "Taki Tachibana", "Yotsuha Miyamizu", "Hitoha Miyamizu"], answer: 0 },
    { question: "Which anime features a group of teenagers piloting giant robots to fight against alien invaders?", options: ["Neon Genesis Evangelion", "Gundam", "Darling in the Franxx", "Code Geass"], answer: 0 },
    { question: "In 'Fullmetal Alchemist', what is the principle of Equivalent Exchange?", options: ["To obtain something, something of equal value must be lost", "To gain power, one must sacrifice their humanity", "The strong survive, the weak perish", "Knowledge is power"], answer: 0 },
    { question: "Which anime features a tournament where fighters battle using supernatural abilities called 'Nen'?", options: ["Hunter x Hunter", "Dragon Ball", "Naruto", "Bleach"], answer: 0 },
    { question: "What is the name of the main character in 'Erased' (Boku dake ga Inai Machi)?", options: ["Satoru Fujinuma", "Kayo Hinazuki", "Kenya Kobayashi", "Hiromi Sugita"], answer: 0 },
    { question: "Which anime features a group of pirates searching for a legendary treasure?", options: ["One Piece", "Naruto", "Bleach", "Fairy Tail"], answer: 0 },
    { question: "In 'Attack on Titan', what are the Titans' weaknesses?", options: ["The nape of their neck", "Their eyes", "Their feet", "Loud noises"], answer: 0 },
    { question: "Which anime features a high school student who gains the ability to rewind time?", options: ["Erased", "Steins;Gate", "Puella Magi Madoka Magica", "Code Geass"], answer: 0 },
    { question: "What is the name of the currency used in the world of 'Spice and Wolf'?", options: ["Trenni Silver", "Gold Coins", "Rye", "Wool"], answer: 0 },
    { question: "Which anime features a protagonist who is secretly a vampire?", options: ["Vampire Knight", "Tokyo Ghoul", "Blood+", "Hellsing"], answer: 0 },
    { question: "In 'Code Geass', what is the name of Lelouch's Geass power?", options: ["Absolute Obedience", "Mind Reading", "Precognition", "Invisibility"], answer: 0 },
    { question: "Which anime features a group of magical girls fighting against witches?", options: ["Puella Magi Madoka Magica", "Sailor Moon", "Cardcaptor Sakura", "Revolutionary Girl Utena"], answer: 0 },
    { question: "What is the name of the main character in 'Gintama'?", options: ["Gintoki Sakata", "Shinpachi Shimura", "Kagura", "Kotaro Katsura"], answer: 0 },
    { question: "Which anime features a world where humans live in fear of creatures called 'Youmu'?", options: ["Beyond the Boundary (Kyoukai no Kanata)", "Noragami", "Demon Slayer", "Blue Exorcist"], answer: 0 },
    { question: "In 'Your Lie in April', what instrument does Kaori Miyazono play?", options: ["Violin", "Piano", "Cello", "Flute"], answer: 0 },
    { question: "Which anime features a protagonist who is a NEET (Not in Education, Employment, or Training) and a shut-in?", options: ["Welcome to the N.H.K.", "Recovery of an MMO Junkie", "Himouto! Umaru-chan", "Watamote"], answer: 0 },
    { question: "What is the name of the virtual idol in 'Macross Frontier'?", options: ["Sheryl Nome", "Ranka Lee", "Lynn Minmay", "Mylene Flare Jenius"], answer: 1 },
    { question: "Which anime features a group of students with special abilities attending a school called 'Hope's Peak Academy'?", options: ["Danganronpa: The Animation", "Assassination Classroom", "My Hero Academia", "Code Geass"], answer: 0 },
    { question: "In 'Psycho-Pass', what is the name of the system that measures a person's likelihood of committing a crime?", options: ["Psycho-Pass", "Sibyl System", "Dominator", "Crime Coefficient"], answer: 1 },
    { question: "Which anime features a protagonist who is a skilled calligrapher sent to a rural island?", options: ["Barakamon", "Silver Spoon", "Non Non Biyori", "Flying Witch"], answer: 0 },
    { question: "What is the name of the main character in 'Mushishi'?", options: ["Ginko", "Adashino", "Nui", "Koro"], answer: 0 },
    { question: "Which anime features a group of high school girls who form an Antarctic expedition team?", options: ["A Place Further Than the Universe", "K-On!", "Yuru Camp", "Shirobako"], answer: 0 },
    { question: "In 'Re:Zero − Starting Life in Another World', what ability does Subaru Natsuki possess?", options: ["Return by Death", "Super Strength", "Teleportation", "Mind Control"], answer: 0 },
    { question: "Which anime features a protagonist who is a master of the Japanese board game Shogi?", options: ["March Comes in Like a Lion (3-gatsu no Lion)", "Chihayafuru", "Hikaru no Go", "No Game No Life"], answer: 0 },
    { question: "What is the name of the main character in 'Devilman Crybaby'?", options: ["Akira Fudo", "Ryo Asuka", "Miki Makimura", "Silene"], answer: 0 },
    { question: "Which anime features a group of orphans raised in a mysterious orphanage?", options: ["The Promised Neverland", "Attack on Titan", "Made in Abyss", "Violet Evergarden"], answer: 0 },
    { question: "In 'Made in Abyss', what is the name of the enormous pit that delves deep into the earth?", options: ["The Abyss", "The Hole", "The Chasm", "The Underground"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled gamer transported to another world?", options: ["No Game No Life", "Sword Art Online", "Overlord", "Log Horizon"], answer: 0 },
    { question: "What is the name of the main character in 'Vinland Saga'?", options: ["Thorfinn", "Askeladd", "Thors", "Canute"], answer: 0 },
    { question: "Which anime features a protagonist who is a former soldier working as a letter writer?", options: ["Violet Evergarden", "Josee, the Tiger and the Fish", "Plastic Memories", "Anohana"], answer: 0 },
    { question: "In 'Erased', what is Satoru's special ability called?", options: ["Revival", "Time Leap", "Time Travel", "Rewind"], answer: 0 },
    { question: "Which anime features a group of teenagers who pilot giant robots called 'Franxx'?", options: ["Darling in the Franxx", "Neon Genesis Evangelion", "Code Geass", "Gundam"], answer: 0 },
    { question: "What is the name of the main character in 'Rascal Does Not Dream of Bunny Girl Senpai'?", options: ["Sakuta Azusagawa", "Mai Sakurajima", "Tomoe Koga", "Rio Futaba"], answer: 0 },
    { question: "Which anime features a protagonist who is a detective solving supernatural mysteries?", options: ["Mononoke", "Mushishi", "xxxHolic", "Detective Conan"], answer: 0 },
    { question: "In 'Hunter x Hunter', what is Killua's family known for?", options: ["Assassination", "Hunting", "Medicine", "Politics"], answer: 0 },
    { question: "Which anime features a protagonist who is a wandering samurai searching for the 'samurai who smells of sunflowers'?", options: ["Samurai Champloo", "Rurouni Kenshin", "Sword of the Stranger", "Afro Samurai"], answer: 0 },
    { question: "What is the name of the main character in 'Akira'?", options: ["Kaneda", "Tetsuo", "Kei", "The Colonel"], answer: 0 },
    { question: "Which anime features a protagonist who is a genius strategist who is reincarnated into another world?", options: ["The Saga of Tanya the Evil", "No Game No Life", "Overlord", "Log Horizon"], answer: 0 },
    { question: "In 'Code Geass', what is the name of the organization Lelouch leads?", options: ["The Black Knights", "The Britannian Army", "The Japanese Liberation Front", "The Order of the Black Knights"], answer: 0 },
    { question: "Which anime features a group of high school students who form a 'Literature Club'?", options: ["Doki Doki Literature Club!", "Hyouka", "The Melancholy of Haruhi Suzumiya", "Clannad"], answer: 0 },
    { question: "What is the name of the main character in 'Wolf's Rain'?", options: ["Kiba", "Tsume", "Hige", "Toboe"], answer: 0 },
    { question: "Which anime features a protagonist who is a cyborg fighting against other cyborgs?", options: ["Ghost in the Shell", "Psycho-Pass", "Ergo Proxy", "Texhnolyze"], answer: 0 },
    { question: "In 'Puella Magi Madoka Magica', what wish does Madoka Kaname make?", options: ["To erase all witches before they are born", "To become the most powerful magical girl", "To save her friends", "To bring peace to the world"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled detective solving crimes in a futuristic city?", options: ["Psycho-Pass", "Ergo Proxy", "Ghost in the Shell", "Detective Conan"], answer: 0 },
    { question: "What is the name of the main character in 'Higurashi: When They Cry'?", options: ["Keiichi Maebara", "Rena Ryuugu", "Mion Sonozaki", "Shion Sonozaki"], answer: 0 },
    { question: "Which anime features a protagonist who is a legendary mercenary known as the 'Guts'?", options: ["Berserk", "Claymore", "Vinland Saga", "Afro Samurai"], answer: 0 },
    { question: "In 'Steins;Gate', what is the name of the device that allows the characters to send messages to the past?", options: ["PhoneWave (name subject to change)", "Time Leap Machine", "D-Mail", "Divergence Meter"], answer: 0 },
    { question: "Which anime features a protagonist who is a talented musician trying to overcome their past trauma?", options: ["Your Lie in April", "Kids on the Slope", "Sound! Euphonium", "Nodame Cantabile"], answer: 0 },
    { question: "What is the name of the main character in 'Kaiba'?", options: ["Kaiba", "Warp", "Niro", "Popo"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled swordsman searching for revenge?", options: ["Afro Samurai", "Rurouni Kenshin", "Sword of the Stranger", "Berserk"], answer: 0 },
    { question: "In 'Monster', what is the name of the antagonist?", options: ["Johan Liebert", "Kenzo Tenma", "Eva Heinemann", "Nina Fortner"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled chef attending a prestigious culinary school?", options: ["Food Wars!: Shokugeki no Soma", "Yakitate!! Japan", "Cooking Master Boy", "Restaurant to Another World"], answer: 0 },
    { question: "What is the name of the main character in 'Devilman Crybaby'?", options: ["Akira Fudo", "Ryo Asuka", "Miki Makimura", "Silene"], answer: 0 },
    { question: "Which anime features a protagonist who is a powerful psychic trying to live a normal life?", options: ["Mob Psycho 100", "Saiki Kusuo no Psi-nan", "Code Geass", "Erased"], answer: 0 },
    { question: "In 'Neon Genesis Evangelion', what are the creatures that the Evangelions fight called?", options: ["Angels", "Titans", "Aliens", "Demons"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled bounty hunter in a cyberpunk world?", options: ["Cowboy Bebop", "Outlaw Star", "Space Dandy", "Trigun"], answer: 0 },
    { question: "What is the name of the main character in 'Princess Mononoke'?", options: ["Ashitaka", "San", "Lady Eboshi", "Jigo"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled strategist trying to unite warring states?", options: ["Kingdom", "Nobunaga Concerto", "Sengoku Basara", "Drifters"], answer: 0 },
    { question: "In 'Code Geass', what is the name of Lelouch's ultimate goal?", options: ["To destroy Britannia", "To create a peaceful world", "To avenge his mother", "To rule the world"], answer: 1 },
    { question: "Which anime features a protagonist who is a skilled gamer trapped inside a virtual reality MMORPG?", options: ["Sword Art Online", "Log Horizon", "Overlord", "No Game No Life"], answer: 0 },
    { question: "What is the name of the main character in 'Mushishi'?", options: ["Ginko", "Adashino", "Nui", "Koro"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled detective solving mysteries in Kyoto?", options: ["The Eccentric Family", "Beautiful Bones: Sakurako's Investigation", "Hyouka", "Case Closed"], answer: 0 },
    { question: "In 'Hunter x Hunter', what is the name of Gon's father?", options: ["Ging Freecss", "Silva Zoldyck", "Isaac Netero", "Pariston Hill"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled martial artist fighting in a tournament?", options: ["Dragon Ball", "Tenjho Tenge", "Baki the Grappler", "Kenichi: The Mightiest Disciple"], answer: 0 },
    { question: "What is the name of the main character in 'Psycho-Pass'?", options: ["Akane Tsunemori", "Shinya Kogami", "Nobuchika Ginoza", "Shogo Makishima"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled pilot fighting in a war against alien invaders?", options: ["Macross", "Gundam", "Neon Genesis Evangelion", "Space Battleship Yamato 2199"], answer: 0 },
    { question: "In 'Steins;Gate', what is the name of the organization that is trying to control time travel?", options: ["SERN", "Rounders", "Committee of 300", "Illuminati"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled mage attending a magic academy?", options: ["Little Witch Academia", "Fairy Tail", "The Irregular at Magic High School", "Mahou Sensei Negima!"], answer: 0 },
    { question: "What is the name of the main character in 'Ergo Proxy'?", options: ["Re-l Mayer", "Vincent Law", "Iggy", "Daedalus Yumeeno"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled swordsman traveling the land to atone for his sins?", options: ["Rurouni Kenshin", "Sword of the Stranger", "Afro Samurai", "Berserk"], answer: 0 },
    { question: "In 'Cowboy Bebop', what is Spike Spiegel's signature weapon?", options: ["Jericho 941", "Sword", "Rifle", "His Fists"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled gambler attending a prestigious academy?", options: ["Kakegurui – Compulsive Gambler", "Kaiji", "Akagi", "Legendary Gambler Tetsuya"], answer: 0 },
    { question: "What is the name of the main character in 'Welcome to the N.H.K.'?", options: ["Tatsuhiro Satō", "Misaki Nakahara", "Hitomi Misaki", "Yamazaki Kaoru"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled strategist trying to overthrow a corrupt empire?", options: ["Legend of the Galactic Heroes", "Code Geass", "Kingdom", "Arslan Senki"], answer: 0 },
    { question: "In 'Berserk', what is the name of Guts' sword?", options: ["Dragonslayer", "Zodd", "Griffith", "Behelit"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled chef working in a restaurant in another world?", options: ["Restaurant to Another World", "Food Wars!: Shokugeki no Soma", "Cooking Master Boy", "Yakitate!! Japan"], answer: 0 },
    { question: "What is the name of the main character in 'Texhnolyze'?", options: ["Ichise", "Ran", "Onishi", "Shinji"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled fighter using a unique martial art?", options: ["Baki the Grappler", "Kenichi: The Mightiest Disciple", "Tenjho Tenge", "Dragon Ball"], answer: 0 },
    { question: "In 'Erased', what is the name of Satoru's mother?", options: ["Sachiko Fujinuma", "Kayo Hinazuki", "Air Fujinuma", "Akemi Hinazuki"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled artist trying to find their own style?", options: ["Blue Period", "Honey and Clover", "Shirobako", "Keep Your Hands Off Eizouken!"], answer: 0 },
    { question: "What is the name of the main character in 'Spice and Wolf'?", options: ["Kraft Lawrence", "Holo", "Chloe Lolo", "Nora Arendt"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled doctor working in a futuristic hospital?", options: ["Monster", "Black Jack", "Cells at Work!", "Medical Mechanica"], answer: 0 },
    { question: "In 'Puella Magi Madoka Magica', what is the name of the creature that grants the magical girls their powers?", options: ["Kyubey", "Homura Akemi", "Mami Tomoe", "Sayaka Miki"], answer: 0 },
    { question: "Which anime features a protagonist who is a skilled architect designing buildings in a fantastical world?", options: ["Somali and the Forest Spirit", "Made in Abyss", "Children of the Whales", "The Ancient Magus' Bride"], answer: 0 },
    { question: "Which anime features a protagonist who can only say one thing?", options: ["Sgt. Frog", "Excel Saga", "Pani Poni Dash!", "Sayonara, Zetsubou-Sensei"], answer: 0 },
    { question: "In 'Hetalia', what country does Italy represent?", options: ["Italy", "Germany", "Japan", "America"], answer: 0 },
    { question: "What is the name of the group of girls in 'K-On!'?", options: ["After School Tea Time", "Sakuragaoka Girls' Club", "HTT", "The Light Music Club"], answer: 0 },
    { question: "Which anime features a main character obsessed with discounts?", options: ["Ben-To", "Is This a Zombie?", "The Devil is a Part-Timer!", "Nichijou"], answer: 0 },
    { question: "Which anime features a group of high school girls who play a survival game?", options: ["Sabagebu!", "Girls und Panzer", "Strike Witches", "Kantai Collection"], answer: 0 },

    { question: "Which studio animated 'Kaiba'?", options: ["Madhouse", "Kyoto Animation", "Gainax", "Production I.G"], answer: 0 },
    { question: "In 'Revolutionary Girl Utena', what is the name of Utena's sword?", options: ["Sword of Dios", "Rose Crest", "Dios' Power", "End of the World"], answer: 0 },
    { question: "Which director is known for the 'World Masterpiece Theater' series?", options: ["Isao Takahata", "Hayao Miyazaki", "Hideaki Anno", "Mamoru Hosoda"], answer: 0 },
    { question: "What is the name of the fictional sport in 'RideBack'?", options: ["RideBack", "Iron Horse Racing", "Machine Ride", "Motorcross"], answer: 0 },
    { question: "Which series features the experimental animation style known as 'Liquid Television'?", options: ["Aeon Flux", "Serial Experiments Lain", "FLCL", "Mind Game"], answer: 0 },
    { question: "Which anime features a girl who is a goddess?", options: ["Kamisama Kiss", "Noragami", "Is it Wrong to Pick Up Girls in a Dungeon?", "The World God Only Knows"], answer: 0 },
    { question: "Which anime features a transfer student with a dark secret?", options: ["Another", "Orange", "Erased", "ReLife"], answer: 0 },
    { question: "Which anime has a main character who is an alien?", options: ["Space Dandy", "Assassination Classroom", "Devilman Crybaby", "Parasyte"], answer: 0 },
    { question: "What is the name of the Cafe in 'Is the Order a Rabbit?'", options: ["Rabbit House", "Fleur de Lapin", "Cafe Central", "Amaze Cafe"], answer: 0 },
    { question: "Which Anime features a group of idols trying to save their school?", options: ["Love Live! School Idol Project", "Wake Up, Girls!", "AKB0048", "Idolmaster"], answer: 0 },
    { question: "Who is the main character in 'Ergo Proxy'", options: ["Re-l Mayer", "Vincent Law", "Pino", "Raul Creed"], answer: 0 },
    { question: "Which anime features a sport called 'Keijo'", options: ["Keijo!!!!!!!!", "Haikyuu!!", "Yuri!!! on Ice", "Free!"], answer: 0 },
    { question: "Which anime takes place during the Taisho Era?", options: ["Demon Slayer", "Rurouni Kenshin", "Samurai Champloo", "Afro Samurai"], answer: 0 },
    { question: "Which anime features a girl who is a NEET?", options: ["Watamote", "Himouto! Umaru-chan", "Recovery of an MMO Junkie", "Welcome to the N.H.K."], answer: 0 },
    { question: "Which anime has a character named 'Accelerator'?", options: ["A Certain Scientific Railgun", "Code Geass", "Steins;Gate", "Fullmetal Alchemist"], answer: 0 },

    { question: "In 'Monogatari', what affliction does Hitagi Senjougahara suffer from?", options: ["Weightlessness", "Immortality", "Memory Loss", "Amnesia"], answer: 0 },
    { question: "Which anime features the 'Old World' and 'New World'?", options: ["Shinsekai Yori", "Attack on Titan", "Fullmetal Alchemist", "Made in Abyss"], answer: 0 },
    { question: "Who directed 'Angel's Egg'?", options: ["Mamoru Oshii", "Hideaki Anno", "Hayao Miyazaki", "Satoshi Kon"], answer: 0 },
    { question: "Which anime is known for its use of stop-motion animation with clay?", options: ["Pui Pui Molcar", "Rilakkuma and Kaoru", "Aggretsuko", "Domo TV"], answer: 0 },
    { question: "In 'Mushishi', what are Mushi?", options: ["Primitive life forms", "Spirits", "Demons", "Ghosts"], answer: 0 },
    { question: "Which anime features a group of children with supernatural powers in a post-apocalyptic world?", options: ["Children of the Whales", "From the New World", "Made in Abyss", "Girls' Last Tour"], answer: 1 },
    { question: "What is the name of the artificial intelligence in 'Ergo Proxy'?", options: ["Proxy One", "Monad Proxy", "AutoReiv", "Cogito"], answer: 1 },
    { question: "Which anime features a protagonist who is a skilled puppeteer?", options: ["Karakuri Circus", "Black Butler", "xxxHolic", "Ergo Proxy"], answer: 0 },
    { question: "In 'Revolutionary Girl Utena', what does the rose represent?", options: ["Revolution", "Adolescence", "Innocence", "Hope"], answer: 1 },
    { question: "Which director is known for the film 'Belladonna of Sadness'?", options: ["Eiichi Yamamoto", "Osamu Tezuka", "Rintaro", "Yoshiyuki Tomino"], answer: 0 }
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
