INSERT INTO portfoliodb.users (firstName, lastName, phoneNumber, email, address, city, state, zip, aboutMe)
VALUES ("Jeff", "Kounter", "3169923219", "jakounter@yahoo.com", "810 Givan Ave.", "Belton", "MO", "64012", "My name is Jeff Kounter. I am 32 yrs old with a Masters in Business administration focused in finance. I also hold a BBA with minors in management, accounting, and math, both from Wichita State University. Go Shox!! I currently work as a Loan Service Analyst for agricultural loans.<br><br>I began my development skills by using built in excel functions to automate processes at work and learn SQL via Access.<br><br>I have since learned all the basica languages required for full stack web development including: HTML5, CSS, Javascript, MYSQL, NPM, and many others.");

INSERT INTO portfoliodb.projects (projectName, link, alt, title, img, UserId)
VALUES ("Hangman", "https://snowbird1986.github.io/Word-Guess-Game/", "Word Guess Game", "Old West: Hangman!!", "gallows.jpg", 1),
("Star Wars RPG", "https://snowbird1986.github.io/unit-4-game/", "Star Wars: Battle Royale!!", "Star Wars: Battle Royale!!", "walkers.png", 1),
("Trivia", "https://snowbird1986.github.io/TriviaGame/", "Boy Meets World Trivia", "Boy Meets World Trivia", "pheenybackground.jpg", 1),
("API GIPHY", "https://snowbird1986.github.io/API-GIPHY/", "Scooby GIF Where Are You", "Scooby GIF Where Are You", "background.gif", 1),
("Train Scheduler", "https://snowbird1986.github.io/firebase_train_schedule/", "Hogwartz Express Schedule", "Hogwartz Express Schedule", "train_banner.gif", 1),
("Project 1", "https://snowbird1986.github.io/project1/", "Walking Commute", "Commute Search", "banner.jpg", 1),
("Friend Finder", "https://evening-oasis-87329.herokuapp.com/", "Friend Finder", "Friend Finder", "friends.jpg", 1),
("Bamazon: Dept Store", "https://snowbird1986.github.io/bamazon/", "Bamazon: Dept Store", "Bamazon: Dept Store", "bamazon.jpg", 1),
("Project 2", "https://arcane-mountain-66252.herokuapp.com/", "Road to Bethlehem", "Road to Bethlehem", "r2bheader.png", 1),
("Burgers", "https://serene-ocean-84380.herokuapp.com/", "Hamburgaler", "Hamburgaler", "burgerbanner.jpg", 1),
("LIRI Bot", "https://github.com/Snowbird1986/liri-node-app", "LIRI", "LIRI Bot", "Liri.jpg", 1)

INSERT INTO portfoliodb.logins (userName, password, UserId)
VALUES ("jakounter", "lactose1", 1);