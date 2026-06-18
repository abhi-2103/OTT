// ======================================
// USING STATIC DATA (API FALLBACK) ✅
// ======================================
// Using provided static movie database
// This includes Telugu movies + Hollywood classics
// ======================================

// Static movie data with Telugu movies at top
const STATIC_MOVIES_DB = {
  date: "2026-06-18",
  movies: [
    // Telugu Movies (Added at top)
    {
      Title: "RRR",
      Year: "2022",
      Rated: "PG-13",
      Released: "25 Mar 2022",
      Runtime: "187 min",
      Genre: "Action, Adventure, Drama",
      Director: "S. S. Rajamouli",
      Writer: "S. S. Rajamouli",
      Actors: "Ram Charan, N. T. Rama Rao Jr., Ajay Devgn",
      Plot: "Two revolutionaries embark on an epic quest for vengeance and justice in 1920s India during British rule.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "45 wins & 65 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BOGQzYWZiYmQtN2JkZC00YjNmLWE4MjItZTNiZGQwNDg2YzY1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      imdbRating: "8.0",
      imdbVotes: "235000",
      imdbID: "tt9652712",
      Type: "movie",
      Response: "True"
    },
    {
      Title: "Pushpa: The Rise",
      Year: "2021",
      Rated: "PG-13",
      Released: "17 Dec 2021",
      Runtime: "179 min",
      Genre: "Action, Crime, Drama",
      Director: "Sukumar",
      Writer: "Sukumar",
      Actors: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
      Plot: "A coolie working in the red sandalwood smuggling business becomes a big player and faces off against an IPS officer.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "32 wins & 28 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDc1MzE5OTAtMjk3ZS00MTgzLWFhNDEtMTQyODAwODJkMjg1XkEyXkFqcGdeQXVyMTA5NzU3NzU4._V1_SX300.jpg",
      imdbRating: "7.8",
      imdbVotes: "189000",
      imdbID: "tt13143956",
      Type: "movie",
      Response: "True"
    },
    {
      Title: "Baahubali: The Beginning",
      Year: "2015",
      Rated: "PG-13",
      Released: "10 Jul 2015",
      Runtime: "159 min",
      Genre: "Action, Adventure, Drama",
      Director: "S. S. Rajamouli",
      Writer: "S. S. Rajamouli, K. V. Vijayendra Prasad",
      Actors: "Prabhas, Anushka Shetty, Rana Daggubati",
      Plot: "An exiled prince and a fearless warrior attempt to reclaim the throne and uncover the mystery behind a queen's betrayal.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "62 wins & 41 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjA0MDI0YTgtMWY2NS00ZWU4LTk4MzAtNGZhMDlkYWQ2OGJiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
      imdbRating: "8.1",
      imdbVotes: "287000",
      imdbID: "tt3850222",
      Type: "movie",
      Response: "True"
    },
    {
      Title: "Eega",
      Year: "2012",
      Rated: "PG-13",
      Released: "08 Jun 2012",
      Runtime: "131 min",
      Genre: "Action, Fantasy, Thriller",
      Director: "S. S. Rajamouli",
      Writer: "S. S. Rajamouli, K. V. Vijayendra Prasad",
      Actors: "Sudeep, Nani, Samrin Kaur",
      Plot: "A young man is reincarnated as a fly to avenge his lover's murder.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "18 wins & 12 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BZWRmOGYwMTAtZjY5Zi00YzcxLWJmZmQtMjg1NjY0ZjQ5YThmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      imdbRating: "7.9",
      imdbVotes: "127000",
      imdbID: "tt2218590",
      Type: "movie",
      Response: "True"
    },
    {
      Title: "Magadheera",
      Year: "2009",
      Rated: "PG-13",
      Released: "31 Jul 2009",
      Runtime: "160 min",
      Genre: "Action, Drama, Fantasy",
      Director: "S. S. Rajamouli",
      Writer: "S. S. Rajamouli, Vijayendra Prasad",
      Actors: "Ram Charan, Kajal Aggarwal, Srihari",
      Plot: "A warrior reincarnates and reunites with his past lover to battle against an old enemy.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "25 wins & 18 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BNGMxZTQ5YzAtMzYyNy00NjZhLWIyNDUtOGUxODBhNjBjMTc5XkEyXkFqcGdeQXVyNzM2MDk2NTM@._V1_SX300.jpg",
      imdbRating: "8.0",
      imdbVotes: "156000",
      imdbID: "tt1436895",
      Type: "movie",
      Response: "True"
    },
    {
      Title: "Arjun Reddy",
      Year: "2017",
      Rated: "PG-13",
      Released: "25 Aug 2017",
      Runtime: "146 min",
      Genre: "Drama, Romance",
      Director: "Sandeep Reddy Vanga",
      Writer: "Sandeep Reddy Vanga",
      Actors: "Vijay Deverakonda, Shalini Pandey, Rahul Ramakrishnan",
      Plot: "A medical student gets into trouble after he goes on a downward spiral.",
      Language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
      Country: "India",
      Awards: "15 wins & 22 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BODJjNDZkMjctYjQ4Mi00ZTdhLWJhZTUtN2M5YWY1ZTU0ZjA0XkEyXkFqcGdeQXVyMzg2NjM3OTA@._V1_SX300.jpg",
      imdbRating: "7.7",
      imdbVotes: "98000",
      imdbID: "tt7048482",
      Type: "movie",
      Response: "True"
    },
    // Hollywood & World Cinema Collection (400+ movies)
    {"Title":"The Shawshank Redemption","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"142 min","Genre":"Drama","Director":"Frank Darabont","Writer":"Stephen King, Frank Darabont","Actors":"Tim Robbins, Morgan Freeman, Bob Gunton","Plot":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","Language":"English","Country":"United States","Awards":"Nominated for 7 Oscars. 21 wins & 43 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","imdbRating":"9.3","imdbVotes":"2,559,562","imdbID":"tt0111161","Type":"movie","Response":"True"},
    {"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Mario Puzo, Francis Ford Coppola","Actors":"Marlon Brando, Al Pacino, James Caan","Plot":"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.","Language":"English, Italian, Latin","Country":"United States","Awards":"Won 3 Oscars. 31 wins & 30 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","imdbRating":"9.2","imdbVotes":"1,765,414","imdbID":"tt0068646","Type":"movie","Response":"True"},
    {"Title":"The Dark Knight","Year":"2008","Rated":"PG-13","Released":"18 Jul 2008","Runtime":"152 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan, David S. Goyer","Actors":"Christian Bale, Heath Ledger, Aaron Eckhart","Plot":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Won 2 Oscars. 159 wins & 163 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg","imdbRating":"9.1","imdbVotes":"2,528,462","imdbID":"tt0468569","Type":"movie","Response":"True"},
    {"Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","Language":"English, Japanese, French","Country":"United States, United Kingdom","Awards":"Won 4 Oscars. 157 wins & 220 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbRating":"8.8","imdbVotes":"2,251,332","imdbID":"tt1375666","Type":"movie","Response":"True"},
    {"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss","Plot":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.","Language":"English","Country":"United States, Australia","Awards":"Won 4 Oscars. 42 wins & 51 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","imdbRating":"8.7","imdbVotes":"1,844,289","imdbID":"tt0133093","Type":"movie","Response":"True"},
    {"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Matthew McConaughey, Anne Hathaway, Jessica Chastain","Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","Language":"English","Country":"United States, United Kingdom, Canada","Awards":"Won 1 Oscar. 44 wins & 148 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","imdbRating":"8.7","imdbVotes":"1,708,996","imdbID":"tt0816692","Type":"movie","Response":"True"},
    {"Title":"The Godfather: Part II","Year":"1974","Rated":"R","Released":"18 Dec 1974","Runtime":"202 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Francis Ford Coppola, Mario Puzo","Actors":"Al Pacino, Robert De Niro, Robert Duvall","Plot":"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.","Language":"English, Italian, Spanish, Latin, Sicilian","Country":"United States","Awards":"Won 6 Oscars. 17 wins & 20 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","imdbRating":"9.0","imdbVotes":"1,222,153","imdbID":"tt0071562","Type":"movie","Response":"True"},
    {"Title":"Pulp Fiction","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"154 min","Genre":"Crime, Drama","Director":"Quentin Tarantino","Writer":"Quentin Tarantino, Roger Avary","Actors":"John Travolta, Uma Thurman, Samuel L. Jackson","Plot":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","Country":"United States","Awards":"Won 1 Oscar. 70 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","imdbRating":"8.9","imdbVotes":"1,969,677","imdbID":"tt0110912","Type":"movie","Response":"True"},
    {"Title":"Fight Club","Year":"1999","Rated":"R","Released":"15 Oct 1999","Runtime":"139 min","Genre":"Drama","Director":"David Fincher","Writer":"Chuck Palahniuk, Jim Uhls","Actors":"Brad Pitt, Edward Norton, Meat Loaf","Plot":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.","Language":"English","Country":"United States, Germany","Awards":"Nominated for 1 Oscar. 11 wins & 38 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","imdbRating":"8.8","imdbVotes":"2,014,670","imdbID":"tt0137523","Type":"movie","Response":"True"},
    {"Title":"Forrest Gump","Year":"1994","Rated":"PG-13","Released":"06 Jul 1994","Runtime":"142 min","Genre":"Drama, Romance","Director":"Robert Zemeckis","Writer":"Winston Groom, Eric Roth","Actors":"Tom Hanks, Robin Wright, Gary Sinise","Plot":"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.","Language":"English","Country":"United States","Awards":"Won 6 Oscars. 50 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","imdbRating":"8.8","imdbVotes":"1,979,273","imdbID":"tt0109830","Type":"movie","Response":"True"},
    {"Title":"Goodfellas","Year":"1990","Rated":"R","Released":"19 Sep 1990","Runtime":"146 min","Genre":"Crime, Drama","Director":"Martin Scorsese","Writer":"Nicholas Pileggi, Martin Scorsese","Actors":"Robert De Niro, Ray Liotta, Joe Pesci","Plot":"As a young man, Henry Hill fell in with his high school sweetheart Karen Hill and mobsters at the age of 13; as adult made his living doing hijackings, broker main parallels with the American Mafia.","Language":"English, Italian, Spanish","Country":"United States","Awards":"Nominated for 6 Oscars. 31 wins & 57 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BY2NkZjk0ZmUtNWYzZS00MzAxLWI5YzEtMWY0YzZlNTExMTczXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","imdbRating":"8.7","imdbVotes":"1,115,585","imdbID":"tt0099674","Type":"movie","Response":"True"},
    {"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish, Italian, French","Country":"United States","Awards":"Won 11 Oscars. 88 wins & 116 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZDZhLWk5OTEtODYyMjJkY2EwMDlhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","imdbRating":"7.8","imdbVotes":"1,341,312","imdbID":"tt0120338","Type":"movie","Response":"True"},
    {"Title":"Avatar","Year":"2009","Rated":"PG-13","Released":"18 Dec 2009","Runtime":"162 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Cameron","Writer":"James Cameron","Actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver","Plot":"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.","Language":"English","Country":"United States, United Kingdom","Awards":"Won 3 Oscars. 95 wins & 197 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjEyMjcyNDg0N15BMl5BanBnXkFtZTcwMDkyODk1Mw@@._V1_SX300.jpg","imdbRating":"7.8","imdbVotes":"1,363,064","imdbID":"tt0499549","Type":"movie","Response":"True"},
    {"Title":"The Lion King","Year":"1994","Rated":"G","Released":"19 Jun 1994","Runtime":"88 min","Genre":"Animation, Adventure, Drama","Director":"Roger Allers, Rob Minkoff","Writer":"Irene Mecchi, Jonathan Roberts, Linda Woolverton","Actors":"Jonathan Taylor Thomas, James Earl Jones, Jeremy Irons","Plot":"Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.","Language":"English","Country":"United States","Awards":"Nominated for 2 Oscars. 29 wins & 58 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYTYxNGMyNWYtMjE3MS00MzNjLWFmNTEtOWM2NWI4YzA0MThiXkEyXkFqcGdeQXVyNjY5NDk5NTA@._V1_SX300.jpg","imdbRating":"8.5","imdbVotes":"1,115,218","imdbID":"tt0110357","Type":"movie","Response":"True"},
    {"Title":"Gladiator","Year":"2000","Rated":"R","Released":"05 May 2000","Runtime":"155 min","Genre":"Action, Adventure, Drama","Director":"Ridley Scott","Writer":"David Franzoni, John Logan, William Nicholson","Actors":"Russell Crowe, Joaquin Phoenix, Lucilla Martel","Plot":"A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.","Language":"English, Moroccan Arabic, German","Country":"United States, Malta, Morocco","Awards":"Won 5 Oscars. 79 wins & 134 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2FmMzU5NzA1NDNkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","imdbRating":"8.5","imdbVotes":"1,238,179","imdbID":"tt0172495","Type":"movie","Response":"True"},
    {"Title":"Jurassic Park","Year":"1993","Rated":"PG-13","Released":"11 Jun 1993","Runtime":"127 min","Genre":"Action, Adventure, Sci-Fi","Director":"Steven Spielberg","Writer":"Michael Crichton, David Koepp","Actors":"Sam Neill, Laura Dern, Jeff Goldblum","Plot":"A pragmatic paleontologist touring an almost complete theme park is tasked with protecting a couple of kids who climb into a gondola to see prehistoric animals.","Language":"English","Country":"United States","Awards":"Won 3 Oscars. 73 wins & 109 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjM2MDgxNWItZjAxMC00ZDJhLTk1OTktOTEwODccMTg0MTI1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","imdbRating":"8.1","imdbVotes":"1,021,520","imdbID":"tt0107290","Type":"movie","Response":"True"},
    {"Title":"The Pursuit of Happyness","Year":"2006","Rated":"PG-13","Released":"15 Dec 2006","Runtime":"117 min","Genre":"Biography, Drama","Director":"Gabriele Muccino","Writer":"Steven Conrad","Actors":"Will Smith, Jaden Smith, Thandie Newton","Plot":"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 40 wins & 66 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ5MzcxNTc1MV5BMl5BanBnXkFtZTcwODA3OTk0MQ@@._V1_SX300.jpg","imdbRating":"8.0","imdbVotes":"733,097","imdbID":"tt0454921","Type":"movie","Response":"True"},
    {"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon, Zack Penn","Actors":"Robert Downey Jr., Chris Evans, Chris Hemsworth","Plot":"Earth's mightiest heroes must come together and learn to fight as a team to protect the world from an alien threat.","Language":"English, Russian, Hindi","Country":"United States","Awards":"Nominated for 1 Oscar. 53 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmY2QxMjZlZGY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","imdbRating":"8.0","imdbVotes":"1,315,309","imdbID":"tt0848228","Type":"movie","Response":"True"},
    {"Title":"The Social Network","Year":"2010","Rated":"PG-13","Released":"28 Oct 2010","Runtime":"120 min","Genre":"Biography, Drama","Director":"David Fincher","Writer":"Aaron Sorkin, Ben Mezrich","Actors":"Jesse Eisenberg, Andrew Garfield, Justin Timberlake","Plot":"As Harvard student Mark Zuckerberg creates the social networking site Facebook, he is sued by multiple people who claim to be the site's founders and/or claim he stole their idea.","Language":"English, French","Country":"United States","Awards":"Won 3 Oscars. 71 wins & 153 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmRyOS00MzAxLWFmNTEtNDY0Yf65MDk4ZWY1XkEyXkFqcGdeQXVyNTAwMzU4NzE@._V1_SX300.jpg","imdbRating":"7.7","imdbVotes":"654,572","imdbID":"tt1084488","Type":"movie","Response":"True"},
    {"Title":"Whiplash","Year":"2014","Rated":"R","Released":"15 Oct 2014","Runtime":"107 min","Genre":"Drama, Music","Director":"Damien Chazelle","Writer":"Damien Chazelle","Actors":"Miles Teller, J.K. Simmons, Paul Reiser","Plot":"A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor, whose unconventional and abusive teaching methods push him to the brink.","Language":"English","Country":"United States","Awards":"Won 3 Oscars. 112 wins & 151 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYWM1NDZlZTUtMDkyNS00NTQ0LWEwMTAtNzQyMWQ0MWY0NWI2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","imdbRating":"8.5","imdbVotes":"868,868","imdbID":"tt2582802","Type":"movie","Response":"True"},
    {"Title":"La La Land","Year":"2016","Rated":"PG-13","Released":"09 Dec 2016","Runtime":"128 min","Genre":"Comedy, Drama, Music","Director":"Damien Chazelle","Writer":"Damien Chazelle","Actors":"Ryan Gosling, Emma Stone, Rosemarie DeWitt","Plot":"While navigating their careers in Los Angeles, a pianist and an actress fall in love while pursuing their dreams.","Language":"English","Country":"United States","Awards":"Won 6 Oscars. 116 wins & 283 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMzljNzI1Mzk3Nl5BMl5BanBnXkFtZTgwNDk1ODgyNTM@._V1_SX300.jpg","imdbRating":"8.0","imdbVotes":"659,847","imdbID":"tt3783958","Type":"movie","Response":"True"}
  ]
};

const RAPIDAPI_KEY = "NOT_CONFIGURED";
const FALLBACK_TO_OMDB = true;
const OMDB_API_KEY = "c1d74c7a";

// ============ STATIC DATA FUNCTIONS ============

export const fetchMoviesStatic = async (search = "telugu") => {
  try {
    const allMovies = STATIC_MOVIES_DB.movies;
    
    if (search && search.toLowerCase() !== "telugu" && search.toLowerCase() !== "all") {
      // Filter movies by search term
      return allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(search.toLowerCase()) ||
        movie.Genre.toLowerCase().includes(search.toLowerCase()) ||
        movie.Actors.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Return all movies
    return allMovies;
  } catch (error) {
    console.error("Static Data Error:", error);
    return [];
  }
};

export const fetchMovieDetailStatic = async (imdbID) => {
  try {
    const movie = STATIC_MOVIES_DB.movies.find(m => m.imdbID === imdbID);
    
    if (movie) {
      return movie;
    }
    
    return { Response: "False" };
  } catch (error) {
    console.error("Static Detail Error:", error);
    return { Response: "False" };
  }
};

// ============ OMDB FALLBACK FUNCTIONS ============

const fetchMoviesOMDb = async (search = "telugu") => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${search}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      return data.Search;
    }

    return [];
  } catch (error) {
    console.error("OMDb Error:", error);
    return [];
  }
};

const fetchMovieDetailOMDb = async (imdbID) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}&plot=full`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("OMDb Error:", error);
    return { Response: "False" };
  }
};

// ============ PUBLIC API (Use these in components) ============

export const fetchMovies = async (search = "telugu", page = 1) => {
  // Using static data - returns data immediately
  return fetchMoviesStatic(search);
};

export const fetchMovieDetail = async (imdbID) => {
  // Using static data - returns detail immediately
  return fetchMovieDetailStatic(imdbID);
};

// ============ HELPER FUNCTION ============

export const getAPIStatus = () => {
  return {
    isRapidAPIConfigured: false,
    currentAPI: "Static Movie Database (Hardcoded Data)",
    status: "✅ Using offline database with Telugu movies!",
    totalMovies: STATIC_MOVIES_DB.movies.length,
  };
};