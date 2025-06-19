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
    { question: "Who directed the film 'Pulp Fiction'?", options: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "Steven Spielberg"], answer: 0 },
    { question: "Which actor played James Bond in 'Casino Royale' (2006)?", options: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"], answer: 2 },
    { question: "In what year was the first 'Star Wars' movie released?", options: ["1975", "1977", "1980", "1983"], answer: 1 },
    { question: "Who played the character of Jack Dawson in 'Titanic'?", options: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Tom Cruise"], answer: 1 },
    { question: "Which film won the Academy Award for Best Picture in 2020?", options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], answer: 0 },
    { question: "Who directed 'The Lord of the Rings' trilogy?", options: ["Peter Jackson", "James Cameron", "Ridley Scott", "Guillermo del Toro"], answer: 0 },
    { question: "Which actress played the role of Hermione Granger in the 'Harry Potter' films?", options: ["Emma Roberts", "Emma Watson", "Saoirse Ronan", "Elle Fanning"], answer: 1 },
    { question: "What is the highest-grossing film of all time (unadjusted for inflation)?", options: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: 2 },
    { question: "Who composed the score for the film 'Inception'?", options: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Alan Silvestri"], answer: 0 },
    { question: "Which movie features the quote 'May the Force be with you'?", options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Spaceballs"], answer: 1 },
    { question: "Who directed 'The Shawshank Redemption'?", options: ["Frank Darabont", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"], answer: 0 },
    { question: "In which film did Marlon Brando famously say 'I'm going to make him an offer he can't refuse'?", options: ["Apocalypse Now", "A Streetcar Named Desire", "The Godfather", "Last Tango in Paris"], answer: 2 },
    { question: "Which actor played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Heath Ledger", "Joaquin Phoenix", "Jared Leto"], answer: 1 },
    { question: "What year was 'Back to the Future' released?", options: ["1983", "1985", "1987", "1989"], answer: 1 },
    { question: "Who directed 'Jurassic Park'?", options: ["James Cameron", "George Lucas", "Steven Spielberg", "Robert Zemeckis"], answer: 2 },
    { question: "Which actress won an Oscar for her role in 'La La Land'?", options: ["Emma Stone", "Natalie Portman", "Meryl Streep", "Jennifer Lawrence"], answer: 0 },
    { question: "What is the name of the fictional African country in 'Black Panther'?", options: ["Zamunda", "Wakanda", "Genovia", "Naboo"], answer: 1 },
    { question: "Who played Neo in 'The Matrix'?", options: ["Brad Pitt", "Keanu Reeves", "Will Smith", "Tom Cruise"], answer: 1 },
    { question: "Which film features the song 'My Heart Will Go On'?", options: ["The Bodyguard", "Dirty Dancing", "Titanic", "Armageddon"], answer: 2 },
    { question: "Who directed 'Goodfellas'?", options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Sergio Leone"], answer: 1 },
    { question: "What is the name of the island in 'Jurassic Park'?", options: ["Isla Sorna", "Isla Nublar", "Skull Island", "Monster Island"], answer: 1 },
    { question: "Who played Tony Stark in the 'Iron Man' movies?", options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"], answer: 1 },
    { question: "Which director is known for films like 'Fight Club' and 'Seven'?", options: ["David Fincher", "Christopher Nolan", "Darren Aronofsky", "Denis Villeneuve"], answer: 0 },
    { question: "What is the name of the spaceship in '2001: A Space Odyssey'?", options: ["Discovery One", "Nostromo", "Millennium Falcon", "Enterprise"], answer: 0 },
    { question: "Who played the role of Lisbeth Salander in 'The Girl with the Dragon Tattoo' (original Swedish film)?", options: ["Noomi Rapace", "Rooney Mara", "Scarlett Johansson", "Kristen Stewart"], answer: 0 },
    { question: "Which movie features a character named Forrest Gump?", options: ["Cast Away", "Saving Private Ryan", "Forrest Gump", "The Green Mile"], answer: 2 },
    { question: "Who directed 'E.T. the Extra-Terrestrial'?", options: ["George Lucas", "Robert Zemeckis", "Steven Spielberg", "James Cameron"], answer: 2 },
    { question: "In what year was 'The Lion King' released?", options: ["1992", "1994", "1996", "1998"], answer: 1 },
    { question: "Which actor played Hannibal Lecter in 'The Silence of the Lambs'?", options: ["Anthony Hopkins", "Brian Cox", "Mads Mikkelsen", "Gary Oldman"], answer: 0 },
    { question: "Who directed 'Schindler's List'?", options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"], answer: 2 },
    { question: "What is the name of the main character in 'Mad Max: Fury Road'?", options: ["Max Rockatansky", "John Wick", "Ethan Hunt", "James Bond"], answer: 0 },
    { question: "Which film features the line 'Here's looking at you, kid'?", options: ["Casablanca", "The Maltese Falcon", "Citizen Kane", "The Big Sleep"], answer: 0 },
    { question: "Who played the role of Tyler Durden in 'Fight Club'?", options: ["Brad Pitt", "Edward Norton", "Matt Damon", "Leonardo DiCaprio"], answer: 0 },
    { question: "Which movie is about a group of friends planning a bachelor party in Las Vegas?", options: ["Bridesmaids", "The Hangover", "Wedding Crashers", "American Pie"], answer: 1 },
    { question: "Who directed 'The Grand Budapest Hotel'?", options: ["Wes Anderson", "Tim Burton", "Spike Jonze", "Michel Gondry"], answer: 0 },
    { question: "Which actress played Katniss Everdeen in 'The Hunger Games' films?", options: ["Jennifer Lawrence", "Shailene Woodley", "Emma Watson", "Dakota Fanning"], answer: 0 },
    { question: "What is the name of the animated fish in 'Finding Nemo'?", options: ["Marlin", "Nemo", "Dory", "Gill"], answer: 1 },
    { question: "Who directed 'The Social Network'?", options: ["David Fincher", "Aaron Sorkin", "Ben Affleck", "Christopher Nolan"], answer: 0 },
    { question: "Which film features the song 'Shallow'?", options: ["A Star is Born", "Bohemian Rhapsody", "The Greatest Showman", "La La Land"], answer: 0 },
    { question: "Who played Captain Jack Sparrow in the 'Pirates of the Caribbean' movies?", options: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"], answer: 1 },
    { question: "What is the name of the main character in 'The Wolf of Wall Street'?", options: ["Jordan Belfort", "Gordon Gekko", "Patrick Bateman", "Sherlock Holmes"], answer: 0 },
    { question: "Which film is known for its use of stop-motion animation and features characters like Jack Skellington?", options: ["Coraline", "ParaNorman", "The Nightmare Before Christmas", "Corpse Bride"], answer: 2 },
    { question: "Who directed 'Arrival'?", options: ["Denis Villeneuve", "Christopher Nolan", "Ridley Scott", "James Cameron"], answer: 0 },
    { question: "Which actor played the role of Gandalf in 'The Lord of the Rings'?", options: ["Ian McKellen", "Christopher Lee", "Sean Bean", "Viggo Mortensen"], answer: 0 },
    { question: "What is the name of the company in the 'Alien' franchise?", options: ["Weyland-Yutani", "Umbrella Corporation", "Cyberdyne Systems", "Oscorp"], answer: 0 },
    { question: "Who directed 'Pans Labyrinth'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "Alejandro G. Iñárritu", "Bong Joon-ho"], answer: 0 },
    { question: "Which film features the line 'I see dead people'?", options: ["The Sixth Sense", "The Others", "Poltergeist", "Insidious"], answer: 0 },
    { question: "Who played the role of Mia Wallace in 'Pulp Fiction'?", options: ["Uma Thurman", "Cameron Diaz", "Rosario Dawson", "Jennifer Aniston"], answer: 0 },
    { question: "What is the name of the main character in 'Taxi Driver'?", options: ["Travis Bickle", "Jake LaMotta", "Vito Corleone", "Raging Bull"], answer: 0 },
    { question: "Who played the lead role in the movie 'Cast Away'?", options: ["Tom Hanks", "Brad Pitt", "Matt Damon", "Leonardo DiCaprio"], answer: 0 },
    { question: "Which movie features the character 'Ferris Bueller'?", options: ["Ferris Bueller's Day Off", "The Breakfast Club", "Sixteen Candles", "Weird Science"], answer: 0 },
    { question: "Who directed the film 'Inglourious Basterds'?", options: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "Guy Ritchie"], answer: 0 },
    { question: "Which actress played the role of Black Widow in the Marvel Cinematic Universe?", options: ["Scarlett Johansson", "Elizabeth Olsen", "Brie Larson", "Natalie Portman"], answer: 0 },
    { question: "What is the name of the kingdom in the movie 'Frozen'?", options: ["Arendelle", "Corona", "DunBroch", "Atlantica"], answer: 0 },
    { question: "Which actor played the Joker in the 2019 film 'Joker'?", options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], answer: 0 },
    { question: "Who played the character of Forrest Gump?", options: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Michael Clarke Duncan"], answer: 0 },
    { question: "Which film features the song 'Let It Go'?", options: ["Frozen", "Moana", "Tangled", "Brave"], answer: 0 },
    { question: "Who directed the movie 'The Revenant'?", options: ["Alejandro González Iñárritu", "Christopher Nolan", "David Fincher", "Martin Scorsese"], answer: 0 },
    { question: "Which 2008 film features a villain called the Joker?", options: ["The Dark Knight", "Iron Man", "Hancock", "Quantum of Solace"], answer: 0 },
    { question: "Who played the role of Katniss Everdeen in 'The Hunger Games'?", options: ["Jennifer Lawrence", "Shailene Woodley", "Emma Watson", "Kristen Stewart"], answer: 0 },
    { question: "Which film features the quote 'Frankly, my dear, I don't give a damn'?", options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "Rebecca"], answer: 0 },
    { question: "Who directed the movie 'Gravity'?", options: ["Alfonso Cuarón", "Alejandro González Iñárritu", "Guillermo del Toro", "James Cameron"], answer: 0 },
    { question: "Which actor played the role of Iron Man?", options: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], answer: 0 },
    { question: "Who played the character of Andy Dufresne in 'The Shawshank Redemption'?", options: ["Tim Robbins", "Morgan Freeman", "Kevin Spacey", "Tom Hanks"], answer: 0 },
    { question: "Which movie is about a man who ages in reverse?", options: ["The Curious Case of Benjamin Button", "Big", "Memento", "The Time Traveler's Wife"], answer: 0 },
    { question: "Who directed the film 'The Grand Budapest Hotel'?", options: ["Wes Anderson", "Tim Burton", "Noah Baumbach", "Paul Thomas Anderson"], answer: 0 },
    { question: "What is the name of the main character in 'The Matrix'?", options: ["Neo", "Morpheus", "Trinity", "Agent Smith"], answer: 0 },
    { question: "Who played the role of Miranda Priestly in 'The Devil Wears Prada'?", options: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Amy Adams"], answer: 0 },
    { question: "Which film is about a group of friends on a bachelor party in Las Vegas?", options: ["The Hangover", "Bridesmaids", "Superbad", "Old School"], answer: 0 },
    { question: "Who played the character of Gandalf in 'The Lord of the Rings'?", options: ["Ian McKellen", "Christopher Lee", "Sean Connery", "Richard Harris"], answer: 0 },
    { question: "Which 2016 musical stars Ryan Gosling and Emma Stone?", options: ["La La Land", "The Greatest Showman", "Moulin Rouge!", "Chicago"], answer: 0 },
    { question: "Who directed the film 'Moonlight'?", options: ["Barry Jenkins", "Steve McQueen", "Ava DuVernay", "Damien Chazelle"], answer: 0 },
    { question: "Which film is about a man surviving on Mars?", options: ["The Martian", "Gravity", "Interstellar", "Apollo 13"], answer: 0 },
    { question: "Who played the role of Joker in 'The Dark Knight'?", options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"], answer: 0 },
    { question: "Which movie features the character 'Amélie Poulain'?", options: ["Amélie", "Coco Before Chanel", "The Intouchables", "Blue Is the Warmest Colour"], answer: 0 },
    { question: "Who directed the film 'Get Out'?", options: ["Jordan Peele", "Ari Aster", "John Krasinski", "David Robert Mitchell"], answer: 0 },
    { question: "Which actress played the role of Wonder Woman in the 2017 film?", options: ["Gal Gadot", "Lynda Carter", "Emily Blunt", "Charlize Theron"], answer: 0 },
    { question: "Who played the character of Tony Montana in 'Scarface'?", options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "Joe Pesci"], answer: 0 },
    { question: "Which film is about a group of toys coming to life?", options: ["Toy Story", "Small Soldiers", "The Indian in the Cupboard", "Pinocchio"], answer: 0 },
    { question: "Who directed the film 'Interstellar'?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Ridley Scott"], answer: 0 },
    { question: "Which actor played the role of Captain America?", options: ["Chris Evans", "Sebastian Stan", "Anthony Mackie", "Tom Holland"], answer: 0 },
    { question: "Who played the role of Elsa in 'Frozen'?", options: ["Idina Menzel", "Kristen Bell", "Mandy Moore", "Adele Dazeem"], answer: 0 },
    { question: "Which film is about a clown who terrorizes children in a small town?", options: ["It", "Poltergeist", "The Conjuring", "Annabelle"], answer: 0 },
    { question: "Who directed the film 'Roma'?", options: ["Alfonso Cuarón", "Guillermo del Toro", "Alejandro González Iñárritu", "Pedro Almodóvar"], answer: 0 },
    { question: "Who played the role of Deadpool?", options: ["Ryan Reynolds", "Hugh Jackman", "Chris Evans", "Tom Hardy"], answer: 0 },
    { question: "Which movie features the character 'Westley'?", options: ["The Princess Bride", "Robin Hood: Men in Tights", "Stardust", "Ella Enchanted"], answer: 0 },
    { question: "Who directed the film 'The Big Short'?", options: ["Adam McKay", "David O. Russell", "Martin Scorsese", "Steven Soderbergh"], answer: 0 },
    { question: "Which movie is about a young lion who becomes king?", options: ["The Lion King", "Madagascar", "Zootopia", "Kung Fu Panda"], answer: 0 },
    { question: "Who played the role of Rey in 'Star Wars: The Force Awakens'?", options: ["Daisy Ridley", "Felicity Jones", "Emilia Clarke", "Natalie Portman"], answer: 0 },
    { question: "Which film is about a group of magicians who rob banks?", options: ["Now You See Me", "The Prestige", "The Illusionist", "Focus"], answer: 0 },
    { question: "Who directed the film 'The Favourite'?", options: ["Yorgos Lanthimos", "Greta Gerwig", "Sofia Coppola", "Andrea Arnold"], answer: 0 },
    { question: "Which actor played the role of Sherlock Holmes in the 2009 film?", options: ["Robert Downey Jr.", "Jude Law", "Benedict Cumberbatch", "Henry Cavill"], answer: 0 },
    { question: "Who played the role of Lara Croft in 'Tomb Raider'?", options: ["Angelina Jolie", "Alicia Vikander", "Charlize Theron", "Scarlett Johansson"], answer: 0 },
    { question: "Which film features the quote 'You can't handle the truth!'?", options: ["A Few Good Men", "The Firm", "Jerry Maguire", "Rain Man"], answer: 0 },
    { question: "Who directed the movie 'Slumdog Millionaire'?", options: ["Danny Boyle", "David Fincher", "Ang Lee", "Richard Linklater"], answer: 0 },
    { question: "Which actor played the role of Maximus in 'Gladiator'?", options: ["Russell Crowe", "Joaquin Phoenix", "Tom Hardy", "Richard Harris"], answer: 0 },
    { question: "Who played the role of Belle in 'Beauty and the Beast' (2017)?", options: ["Emma Watson", "Emma Stone", "Lily James", "Carey Mulligan"], answer: 0 },
    { question: "Which film is about a man stranded on an island?", options: ["Cast Away", "Life of Pi", "The Martian", "Swiss Army Man"], answer: 0 },
    { question: "Who directed the film 'The Blind Side'?", options: ["John Lee Hancock", "Clint Eastwood", "Ron Howard", "Peter Berg"], answer: 0 },
    { question: "Who played the role of Thanos in the Marvel Cinematic Universe?", options: ["Josh Brolin", "Dave Bautista", "Mark Ruffalo", "Chris Pratt"], answer: 0 },
    { question: "Which film is about a boy befriending an alien?", options: ["E.T. the Extra-Terrestrial", "Super 8", "The Iron Giant", "Flight of the Navigator"], answer: 0 },
    { question: "Who directed the movie 'The Sound of Music'?", options: ["Robert Wise", "George Cukor", "William Wyler", "Vincente Minnelli"], answer: 0 },
    { question: "Which movie features the character 'Marty McFly'?", options: ["Back to the Future", "Ferris Bueller's Day Off", "The Breakfast Club", "Weird Science"], answer: 0 },
    { question: "Who played the role of Bridget Jones in 'Bridget Jones's Diary'?", options: ["Renée Zellweger", "Kate Winslet", "Emma Thompson", "Helena Bonham Carter"], answer: 0 },
    { question: "Which film is about a man who lives the same day over and over?", options: ["Groundhog Day", "Edge of Tomorrow", "Looper", "Source Code"], answer: 0 },
    { question: "Who directed the film 'The King's Speech'?", options: ["Tom Hooper", "Joe Wright", "Stephen Frears", "Sam Mendes"], answer: 0 },
    { question: "Which actor played the role of Wolverine in the X-Men movies?", options: ["Hugh Jackman", "James Marsden", "Patrick Stewart", "Ian McKellen"], answer: 0 },
    { question: "Who played the role of Jack Sparrow in 'Pirates of the Caribbean'?", options: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Bill Nighy"], answer: 0 },
    { question: "Which film is about a man who invents a chocolate factory?", options: ["Charlie and the Chocolate Factory", "Willy Wonka & the Chocolate Factory", "Matilda", "The BFG"], answer: 0 },
    { question: "Who directed the film 'The Social Network'?", options: ["David Fincher", "Aaron Sorkin", "Ben Affleck", "Christopher Nolan"], answer: 0 },
    { question: "Which movie features the character 'Rocky Balboa'?", options: ["Rocky", "Raging Bull", "Creed", "Million Dollar Baby"], answer: 0 },
    { question: "Who played the role of Andy in 'The Devil Wears Prada'?", options: ["Anne Hathaway", "Emily Blunt", "Meryl Streep", "Amy Adams"], answer: 0 },
    { question: "Which film is about a robot who becomes a superhero?", options: ["Big Hero 6", "Robots", "Wall-E", "I, Robot"], answer: 0 },
    { question: "Who directed the movie 'The Departed'?", options: ["Martin Scorsese", "Quentin Tarantino", "Ridley Scott", "Steven Spielberg"], answer: 0 },
    { question: "Which film is about a young wizard attending a magical school?", options: ["Harry Potter and the Sorcerer's Stone", "The Worst Witch", "Fantastic Beasts", "Matilda"], answer: 0 },
    { question: "Who played the role of Genie in the 2019 'Aladdin'?", options: ["Will Smith", "Robin Williams", "Eddie Murphy", "Jim Carrey"], answer: 0 },
    { question: "Which movie features the character 'Noah Calhoun'?", options: ["The Notebook", "Dear John", "A Walk to Remember", "Safe Haven"], answer: 0 },
    { question: "Who directed the film 'Birdman'?", options: ["Alejandro González Iñárritu", "Alfonso Cuarón", "Guillermo del Toro", "David O. Russell"], answer: 0 },
    { question: "Which actor played the role of Vito Corleone in 'The Godfather'?", options: ["Marlon Brando", "Al Pacino", "Robert De Niro", "James Caan"], answer: 0 },
    { question: "Who played the role of Mia Wallace in 'Pulp Fiction'?", options: ["Uma Thurman", "Cameron Diaz", "Rosario Dawson", "Jennifer Aniston"], answer: 0 },
    { question: "Which film is about a family who moves into a haunted hotel?", options: ["The Shining", "1408", "The Others", "The Haunting"], answer: 0 },
    { question: "Who directed the film 'Little Women' (2019)?", options: ["Greta Gerwig", "Sofia Coppola", "Patty Jenkins", "Lulu Wang"], answer: 0 },
    { question: "Which movie features the character 'Gustave H.'?", options: ["The Grand Budapest Hotel", "The Royal Tenenbaums", "Moonrise Kingdom", "Fantastic Mr. Fox"], answer: 0 },
    { question: "Who played the role of Freddie Mercury in 'Bohemian Rhapsody'?", options: ["Rami Malek", "Ben Whishaw", "Sacha Baron Cohen", "Joseph Mazzello"], answer: 0 },
    { question: "Which film is about a group of friends who go on a road trip?", options: ["Little Miss Sunshine", "Thelma & Louise", "Road Trip", "Easy Rider"], answer: 0 },
    { question: "Who directed the film 'The Shape of Water'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "James Cameron", "Steven Spielberg"], answer: 0 },
    { question: "Which actor played the role of Jason Bourne?", options: ["Matt Damon", "Ben Affleck", "Jeremy Renner", "Brad Pitt"], answer: 0 },
    { question: "Who played the role of Alan Turing in 'The Imitation Game'?", options: ["Benedict Cumberbatch", "Eddie Redmayne", "Matthew Goode", "Ralph Fiennes"], answer: 0 },
    { question: "Which movie features the character 'Clarice Starling'?", options: ["The Silence of the Lambs", "Red Dragon", "Manhunter", "Hannibal"], answer: 0 },
    { question: "Who directed the film 'The Aviator'?", options: ["Martin Scorsese", "Steven Spielberg", "Ridley Scott", "Ron Howard"], answer: 0 },
    { question: "Which film is about a man who can communicate with ghosts?", options: ["The Sixth Sense", "Ghost", "Beetlejuice", "The Others"], answer: 0 },
    { question: "Who played the role of Mark Watney in 'The Martian'?", options: ["Matt Damon", "Ben Affleck", "Leonardo DiCaprio", "Tom Hardy"], answer: 0 },
    { question: "Which movie features the character 'Pi Patel'?", options: ["Life of Pi", "Slumdog Millionaire", "The Namesake", "The Kite Runner"], answer: 0 },
    { question: "Who directed the film 'Dunkirk'?", options: ["Christopher Nolan", "Steven Spielberg", "Sam Mendes", "Ridley Scott"], answer: 0 },
    { question: "Which actor played the role of John Wick?", options: ["Keanu Reeves", "Jason Statham", "Tom Hardy", "Matt Damon"], answer: 0 },
    { question: "Who played the role of Hermione Granger in the 'Harry Potter' films?", options: ["Emma Watson", "Emma Roberts", "Saoirse Ronan", "Elle Fanning"], answer: 0 },
    { question: "Which film is about a talking pig who wants to be a sheepdog?", options: ["Babe", "Charlotte's Web", "Gordy", "Home on the Range"], answer: 0 },
    { question: "Who directed the film 'Get Out'?", options: ["Jordan Peele", "Ari Aster", "John Krasinski", "David Robert Mitchell"], answer: 0 },
    { question: "Which movie features the character 'Westley'?", options: ["The Princess Bride", "Robin Hood: Men in Tights", "Stardust", "Ella Enchanted"], answer: 0 },
    { question: "Who played the role of Wolverine?", options: ["Hugh Jackman", "Liev Schreiber", "James McAvoy", "Michael Fassbender"], answer: 0 },
    { question: "Which film is about a baseball field in a cornfield?", options: ["Field of Dreams", "The Natural", "Bull Durham", "Moneyball"], answer: 0 },
    { question: "Who directed the film 'The Big Short'?", options: ["Adam McKay", "David O. Russell", "Martin Scorsese", "Steven Soderbergh"], answer: 0 },
    { question: "Which actor played the role of Travis Bickle in 'Taxi Driver'?", options: ["Robert De Niro", "Al Pacino", "Harvey Keitel", "Joe Pesci"], answer: 0 },
    { question: "Who played the role of Black Panther?", options: ["Chadwick Boseman", "Michael B. Jordan", "Idris Elba", "Donald Glover"], answer: 0 },
    { question: "Which film is about a group of superheroes fighting an alien invasion?", options: ["The Avengers", "Justice League", "Guardians of the Galaxy", "X-Men: Apocalypse"], answer: 0 },
    { question: "Who directed the film 'The Hateful Eight'?", options: ["Quentin Tarantino", "Martin Scorsese", "Joel Coen", "Steven Soderbergh"], answer: 0 },
    { question: "Which actor played the role of Freddie Mercury in 'Bohemian Rhapsody'?", options: ["Rami Malek", "Ben Whishaw", "Sacha Baron Cohen", "Joseph Mazzello"], answer: 0 },
    { question: "Who played the role of Elsa in 'Frozen'?", options: ["Idina Menzel", "Kristen Bell", "Mandy Moore", "Adele Dazeem"], answer: 0 },
    { question: "Which movie features the character 'Gordon Gekko'?", options: ["Wall Street", "The Wolf of Wall Street", "Boiler Room", "Margin Call"], answer: 0 },
    { question: "Who directed the film 'Bird Box'?", options: ["Susanne Bier", "Patty Jenkins", "Ava DuVernay", "Greta Gerwig"], answer: 0 },
    { question: "Which film is about a man who survives on Mars?", options: ["The Martian", "Gravity", "Interstellar", "Apollo 13"], answer: 0 },
    { question: "Who played the role of Genie in the 2019 'Aladdin'?", options: ["Will Smith", "Robin Williams", "Eddie Murphy", "Jim Carrey"], answer: 0 },
    { question: "Which movie features the character 'Clarice Starling'?", options: ["The Silence of the Lambs", "Red Dragon", "Manhunter", "Hannibal"], answer: 0 },
    { question: "Who directed the film 'The Shape of Water'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "James Cameron", "Steven Spielberg"], answer: 0 },
    { question: "Which actor played the role of Jason Bourne?", options: ["Matt Damon", "Ben Affleck", "Jeremy Renner", "Brad Pitt"], answer: 0 },
    { question: "Who played the role of Alan Turing in 'The Imitation Game'?", options: ["Benedict Cumberbatch", "Eddie Redmayne", "Matthew Goode", "Ralph Fiennes"], answer: 0 },
    { question: "Which movie features the character 'Clarice Starling'?", options: ["The Silence of the Lambs", "Red Dragon", "Manhunter", "Hannibal"], answer: 0 },
    { question: "Who directed the film 'The Aviator'?", options: ["Martin Scorsese", "Steven Spielberg", "Ridley Scott", "Ron Howard"], answer: 0 },
    { question: "Which film is about a man who can communicate with ghosts?", options: ["The Sixth Sense", "Ghost", "Beetlejuice", "The Others"], answer: 0 },
    { question: "Who played the role of Mark Watney in 'The Martian'?", options: ["Matt Damon", "Ben Affleck", "Leonardo DiCaprio", "Tom Hardy"], answer: 0 },
    { question: "Which movie features the character 'Pi Patel'?", options: ["Life of Pi", "Slumdog Millionaire", "The Namesake", "The Kite Runner"], answer: 0 },
    { question: "Who directed the film 'Dunkirk'?", options: ["Christopher Nolan", "Steven Spielberg", "Sam Mendes", "Ridley Scott"], answer: 0 },
    { question: "Which actor played the role of John Wick?", options: ["Keanu Reeves", "Jason Statham", "Tom Hardy", "Matt Damon"], answer: 0 },
    { question: "Who played the role of Hermione Granger in the 'Harry Potter' films?", options: ["Emma Watson", "Emma Roberts", "Saoirse Ronan", "Elle Fanning"], answer: 0 },
    { question: "Which film is about a talking pig who wants to be a sheepdog?", options: ["Babe", "Charlotte's Web", "Gordy", "Home on the Range"], answer: 0 },
    { question: "Who directed the film 'Get Out'?", options: ["Jordan Peele", "Ari Aster", "John Krasinski", "David Robert Mitchell"], answer: 0 },
    { question: "Which movie features the character 'Westley'?", options: ["The Princess Bride", "Robin Hood: Men in Tights", "Stardust", "Ella Enchanted"], answer: 0 },
    { question: "Who played the role of Wolverine?", options: ["Hugh Jackman", "Liev Schreiber", "James McAvoy", "Michael Fassbender"], answer: 0 },
    { question: "Which film is about a baseball field in a cornfield?", options: ["Field of Dreams", "The Natural", "Bull Durham", "Moneyball"], answer: 0 },
    { question: "Who directed the film 'The Big Short'?", options: ["Adam McKay", "David O. Russell", "Martin Scorsese", "Steven Soderbergh"], answer: 0 },
    { question: "Which director is known for the 'Before Sunrise' trilogy?", options: ["Richard Linklater", "Wes Anderson", "Sofia Coppola", "David Fincher"], answer: 0 },
    { question: "Who played the title character in 'Erin Brockovich'?", options: ["Julia Roberts", "Sandra Bullock", "Nicole Kidman", "Reese Witherspoon"], answer: 0 },
    { question: "Which film won Best Picture at the 2020 Oscars?", options: ["Parasite", "1917", "Joker", "Ford v Ferrari"], answer: 0 },
    { question: "Who played the villain Hans Gruber in 'Die Hard'?", options: ["Alan Rickman", "Jeremy Irons", "Gary Oldman", "Ralph Fiennes"], answer: 0 },
    { question: "Which movie is set in the fictional town of Hill Valley?", options: ["Back to the Future", "Pleasantville", "Twin Peaks: Fire Walk with Me", "Hot Fuzz"], answer: 0 },
    { question: "Who directed 'Pan's Labyrinth'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "Pedro Almodóvar", "Alejandro González Iñárritu"], answer: 0 },
    { question: "Which actor starred as Edward in 'Edward Scissorhands'?", options: ["Johnny Depp", "Brad Pitt", "Tom Cruise", "Keanu Reeves"], answer: 0 },
    { question: "What is the name of the villain in 'The Lion King'?", options: ["Scar", "Mufasa", "Zazu", "Simba"], answer: 0 },
    { question: "Which film is about a group of oil drillers sent to stop an asteroid?", options: ["Armageddon", "Deep Impact", "The Core", "Sunshine"], answer: 0 },
    { question: "Who played the role of Amélie in the French film 'Amélie'?", options: ["Audrey Tautou", "Marion Cotillard", "Juliette Binoche", "Léa Seydoux"], answer: 0 },
    { question: "Which movie features the song 'My Heart Will Go On'?", options: ["Titanic", "The Bodyguard", "Moulin Rouge!", "Ghost"], answer: 0 },
    { question: "Who directed 'The Grand Budapest Hotel'?", options: ["Wes Anderson", "Noah Baumbach", "Paul Thomas Anderson", "David O. Russell"], answer: 0 },
    { question: "Which actor played the title role in 'The Mask'?", options: ["Jim Carrey", "Mike Myers", "Robin Williams", "Will Ferrell"], answer: 0 },
    { question: "Which film is about a rat who becomes a chef in Paris?", options: ["Ratatouille", "Flushed Away", "The Secret Life of Pets", "Bolt"], answer: 0 },
    { question: "Who played the role of Andy in 'Toy Story'?", options: ["John Morris", "Tom Hanks", "Tim Allen", "Don Rickles"], answer: 0 },
    { question: "Which movie features the character Dr. Emmett Brown?", options: ["Back to the Future", "Honey, I Shrunk the Kids", "The Nutty Professor", "Men in Black"], answer: 0 },
    { question: "Who played the lead in 'La La Land'?", options: ["Emma Stone", "Jennifer Lawrence", "Anne Hathaway", "Rachel McAdams"], answer: 0 },
    { question: "Which film is about a journalist uncovering a Catholic Church scandal?", options: ["Spotlight", "The Post", "All the President's Men", "Zodiac"], answer: 0 },
    { question: "Who directed 'The Shape of Water'?", options: ["Guillermo del Toro", "James Cameron", "Steven Spielberg", "Peter Jackson"], answer: 0 },
    { question: "Which actor played the role of Joker in 'Suicide Squad'?", options: ["Jared Leto", "Heath Ledger", "Joaquin Phoenix", "Jack Nicholson"], answer: 0 },
    { question: "Which film is about a group of friends searching for pirate treasure?", options: ["The Goonies", "Stand by Me", "Super 8", "The Sandlot"], answer: 0 },
    { question: "Who played the role of Tony Stark's assistant Pepper Potts?", options: ["Gwyneth Paltrow", "Scarlett Johansson", "Natalie Portman", "Elizabeth Olsen"], answer: 0 },
    { question: "Which film is about a mute woman who falls in love with an amphibian?", options: ["The Shape of Water", "Splash", "Pan's Labyrinth", "The Little Mermaid"], answer: 0 },
    { question: "Who directed 'The Irishman'?", options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Ridley Scott"], answer: 0 },
    { question: "Which actor played the role of the Genie in Disney's 1992 'Aladdin'?", options: ["Robin Williams", "Will Smith", "Eddie Murphy", "Jim Carrey"], answer: 0 },
    { question: "Which movie features the quote 'Life is like a box of chocolates'?", options: ["Forrest Gump", "Big", "Rain Man", "Cast Away"], answer: 0 },
    { question: "Who played the role of Bridget's best friend Shazza in 'Bridget Jones's Diary'?", options: ["Sally Phillips", "Gemma Jones", "Shirley Henderson", "Emily Mortimer"], answer: 0 },
    { question: "Which film is about a man who starts a fight club?", options: ["Fight Club", "Snatch", "The Machinist", "American Psycho"], answer: 0 },
    { question: "Who directed 'Birdman'?", options: ["Alejandro González Iñárritu", "Guillermo del Toro", "Alfonso Cuarón", "David Fincher"], answer: 0 },
    { question: "Which actor played the role of Jack Dawson in 'Titanic'?", options: ["Leonardo DiCaprio", "Brad Pitt", "Ben Affleck", "Matt Damon"], answer: 0 }
];
const storageKey = "usedFilmsIndices";

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