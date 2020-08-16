/*!
 * Aleksandra Kulbaka
 */

var js_animation = [
    ["Hummingbird animation", 32],
    ["Java Script", 29],
    ["Animation", 17],
    ["Web Development", 20],
    ["HTML", 18],
    ["CSS", 19],
    ["Design", 20],
]

var ml = [
    ["OCR system", 32],
    ["Machine Learning", 25],
    ["Python", 29],
    ["Optical Character Recognition", 16],
    ["Principal Component Analysis", 17],
    ["k-nearest neighbour classifier", 17],
    ["PCA", 20],
    ["Error Correction System", 15],
    ["Feature Extraction", 20]
]

var haskell = [
    ["Bombe Simulator", 32],
    ["Enigma Breaker", 24],
    ["Haskell", 29],
    ["Algorithms", 16],
    ["Runtime Analysis", 17],
    ["Correctness vs. Runtime", 17],
    ["Cryptography", 20],
    ["Enigma", 15],
    ["Testing", 17]
]

var java = [
    ["Wine Browser", 32],
    ["Java", 29],
    ["OOP", 20],
    ["Object Oriented Programming", 16],
    ["GUI", 17],
    ["Abstract Classes", 17],
    ["Inheritance", 20],
    ["Java Collections Framework", 15],
    ["Java Swing", 15],
    ["Event Handling", 15]
]

var interx = [
    ["Interx", 34],
    ["Bootstrap", 19],
    ["Node.js", 18],
    ["Drugs Interaction Checker", 25],
    ["MongoDB", 19],
    ["HTML", 18],
    ["CSS", 19],
    ["React", 18],
    ["Java Script", 19],
    ["Web Design", 16],
    ["API", 20],
    ["Password encryption", 16],
    ["Web Application", 21],
]

var taxi = [
    ["Taxi Website", 32],
    ["Ruby", 29],
    ["SQLite", 29],
    ["Software Testing", 22],
    ["Cucumber", 18],
    ["Agile", 22],
    ["Backend", 25],
    ["HTML", 20],
    ["SQL manipulation", 17],
    ["CSS", 19],
    ["Java Script", 18],
    ["Web Design", 17],
    ["Password encryption", 16],
]

var java_app = [
    ["Academic Journal System", 32],
    ["Java", 29],
    ["OOP", 20],
    ["Object Oriented Programming", 16],
    ["GUI", 15],
    ["UML Diagrams", 16],
    ["Java Swing", 15],
    ["Event Handling", 15],
    ["SQL manipulation", 17],
    ["MySQL", 29],
    ["Password encryption", 15],
]

var hello = [
    ["Say Hello", 32],
    ["Bootstrap", 18],
    ["Python", 29],
    ["Flask", 29],
    ["HTML", 18],
    ["CSS", 19],
    ["Backend", 25],
    ["Java Script", 19],
    ["Web Design", 17],
    ["API", 23],
    ["Web Application", 17],
]

id_list = ['js_animation', 'ml', 'haskell', 'java', 'interx', 'taxi', 'java_app', 'hello'];
words_list = [js_animation, ml, haskell, java, interx, taxi, java_app, hello]


for (i = 0; i < id_list.length; i++) {
    WordCloud(
        document.getElementById(id_list[i]), {
            list: words_list[i],
            minSize: '20 px',
            color: 'random-light',
            backgroundColor: 'black',
        }
    );
}