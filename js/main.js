// window.alert("hello")
// console.log("hello")
// // document.getElementById("asd").innerHTML="hello hamada"
// var skill=(window.prompt("enter skill"))

  const quotes = [
 
    "Knowledge is power.",
    "Science is organized knowledge.",
    "Patience is the key to paradise.",
    "Time is the most valuable thing a man can spend.",
    "He who seeks shall find.",
    "Health is the greatest gift.",
    "Prevention is better than cure.",
    "Necessity is the mother of invention.",
    "Money is a good servant but a bad master.",
    "Actions speak louder than words.",
    "The only true wisdom is in knowing you know nothing.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Knowledge lights up the mind.",
    "A sound mind in a sound body.",
    "Never put off till tomorrow what you can do today.",
    "The world is a beautiful place if you know where to look.",
    "Courage is resistance to fear, mastery of fear - not absence of fear.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "The unexamined life is not worth living.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "To be, or not to be, that is the question.",
    "The only thing we have to fear is fear itself.",
    "The journey of a thousand miles begins with one step.",
    "That which does not kill us makes us stronger.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only way to do great work is to love what you do.",
    "The best way to predict the future is to invent it.",
    "If you want to go fast, go alone. If you want to go far, go together.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best revenge is massive success.",
    "Life is what happens when you're busy making other plans.",
    "You must be the change you wish to see in the world.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The only impossible journey is the one you never begin.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Whether you think you can or you think you can't, you're right.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't be afraid to give up the good to go for the great.",
    "I find that the harder I work, the more luck I seem to have.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You will face many defeats in life, but never let yourself be defeated.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Never let the fear of striking out keep you from playing the game.",
    "Life is either a daring adventure or nothing at all.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "The only impossible journey is the one you never begin.",
    "In this life we cannot do great things. We can only do small things with great love.",
    "Only a life lived for others is a life worthwhile.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Never let the fear of striking out keep you from playing the game.",
    "Money and success don't change people; they merely amplify what is already there.",
    "Your time is limited, don't waste it living someone else's life.",
    "Not how long, but how well you have lived is the main thing.",
    "If life were predictable it would cease to be life and be without flavor.",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it."
];    
const quotesAuthor = [
"-- Francis Bacon",
"-- Herbert Spencer",
"-- Turkish Proverb",
"-- Theophrastus",
"-- Sophocles",
"-- Buddha",
"-- Desiderius Erasmus",
"-- Plato",
"-- Francis Bacon",
"-- Abraham Lincoln",
"-- Socrates",
"-- Ralph Waldo Emerson",
"-- Confucius",
"-- Juvenal",
"-- Benjamin Franklin",
"-- Robert Frost",
"-- Mark Twain",
"-- Mahatma Gandhi",
"-- George Bernard Shaw",
"-- Confucius",
"-- Socrates",
"-- Franklin D. Roosevelt",
"-- Buddha",
"-- William Shakespeare",
"-- Franklin D. Roosevelt",
"-- Lao Tzu",
"-- Friedrich Nietzsche",
"-- Robert Frost",
"-- Steve Jobs",
"-- Alan Kay",
"-- African Proverb",
"-- Sam Levenson",
"-- Frank Sinatra",
"-- John Lennon",
"-- Mahatma Gandhi",
"-- Nelson Mandela",
"-- Walt Disney",
"-- Robert Louis Stevenson",
"-- Tony Robbins",
"-- Theodore Roosevelt",
"-- Winston Churchill",
"-- C.S. Lewis",
"-- Franklin D. Roosevelt",
"-- Charles R. Swindoll",
"-- Confucius",
"-- Mahatma Gandhi",
"-- James Cameron",
"-- Martin Luther King Jr.",
"-- Steve Jobs",
"-- Henry Ford",
"-- Thomas Edison",
"-- Henry David Thoreau",
"-- John D. Rockefeller",
"-- Thomas Jefferson",
"-- Steve Jobs",
"-- Eleanor Roosevelt",
"-- Oprah Winfrey",
"-- James Cameron",
"-- John Lennon",
"-- Mother Teresa",
"-- Franklin D. Roosevelt",
"-- Margaret Mead",
"-- Robert Louis Stevenson",
"-- Eleanor Roosevelt",
"-- Benjamin Franklin",
"-- Helen Keller",
"-- Aristotle",
"-- Anne Frank",
"-- Ralph Waldo Emerson",
"-- Maya Angelou",
"-- Nelson Mandela",
"-- Abraham Lincoln",
"-- Babe Ruth",
"-- Helen Keller",
"-- Thomas A. Edison",
"-- Dr. Seuss",
"-- Tony Robbins",
"-- Mother Teresa",
"-- Albert Einstein",
"-- Dalai Lama",
"-- John Lennon",
"-- Stephen King",
"-- Mae West",
"-- Thomas A. Edison",
"-- Albert Einstein",
"-- Babe Ruth",
"-- Will Smith",
"-- Steve Jobs",
"-- Seneca",
"-- Eleanor Roosevelt",
"-- Henry Ford",

];
  
  
  function getRandomQuote() {
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);
    previousIndex = randomIndex;
    return quotes[randomIndex];
  }
  
  var previousIndex = null;
  var randomQuote = getRandomQuote();
  console.log(quotes.length);
  console.log(previousIndex);

document.getElementById("demo").innerHTML=randomQuote

function getQuotesAuthor() {
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotesAuthor.length);
    } while (randomIndex === previousIndex);
    previousIndex = randomIndex;
    
    return quotesAuthor[randomIndex];
  }
  
  var previousIndex = null;
  var QuotesAuthor = getQuotesAuthor();
//   console.log(Math.random());

document.getElementById("asd").innerHTML=QuotesAuthor









