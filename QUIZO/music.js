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
    { question: "Who is known as the 'King of Pop'?", options: ["Michael Jackson", "Elvis Presley", "Prince", "Stevie Wonder"], answer: 0 },
    { question: "What is the name of the Beatles' last studio album?", options: ["Abbey Road", "Let It Be", "Sgt. Pepper's Lonely Hearts Club Band", "The White Album"], answer: 1 },
    { question: "Which instrument does Jimi Hendrix play?", options: ["Guitar", "Drums", "Bass", "Piano"], answer: 0 },
    { question: "What genre is characterized by a strong backbeat, syncopation, and improvisation?", options: ["Classical", "Country", "Jazz", "Rock"], answer: 2 },
    { question: "Who composed the Four Seasons?", options: ["Bach", "Beethoven", "Vivaldi", "Mozart"], answer: 2 },
    { question: "What is the name of Adele's debut album?", options: ["19", "21", "25", "30"], answer: 0 },
    { question: "Which band is known for the song 'Bohemian Rhapsody'?", options: ["Queen", "The Rolling Stones", "Led Zeppelin", "Pink Floyd"], answer: 0 },
    { question: "What musical element refers to the speed of a piece?", options: ["Tempo", "Rhythm", "Melody", "Harmony"], answer: 0 },
    { question: "Which singer is known as 'Material Girl'?", options: ["Lady Gaga", "Beyonce", "Madonna", "Rihanna"], answer: 2 },
    { question: "What is a group of musicians playing together called?", options: ["Solo", "Duet", "Orchestra", "A Capella"], answer: 2 },
    { question: "Which rapper had the hit song 'Lose Yourself'?", options: ["Jay-Z", "Kanye West", "Eminem", "Drake"], answer: 2 },
    { question: "What is the name of Taylor Swift's second album?", options: ["Fearless", "Speak Now", "Red", "1989"], answer: 0 },
    { question: "Which rock band released the album 'Nevermind'?", options: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"], answer: 2 },
    { question: "What is a sequence of musical notes that is perceived as a single entity?", options: ["Chord", "Scale", "Melody", "Harmony"], answer: 2 },
    { question: "Which artist is known for wearing eccentric costumes and performing under the alias Ziggy Stardust?", options: ["Elton John", "Freddie Mercury", "David Bowie", "Prince"], answer: 2 },
    { question: "What is the highest female singing voice?", options: ["Alto", "Tenor", "Soprano", "Bass"], answer: 2 },
    { question: "Which country singer is known for the song 'Jolene'?", options: ["Reba McEntire", "Dolly Parton", "Loretta Lynn", "Carrie Underwood"], answer: 1 },
    { question: "What is the name of the musical based on the life of Alexander Hamilton?", options: ["Wicked", "Rent", "Hamilton", "Les Miserables"], answer: 2 },
    { question: "Which instrument is commonly featured in reggae music?", options: ["Sitar", "Bagpipes", "Steelpan", "Harp"], answer: 2 },
    { question: "What is the term for singing without instrumental accompaniment?", options: ["Acoustic", "A Capella", "Unplugged", "Instrumental"], answer: 1 },
    { question: "Which singer is known for hits like 'Like a Prayer' and 'Vogue'?", options: ["Janet Jackson", "Mariah Carey", "Madonna", "Whitney Houston"], answer: 2 },
    { question: "What is the main percussion instrument in a drum set?", options: ["Snare drum", "Bass drum", "Cymbal", "Tom-tom"], answer: 1 },
    { question: "Which genre of music is closely associated with the blues?", options: ["Classical", "Country", "Rock and Roll", "Hip Hop"], answer: 2 },
    { question: "What is the name of the most famous opera by Giacomo Puccini?", options: ["La Bohème", "Tosca", "Madame Butterfly", "Turandot"], answer: 0 },
    { question: "Which artist is known for the song 'Hallelujah'?", options: ["Bob Dylan", "Leonard Cohen", "Jeff Buckley", "Rufus Wainwright"], answer: 1 },
    { question: "What is the musical term for a gradually increasing volume?", options: ["Crescendo", "Decrescendo", "Forte", "Piano"], answer: 0 },
    { question: "Which band is known for their elaborate stage performances and face paint?", options: ["AC/DC", "Kiss", "Aerosmith", "Guns N' Roses"], answer: 1 },
    { question: "What is the name of the annual music festival held in Indio, California?", options: ["Lollapalooza", "Glastonbury", "Coachella", "Burning Man"], answer: 2 },
    { question: "Which pop star is known for her alter ego, Roman Zolanski?", options: ["Katy Perry", "Rihanna", "Nicki Minaj", "Lady Gaga"], answer: 2 },
    { question: "What is the name of the device used to play vinyl records?", options: ["Cassette player", "CD player", "Turntable", "MP3 player"], answer: 2 },
    { question: "Which Jamaican musical style is considered a predecessor to reggae?", options: ["Ska", "Rocksteady", "Mento", "Dub"], answer: 1 },
    { question: "What is the name of the famous music venue in New York City known for hosting iconic performances?", options: ["The Apollo Theater", "Carnegie Hall", "Madison Square Garden", "Radio City Music Hall"], answer: 0 },
    { question: "Which member of the Beatles was tragically murdered in 1980?", options: ["Paul McCartney", "George Harrison", "John Lennon", "Ringo Starr"], answer: 2 },
    { question: "What is the name of the famous electric guitar played by Eric Clapton?", options: ["The Strat", "Black Beauty", "Lucille", "Brownie"], answer: 3 },
    { question: "Which female singer is known as the 'Queen of Soul'?", options: ["Etta James", "Aretha Franklin", "Diana Ross", "Tina Turner"], answer: 1 },
    { question: "What is the term for a short musical idea, a recurring figure, rhythm, or melodic fragment?", options: ["Phrase", "Motif", "Cadence", "Scale"], answer: 1 },
    { question: "Which musical refers to a family of Austrian singers?", options: ["The King and I", "The Sound of Music", "Oklahoma!", "My Fair Lady"], answer: 1 },
    { question: "What is the name of the famous music publishing company founded in New York City?", options: ["EMI", "Sony Music", "Warner Chappell", "Tin Pan Alley"], answer: 3 },
    { question: "Which singer had a hit song called 'Purple Rain'?", options: ["Michael Jackson", "Prince", "Stevie Wonder", "Lionel Richie"], answer: 1 },
    { question: "What is the term for a musical form consisting of a repeating section (the refrain) interspersed with new verses?", options: ["Sonata", "Rondo", "Theme and Variations", "Verse-Chorus Form"], answer: 3 },
    { question: "Which country is known for its tango music and dance?", options: ["Spain", "Italy", "Argentina", "Brazil"], answer: 2 },
    { question: "What is the term for the highness or lowness of a musical sound?", options: ["Timbre", "Pitch", "Dynamics", "Harmony"], answer: 2 },
    { question: "Which instrument is known as the 'king of instruments'?", options: ["Piano", "Organ", "Violin", "Guitar"], answer: 1 },
    { question: "What is the name of Billie Eilish's debut album?", options: ["When We All Fall Asleep, Where Do We Go?", "Don't Smile at Me", "Happier Than Ever", "Everything I Wanted"], answer: 0 },
    { question: "Which of these instruments is NOT typically found in a standard orchestra?", options: ["Trumpet", "Saxophone", "Viola", "Bassoon"], answer: 1 },
    { question: "Which famous opera singer is also known as 'The Pavarotti'?", options: ["Placido Domingo", "Luciano Pavarotti", "Jose Carreras", "Andrea Bocelli"], answer: 1 },
    { question: "Which music streaming service was co-founded by Jay-Z?", options: ["Spotify", "Apple Music", "Tidal", "Pandora"], answer: 2 },
    { question: "Which popular music festival began as a farewell tour for Perry Farrell's band Jane's Addiction?", options: ["Coachella", "Lollapalooza", "Bonnaroo", "Austin City Limits"], answer: 1 },
    { question: "Which singer, songwriter and pianist has had huge hits with 'Rocket Man', 'Tiny Dancer' and 'Your Song'?", options: ["Billy Joel", "Elton John", "Stevie Wonder", "Paul McCartney"], answer: 1 },
    { question: "Who is the lead singer of the band U2?", options: ["The Edge", "Bono", "Adam Clayton", "Larry Mullen Jr."], answer: 1 },
    { question: "What was the name of the iconic music festival held in 1969?", options: ["Monterey Pop Festival", "Isle of Wight Festival", "Woodstock", "Altamont Speedway Free Festival"], answer: 2 },
    { question: "Which composer was deaf for the last 25 years of his life?", options: ["Mozart", "Bach", "Beethoven", "Haydn"], answer: 2 },
    { question: "What is the name of the lead singer of the Rolling Stones?", options: ["Keith Richards", "Mick Jagger", "Charlie Watts", "Ronnie Wood"], answer: 1 },
    { question: "Which artist is known as the 'Godfather of Soul'?", options: ["James Brown", "Ray Charles", "Sam Cooke", "Otis Redding"], answer: 0 },
    { question: "What is the name of the first music video ever played on MTV?", options: ["'Video Killed the Radio Star' by The Buggles", "'Billie Jean' by Michael Jackson", "'Sledgehammer' by Peter Gabriel", "'Take on Me' by a-ha"], answer: 0 },
    { question: "Which band is famous for the album 'The Dark Side of the Moon'?", options: ["Led Zeppelin", "The Who", "Pink Floyd", "Genesis"], answer: 2 },
    { question: "What is the name of the legendary guitarist who was a member of the Yardbirds and Cream?", options: ["Jimmy Page", "Jeff Beck", "Eric Clapton", "Peter Green"], answer: 2 },
    { question: "Which female artist has the most Grammy Awards?", options: ["Beyoncé", "Alison Krauss", "Aretha Franklin", "Taylor Swift"], answer: 0 },
    { question: "What is the term for a composition for a solo instrument accompanied by an orchestra?", options: ["Symphony", "Concerto", "Sonata", "Overture"], answer: 1 },
    { question: "Which hip hop group released the album 'Straight Outta Compton'?", options: ["Public Enemy", "Run-DMC", "N.W.A.", "A Tribe Called Quest"], answer: 2 },
    { question: "What is the name of the lead singer of Coldplay?", options: ["Jonny Buckland", "Guy Berryman", "Will Champion", "Chris Martin"], answer: 3 },
    { question: "Which country is the birthplace of techno music?", options: ["Germany", "United States", "United Kingdom", "Belgium"], answer: 1 },
    { question: "What is the name of Bob Dylan's iconic 1965 album?", options: ["Bringing It All Back Home", "Highway 61 Revisited", "Blonde on Blonde", "The Freewheelin' Bob Dylan"], answer: 1 },
    { question: "Which artist is known for the hit song 'I Will Always Love You'?", options: ["Dolly Parton", "Whitney Houston", "Mariah Carey", "Celine Dion"], answer: 1 },
    { question: "What is a 'libretto' in the context of opera?", options: ["The musical score", "The text of the opera", "The lead female singer", "The stage design"], answer: 1 },
    { question: "Which band wrote the rock anthem 'Stairway to Heaven'?", options: ["The Rolling Stones", "The Who", "Led Zeppelin", "Black Sabbath"], answer: 2 },
    { question: "Who is the lead singer of the band Foo Fighters?", options: ["Taylor Hawkins", "Nate Mendel", "Pat Smear", "Dave Grohl"], answer: 3 },
    { question: "What is the name of the first album by The Clash?", options: ["London Calling", "The Clash", "Give 'Em Enough Rope", "Sandinista!"], answer: 1 },
    { question: "Which jazz trumpeter was known for his improvisational style and his album 'Kind of Blue'?", options: ["Louis Armstrong", "Dizzy Gillespie", "Miles Davis", "John Coltrane"], answer: 2 },
    { question: "What does the musical term 'adagio' mean?", options: ["Fast", "Slow", "Loud", "Soft"], answer: 1 },
    { question: "Which band is known for the song 'Hotel California'?", options: ["The Doors", "The Eagles", "Fleetwood Mac", "Lynyrd Skynyrd"], answer: 1 },
    { question: "Who composed the music for the ballet 'The Nutcracker'?", options: ["Stravinsky", "Tchaikovsky", "Prokofiev", "Debussy"], answer: 1 },
    { question: "Which R&B group was Beyoncé a part of before her solo career?", options: ["TLC", "En Vogue", "Destiny's Child", "SWV"], answer: 2 },
    { question: "What is the name of the lead singer of the band Radiohead?", options: ["Jonny Greenwood", "Ed O'Brien", "Colin Greenwood", "Thom Yorke"], answer: 3 },
    { question: "Which Motown artist had the hit song 'My Girl'?", options: ["The Temptations", "The Four Tops", "Smokey Robinson & The Miracles", "Marvin Gaye"], answer: 0 },
    { question: "What is a 'leitmotif' in music?", options: ["A recurring musical theme associated with a particular person, place, or idea", "A type of musical scale", "A fast, upbeat tempo", "A solo performance"], answer: 0 },
    { question: "Which artist released the album 'Lemonade'?", options: ["Rihanna", "Beyoncé", "Adele", "Taylor Swift"], answer: 1 },
    { question: "Who wrote the opera 'The Magic Flute'?", options: ["Beethoven", "Bach", "Handel", "Mozart"], answer: 3 },
    { question: "Which band is fronted by Eddie Vedder?", options: ["Nirvana", "Soundgarden", "Alice in Chains", "Pearl Jam"], answer: 3 },
    { question: "What is the name of the famous street in Nashville, Tennessee, known for its country music venues?", options: ["Beale Street", "Bourbon Street", "Broadway", "Sunset Strip"], answer: 2 },
    { question: "Which artist is known as the 'Queen of Disco'?", options: ["Diana Ross", "Gloria Gaynor", "Donna Summer", "Chaka Khan"], answer: 2 },
    { question: "What is the name of the famous blues musician known for his guitar, 'Lucille'?", options: ["Muddy Waters", "John Lee Hooker", "B.B. King", "Howlin' Wolf"], answer: 2 },
    { question: "Which rock and roll pioneer was known for his energetic piano playing and hits like 'Great Balls of Fire'?", options: ["Chuck Berry", "Little Richard", "Jerry Lee Lewis", "Fats Domino"], answer: 2 },
    { question: "What is the term for the quality of a sound that distinguishes different types of sound production?", options: ["Pitch", "Timbre", "Dynamics", "Rhythm"], answer: 1 },
    { question: "Which band released the concept album 'Tommy' about a 'deaf, dumb, and blind' boy?", options: ["The Kinks", "The Rolling Stones", "The Who", "The Animals"], answer: 2 },
    { question: "Who is known as the 'King of Rock and Roll'?", options: ["Chuck Berry", "Little Richard", "Elvis Presley", "Buddy Holly"], answer: 2 },
    { question: "Which of these is a famous opera house in Milan, Italy?", options: ["La Scala", "The Royal Opera House", "The Metropolitan Opera", "Vienna State Opera"], answer: 0 },
    { question: "What is the name of the lead singer of the band The Cure?", options: ["Simon Gallup", "Robert Smith", "Porl Thompson", "Lol Tolhurst"], answer: 1 },
    { question: "Which pop icon was known for her ever-changing image and albums like 'True Blue' and 'Ray of Light'?", options: ["Cher", "Madonna", "Cyndi Lauper", "Janet Jackson"], answer: 1 },
    { question: "What is the lowest male singing voice?", options: ["Tenor", "Baritone", "Bass", "Countertenor"], answer: 2 },
    { question: "Which hip-hop artist is also known by the nickname 'Hova'?", options: ["Kanye West", "Jay-Z", "Nas", "Dr. Dre"], answer: 1 },
    { question: "What does the term 'staccato' mean in music?", options: ["Smooth and connected", "Loud and forceful", "Short and detached", "Gradually getting faster"], answer: 2 },
    { question: "Which electronic music duo is known for wearing robot helmets?", options: ["The Chemical Brothers", "Daft Punk", "Justice", "Aphex Twin"], answer: 1 },
    { question: "Who composed 'Rhapsody in Blue'?", options: ["Aaron Copland", "Leonard Bernstein", "George Gershwin", "Charles Ives"], answer: 2 },
    { question: "Which band is considered a pioneer of the punk rock genre?", options: ["The Eagles", "The Ramones", "Fleetwood Mac", "Boston"], answer: 1 },
    { question: "What is the name of the lead singer of the band No Doubt?", options: ["Tony Kanal", "Gwen Stefani", "Tom Dumont", "Adrian Young"], answer: 1 },
    { question: "Which country did the musical style of 'bossa nova' originate from?", options: ["Cuba", "Brazil", "Argentina", "Mexico"], answer: 1 },
    { question: "Who is the lead singer of the band Arctic Monkeys?", options: ["Matt Helders", "Jamie Cook", "Nick O'Malley", "Alex Turner"], answer: 3 },
    { question: "What is a 'cadenza' in a concerto?", options: ["The final movement", "A section for the orchestra alone", "A virtuosic solo passage", "The opening theme"], answer: 2 },
    { question: "Which artist released the groundbreaking album 'What's Going On'?", options: ["Stevie Wonder", "Marvin Gaye", "Al Green", "Curtis Mayfield"], answer: 1 },
    { question: "What is the name of the instrument with black and white keys?", options: ["Guitar", "Violin", "Piano", "Trumpet"], answer: 2 },
    { question: "Which band was Kurt Cobain the lead singer of?", options: ["Soundgarden", "Pearl Jam", "Alice in Chains", "Nirvana"], answer: 3 },
    { question: "What is the term for a group of four musicians?", options: ["Trio", "Quartet", "Quintet", "Sextet"], answer: 1 },
    { question: "Which composer is famous for his 'Moonlight Sonata'?", options: ["Bach", "Mozart", "Chopin", "Beethoven"], answer: 3 },
    { question: "What is the name of the lead singer of Green Day?", options: ["Mike Dirnt", "Tré Cool", "Billie Joe Armstrong", "Jason White"], answer: 2 },
    { question: "Which artist is known as 'The Boss'?", options: ["Bob Dylan", "Neil Young", "Bruce Springsteen", "Tom Petty"], answer: 2 },
    { question: "What is the name of the famous opera by Georges Bizet?", options: ["Carmen", "Aida", "Rigoletto", "The Barber of Seville"], answer: 0 },
    { question: "Which folk singer wrote 'This Land Is Your Land'?", options: ["Pete Seeger", "Woody Guthrie", "Bob Dylan", "Joan Baez"], answer: 1 },
    { question: "What is the name of the lead singer of the band Blondie?", options: ["Chris Stein", "Clem Burke", "Debbie Harry", "Jimmy Destri"], answer: 2 },
    { question: "Which city is considered the birthplace of jazz music?", options: ["Chicago", "New York", "New Orleans", "Kansas City"], answer: 2 },
    { question: "What is the name of the lead singer of the band The Smiths?", options: ["Johnny Marr", "Andy Rourke", "Mike Joyce", "Morrissey"], answer: 3 },
    { question: "Which artist's fans are known as the 'Beyhive'?", options: ["Rihanna", "Beyoncé", "Lady Gaga", "Taylor Swift"], answer: 1 },
    { question: "What is a 'crescendo' in music?", options: ["Gradually getting softer", "Gradually getting louder", "A sudden accent", "A pause"], answer: 1 },
    { question: "Who is often called the 'King of Latin Pop'?", options: ["Ricky Martin", "Enrique Iglesias", "Marc Anthony", "Shakira"], answer: 1 },
    { question: "Which band released the album 'Rumours'?", options: ["The Eagles", "Fleetwood Mac", "Steely Dan", "Crosby, Stills, Nash & Young"], answer: 1 },
    { question: "What is the name of the lead singer of the band Florence + The Machine?", options: ["Isabella Summers", "Robert Ackroyd", "Florence Welch", "Tom Monger"], answer: 2 },
    { question: "Which musical instrument has 88 keys?", options: ["Organ", "Harpsichord", "Piano", "Synthesizer"], answer: 2 },
    { question: "What is the name of the famous music club in Liverpool where The Beatles played many of their early shows?", options: ["The Marquee Club", "The Cavern Club", "The 100 Club", "The Roundhouse"], answer: 1 },
    { question: "Which composer is known for his 'Brandenburg Concertos'?", options: ["Vivaldi", "Handel", "Bach", "Telemann"], answer: 2 },
    { question: "What is the name of the lead singer of the Red Hot Chili Peppers?", options: ["Flea", "Chad Smith", "John Frusciante", "Anthony Kiedis"], answer: 3 },
    { question: "Which female artist is known for her album 'Jagged Little Pill'?", options: ["Sheryl Crow", "Alanis Morissette", "Tori Amos", "Fiona Apple"], answer: 1 },
    { question: "What is the term for a musical piece designed to be played by a small group of musicians?", options: ["Oratorio", "Cantata", "Chamber music", "Symphonic poem"], answer: 2 },
    { question: "Who was the lead singer of the band Joy Division?", options: ["Bernard Sumner", "Peter Hook", "Stephen Morris", "Ian Curtis"], answer: 3 },
    { question: "Which city's orchestra is considered one of the 'Big Five' in the United States?", options: ["Los Angeles", "Chicago", "San Francisco", "Miami"], answer: 1 },
    { question: "What is the name of the lead singer of the band The Killers?", options: ["Dave Keuning", "Mark Stoermer", "Ronnie Vannucci Jr.", "Brandon Flowers"], answer: 3 },
    { question: "Which artist had a hit with the song 'What's Love Got to Do with It'?", options: ["Diana Ross", "Aretha Franklin", "Tina Turner", "Gladys Knight"], answer: 2 },
    { question: "What does the musical term 'andante' mean?", options: ["At a walking pace", "Very fast", "Playfully", "Majestically"], answer: 0 },
    { question: "Which rock band is from Australia?", options: ["The Who", "AC/DC", "Rush", "U2"], answer: 1 },
    { question: "What is the name of the lead singer of the band Muse?", options: ["Chris Wolstenholme", "Dominic Howard", "Matt Bellamy", "Morgan Nicholls"], answer: 2 },
    { question: "Which jazz singer was known as 'Lady Day'?", options: ["Ella Fitzgerald", "Billie Holiday", "Sarah Vaughan", "Nina Simone"], answer: 1 },
    { question: "What is a 'glissando' in music?", options: ["A rapid succession of notes", "A slide from one pitch to another", "A strong accent", "A very soft passage"], answer: 1 },
    { question: "Who is the lead singer of the band Paramore?", options: ["Taylor York", "Zac Farro", "Hayley Williams", "Jeremy Davis"], answer: 2 },
    { question: "Which famous composer wrote the '1812 Overture'?", options: ["Mussorgsky", "Rimsky-Korsakov", "Tchaikovsky", "Borodin"], answer: 2 },
    { question: "What is the name of the lead singer of the band My Chemical Romance?", options: ["Ray Toro", "Frank Iero", "Mikey Way", "Gerard Way"], answer: 3 },
    { question: "Which country music star is known as the 'Man in Black'?", options: ["Willie Nelson", "Johnny Cash", "Waylon Jennings", "Merle Haggard"], answer: 1 },
    { question: "What does the term 'a cappella' mean?", options: ["With instrumental accompaniment", "Sung by a choir", "Without instrumental accompaniment", "A solo voice"], answer: 2 },
    { question: "Who is the lead singer of the band Guns N' Roses?", options: ["Slash", "Duff McKagan", "Axl Rose", "Izzy Stradlin"], answer: 2 },
    { question: "Which of these is a famous music festival held annually in the UK?", options: ["Coachella", "Lollapalooza", "Glastonbury", "Rock in Rio"], answer: 2 },
    { question: "What is the name of the lead singer of the band Linkin Park who passed away in 2017?", options: ["Mike Shinoda", "Rob Bourdon", "Brad Delson", "Chester Bennington"], answer: 3 },
    { question: "Which instrument did Dizzy Gillespie play?", options: ["Saxophone", "Trumpet", "Piano", "Trombone"], answer: 1 },
    { question: "What does the musical term 'forte' mean?", options: ["Soft", "Loud", "Fast", "Slow"], answer: 1 },
    { question: "Who is the lead singer of the band System of a Down?", options: ["Daron Malakian", "Shavo Odadjian", "John Dolmayan", "Serj Tankian"], answer: 3 },
    { question: "Which city is famously associated with the 'grunge' music scene of the early 1990s?", options: ["Los Angeles", "New York", "Seattle", "Chicago"], answer: 2 },
    { question: "What is the name of the lead singer of the band The Police?", options: ["Andy Summers", "Stewart Copeland", "Sting", "Henry Padovani"], answer: 2 },
    { question: "Which composer wrote 'The Four Seasons'?", options: ["Bach", "Handel", "Vivaldi", "Corelli"], answer: 2 },
    { question: "What does the term 'ritardando' mean in music?", options: ["Gradually getting faster", "Gradually getting slower", "A return to the original tempo", "A sudden stop"], answer: 1 },
    { question: "Who is the lead singer of the band Bon Jovi?", options: ["Richie Sambora", "David Bryan", "Tico Torres", "Jon Bon Jovi"], answer: 3 },
    { question: "Which artist's real name is Stefani Joanne Angelina Germanotta?", options: ["Katy Perry", "Lana Del Rey", "Lady Gaga", "Pink"], answer: 2 },
    { question: "What is a 'fugue'?", options: ["A type of song with a repeating chorus", "A contrapuntal compositional technique in two or more voices", "A slow, sad piece of music", "A dance in triple time"], answer: 1 },
    { question: "Who is the lead singer of the band Aerosmith?", options: ["Joe Perry", "Tom Hamilton", "Brad Whitford", "Steven Tyler"], answer: 3 },
    { question: "Which instrument is Yo-Yo Ma famous for playing?", options: ["Violin", "Cello", "Viola", "Double bass"], answer: 1 },
    { question: "What does the musical term 'piano' mean?", options: ["Loud", "Soft", "Medium", "Fast"], answer: 1 },
    { question: "Who is the lead singer of the band The Cranberries?", options: ["Noel Hogan", "Mike Hogan", "Fergal Lawler", "Dolores O'Riordan"], answer: 3 },
    { question: "Which rock opera was composed by Andrew Lloyd Webber and Tim Rice?", options: ["Tommy", "The Wall", "Jesus Christ Superstar", "Hair"], answer: 2 },
    { question: "What is the name of the lead singer of the band Metallica?", options: ["Lars Ulrich", "Kirk Hammett", "Robert Trujillo", "James Hetfield"], answer: 3 },
    { question: "Which of these instruments belongs to the woodwind family?", options: ["Trumpet", "Trombone", "Clarinet", "Violin"], answer: 2 },
    { question: "What does the term 'vibrato' refer to in music?", options: ["A rapid, slight variation in pitch", "Playing the notes smoothly connected", "A strong, forceful attack", "The end of a musical piece"], answer: 0 },
    { question: "Who is the lead singer of the band Iron Maiden?", options: ["Steve Harris", "Dave Murray", "Adrian Smith", "Bruce Dickinson"], answer: 3 },
    { question: "What is the name of the artist who had a hit with the song 'American Pie'?", options: ["Bob Dylan", "Don McLean", "James Taylor", "Paul Simon"], answer: 1 },
    { question: "What is a 'sonata'?", options: ["A composition for a solo instrument, often with a piano accompaniment", "A large-scale work for orchestra and choir", "A piece of music for a ballet", "An introductory piece for an opera"], answer: 0 },
    { question: "Who is the lead singer of the band Mumford & Sons?", options: ["Ben Lovett", "Winston Marshall", "Ted Dwane", "Marcus Mumford"], answer: 3 },
    { question: "Which city is home to the famous Vienna Boys' Choir?", options: ["Salzburg", "Vienna", "Innsbruck", "Graz"], answer: 1 },
    { question: "What does the musical term 'allegro' mean?", options: ["Slow", "Fast, quick, and bright", "At a walking pace", "Very slow"], answer: 1 },
    { question: "Who is the lead singer of the band R.E.M.?", options: ["Peter Buck", "Mike Mills", "Bill Berry", "Michael Stipe"], answer: 3 },
    { question: "Which composer's fifth symphony is known for its 'fate' motif?", options: ["Mozart", "Haydn", "Beethoven", "Schubert"], answer: 2 },
    { question: "What is a 'aria'?", options: ["A song for a solo voice in an opera", "A dance for a group of people", "An instrumental introduction", "A concluding piece"], answer: 0 },
    { question: "Who is the lead singer of the band The Strokes?", options: ["Nick Valensi", "Albert Hammond Jr.", "Nikolai Fraiture", "Julian Casablancas"], answer: 3 },
    { question: "Which music genre originated in the African-American communities of New Orleans, Louisiana?", options: ["Blues", "Gospel", "Jazz", "Soul"], answer: 2 },
    { question: "What does the term 'arpeggio' mean?", options: ["Playing the notes of a chord in succession", "Playing a chord with all notes at the same time", "A sliding between two notes", "A quiet, gentle passage"], answer: 0 },
    { question: "Who is the lead singer of the band The Black Keys?", options: ["Patrick Carney", "Dan Auerbach", "Richard Swift", "Leon Michels"], answer: 1 },
    { question: "Which composer is known for his work on the soundtracks of films like 'Star Wars' and 'Jaws'?", options: ["Hans Zimmer", "John Williams", "Howard Shore", "James Horner"], answer: 1 },
    { question: "What is the term for the set of five horizontal lines and four spaces that each represent a different musical pitch?", options: ["Scale", "Chord", "Staff", "Clef"], answer: 2 },
    { question: "Who is the lead singer of the band The White Stripes?", options: ["Meg White", "Jack White", "Olivia Jean", "Dean Fertita"], answer: 1 },
    { question: "Which musical instrument is often called the 'fiddle' in folk music?", options: ["Viola", "Cello", "Violin", "Double bass"], answer: 2 },
    { question: "What does the term 'legato' mean?", options: ["Short and detached", "In a smooth, flowing manner", "Loud and accented", "With a gradual increase in speed"], answer: 1 },
    { question: "Who is the lead singer of the band Arcade Fire?", options: ["Régine Chassagne", "Win Butler", "Richard Reed Parry", "Tim Kingsbury"], answer: 1 },
    { question: "Which band is not part of the 'big four' of thrash metal?", options: ["Metallica", "Slayer", "Megadeth", "Pantera"], answer: 3 },
    { question: "What is the name of the Japanese percussion instrument, a large drum?", options: ["Koto", "Shamisen", "Taiko", "Shakuhachi"], answer: 2 },
    { question: "Who is the lead singer of the band Vampire Weekend?", options: ["Chris Baio", "Chris Tomson", "Rostam Batmanglij", "Ezra Koenig"], answer: 3 },
    { question: "Which famous classical piece is often played at weddings?", options: ["'Canon in D' by Pachelbel", "'Ode to Joy' by Beethoven", "'The Blue Danube' by Strauss", "'Eine kleine Nachtmusik' by Mozart"], answer: 0 },
    { question: "What is the term for a musical ensemble of three players?", options: ["Duet", "Trio", "Quartet", "Quintet"], answer: 1 },
    { question: "Who is the lead singer of the band The Doors?", options: ["Ray Manzarek", "Robby Krieger", "John Densmore", "Jim Morrison"], answer: 3 },
    { question: "Which instrument did John Coltrane primarily play?", options: ["Trumpet", "Saxophone", "Piano", "Drums"], answer: 1 },
    { question: "What is the name for the speed at which a piece of music is played?", options: ["Rhythm", "Tempo", "Meter", "Dynamics"], answer: 1 },
    { question: "Who is the lead singer of the band The Smashing Pumpkins?", options: ["James Iha", "Jimmy Chamberlin", "D'arcy Wretzky", "Billy Corgan"], answer: 3 },
    { question: "Which of these is a traditional Irish frame drum?", options: ["Bodhrán", "Djembe", "Tabla", "Conga"], answer: 0 },
    { question: "What is the term for the structure of a piece of music?", options: ["Form", "Texture", "Harmony", "Melody"], answer: 0 },
    { question: "Who is the lead singer of the band Soundgarden?", options: ["Kim Thayil", "Matt Cameron", "Ben Shepherd", "Chris Cornell"], answer: 3 },
    { question: "Which famous musical features the song 'Defying Gravity'?", options: ["Rent", "Wicked", "The Phantom of the Opera", "Les Misérables"], answer: 1 },
    { question: "What is the term for the combination of simultaneously sounded musical notes to produce chords and chord progressions?", options: ["Melody", "Harmony", "Rhythm", "Timbre"], answer: 1 },
    { question: "Who is the lead singer of the band The Who?", options: ["Pete Townshend", "John Entwistle", "Keith Moon", "Roger Daltrey"], answer: 3 },
    { question: "What is the name of the Brazilian dance and musical genre that is a symbol of Brazil and its carnival?", options: ["Samba", "Tango", "Salsa", "Flamenco"], answer: 0 },
    { question: "What is the term for a sign placed on a staff to indicate the pitch of the notes?", options: ["Clef", "Key signature", "Time signature", "Accent"], answer: 0 },
    { question: "Who is the lead singer of the band Depeche Mode?", options: ["Martin Gore", "Andy Fletcher", "Alan Wilder", "Dave Gahan"], answer: 3 },
    { question: "Which of these is a single-reed woodwind instrument?", options: ["Flute", "Oboe", "Clarinet", "Bassoon"], answer: 2 },
    { question: "What is the term for a succession of musical notes forming a distinct unit?", options: ["Chord", "Phrase", "Riff", "Hook"], answer: 1 },
    { question: "Who is the lead singer of the band Alice in Chains?", options: ["Jerry Cantrell", "Sean Kinney", "Mike Inez", "Layne Staley"], answer: 3 },
    { question: "What is the name of the traditional folk music of the Appalachian Mountains in the eastern United States?", options: ["Bluegrass", "Country", "Blues", "Gospel"], answer: 0 },
    { question: "What is the term for a person who writes music?", options: ["Lyricist", "Arranger", "Composer", "Conductor"], answer: 2 },
];
const storageKey = "usedMusicIndices";

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