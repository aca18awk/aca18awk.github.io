/*!
 * Aleksandra Kulbaka
 */

var js_animation = [
    ["Hummingbird animation", 31],
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
    ["3D Graphics", 32],
    ["Java", 29],
    ["OpenGL", 29],
    ["OOP", 20],
    ["Diffuse and Specular Textures", 16],
    ["GUI", 17],
    ["General Lights", 21],
    ["Inheritance", 17],
    ["Animations", 23],
    ["Java Collections Framework", 17],
    ["Spotlight", 15],
    ["Recreating a room", 24]
]

var interx = [
    ["Interx Web Application", 32],
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
    ["Taxi Web Application", 32],
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

// var java_app = [
//     [" Fire Spread CA Model", 32],
//     ["Python", 29],
//     ["Cellular Automata", 26],
//     ["Fire Spread Prediction", 16],
//     ["Algorithms Design", 25],
//     ["Object Oriented Programming", 15],
//     ["Bioinspired Computing", 16]
// ]

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
    ["Robotics Challenge", 32],
    ["Algorithms Design", 25],
    ["Robot Design", 25],
    ["Python", 29],
    ["Webots", 29],
    ["Object Recognition", 23],
    ["Following the Maze", 20],
    ["Multi-Layer Control", 16],
    ["Searching the environment", 16]
]

id_list = ['js_animation', 'ml', 'haskell', 'java', 'interx', 'taxi', 'java_app', 'hello'];
words_list = [js_animation, ml, haskell, java, interx, taxi, java_app, hello]

for (i = 0; i < id_list.length; i++) {
    WordCloud(
        document.getElementById(id_list[i]), {
            list: words_list[i],
            minSize: '20 px',
            color: function(word, weight) {
                names = [31, 32, 34]
                languages = [29, 18, 19]
                defa = [16, 17]
                if (names.includes(weight)) {
                    return '#64ded5'
                } else if (languages.includes(weight)) {
                    return '#ff85e7'
                } else if (defa.includes(weight)) {
                    return '#f9f7d9'
                } else {
                    return '#edd095'
                }
            },
            backgroundColor: 'black',
        }
    );
}