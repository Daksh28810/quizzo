const QUESTIONS_PER_ROUND = 15;
let timeLeft = 120;
const timerDisplay = document.getElementById('timer');
const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.innerHTML = 'Time up!!';

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
    { question: "Which sport is known as the \"king of sports\"?", options: ["Football", "Cricket", "Tennis", "Basketball"], answer: 0 },
    { question: "Who is the founder of the modern Olympic Games?", options: ["Pierre de Coubertin", "Juan Antonio Samaranch", "Avery Brundage", "Jacques Rogge"], answer: 0 },
    { question: "Which of the following sports is played on ice?", options: ["Hockey", "Football", "Basketball", "Tennis"], answer: 0 },
    { question: "Who is the famous boxer known for his \"rope-a-dope\" strategy?", options: ["Muhammad Ali", "Joe Frazier", "George Foreman", "Mike Tyson"], answer: 0 },
    { question: "Which sport involves hitting a shuttlecock over a net?", options: ["Tennis", "Badminton", "Squash", "Racquetball"], answer: 1 },
    { question: "Who won the most FIFA World Cup titles?", options: ["Brazil", "Germany", "Italy", "Argentina"], answer: 0 },
    { question: "Which athlete has won the most Olympic gold medals?", options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Paavo Nurmi"], answer: 0 },
    { question: "What is the term for a score of 40-40 in tennis?", options: ["Deuce", "Advantage", "Break point", "Let"], answer: 0 },
    { question: "Which sport is known for its Grand Slam tournaments?", options: ["Golf", "Tennis", "Baseball", "Football"], answer: 1 },
    { question: "Who is the all-time leading scorer in the NBA?", options: ["Kareem Abdul-Jabbar", "LeBron James", "Michael Jordan", "Wilt Chamberlain"], answer: 0 },
    { question: "Which team has won the most Super Bowl titles?", options: ["New England Patriots", "Dallas Cowboys", "Pittsburgh Steelers", "Green Bay Packers"], answer: 0 },
    { question: "Who is the fastest man in the world, according to the 100m dash record?", options: ["Usain Bolt", "Asafa Powell", "Tyson Gay", "Yohan Blake"], answer: 0 },
    { question: "Which sport involves riding horses?", options: ["Polo", "Equestrian", "Horse racing", "All of the above"], answer: 3 },
    { question: "Who won the most Tour de France titles?", options: ["Lance Armstrong", "Bernard Hinault", "Jacques Anquetil", "Eddy Merckx"], answer: 1 },
    { question: "Which sport is played on a court with a hoop and a ball?", options: ["Basketball", "Football", "Tennis", "Volleyball"], answer: 0 },
    { question: "Who is the only tennis player to achieve a \"Golden Slam\"?", options: ["Rod Laver", "Margaret Court", "Steffi Graf", "Serena Williams"], answer: 2 },
    { question: "Which team has won the most UEFA Champions League titles?", options: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"], answer: 0 },
    { question: "Who is the all-time leading rusher in the NFL?", options: ["Emmitt Smith", "Walter Payton", "Gale Sayers", "Barry Sanders"], answer: 0 },
    { question: "Which sport involves throwing a discus?", options: ["Track and field", "Swimming", "Gymnastics", "Wrestling"], answer: 0 },
    { question: "Who won the most Formula 1 World Drivers' Championships?", options: ["Lewis Hamilton", "Michael Schumacher", "Juan Manuel Fangio", "Sebastian Vettel"], answer: 1 },
    { question: "Which team has won the most World Series titles in MLB?", options: ["New York Yankees", "St. Louis Cardinals", "Boston Red Sox", "Los Angeles Dodgers"], answer: 0 },
    { question: "Which sport involves hitting a ball into a pocket using a cue stick?", options: ["Pool", "Snooker", "Carom billiards", "Darts"], answer: 0 },
    { question: "Who won the most Grand Slam singles titles in men's tennis?", options: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"], answer: 0 },
    { question: "Which team has won the most NBA championships?", options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"], answer: 0 },
    { question: "Who is the all-time leading scorer in the NHL?", options: ["Wayne Gretzky", "Gordie Howe", "Alex Ovechkin", "Mario Lemieux"], answer: 0 },
    { question: "Which sport involves riding a board on water?", options: ["Surfing", "Skateboarding", "Snowboarding", "Wakeboarding"], answer: 0 },
    { question: "Who won the most MLB Cy Young Awards?", options: ["Roger Clemens", "Randy Johnson", "Greg Maddux", "Tom Seaver"], answer: 0 },
    { question: "Which team has won the most European Cup/UEFA Champions League titles?", options: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"], answer: 0 },
    { question: "Who is the all-time leading receiver in the NFL?", options: ["Jerry Rice", "Randy Moss", "Terrell Owens", "Cris Carter"], answer: 0 },
    { question: "Which sport involves throwing a javelin?", options: ["Track and field", "Swimming", "Gymnastics", "Wrestling"], answer: 0 },
    { question: "Who won the most Formula 1 Monaco Grand Prix titles?", options: ["Ayrton Senna", "Graham Hill", "Michael Schumacher", "Lewis Hamilton"], answer: 1 },
    { question: "Which team has won the most Six Nations Championship titles?", options: ["England", "Wales", "France", "Ireland"], answer: 0 },
    { question: "Who is the all-time leading scorer in La Liga?", options: ["Lionel Messi", "Cristiano Ronaldo", "Karim Benzema", "Telmo Zarra"], answer: 0 },
    { question: "Which sport involves hitting a ball over a net with hands?", options: ["Volleyball", "Basketball", "Football", "Tennis"], answer: 0 },
    { question: "Who won the most Super Bowl MVP awards?", options: ["Tom Brady", "Joe Montana", "Terry Bradshaw", "Peyton Manning"], answer: 0 },
    { question: "Which team has won the most Ashes series?", options: ["Australia", "England", "South Africa", "India"], answer: 0 },
    { question: "Who is the all-time leading wicket-taker in international cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Glenn McGrath"], answer: 0 },
    { question: "Which sport involves riding a bike on a track?", options: ["Cycling", "Running", "Swimming", "Triathlon"], answer: 0 },
    { question: "Who won the most Tour de France stages?", options: ["Eddy Merckx", "Bernard Hinault", "Mark Cavendish", "Peter Sagan"], answer: 2 },
    { question: "Which team has won the most Copa Libertadores titles?", options: ["Boca Juniors", "River Plate", "Santos FC", "Independiente"], answer: 0 },
    { question: "Who is the all-time leading scorer in the Premier League?", options: ["Alan Shearer", "Wayne Rooney", "Andy Cole", "Sergio Agüero"], answer: 0 },
    { question: "Which sport involves throwing a hammer?", options: ["Track and field", "Weightlifting", "Wrestling", "Boxing"], answer: 0 },
    { question: "Who is the fastest woman in the world, according to the 100m dash record?", options: ["Florence Griffith-Joyner", "Elaine Thompson-Herah", "Shelly-Ann Fraser-Pryce", "Carmelita Jeter"], answer: 0 },
    { question: "Which is the highest governing body of Hockey in the world?", options: ["International Hockey Federation", "World Hockey League", "Global Hockey Association", "Hockey World Organization"], answer: 0 },
    { question: "Total number of players playing on the pitch in a hockey match?", options: ["11", "18", "20", "22"], answer: 3 },
    { question: "The distance between the penalty spot and the goal in hockey is?", options: ["5 Yards", "6 Yards", "7 Yards", "8 Yards"], answer: 2 },
    { question: "The limit on the number of substitutions per game in hockey is?", options: ["3", "5", "7", "No Limit"], answer: 3 },
    { question: "Which country won the first Cricket World Cup in 1975?", options: ["Australia", "England", "West Indies", "India"], answer: 2 },
    { question: "Who is the only athlete to have won Olympic gold medals in both the Summer and Winter Games?", options: ["Eddie Eagan", "Clara Hughes", "Eric Heiden", "Lauryn Williams"], answer: 0 },
    { question: "What is the maximum break possible in a single frame of snooker?", options: ["147", "155", "167", "180"], answer: 0 },
    { question: "In which year was the first Rugby World Cup held?", options: ["1983", "1987", "1991", "1995"], answer: 1 },
    { question: "Which country has won the most Olympic gold medals in hockey?", options: ["India", "Australia", "Netherlands", "Germany"], answer: 0 },
    { question: "How many players are there on the field for each team in a standard rugby union match?", options: ["11", "13", "15", "18"], answer: 2 },
    { question: "In which sport is the Davis Cup contested?", options: ["Badminton", "Tennis", "Table Tennis", "Squash"], answer: 1 },
    { question: "Who holds the record for the fastest serve in men's tennis?", options: ["Andy Roddick", "Ivo Karlović", "Sam Groth", "John Isner"], answer: 2 },
    { question: "In which year was the first FIFA Women's World Cup held?", options: ["1987", "1991", "1995", "1999"], answer: 1 },
    { question: "Who is known as \"The Black Mamba\" in basketball?", options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Kevin Durant"], answer: 1 },
    { question: "Who was the first cricketer to score 10,000 runs in Test cricket?", options: ["Sunil Gavaskar", "Brian Lara", "Sachin Tendulkar", "Ricky Ponting"], answer: 0 },
    { question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Argentina", "Italy"], answer: 1 },
    { question: "What is the duration of a standard professional boxing match?", options: ["10 rounds of 2 minutes", "12 rounds of 3 minutes", "15 rounds of 3 minutes", "8 rounds of 3 minutes"], answer: 1 },
    { question: "In which sport is the \"Ashes\" series contested?", options: ["Rugby", "Cricket", "Tennis", "Golf"], answer: 1 },
    { question: "Who was the first gymnast to score a perfect 10 in the Olympics?", options: ["Nadia Comăneci", "Olga Korbut", "Simone Biles", "Larisa Latynina"], answer: 0 },
    { question: "Which country has won the most Olympic medals in basketball?", options: ["USA", "Soviet Union", "Spain", "Argentina"], answer: 0 },
    { question: "What is the term used when a golfer completes a hole in three strokes under par?", options: ["Eagle", "Albatross", "Birdie", "Bogey"], answer: 1 },
    { question: "Who is the all-time leading scorer in NBA history?", options: ["Kareem Abdul-Jabbar", "LeBron James", "Michael Jordan", "Karl Malone"], answer: 0 },
    { question: "Which country won the first Winter Olympics ice hockey gold medal?", options: ["Canada", "USA", "Soviet Union", "Sweden"], answer: 0 },
    { question: "What is the name of the trophy awarded to the winner of the UEFA Champions League?", options: ["Jules Rimet Trophy", "Henri Delaunay Trophy", "FA Cup", "Europa League Trophy"], answer: 1 },
    { question: "Who holds the record for the most home runs in a single MLB season?", options: ["Babe Ruth", "Barry Bonds", "Mark McGwire", "Sammy Sosa"], answer: 1 },
    { question: "In which year was the first Tour de France held?", options: ["1900", "1903", "1910", "1920"], answer: 1 },
    { question: "Which athlete is famous for the \"Fosbury Flop\" technique in high jump?", options: ["Carl Lewis", "Dick Fosbury", "Jesse Owens", "Usain Bolt"], answer: 1 },
    { question: "What is the maximum number of players on a volleyball team on the court at one time?", options: ["5", "6", "7", "8"], answer: 1 },
    { question: "Who is the all-time leading scorer in FIFA World Cups?", options: ["Ronaldo Nazário", "Miroslav Klose", "Just Fontaine", "Pelé"], answer: 1 },
    { question: "Which country has won the most Rugby World Cups?", options: ["New Zealand", "South Africa", "Australia", "England"], answer: 0 },
    { question: "Who holds the record for the most Grand Slam singles titles in women's tennis?", options: ["Serena Williams", "Steffi Graf", "Margaret Court", "Martina Navratilova"], answer: 2 },
    { question: "Which country hosted the 2019 Cricket World Cup?", options: ["Australia", "England", "India", "South Africa"], answer: 1 },
    { question: "Who was the first woman to win an Olympic gold medal in boxing?", options: ["Nicola Adams", "Claressa Shields", "Mary Kom", "Katie Taylor"], answer: 0 },
    { question: "Who holds the record for the most Formula 1 World Championships?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Juan Manuel Fangio"], answer: 1 },
    { question: "Which country has won the most Six Nations Rugby Championship titles?", options: ["England", "Wales", "France", "Ireland"], answer: 0 },
    { question: "Who is the all-time leading scorer in La Liga?", options: ["Lionel Messi", "Cristiano Ronaldo", "Karim Benzema", "Telmo Zarra"], answer: 0 },
    { question: "Who won the most Super Bowl MVP awards?", options: ["Tom Brady", "Joe Montana", "Terry Bradshaw", "Peyton Manning"], answer: 0 },
    { question: "Which team has won the most Ashes cricket series?", options: ["Australia", "England", "South Africa", "India"], answer: 0 },
    { question: "Who is the all-time leading wicket-taker in international cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Glenn McGrath"], answer: 0 },
    { question: "Who won the most Tour de France stages?", options: ["Eddy Merckx", "Bernard Hinault", "Mark Cavendish", "Peter Sagan"], answer: 2 },
    { question: "Which team has won the most Copa Libertadores titles?", options: ["Boca Juniors", "River Plate", "Santos FC", "Independiente"], answer: 0 },
    { question: "Who is the all-time leading scorer in the Premier League?", options: ["Alan Shearer", "Wayne Rooney", "Andy Cole", "Sergio Agüero"], answer: 0 },
    { question: "Who is the fastest woman in the world, according to the 100m dash record?", options: ["Florence Griffith-Joyner", "Elaine Thompson-Herah", "Shelly-Ann Fraser-Pryce", "Carmelita Jeter"], answer: 0 },
    { question: "Which is the highest governing body of Hockey in the world?", options: ["International Hockey Federation", "World Hockey League", "Global Hockey Association", "Hockey World Organization"], answer: 0 },
    { question: "What is the distance between the penalty spot and the goal in hockey?", options: ["5 Yards", "6 Yards", "7 Yards", "8 Yards"], answer: 2 },
    { question: "Which sport involves throwing a hammer?", options: ["Track and field", "Weightlifting", "Wrestling", "Boxing"], answer: 0 },
    { question: "Who won the most Formula 1 Monaco Grand Prix titles?", options: ["Ayrton Senna", "Graham Hill", "Michael Schumacher", "Lewis Hamilton"], answer: 1 },
    { question: "Who is the all-time leading receiver in the NFL?", options: ["Jerry Rice", "Randy Moss", "Terrell Owens", "Cris Carter"], answer: 0 },
    { question: "What is the term for scoring three goals in a single soccer match?", options: ["Hat-trick", "Triple play", "Grand slam", "Three-peat"], answer: 0 },
    { question: "Who was the first athlete to run a sub-4-minute mile?", options: ["Roger Bannister", "Sebastian Coe", "Hicham El Guerrouj", "Steve Prefontaine"], answer: 0 },
    { question: "Which country won the first Olympic gold medal in basketball?", options: ["USA", "Canada", "Soviet Union", "Argentina"], answer: 0 },
    { question: "Who is the youngest player to win a Grand Slam singles title in tennis?", options: ["Martina Hingis", "Serena Williams", "Monica Seles", "Boris Becker"], answer: 0 },
    { question: "What is the length of an Olympic-size swimming pool?", options: ["25 meters", "50 meters", "100 meters", "200 meters"], answer: 1 },
    { question: "Which sport uses the term \"scrum\"?", options: ["Rugby", "Soccer", "American Football", "Ice Hockey"], answer: 0 },
    { question: "Who is the all-time leading scorer in the NHL?", options: ["Wayne Gretzky", "Gordie Howe", "Mario Lemieux", "Alex Ovechkin"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in gymnastics?", options: ["USA", "Russia/Soviet Union", "China", "Romania"], answer: 1 },
    { question: "Who is the only athlete to win the Tour de France, Giro d'Italia, and Vuelta a España in the same year?", options: ["Eddy Merckx", "Bernard Hinault", "Fausto Coppi", "No one has achieved this feat"], answer: 3 },
    { question: "Who was the first cricketer to score a triple century in Test cricket?", options: ["Don Bradman", "Wally Hammond", "Andy Sandham", "Brian Lara"], answer: 2 },
    { question: "Which country won the first Rugby World Cup in 1987?", options: ["Australia", "New Zealand", "South Africa", "England"], answer: 1 },
    { question: "Who is the only athlete to win the Olympic 100m, 200m, and 4x100m relay gold medals in three consecutive Olympics?", options: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Michael Johnson"], answer: 0 },
    { question: "In which year was the first official World Chess Championship held?", options: ["1875", "1886", "1890", "1900"], answer: 1 },
    { question: "Which tennis player won the calendar-year Grand Slam twice in singles?", options: ["Rod Laver", "Roger Federer", "Novak Djokovic", "Rafael Nadal"], answer: 0 },
    { question: "Who holds the record for the most goals in a single NHL season?", options: ["Wayne Gretzky", "Mario Lemieux", "Brett Hull", "Alexander Ovechkin"], answer: 0 },
    { question: "What is the maximum number of points a player can score in a single frame of 10-pin bowling?", options: ["200", "250", "300", "350"], answer: 2 },
    { question: "Who was the first woman to run a sub-4:30 mile?", options: ["Mary Slaney", "Svetlana Masterkova", "Faith Kipyegon", "Sifan Hassan"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in fencing?", options: ["Italy", "France", "Hungary", "Russia"], answer: 2 },
    { question: "Who is the youngest male player to win a Grand Slam singles title in tennis?", options: ["Boris Becker", "Rafael Nadal", "Michael Chang", "Pete Sampras"], answer: 0 },
    { question: "Which football club has won the most UEFA Europa League/UEFA Cup titles?", options: ["Sevilla FC", "Inter Milan", "Liverpool", "Juventus"], answer: 0 },
    { question: "Who was the first boxer to defeat Muhammad Ali professionally?", options: ["Joe Frazier", "Ken Norton", "Leon Spinks", "Larry Holmes"], answer: 0 },
    { question: "In which year was the first official NBA game played?", options: ["1946", "1949", "1950", "1955"], answer: 0 },
    { question: "Who holds the record for the most career goals in international soccer?", options: ["Cristiano Ronaldo", "Ali Daei", "Pelé", "Lionel Messi"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in weightlifting?", options: ["China", "Russia", "Iran", "Bulgaria"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 100m sprint and the decathlon?", options: ["Jim Thorpe", "Usain Bolt", "Carl Lewis", "Jesse Owens"], answer: 0 },
    { question: "Which golfer holds the record for the most major championships won?", options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Ben Hogan"], answer: 1 },
    { question: "Who was the first cricketer to score a century in all three formats of international cricket?", options: ["Virat Kohli", "Chris Gayle", "Suresh Raina", "Brendon McCullum"], answer: 1 },
    { question: "In Formula 1, which driver has the most consecutive World Championship titles?", options: ["Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel", "Juan Manuel Fangio"], answer: 2 },
    { question: "Which country has won the most Olympic gold medals in basketball?", options: ["USA", "Soviet Union", "Spain", "Argentina"], answer: 0 },
    { question: "Who is the only athlete to win the Tour de France five times consecutively?", options: ["Miguel Indurain", "Lance Armstrong", "Eddy Merckx", "Bernard Hinault"], answer: 0 },
    { question: "What is the length of a marathon race?", options: ["40 km", "42.195 km", "45 km", "50 km"], answer: 1 },
    { question: "Who holds the record for the most career goals in La Liga?", options: ["Lionel Messi", "Cristiano Ronaldo", "Telmo Zarra", "Hugo Sánchez"], answer: 0 },
    { question: "Which country won the first FIFA Women's World Cup in 1991?", options: ["USA", "Norway", "China", "Germany"], answer: 0 },
    { question: "Who was the first player to score 100 goals in the English Premier League?", options: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Sergio Agüero"], answer: 0 },
    { question: "Which NFL quarterback has the most career passing yards?", options: ["Tom Brady", "Drew Brees", "Peyton Manning", "Brett Favre"], answer: 1 },
    { question: "Who is the only athlete to win the Olympic gold medal in both the 100m and 400m hurdles?", options: ["Edwin Moses", "Jackie Joyner-Kersee", "None", "Felix Sanchez"], answer: 2 },
    { question: "In which year was the first modern Winter Olympics held?", options: ["1920", "1924", "1928", "1932"], answer: 1 },
    { question: "Which country has won the most Rugby League World Cups?", options: ["Australia", "England", "New Zealand", "France"], answer: 0 },
    { question: "Who holds the record for the most career points in NBA history?", options: ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant"], answer: 0 },
    { question: "Which country won the first Olympic gold medal in ice hockey?", options: ["Canada", "USA", "Soviet Union", "Sweden"], answer: 0 },
    { question: "Who is the only athlete to have won an Olympic gold medal in the 100m sprint and the long jump?", options: ["Carl Lewis", "Jesse Owens", "Usain Bolt", "Bob Beamon"], answer: 0 },
    { question: "Which NFL team has the most Super Bowl appearances?", options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"], answer: 0 },
    { question: "Who was the first female athlete to run a marathon in under 2 hours and 20 minutes?", options: ["Paula Radcliffe", "Joan Benoit", "Grete Waitz", "Mary Keitany"], answer: 0 },
    { question: "Which country has won the most Olympic medals in gymnastics?", options: ["Russia/Soviet Union", "USA", "China", "Romania"], answer: 0 },
    { question: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?", options: ["Just Fontaine", "Miroslav Klose", "Ronaldo Nazário", "Gerd Müller"], answer: 0 },
    { question: "Which country has won the most Davis Cup titles in tennis?", options: ["USA", "Australia", "France", "Spain"], answer: 0 },
    { question: "Who was the first player to win the NBA MVP award unanimously?", options: ["Stephen Curry", "LeBron James", "Michael Jordan", "Shaquille O'Neal"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in swimming?", options: ["USA", "Australia", "China", "Russia"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the Summer and Winter Olympics in the same year?", options: ["Eddie Eagan", "None", "Clara Hughes", "Lauryn Williams"], answer: 1 },
    { question: "Which country has won the most FIFA U-20 World Cup titles?", options: ["Argentina", "Brazil", "Portugal", "Germany"], answer: 0 },
    { question: "Who holds the record for the most career goals in the NHL playoffs?", options: ["Wayne Gretzky", "Mario Lemieux", "Mark Messier", "Jaromír Jágr"], answer: 0 },
    { question: "Which athlete won the first ever Olympic gold medal in the 100m sprint?", options: ["Thomas Burke", "Jesse Owens", "Usain Bolt", "Harold Abrahams"], answer: 0 },
    { question: "Who was the first cricketer to take 10 wickets in a single Test innings?", options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Sydney Barnes"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in basketball?", options: ["USA", "Soviet Union", "Spain", "Argentina"], answer: 0 },
    { question: "Who is the only athlete to win the Tour de France and the Giro d’Italia in the same year twice?", options: ["Eddy Merckx", "Fausto Coppi", "Miguel Indurain", "Bernard Hinault"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in boxing?", options: ["USA", "Cuba", "Russia", "Kazakhstan"], answer: 0 },
    { question: "Who was the first player to score 50 goals in an NHL season?", options: ["Maurice Richard", "Wayne Gretzky", "Bobby Hull", "Mike Bossy"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in track and field?", options: ["USA", "Jamaica", "Kenya", "Russia"], answer: 0 },
    { question: "Who holds the record for the most career wins in Formula 1?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Alain Prost"], answer: 0 },
    { question: "Which country won the first Cricket World Cup held in 1975?", options: ["England", "West Indies", "Australia", "India"], answer: 1 },
    { question: "Who was the first player to score 100 international centuries in cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Kumar Sangakkara"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 100m and 200m sprints at three consecutive Olympics?", options: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Michael Johnson"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in swimming relays?", options: ["USA", "Australia", "China", "Russia"], answer: 0 },
    { question: "Who holds the record for the most goals scored in a single NHL playoff season?", options: ["Wayne Gretzky", "Reggie Leach", "Mario Lemieux", "Jari Kurri"], answer: 1 },
    { question: "Which country has won the most Olympic gold medals in wrestling?", options: ["Russia/Soviet Union", "USA", "Iran", "Turkey"], answer: 0 },
    { question: "Who was the first female gymnast to win five Olympic gold medals in a single Games?", options: ["Larisa Latynina", "Nadia Comăneci", "Simone Biles", "Olga Korbut"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in judo?", options: ["Japan", "France", "South Korea", "Russia"], answer: 0 },
    { question: "Who holds the record for the most goals in a single UEFA Champions League season?", options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"], answer: 0 },
    { question: "Which country won the first FIFA Futsal World Cup?", options: ["Brazil", "Spain", "Italy", "Argentina"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 400m and 800m races?", options: ["Alberto Juantorena", "Michael Johnson", "David Rudisha", "Sebastian Coe"], answer: 0 },
    { question: "What is the maximum number of players allowed on a rugby league team on the field at one time?", options: ["11", "13", "15", "18"], answer: 1 },
    { question: "Who was the first tennis player to win 20 Grand Slam singles titles?", options: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Margaret Court"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in archery?", options: ["South Korea", "USA", "Italy", "China"], answer: 0 },
    { question: "Who holds the record for the most consecutive wins in professional boxing?", options: ["Julio César Chávez", "Floyd Mayweather Jr.", "Joe Louis", "Ricardo López"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in rowing?", options: ["Great Britain", "Germany", "USA", "Australia"], answer: 0 },
    { question: "Who was the first player to score 200 goals in the English Premier League?", options: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Sergio Agüero"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in taekwondo?", options: ["South Korea", "USA", "China", "Iran"], answer: 0 },
    { question: "Who holds the record for the most goals scored in a single NHL season by a rookie?", options: ["Teemu Selänne", "Wayne Gretzky", "Mike Bossy", "Alexander Ovechkin"], answer: 0 },
    { question: "Which country won the first Olympic gold medal in basketball for women?", options: ["USA", "Soviet Union", "Australia", "Brazil"], answer: 1 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 200m and 400m hurdles?", options: ["None", "Edwin Moses", "Angelo Taylor", "Kerron Clement"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in cycling?", options: ["France", "Italy", "Great Britain", "Netherlands"], answer: 2 },
    { question: "Who holds the record for the most goals scored in a single FIFA Women's World Cup?", options: ["Marta", "Michelle Akers", "Birgit Prinz", "Abby Wambach"], answer: 1 },
    { question: "Which country has won the most Olympic gold medals in badminton?", options: ["China", "Indonesia", "South Korea", "Denmark"], answer: 0 },
    { question: "Who was the first player to win the NBA Finals MVP award four times?", options: ["Michael Jordan", "LeBron James", "Magic Johnson", "Tim Duncan"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in skiing?", options: ["Norway", "Sweden", "Austria", "Switzerland"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 1500m and 5000m races?", options: ["Hicham El Guerrouj", "Mo Farah", "Paavo Nurmi", "Sebastian Coe"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in fencing?", options: ["Italy", "France", "Hungary", "Russia"], answer: 2 },
    { question: "Who holds the record for the most career goals in international women's soccer?", options: ["Abby Wambach", "Mia Hamm", "Christine Sinclair", "Birgit Prinz"], answer: 2 },
    { question: "Which country has won the most Olympic gold medals in equestrian events?", options: ["Germany", "USA", "Great Britain", "Netherlands"], answer: 0 },
    { question: "Who was the first player to score 10,000 runs in One Day International cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Virat Kohli"], answer: 0 },
    { question: "Who holds the record for the most points scored in a single NBA game?", options: ["Wilt Chamberlain", "Kobe Bryant", "Michael Jordan", "Elgin Baylor"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in volleyball?", options: ["Brazil", "USSR/Russia", "USA", "Cuba"], answer: 1 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 800m and 1500m races?", options: ["Sebastian Coe", "Steve Ovett", "Kelly Holmes", "None"], answer: 2 },
    { question: "Which country has won the most Olympic gold medals in basketball for women?", options: ["USA", "Soviet Union", "Australia", "Brazil"], answer: 0 },
    { question: "Who was the first player to win the FIFA Ballon d’Or three times consecutively?", options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"], answer: 2 },
    { question: "Which country has won the most Olympic gold medals in rowing?", options: ["Great Britain", "Germany", "USA", "Australia"], answer: 0 },
    { question: "Who holds the record for the most goals scored in a single NHL playoff game?", options: ["Reggie Leach", "Maurice Richard", "Wayne Gretzky", "Mario Lemieux"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in judo?", options: ["Japan", "France", "South Korea", "Russia"], answer: 0 },
    { question: "Who was the first player to score 500 goals in the NHL?", options: ["Maurice Richard", "Gordie Howe", "Bobby Hull", "Phil Esposito"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in gymnastics?", options: ["Russia/Soviet Union", "USA", "China", "Romania"], answer: 0 },
    { question: "Who holds the record for the most career goals in international men's soccer?", options: ["Cristiano Ronaldo", "Ali Daei", "Pelé", "Lionel Messi"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in swimming relays?", options: ["USA", "Australia", "China", "Russia"], answer: 0 },
    { question: "Who was the first player to win the NBA MVP award unanimously?", options: ["Stephen Curry", "LeBron James", "Michael Jordan", "Shaquille O'Neal"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in track and field?", options: ["USA", "Jamaica", "Kenya", "Russia"], answer: 0 },
    { question: "Who holds the record for the most career wins in Formula 1?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Alain Prost"], answer: 0 },
    { question: "Which country won the first Cricket World Cup held in 1975?", options: ["England", "West Indies", "Australia", "India"], answer: 1 },
    { question: "Who was the first player to score 100 international centuries in cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Kumar Sangakkara"], answer: 0 },
    { question: "Who is the only athlete to win Olympic gold medals in both the 100m and 200m sprints at three consecutive Olympics?", options: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Michael Johnson"], answer: 0 },
    { question: "Which country has won the most Olympic gold medals in badminton?", options: ["China", "Indonesia", "South Korea", "Denmark"], answer: 0 }
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
function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'flex';
    document.getElementById('score').textContent = `Your Score: ${score} / ${QUESTIONS_PER_ROUND}`;
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
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = true; // Lock all buttons after selection
        if (idx === selectedIdx) btn.classList.add('selected');
        // Optional: show correct/incorrect feedback
        if (idx === q.answer) btn.classList.add('correct');
        if (idx === selectedIdx && idx !== q.answer) btn.classList.add('incorrect');
    });
    if (selectedIdx === q.answer) {
        score++;
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
function loadUsedIndices() {
    const data = localStorage.getItem(storageKey);
    if (data) usedIndices = JSON.parse(data);
    else usedIndices = [];
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
