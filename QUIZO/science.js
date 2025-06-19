const QUESTIONS_PER_ROUND = 15;
let timeLeft = 120; // 1 minute in seconds
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
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
    { question: "What is H2O?", options: ["Oxygen", "Hydrogen", "Water", "Helium"], answer: 2 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], answer: 0 },
    { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], answer: 2 },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"], answer: 0 },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Silver"], answer: 1 },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: 1 },
    { question: "What is the chemical symbol for iron?", options: ["Fe", "Ir", "K", "Na"], answer: 0 },
    { question: "What is the smallest planet in our solar system?", options: ["Earth", "Mars", "Mercury", "Venus"], answer: 2 },
    { question: "What is the name of our galaxy?", options: ["Andromeda", "Triangulum", "Milky Way", "Whirlpool"], answer: 2 },
    { question: "What is the chemical symbol for silver?", options: ["Ag", "Au", "Si", "Mg"], answer: 0 },
    { question: "What is the boiling point of water in Celsius?", options: ["0", "50", "100", "212"], answer: 2 },
    { question: "What is the main function of red blood cells?", options: ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"], answer: 1 },
    { question: "What is the atomic number of carbon?", options: ["4", "6", "8", "12"], answer: 1 },
    { question: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
    { question: "What is the name for a group of stars that form a pattern?", options: ["Galaxy", "Nebula", "Constellation", "Solar System"], answer: 2 },
    { question: "What is the chemical symbol for sodium?", options: ["Na", "So", "S", "K"], answer: 0 },
    { question: "What part of the human body controls balance?", options: ["Brain", "Heart", "Inner Ear", "Lungs"], answer: 2 },
    { question: "What is the value of Pi (π) to two decimal places?", options: ["3.14", "3.16", "3.17", "3.18"], answer: 0 },
    { question: "What is the largest moon of Saturn?", options: ["Europa", "Titan", "Ganymede", "Callisto"], answer: 1 },
    { question: "What is the process called when a liquid turns into a gas?", options: ["Melting", "Freezing", "Evaporation", "Condensation"], answer: 2 },
    { question: "What is the study of fossils called?", options: ["Geology", "Paleontology", "Archaeology", "Biology"], answer: 1 },
    { question: "What is the chemical symbol for potassium?", options: ["K", "P", "Po", "Pt"], answer: 0 },
    { question: "What is the function of the human skeleton?", options: ["To protect organs", "To provide support", "To enable movement", "All of the above"], answer: 3 },
    { question: "What is the unit of measurement for electric current?", options: ["Volt", "Watt", "Ohm", "Ampere"], answer: 3 },
    { question: "Which planet is known as the 'Morning Star' or 'Evening Star'?", options: ["Mars", "Venus", "Jupiter", "Mercury"], answer: 1 },
    { question: "What is the name of the force that pulls objects towards each other?", options: ["Friction", "Gravity", "Magnetism", "Tension"], answer: 1 },
    { question: "What is the chemical symbol for copper?", options: ["Co", "Cu", "Ca", "Cr"], answer: 1 },
    { question: "What is the function of the human brain?", options: ["To control movement", "To process information", "To regulate body functions", "All of the above"], answer: 3 },
    { question: "What is the name of the first artificial satellite launched into space?", options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Apollo 11"], answer: 1 },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Uranus"], answer: 1 },
    { question: "What is the name of the closest star to Earth?", options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"], answer: 1 },
    { question: "What is the chemical symbol for calcium?", options: ["Cl", "Ca", "C", "Co"], answer: 1 },
    { question: "What is the main function of the kidneys?", options: ["To pump blood", "To filter waste", "To digest food", "To regulate breathing"], answer: 1 },
    { question: "What is the name for the change in the inherited characteristics of biological populations over successive generations?", options: ["Mutation", "Evolution", "Adaptation", "Natural Selection"], answer: 1 },
    { question: "What is the name of the Earth's natural satellite?", options: ["Venus", "Mars", "Moon", "Jupiter"], answer: 2 },
    { question: "What is the name of the process by which plants make their own food?", options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"], answer: 1 },
    { question: "What is the chemical symbol for zinc?", options: ["Zn", "Zi", "Ze", "Zr"], answer: 0 },
    { question: "What is the name of the outer layer of the Earth?", options: ["Mantle", "Core", "Crust", "Atmosphere"], answer: 2 },
    { question: "What is the name of the disease caused by a deficiency of vitamin C?", options: ["Rickets", "Scurvy", "Beriberi", "Pellagra"], answer: 1 },
    { question: "What is the name of the force that opposes motion between two surfaces in contact?", options: ["Gravity", "Friction", "Magnetism", "Tension"], answer: 1 },
    { question: "What is the chemical symbol for lead?", options: ["Le", "Ld", "Pb", "Pd"], answer: 2 },
    { question: "What is the name of the smallest bone in the human body?", options: ["Femur", "Tibia", "Stapes", "Humerus"], answer: 2 },
    { question: "What is the name for a substance that speeds up a chemical reaction without being consumed in the reaction?", options: ["Inhibitor", "Catalyst", "Reactant", "Product"], answer: 1 },
    { question: "What is the name of the instrument used to measure atmospheric pressure?", options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], answer: 1 },
    { question: "What is the chemical symbol for tin?", options: ["Ti", "Tn", "Sn", "St"], answer: 2 },
    { question: "What is the name of the energy stored in the nucleus of an atom?", options: ["Chemical energy", "Potential energy", "Kinetic energy", "Nuclear energy"], answer: 3 },
    { question: "What is the name of the thin layer of gas surrounding the Earth?", options: ["Crust", "Mantle", "Atmosphere", "Core"], answer: 2 },
    { question: "What is the study of earthquakes called?", options: ["Seismology", "Volcanology", "Geology", "Meteorology"], answer: 0 },
    { question: "What type of star is the Sun?", options: ["Red Giant", "White Dwarf", "Yellow Dwarf", "Neutron Star"], answer: 2 },
    { question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
    { question: "What is the process of a solid turning directly into a gas called?", options: ["Evaporation", "Condensation", "Sublimation", "Deposition"], answer: 2 },
    { question: "Which part of the plant is responsible for absorbing water and nutrients from the soil?", options: ["Leaf", "Stem", "Root", "Flower"], answer: 2 },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: 0 },
    { question: "Which of these is a primary color of light?", options: ["Green", "Yellow", "Orange", "White"], answer: 0 },
    { question: "What is the center of an atom called?", options: ["Electron", "Proton", "Neutron", "Nucleus"], answer: 3 },
    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O"], answer: 3 },
    { question: "What is the name of the galaxy closest to the Milky Way?", options: ["Andromeda", "Triangulum", "Messier 87", "Sombrero"], answer: 0 },
    { question: "What is the hardest mineral on the Mohs scale of hardness?", options: ["Talc", "Quartz", "Diamond", "Corundum"], answer: 2 },
    { question: "What is the study of fungi called?", options: ["Botany", "Zoology", "Mycology", "Microbiology"], answer: 2 },
    { question: "What is the chemical symbol for mercury?", options: ["Hg", "Me", "Mc", "Hy"], answer: 0 },
    { question: "Which planet is known for its prominent rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 },
    { question: "What is the name of the process by which animals change their behavior in response to a stimulus?", options: ["Instinct", "Learning", "Adaptation", "Homeostasis"], answer: 1 },
    { question: "What is the unit of measurement for frequency?", options: ["Hertz", "Watt", "Joule", "Newton"], answer: 0 },
    { question: "What is the largest artery in the human body?", options: ["Femoral artery", "Carotid artery", "Aorta", "Pulmonary artery"], answer: 2 },
    { question: "What is the common name for the compound silicon dioxide?", options: ["Salt", "Sugar", "Sand", "Rust"], answer: 2 },
    { question: "Which part of the electromagnetic spectrum is visible to the human eye?", options: ["Infrared", "Ultraviolet", "Visible light", "X-rays"], answer: 2 },
    { question: "What is the process of cell division that results in two identical daughter cells?", options: ["Meiosis", "Mitosis", "Fertilization", "Budding"], answer: 1 },
    { question: "What is the chemical symbol for tungsten?", options: ["T", "Tu", "W", "Tg"], answer: 2 },
    { question: "Which scientist is credited with the theory of general relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], answer: 1 },
    { question: "What is the main component of natural gas?", options: ["Methane", "Ethane", "Propane", "Butane"], answer: 0 },
    { question: "What is the part of the flower that produces pollen?", options: ["Petal", "Sepal", "Pistil", "Stamen"], answer: 3 },
    { question: "What is the name of the scale used to measure the acidity or alkalinity of a substance?", options: ["Richter scale", "pH scale", "Kelvin scale", "Decibel scale"], answer: 1 },
    { question: "What is the study of insects called?", options: ["Entomology", "Ornithology", "Herpetology", "Ichthyology"], answer: 0 },
    { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Polar Desert"], answer: 3 },
    { question: "What is the chemical symbol for uranium?", options: ["U", "Un", "Ur", "Um"], answer: 0 },
    { question: "Which organ in the human body produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Spleen"], answer: 1 },
    { question: "What type of rock is formed from the cooling and solidification of magma or lava?", options: ["Sedimentary", "Metamorphic", "Igneous", "Fossiliferous"], answer: 2 },
    { question: "What is the name of the first element on the periodic table?", options: ["Helium", "Lithium", "Hydrogen", "Oxygen"], answer: 2 },
    { question: "What is the collective name for the group of planets closest to the Sun?", options: ["Gas Giants", "Ice Giants", "Terrestrial Planets", "Dwarf Planets"], answer: 2 },
    { question: "What is the process of breaking down food into smaller molecules that the body can absorb?", options: ["Respiration", "Digestion", "Circulation", "Excretion"], answer: 1 },
    { question: "What is the chemical symbol for platinum?", options: ["Pt", "Pl", "Pm", "Pa"], answer: 0 },
    { question: "Which law of motion states that for every action, there is an equal and opposite reaction?", options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"], answer: 2 },
    { question: "What is the study of birds called?", options: ["Ornithology", "Herpetology", "Ichthyology", "Mammalogy"], answer: 0 },
    { question: "What is the most common element in the Earth's crust?", options: ["Oxygen", "Silicon", "Aluminum", "Iron"], answer: 0 },
    { question: "What is the name of the spiral-shaped galaxy that contains our solar system?", options: ["Andromeda", "Triangulum", "Milky Way", "Whirlpool"], answer: 2 },
    { question: "What is the process of water vapor turning into liquid water called?", options: ["Evaporation", "Condensation", "Sublimation", "Precipitation"], answer: 1 },
    { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], answer: 2 },
    { question: "What is the chemical symbol for helium?", options: ["He", "H", "Hl", "Hm"], answer: 0 },
    { question: "What is the name of the theory that explains the origin of the universe?", options: ["Big Bang Theory", "Steady State Theory", "Pulsating Theory", "Inflationary Theory"], answer: 0 },
    { question: "What is the main function of the white blood cells?", options: ["Carry oxygen", "Fight infection", "Clot blood", "Transport nutrients"], answer: 1 },
    { question: "What is the name of the process by which a plant loses water through its leaves?", options: ["Photosynthesis", "Respiration", "Transpiration", "Guttation"], answer: 2 },
    { question: "What is the chemical formula for sulfuric acid?", options: ["H2SO4", "HCl", "HNO3", "H2CO3"], answer: 0 },
    { question: "What is the study of reptiles and amphibians called?", options: ["Herpetology", "Ichthyology", "Mammalogy", "Ornithology"], answer: 0 },
    { question: "What is the name of the imaginary line that divides the Earth into the Northern and Southern Hemispheres?", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"], answer: 1 },
    { question: "What is the chemical symbol for argon?", options: ["Ar", "Ag", "An", "A"], answer: 0 },
    { question: "What part of the brain is responsible for controlling voluntary movements?", options: ["Cerebellum", "Cerebrum", "Brainstem", "Medulla oblongata"], answer: 1 },
    { question: "What is the name of the layer of the Earth's atmosphere closest to the surface?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], answer: 0 },
    { question: "What is the chemical symbol for phosphorus?", options: ["P", "Ph", "Po", "Ps"], answer: 0 },
    { question: "Which type of lens is used to correct nearsightedness (myopia)?", options: ["Concave", "Convex", "Bifocal", "Plano"], answer: 0 },
    { question: "What is the largest bone in the human body?", options: ["Femur", "Humerus", "Tibia", "Fibula"], answer: 0 },
    { question: "What is the process by which a star collapses under its own gravity?", options: ["Supernova", "Gravitational collapse", "Nuclear fusion", "Stellar wind"], answer: 1 },
    { question: "What is the study of fish called?", options: ["Ichthyology", "Mammalogy", "Ornithology", "Herpetology"], answer: 0 },
    { question: "What is the name of the pigment that gives plants their green color?", options: ["Chlorophyll", "Carotenoid", "Anthocyanin", "Xanthophyll"], answer: 0 },
    { question: "What is the chemical symbol for nickel?", options: ["Ni", "N", "Nk", "Nc"], answer: 0 },
    { question: "What is the name for a group of lions?", options: ["Pack", "Herd", "Pride", "Flock"], answer: 2 },
    { question: "What is the most distant planet from the Sun in our solar system?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: 1 },
    { question: "What is the SI unit of electrical resistance?", options: ["Ohm", "Ampere", "Volt", "Watt"], answer: 0 },
    { question: "What is the chemical symbol for chlorine?", options: ["Cl", "C", "Ch", "Co"], answer: 0 },
    { question: "What is the name of the part of the ear that helps with balance?", options: ["Cochlea", "Eardrum", "Semicircular canals", "Auditory nerve"], answer: 2 },
    { question: "What is the process of a liquid turning into a solid called?", options: ["Melting", "Freezing", "Evaporation", "Condensation"], answer: 1 },
    { question: "What is the study of mammals called?", options: ["Mammalogy", "Ornithology", "Herpetology", "Ichthyology"], answer: 0 },
    { question: "What is the name of the largest volcano in our solar system, located on Mars?", options: ["Mount Everest", "Mauna Kea", "Olympus Mons", "Valles Marineris"], answer: 2 },
    { question: "What is the chemical symbol for neon?", options: ["Ne", "N", "No", "Na"], answer: 0 },
    { question: "What is the name of the cells in the retina that are responsible for color vision?", options: ["Rods", "Cones", "Ganglion cells", "Bipolar cells"], answer: 1 },
    { question: "What is the process by which an organism develops from a fertilized egg?", options: ["Metamorphosis", "Embryogenesis", "Gestation", "Hatching"], answer: 1 },
    { question: "What is the chemical formula for ammonia?", options: ["NH3", "CH4", "H2O2", "CO2"], answer: 0 },
    { question: "What is the study of weather called?", options: ["Meteorology", "Climatology", "Atmospheric science", "Geophysics"], answer: 0 },
    { question: "What is the name of the largest moon in the solar system, which orbits Jupiter?", options: ["Titan", "Ganymede", "Europa", "Callisto"], answer: 1 },
    { question: "What is the chemical symbol for silicon?", options: ["Si", "S", "Sl", "Sc"], answer: 0 },
    { question: "What is the main function of the stomach in the digestive system?", options: ["Absorb nutrients", "Produce bile", "Churn food and mix it with acid", "Store waste"], answer: 2 },
    { question: "What is the name for the transfer of heat through the movement of fluids (liquids or gases)?", options: ["Conduction", "Convection", "Radiation", "Insulation"], answer: 1 },
    { question: "What is the study of trees called?", options: ["Dendrology", "Botany", "Horticulture", "Silviculture"], answer: 0 },
    { question: "What is the name of the bright star in the constellation Ursa Minor, also known as the North Star?", options: ["Sirius", "Polaris", "Betelgeuse", "Vega"], answer: 1 },
    { question: "What is the chemical symbol for magnesium?", options: ["Mg", "M", "Ma", "Mn"], answer: 0 },
    { question: "What is the part of the nervous system that controls involuntary actions like breathing and heartbeat?", options: ["Somatic nervous system", "Autonomic nervous system", "Central nervous system", "Peripheral nervous system"], answer: 1 },
    { question: "What is the name of the process by which a species becomes better suited to its environment?", options: ["Evolution", "Adaptation", "Natural selection", "Mutation"], answer: 1 },
    { question: "What is the chemical formula for methane?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: 0 },
    { question: "What is the study of the Earth's physical structure and substance called?", options: ["Geology", "Geography", "Geophysics", "Geochemistry"], answer: 0 },
    { question: "What is the name of the red pigment in blood that carries oxygen?", options: ["Hemoglobin", "Melanin", "Chlorophyll", "Carotene"], answer: 0 },
    { question: "What is the chemical symbol for lithium?", options: ["Li", "L", "Lt", "Lm"], answer: 0 },
    { question: "What is the name of the force that acts in the opposite direction to the motion of an object through a fluid?", options: ["Drag", "Thrust", "Lift", "Weight"], answer: 0 },
    { question: "What is the study of the relationships between organisms and their environment called?", options: ["Ecology", "Biology", "Zoology", "Botany"], answer: 0 },
    { question: "What is the common name for acetic acid?", options: ["Vinegar", "Baking soda", "Washing soda", "Bleach"], answer: 0 },
    { question: "What is the chemical symbol for beryllium?", options: ["Be", "B", "Br", "Ba"], answer: 0 },
    { question: "Which part of the cell is responsible for protein synthesis?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Endoplasmic reticulum"], answer: 1 },
    { question: "What is the term for the bending of light as it passes from one medium to another?", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: 1 },
    { question: "What is the study of ancient life through fossils called?", options: ["Paleontology", "Archaeology", "Anthropology", "Geology"], answer: 0 },
    { question: "What is the chemical symbol for sulfur?", options: ["S", "Su", "Sl", "Sf"], answer: 0 },
    { question: "What is the largest organ inside the human body?", options: ["Skin", "Liver", "Lungs", "Brain"], answer: 1 },
    { question: "What is the name of the process by which a gas turns directly into a solid?", options: ["Deposition", "Sublimation", "Condensation", "Freezing"], answer: 0 },
    { question: "What is the study of the universe beyond the Earth's atmosphere called?", options: ["Astronomy", "Astrology", "Cosmology", "Astrophysics"], answer: 0 },
    { question: "What is the chemical symbol for titanium?", options: ["Ti", "T", "Tt", "Ta"], answer: 0 },
    { question: "What is the name of the system that transports blood throughout the body?", options: ["Respiratory system", "Digestive system", "Circulatory system", "Nervous system"], answer: 2 },
    { question: "What is the law that states that the pressure of a gas is inversely proportional to its volume at a constant temperature?", options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"], answer: 1 },
    { question: "What is the study of the functions of living organisms and their parts called?", options: ["Anatomy", "Physiology", "Biology", "Cytology"], answer: 1 },
    { question: "What is the chemical symbol for cobalt?", options: ["Co", "C", "Cb", "Ct"], answer: 0 },
    { question: "What is the name of the galaxy that is our closest major galactic neighbor?", options: ["Andromeda Galaxy", "Triangulum Galaxy", "Large Magellanic Cloud", "Small Magellanic Cloud"], answer: 0 },
    { question: "What is the process by which an unstable atomic nucleus loses energy by radiation?", options: ["Nuclear fission", "Nuclear fusion", "Radioactive decay", "Electron capture"], answer: 2 },
    { question: "What is the study of the classification of organisms called?", options: ["Taxonomy", "Genetics", "Evolution", "Ecology"], answer: 0 },
    { question: "What is the chemical symbol for manganese?", options: ["Mn", "M", "Mg", "Ma"], answer: 0 },
    { question: "What is the part of the plant that contains the seeds?", options: ["Fruit", "Flower", "Leaf", "Stem"], answer: 0 },
    { question: "What is the name for the flow of electric charge?", options: ["Voltage", "Resistance", "Current", "Power"], answer: 2 },
    { question: "What is the study of the Earth's oceans called?", options: ["Oceanography", "Hydrology", "Limnology", "Marine Biology"], answer: 0 },
    { question: "What is the chemical symbol for chromium?", options: ["Cr", "C", "Ch", "Cm"], answer: 0 },
    { question: "What is the name of the fluid that carries nutrients and waste products in the blood?", options: ["Plasma", "Serum", "Lymph", "Platelets"], answer: 0 },
    { question: "What is the name of the point in an orbit that is closest to the Sun?", options: ["Aphelion", "Perihelion", "Apogee", "Perigee"], answer: 1 },
    { question: "What is the study of the sounds of a language called?", options: ["Phonetics", "Phonology", "Morphology", "Syntax"], answer: 0 },
    { question: "What is the chemical symbol for krypton?", options: ["Kr", "K", "Ky", "Kp"], answer: 0 },
    { question: "What is the process of a plant growing towards a light source called?", options: ["Phototropism", "Geotropism", "Thigmotropism", "Hydrotropism"], answer: 0 },
    { question: "What is the name for a material that does not allow electricity to pass through it?", options: ["Conductor", "Insulator", "Semiconductor", "Superconductor"], answer: 1 },
    { question: "What is the study of the properties of matter and how matter changes called?", options: ["Physics", "Chemistry", "Biology", "Geology"], answer: 1 },
    { question: "What is the chemical symbol for arsenic?", options: ["As", "A", "Ar", "Ac"], answer: 0 },
    { question: "What is the part of the human eye that controls the amount of light that enters?", options: ["Pupil", "Iris", "Lens", "Retina"], answer: 1 },
    { question: "What is the name for the transfer of heat through direct contact?", options: ["Conduction", "Convection", "Radiation", "Insulation"], answer: 0 },
    { question: "What is the study of the origin and history of words called?", options: ["Etymology", "Lexicology", "Semantics", "Philology"], answer: 0 },
    { question: "What is the chemical symbol for bromine?", options: ["Br", "B", "Bm", "Bo"], answer: 0 },
    { question: "What is the name of the small sacs in the lungs where gas exchange occurs?", options: ["Bronchi", "Bronchioles", "Alveoli", "Capillaries"], answer: 2 },
    { question: "What is the name of the phenomenon where light is spread out as it passes through a narrow opening or around an obstacle?", options: ["Refraction", "Diffraction", "Interference", "Polarization"], answer: 1 },
    { question: "What is the study of the behavior of animals called?", options: ["Ethology", "Ecology", "Zoology", "Psychology"], answer: 0 },
    { question: "What is the chemical symbol for strontium?", options: ["Sr", "S", "St", "Sm"], answer: 0 },
    { question: "What is the name of the muscle that separates the chest from the abdomen and is the main muscle of respiration?", options: ["Diaphragm", "Intercostal muscles", "Pectoralis major", "Latissimus dorsi"], answer: 0 },
    { question: "What is the term for the maximum displacement or distance moved by a point on a vibrating body or wave measured from its equilibrium position?", options: ["Frequency", "Wavelength", "Amplitude", "Period"], answer: 2 },
    { question: "What is the study of the Earth's atmosphere and its phenomena, including weather and climate called?", options: ["Meteorology", "Atmospheric science", "Climatology", "Aerology"], answer: 1 },
    { question: "What is the chemical symbol for iodine?", options: ["I", "Io", "Id", "In"], answer: 0 },
    { question: "What is the name of the bone in the upper arm?", options: ["Humerus", "Radius", "Ulna", "Femur"], answer: 0 },
    { question: "What is the principle that states that the buoyant force on an object submerged in a fluid is equal to the weight of the fluid that the object displaces?", options: ["Bernoulli's principle", "Archimedes' principle", "Pascal's principle", "Newton's law of viscosity"], answer: 1 },
    { question: "What is the study of heredity and the variation of inherited characteristics called?", options: ["Genetics", "Genomics", "Proteomics", "Metabolomics"], answer: 0 },
    { question: "What is the chemical symbol for xenon?", options: ["Xe", "X", "Xn", "Xo"], answer: 0 },
    { question: "What is the part of the plant that is responsible for reproduction?", options: ["Leaf", "Stem", "Root", "Flower"], answer: 3 },
    { question: "What is the name for the rate at which an object changes its velocity?", options: ["Speed", "Velocity", "Acceleration", "Displacement"], answer: 2 },
    { question: "What is the study of the properties and behavior of light called?", options: ["Optics", "Acoustics", "Thermodynamics", "Electromagnetism"], answer: 0 },
    { question: "What is the chemical symbol for barium?", options: ["Ba", "B", "Br", "Be"], answer: 0 },
    { question: "What is the name of the tube that connects the throat to the stomach?", options: ["Trachea", "Esophagus", "Larynx", "Pharynx"], answer: 1 },
    { question: "What is the name of the law that describes the relationship between the pressure and temperature of a gas at constant volume?", options: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law"], answer: 2 },
    { question: "What is the study of the structure of living organisms called?", options: ["Anatomy", "Physiology", "Histology", "Cytology"], answer: 0 },
    { question: "What is the chemical symbol for cesium?", options: ["Cs", "C", "Ce", "Cm"], answer: 0 },
    { question: "What is the name of the planet that is tilted on its side?", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: 0 },
    { question: "What is the term for a substance that can dissolve other substances?", options: ["Solute", "Solvent", "Solution", "Mixture"], answer: 1 },
    { question: "What is the study of the composition, structure, properties, and reactions of matter called?", options: ["Chemistry", "Physics", "Biology", "Geology"], answer: 0 },
    { question: "What is the chemical symbol for radon?", options: ["Rn", "R", "Rd", "Ra"], answer: 0 },
    { question: "What is the name of the part of the brain that is responsible for coordinating movement and balance?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], answer: 1 },
    { question: "What is the name for the transfer of energy in the form of electromagnetic waves?", options: ["Conduction", "Convection", "Radiation", "Advection"], answer: 2 },
    { question: "What is the study of the interactions between living organisms and their physical environment called?", options: ["Ecology", "Biology", "Environmental science", "Conservation"], answer: 0 },
    { question: "What is the chemical symbol for radium?", options: ["Ra", "R", "Rd", "Rn"], answer: 0 },
    { question: "What is the name of the process by which a cell engulfs a large particle?", options: ["Endocytosis", "Exocytosis", "Phagocytosis", "Pinocytosis"], answer: 2 },
    { question: "What is the unit of electrical power?", options: ["Watt", "Volt", "Ampere", "Ohm"], answer: 0 },
    { question: "What is the study of poisons and their effects on living organisms called?", options: ["Toxicology", "Pharmacology", "Pathology", "Immunology"], answer: 0 },
];
const storageKey = "usedScienceIndices";

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