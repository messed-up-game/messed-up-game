// src/components/MessedUpGameSoloVsComputer.jsx

import { useEffect, useMemo, useRef, useState } from "react";

const CATEGORIES = [
  "Animals",
  "Colors",
  "Breakfast Foods",
  "Fruits",
  "Vegetables",
  "Candy Bars",
  "Ice Cream Flavors",
  "Cartoon Characters",
  "Disney Movies",
  "Things at a Beach",
  "Things in a Kitchen",
  "Sports",
  "School Subjects",
  "US States",
  "Holidays",
  "Cookies",
  "Things in a Bathroom",
  "Famous Athletes",
  "Things that are Hot",
  "Things that are Cold",
  "Things that Fly",
  "Types of Nuts",
  "Weather Types",
  "Zoo Animals",
  "Family Members",
  "Board Games",
];

const LEVELS = [
  { level: 1, name: "Easy", target: 5, seconds: 20 },
  { level: 2, name: "Warm-Up", target: 5, seconds: 20 },
  { level: 3, name: "Getting Tougher", target: 5, seconds: 20 },
  { level: 4, name: "Brain Burner", target: 5, seconds: 20 },
  { level: 5, name: "Champion", target: 5, seconds: 20 },
];

const OBVIOUS_WRONG = new Set([
  "steak",
  "pork",
  "beef",
  "california",
  "texas",
]);
const ANIMALS_A_TO_Z = {
  A: ["aardvark", "alligator", "alpaca", "ant", "anteater", "ape", "armadillo"],
  B: ["baboon", "badger", "bat", "bear", "beaver", "bee", "bison", "bobcat", "buffalo"],
  C: ["camel", "cat", "cheetah", "chicken", "chimpanzee", "chipmunk", "cobra", "cow", "coyote", "crab", "crocodile"],
  D: ["deer", "dog", "dolphin", "donkey", "dove", "dragonfly", "duck"],
  E: ["eagle", "eel", "elephant", "elk", "emu"],
  F: ["falcon", "fawn", "ferret", "finch", "fish", "flamingo", "fly", "fox", "frog"],
  G: ["gazelle", "gecko", "gerbil", "giraffe", "goat", "goose", "gorilla", "grasshopper"],
  H: ["hamster", "hawk", "hedgehog", "hen", "heron", "hippo", "hippopotamus", "horse", "hummingbird", "hyena"],
  I: ["iguana", "insect"],
  J: ["jackal", "jaguar", "jellyfish"],
  K: ["kangaroo", "kid", "kitten", "koala"],
  L: ["ladybug", "lamb", "lemur", "leopard", "lion", "lizard", "llama", "lobster"],
  M: ["magpie", "mammal", "manta ray", "meerkat", "mice", "mink", "mole", "mongoose", "monkey", "moose", "mosquito", "moth", "mouse", "mule"],
  N: ["narwhal", "newt", "nightingale"],
  O: ["octopus", "opossum", "orangutan", "ostrich", "otter", "owl", "ox", "oyster"],
  P: ["panda", "panther", "parrot", "peacock", "pelican", "penguin", "pig", "pigeon", "platypus", "porcupine", "possum", "puffin", "puppy", "python"],
  Q: ["quail", "quetzal", "quokka"],
  R: ["rabbit", "raccoon", "ram", "rat", "raven", "reindeer", "reptile", "rhino", "rhinoceros", "robin", "rooster"],
  S: ["salamander", "scorpion", "seagull", "seal", "seahorse", "shark", "sheep", "shrimp", "skunk", "sloth", "snake", "sparrow", "spider", "squid", "squirrel", "starfish", "stingray", "stork", "swan"],
  T: ["tarantula", "termite", "tiger", "toad", "tortoise", "tuna", "turkey", "turtle"],
  U: ["urchin", "umbrellabird"],
  V: ["vole", "vulture"],
  W: ["walrus", "wasp", "weasel", "whale", "wildebeest", "wolf", "wolverine", "woodpecker", "worm"],
  X: ["x-ray tetra", "xerus"],
  Y: ["yak"],
  Z: ["zebra"],
};

const COLORS_A_TO_Z = {
  A: ["amber", "amethyst", "apricot", "aqua", "aquamarine", "azure"],
  B: ["baby blue", "baby pink", "beige", "black", "blue", "bronze", "brown", "burgundy"],
  C: ["cerulean", "champagne", "charcoal", "chartreuse", "chocolate", "cobalt", "copper", "coral", "cream", "crimson", "cyan"],
  D: ["dark blue", "dark green", "dark orange", "dark red", "deep pink"],
  E: ["ebony", "eggshell", "emerald"],
  F: ["firebrick", "forest green", "fuchsia"],
  G: ["gold", "goldenrod", "gray", "green", "grey"],
  H: ["honeydew", "hot pink"],
  I: ["indigo", "ivory"],
  J: ["jade", "jet black"],
  K: ["khaki"],
  L: ["lavender", "lemon", "light blue", "light green", "light pink", "lilac", "lime"],
  M: ["magenta", "maize", "maroon", "mauve", "mint", "mustard"],
  N: ["navy", "navy blue"],
  O: ["ochre", "off white", "olive", "orange", "orchid"],
  P: ["peach", "pearl", "periwinkle", "pink", "plum", "purple"],
  Q: ["quartz", "queen blue"],
  R: ["red", "rose", "rose gold", "royal blue", "ruby", "rust"],
  S: ["sage", "salmon", "sand", "sapphire", "scarlet", "sea green", "seafoam", "silver", "sky blue", "slate"],
  T: ["tan", "taupe", "teal", "turquoise"],
  U: ["umber", "ultramarine"],
  V: ["vermilion", "violet"],
  W: ["wheat", "white", "wine"],
  X: ["xanadu"],
  Y: ["yellow", "yellow green"],
  Z: ["zaffre", "zinnwaldite brown"],
};
const BREAKFAST_A_TO_Z = {
  A: [
    "apple",
    "apple juice",
    "apple fritter",
    "apple turnover",
    "avocado",
    "avocado toast",
    "acai bowl",
    "almond butter",
    "almonds",
    "arepa",
  ],

  B: [
    "bacon",
    "bagel",
    "bagel and cream cheese",
    "bagel and lox",
    "banana",
    "banana bread",
    "banana muffin",
    "baked beans",
    "baked tomato",
    "bacon and eggs",
    "bacon egg and cheese",
    "bear claw",
    "beans",
    "beans on toast",
    "beignet",
    "belgian waffle",
    "biscuits",
    "biscuits and gravy",
    "black coffee",
    "black pudding",
    "blackberries",
    "blintz",
    "blintzes",
    "blueberries",
    "blueberry muffin",
    "boiled eggs",
    "bran muffin",
    "bread",
    "breakfast bowl",
    "breakfast burrito",
    "breakfast burger",
    "breakfast casserole",
    "breakfast cereal bar",
    "breakfast enchiladas",
    "breakfast hash",
    "breakfast nachos",
    "breakfast pizza",
    "breakfast quesadilla",
    "breakfast salad",
    "breakfast sandwich",
    "breakfast skillet",
    "breakfast slider",
    "breakfast taco",
    "breakfast tacos",
    "breakfast tostada",
    "breakfast wrap",
    "buttered toast",
  ],

  C: [ 
    "canadian bacon",
    "cantaloupe",
    "cappuccino",
    "cereal",
    "chapati",
    "cheese",
    "cheese toast",
    "chia pudding",
    "chicken and waffles",
    "chicken fried steak",
    "chilaquiles",
    "chocolate chip muffin",
    "chocolate milk",
    "chorizo",
    "churros",
    "cinnamon bun",
    "cinnamon roll",
    "cinnamon toast",
    "clementine",
    "coffee",
    "coffee cake",
    "cold cereal",
    "congee",
    "corn muffin",
    "cornbread",
    "corned beef hash",
    "cottage cheese",
    "country fried steak",
    "country gravy",
    "cranberry juice",
    "cream cheese",
    "cream of rice",
    "cream of wheat",
    "crepe",
    "crepes",
    "croissant",
    "croque madame",
    "croque monsieur",
  ],

  D: [
    "danish",
    "dates",
    "deviled eggs",
    "donut",
    "doughnut",
    "dosa",
  ],

  E: [
    "egg bites",
    "egg mcmuffin",
    "egg sandwich",
    "egg whites",
    "egg",
    "eggs",
    "eggs and bacon",
    "eggs and sausage",
    "eggs and toast",
    "eggs benedict",
    "eggs florentine",
    "english muffin",
    "espresso",
  ],

  F: [
    "falafel",
    "fig",
    "french toast",
    "fried eggs",
    "fried mushrooms",
    "fried potatoes",
    "fried tomato",
    "fritter",
    "fruit",
    "fruit bowl",
    "fruit salad",
    "fruit yogurt",
    "full english breakfast",
    "ful medames",
  ],

  G: [
    "granola",
    "granola bar",
    "granola bowl",
    "grapefruit",
    "grapefruit juice",
    "grapes",
    "greek yogurt",
    "grilled cheese",
    "grits",
  ],

  H: [
    "halwa",
    "ham",
    "ham and eggs",
    "ham egg and cheese",
    "hard boiled eggs",
    "hash",
    "hash browns",
    "herring",
    "home fries",
    "honey",
    "honeydew",
    "hot cereal",
    "hot chocolate",
    "hot tea",
    "hotcakes",
    "huevos rancheros",
    "hummus",
  ],

  I: [
    "iced coffee",
    "iced tea",
    "idli",
  ],

  J: [
    "jam",
    "jelly",
    "johnnycakes",
    "juice",
  ],

  K: [
    "kiwi",
    "kolache",
  ],

  L: [
    "labneh",
    "latte",
    "lox",
  ],

  M: [
    "mango",
    "maple syrup",
    "marmalade",
    "melon",
    "menemen",
    "milk",
    "mocha",
    "muffin",
    "muesli",
    "mushrooms",
  ],

  N: [
    "naan",
    "nectarine",
    "nuts",
  ],

  O: [
    "oatmeal",
    "omelet",
    "omelette",
    "orange",
    "orange juice",
    "over easy eggs",
    "over hard eggs",
    "over medium eggs",
    "overnight oats",
  ],

  P: [
    "pancake",
    "pancakes",
    "pancakes and bacon",
    "pan dulce",
    "papaya",
    "paratha",
    "parfait",
    "pastry",
    "peach",
    "peanut butter",
    "pear",
    "pecans",
    "pineapple",
    "pita",
    "poached eggs",
    "poha",
    "porridge",
    "pork roll",
    "potato pancakes",
    "potatoes",
    "protein bar",
    "protein shake",
    "pudding",
    "pumpkin bread",
  ],

  Q: [
    "quiche",
  ],

  R: [
    "raisin toast",
    "raisins",
    "raspberries",
    "refried beans",
    "rice",
    "rice and eggs",
    "rice porridge",
    "rice pudding",
    "roll",
    "rosti",
  ],

  S: [
    "sardines",
    "sausage",
    "sausage egg and cheese",
    "sausage gravy",
    "sausage links",
    "sausage patties",
    "scone",
    "scrambled eggs",
    "scrapple",
    "shakshuka",
    "shrimp and grits",
    "smoothie",
    "smoothie bowl",
    "smoked fish",
    "smoked salmon",
    "soft boiled eggs",
    "souffle",
    "sourdough toast",
    "spam",
    "steak",
    "steak and eggs",
    "strawberries",
    "strudel",
    "sunny side up eggs",
  ],

  T: [
    "tamale",
    "tamales",
    "tater tots",
    "tea",
    "texas toast",
    "toast",
    "tomato juice",
    "tortilla",
    "turkey bacon",
    "turkey sausage",
    "turnover",
  ],

  U: [
    "upma",
  ],

  V: [
    "vanilla yogurt",
  ],

  W: [
    "waffle",
    "waffles",
    "waffles and sausage",
    "walnuts",
    "watermelon",
  ],

  X: [
    "xigua",
  ],

  Y: [
    "yogurt",
    "yogurt parfait",
  ],

  Z: [
    "zucchini bread",
  ],
};
const VALID_ANSWERS = {
  "Ice Cream Flavors": new Set([
    "vanilla",
    "chocolate",
    "strawberry",
    "mint chocolate chip",
    "rocky road",
    "cookies and cream",
    "cookie dough",
    "butter pecan",
    "neapolitan",
  ]),

  Fruits: new Set([
    "apple",
    "banana",
    "orange",
    "pear",
    "grape",
    "grapes",
    "strawberry",
    "strawberries",
    "blueberry",
    "blueberries",
    "raspberry",
    "raspberries",
    "blackberry",
    "blackberries",
    "peach",
    "plum",
    "cherry",
    "cherries",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "mango",
    "pineapple",
    "kiwi",
    "papaya",
    "pomegranate",
    "apricot",
    "nectarine",
    "lime",
    "lemon",
    "grapefruit",
    "tangerine",
    "clementine",
  ]),

  "Books of the New Testament": new Set([
    "matthew",
    "mark",
    "luke",
    "john",
    "acts",
    "romans",
    "1 corinthians",
    "2 corinthians",
    "galatians",
    "ephesians",
    "philippians",
    "colossians",
    "1 thessalonians",
    "2 thessalonians",
    "1 timothy",
    "2 timothy",
    "titus",
    "philemon",
    "hebrews",
    "james",
    "1 peter",
    "2 peter",
    "1 john",
    "2 john",
    "3 john",
    "jude",
    "revelation",
  ]),

Animals: new Set([
"dog",
"cat",
"horse",
"bird",
"fish",
"insect",
"reptile",
"amphibian", 
"aardvark",
"armadillo",
"badger",
"beaver",
"boar",
"bobcat",
"bull",
"calf",
"chipmunk",
"coyote",
"ferret",
"gazelle",
"gerbil",
"hamster",
"hedgehog",
"jackal",
"lemur",
"mink",
"mole",
"mongoose",
"opossum",
"possum",
"ram",
"skunk",
"sloth",
"weasel",
"wolverine",
"blue jay",
"cardinal",
"canary",
"crane",
"cuckoo",
"finch",
"heron",
"hummingbird",
"magpie",
"pelican",
"puffin",
"raven",
"robin",
"seagull",
"sparrow",
"stork",
"swallow",
"woodpecker",
"boa",
"cobra",
"gecko",
"python",
"salamander",
"newt",
"clam",
"eel",
"jellyfish",
"manta ray",
"oyster",
"pufferfish",
"ray",
"seahorse",
"shrimp",
"starfish",
"stingray",
"swordfish",
"tuna",
"beetle",
"butterfly",
"caterpillar",
"centipede",
"cockroach",
"cricket",
"dragonfly",
"fly",
"grasshopper",
"ladybug",
"mosquito",
"moth",
"scorpion",
"spider",
"tarantula",
"termite",
"wasp",
"worm",  
"cow",
"pig",
"sheep",
"goat",
"chicken",
"duck",
"turkey",
"lion",
"tiger",
"bear",
"elephant",
"giraffe",
"zebra",
"monkey",
"ape",
"gorilla",
"wolf",
"fox",
"deer",
"moose",
"rabbit",
"mouse",
"raccoon",
"squirrel",
"alligator",
"crocodile",
"dolphin",
"whale",
"shark",
"seal",
"otter",
"kangaroo",
"koala",
"panda",
"hippo",
"hippopotamus",
"rhino",
"rhinoceros",
"camel",
"donkey",
"llama",
"alpaca",
"buffalo",
"bison",
"cheetah",
"leopard",
"jaguar",
"panther",
"hyena",
"penguin",
"eagle",
"hawk",
"owl",
"parrot",
"snake",
"lizard",
"frog",
"turtle",
"ant",
"bat",
"bee",
"crab",
"dove",
"emu",
"falcon",
"goose",
"iguana",
"jellyfish",
"newt",
"narwhal",
"octopus",
"quail",
"quokka",
"robin",
"scorpion",
"toad",
"urchin",
"vulture",
"walrus",
"worm",
"x-ray tetra",
"xerus",
"yak",
"bird",
"fish",
"insect",
"reptile",
"amphibian",
"mammal",
"aardvark",
"anteater",
"armadillo",
"badger",
"beaver",
"boar",
"bobcat",
"bull",
"calf",
"chinchilla",
"chipmunk",
"coyote",
"elk",
"ferret",
"gazelle",
"gerbil",
"gopher",
"groundhog",
"hamster",
"hedgehog",
"jackal",
"lemur",
"meerkat",
"mink",
"mole",
"mongoose",
"opossum",
"possum",
"platypus",
"porcupine",
"ram",
"reindeer",
"skunk",
"sloth",
"vole",
"weasel",
"wildebeest",
"wolverine",
"baboon",
"chimpanzee",
"orangutan",
"hen",
"rooster",
"chick",
"blue jay",
"cardinal",
"canary",
"crane",
"cuckoo",
"finch",
"flamingo",
"heron",
"hummingbird",
"magpie",
"ostrich",
"pelican",
"puffin",
"raven",
"seagull",
"sparrow",
"stork",
"swallow",
"swan",
"woodpecker",
"boa",
"chameleon",
"cobra",
"gecko",
"python",
"salamander",
"tortoise",
"clam",
"eel",
"lobster",
"manta ray",
"oyster",
"pufferfish",
"ray",
"seahorse",
"shrimp",
"squid",
"starfish",
"stingray",
"swordfish",
"tuna",
"beetle",
"butterfly",
"caterpillar",
"centipede",
"cockroach",
"cricket",
"dragonfly",
"fly",
"grasshopper",
"ladybug",
"mosquito",
"moth",
"spider",
"tarantula",
"termite",
"wasp",  
]),
  Colors: new Set([
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "grey",

  "alice blue",
  "antique white",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "blanched almond",
  "blue violet",
  "burlywood",
  "cadet blue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflower blue",
  "cornsilk",
  "crimson",
  "cyan",
  "dark blue",
  "dark cyan",
  "dark goldenrod",
  "dark gray",
  "dark grey",
  "dark green",
  "dark khaki",
  "dark magenta",
  "dark olive green",
  "dark orange",
  "dark orchid",
  "dark red",
  "dark salmon",
  "dark sea green",
  "dark slate blue",
  "dark slate gray",
  "dark slate grey",
  "dark turquoise",
  "dark violet",
  "deep pink",
  "deep sky blue",
  "dim gray",
  "dim grey",
  "dodger blue",
  "firebrick",
  "floral white",
  "forest green",
  "fuchsia",
  "gainsboro",
  "ghost white",
  "gold",
  "goldenrod",
  "green yellow",
  "honeydew",
  "hot pink",
  "indian red",
  "ivory",
  "khaki",
  "lavender",
  "lavender blush",
  "lawn green",
  "lemon chiffon",
  "light blue",
  "light coral",
  "light cyan",
  "light goldenrod yellow",
  "light gray",
  "light grey",
  "light green",
  "light pink",
  "light salmon",
  "light sea green",
  "light sky blue",
  "light slate gray",
  "light slate grey",
  "light steel blue",
  "light yellow",
  "lime",
  "lime green",
  "linen",
  "magenta",
  "maroon",
  "medium aquamarine",
  "medium blue",
  "medium orchid",
  "medium purple",
  "medium sea green",
  "medium slate blue",
  "medium spring green",
  "medium turquoise",
  "medium violet red",
  "midnight blue",
  "mint cream",
  "misty rose",
  "moccasin",
  "navajo white",
  "navy",
  "old lace",
  "olive",
  "olive drab",
  "orange red",
  "orchid",
  "pale goldenrod",
  "pale green",
  "pale turquoise",
  "pale violet red",
  "papaya whip",
  "peach puff",
  "peru",
  "plum",
  "powder blue",
  "rebecca purple",
  "rosy brown",
  "royal blue",
  "saddle brown",
  "salmon",
  "sandy brown",
  "sea green",
  "seashell",
  "sienna",
  "silver",
  "sky blue",
  "slate blue",
  "slate gray",
  "slate grey",
  "snow",
  "spring green",
  "steel blue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "wheat",
  "white smoke",
  "yellow green",

  "amber",
  "apricot",
  "baby blue",
  "baby pink",
  "bronze",
  "burgundy",
  "cerulean",
  "champagne",
  "charcoal",
  "cobalt",
  "copper",
  "cream",
  "emerald",
  "eggshell",
  "jade",
  "lilac",
  "maize",
  "mauve",
  "mint",
  "mustard",
  "ochre",
  "off white",
  "peach",
  "pearl",
  "periwinkle",
  "rose",
  "rose gold",
  "ruby",
  "rust",
  "sage",
  "sapphire",
  "scarlet",
  "seafoam",
  "seafoam green",
  "sky blue",
  "slate",
  "taupe",
 "vermilion",
"wine",
]),
"Breakfast Foods": new Set([
  "acai bowl",
  "almond butter",
  "almonds",
  "americano",
  "apple",
  "apple cinnamon muffin",
  "apple cinnamon oatmeal",
  "apple danish",
  "apple fritter",
  "apple juice",
  "apple slices",
  "apple turnover",
  "arepa",
  "avocado",
  "avocado toast",

  "bacon",
  "bacon and eggs",
  "bacon and pancakes",
  "bacon and potatoes",
  "bacon and toast",
  "bacon and waffles",
  "bacon bagel",
  "bacon biscuit",
  "bacon croissant",
  "bacon egg and cheese",
  "bacon omelet",
  "bacon sandwich",
  "bacon toast",
  "bagel",
  "bagel and cream cheese",
  "bagel and lox",
  "baked beans",
  "baked tomato",
  "banana",
  "banana bread",
  "banana french toast",
  "banana muffin",
  "banana nut muffin",
  "banana oatmeal",
  "banana pancakes",
  "banana slices",
  "banana smoothie",
  "bean burrito",
  "beans",
  "beans on toast",
  "bear claw",
  "beignet",
  "belgian waffle",
  "berries",
  "berry bowl",
  "berry french toast",
  "berry oatmeal",
  "berry smoothie",
  "biscuit",
  "biscuits",
  "biscuits and gravy",
  "black coffee",
  "black pudding",
  "black tea",
  "blackberries",
  "blintz",
  "blintzes",
  "blueberries",
  "blueberry bagel",
  "blueberry danish",
  "blueberry muffin",
  "blueberry pancakes",
  "blueberry waffles",
  "blueberry yogurt",
  "boiled eggs",
  "bran cereal",
  "bran muffin",
  "bread",
  "breakfast bagel",
  "breakfast bake",
  "breakfast biscuit",
  "breakfast bowl",
  "breakfast burrito",
  "breakfast burritos",
  "breakfast burger",
  "breakfast casserole",
  "breakfast cereal bar",
  "breakfast combo",
  "breakfast croissant",
  "breakfast enchilada",
  "breakfast enchiladas",
  "breakfast flatbread",
  "breakfast hash",
  "breakfast muffin",
  "breakfast nachos",
  "breakfast panini",
  "breakfast pita",
  "breakfast pizza",
  "breakfast plate",
  "breakfast platter",
  "breakfast quesadilla",
  "breakfast roll",
  "breakfast salad",
  "breakfast sandwich",
  "breakfast scramble",
  "breakfast skillet",
  "breakfast slider",
  "breakfast smoothie",
  "breakfast sub",
  "breakfast taco",
  "breakfast tacos",
  "breakfast tea",
  "breakfast toast",
  "breakfast tostada",
  "breakfast torta",
  "breakfast wrap",
  "breakfast potatoes",
  "breakfast ramen",
  "breakfast sausage",
  "brioche french toast",
  "buckwheat pancakes",
  "buttered grits",
  "buttered toast",
  "buttermilk pancakes",
  "buttermilk waffles",

  "cafe au lait",
  "cake donut",
  "canadian bacon",
  "cantaloupe",
  "cappuccino",
  "cereal",
  "chai",
  "chai latte",
  "chapati",
  "cheese",
  "cheese danish",
  "cheese grits",
  "cheese omelet",
  "cheese toast",
  "chia pudding",
  "chia seed pudding",
  "chicken and waffles",
  "chicken fried steak",
  "chicken sausage",
  "chilaquiles",
  "chocolate chip muffin",
  "chocolate chip pancakes",
  "chocolate chip waffles",
  "chocolate donut",
  "chocolate milk",
  "chorizo",
  "chorizo and eggs",
  "chorizo burrito",
  "churros",
  "cinnamon bun",
  "cinnamon danish",
  "cinnamon french toast",
  "cinnamon raisin bagel",
  "cinnamon roll",
  "cinnamon toast",
  "clementine",
  "coffee",
  "coffee cake",
  "cold brew",
  "cold cereal",
  "congee",
  "corn flakes",
  "corn muffin",
  "cornbread",
  "corned beef hash",
  "cottage cheese",
  "country fried steak",
  "country gravy",
  "country ham",
  "country potatoes",
  "cranberry juice",
  "cranberry muffin",
  "cream cheese",
  "cream of rice",
  "cream of wheat",
  "crepe",
  "crepes",
  "croissant",
  "croque madame",
  "croque monsieur",

  "danish",
  "dates",
  "decaf coffee",
  "denver omelet",
  "deviled eggs",
  "donut",
  "doughnut",
  "dosa",
  "dragon fruit bowl",

  "egg and bacon",
  "egg and bean burrito",
  "egg and cheese",
  "egg and ham",
  "egg and potatoes",
  "egg and sausage",
  "egg and toast",
  "egg bagel",
  "egg bake",
  "egg biscuit",
  "egg bites",
  "egg bowl",
  "egg burrito",
  "egg casserole",
  "egg croissant",
  "egg hash",
  "egg mcmuffin",
  "egg muffin",
  "egg sandwich",
  "egg scramble",
  "egg skillet",
  "egg taco",
  "egg toast",
  "egg whites",
  "egg wrap",
  "eggs",
  "eggs and bacon",
  "eggs and sausage",
  "eggs and toast",
  "eggs benedict",
  "eggs florentine",
  "english muffin",
  "espresso",
  "everything bagel",

  "falafel",
  "fig",
  "french toast",
  "fried bacon",
  "fried bread",
  "fried eggs",
  "fried ham",
  "fried mushrooms",
  "fried potatoes",
  "fried sausage",
  "fried tomato",
  "fritter",
  "fresh fruit",
  "fruit",
  "fruit and yogurt",
  "fruit bowl",
  "fruit salad",
  "fruit smoothie",
  "fruit yogurt",
  "full english breakfast",
  "ful medames",

  "glazed donut",
  "granola",
  "granola and yogurt",
  "granola bar",
  "granola bowl",
  "granola cereal",
  "grape juice",
  "grapefruit",
  "grapefruit half",
  "grapefruit juice",
  "grapes",
  "green smoothie",
  "green tea",
  "greek yogurt",
  "grilled cheese",
  "grilled tomato",
  "grits",
  "grits and eggs",

  "halwa",
  "ham",
  "ham and cheese omelet",
  "ham and eggs",
  "ham and potatoes",
  "ham and toast",
  "ham biscuit",
  "ham croissant",
  "ham egg and cheese",
  "ham omelet",
  "ham sandwich",
  "hard boiled eggs",
  "hash",
  "hash brown casserole",
  "hash brown patties",
  "hash browns",
  "herring",
  "home fries",
  "honey",
  "honey yogurt",
  "honeydew",
  "hot cereal",
  "hot chocolate",
  "hot tea",
  "hotcakes",
  "huevos rancheros",
  "hummus",
  "hummus and pita",

  "iced coffee",
  "iced tea",
  "idli",
  "instant oatmeal",

  "jam",
  "jelly",
  "jelly donut",
  "johnnycakes",
  "juice",

  "kiwi",
  "kolache",

  "labneh",
  "latte",
  "lemon muffin",
  "lemonade",
  "lox",
  "lox and bagel",

  "macchiato",
  "machaca and eggs",
  "mango",
  "maple oatmeal",
  "maple syrup",
  "marmalade",
  "melon",
  "menemen",
  "migas",
  "milk",
  "mixed berries",
  "mixed fruit",
  "mocha",
  "morning bun",
  "muffin",
  "muesli",
  "mushroom omelet",
  "mushrooms",

  "naan",
  "nectarine",
  "nuts",

  "oat cereal",
  "oatmeal",
  "omelet",
  "omelette",
  "onion bagel",
  "orange",
  "orange juice",
  "over easy eggs",
  "over hard eggs",
  "over medium eggs",
  "overnight oatmeal",
  "overnight oats",

  "pancake",
  "pancakes",
  "pancakes and bacon",
  "pancake stack",
  "pan dulce",
  "papaya",
  "paratha",
  "parfait",
  "pastry",
  "peach",
  "peach yogurt",
  "peanut butter",
  "pear",
  "pecan roll",
  "pecans",
  "pineapple",
  "pineapple juice",
  "pita",
  "pitaya bowl",
  "plain bagel",
  "plain yogurt",
  "poached eggs",
  "poha",
  "poppy seed muffin",
  "porridge",
  "pork roll",
  "pork sausage",
  "potato hash",
  "potato pancakes",
  "potatoes",
  "powdered donut",
  "protein bar",
  "protein pancakes",
  "protein shake",
  "protein waffles",
  "pudding",
  "pumpkin bread",
  "pumpkin muffin",

  "quiche",

  "raisin bran",
  "raisin toast",
  "raisins",
  "raspberries",
  "red eye gravy",
  "refried beans",
  "rice",
  "rice and eggs",
  "rice cereal",
  "rice krispies",
  "rice porridge",
  "rice pudding",
  "roast beef hash",
  "roll",
  "rolled oats",
  "rosti",

  "salmon and eggs",
  "salmon benedict",
  "sardines",
  "sausage",
  "sausage and eggs",
  "sausage and pancakes",
  "sausage and waffles",
  "sausage bagel",
  "sausage biscuit",
  "sausage burrito",
  "sausage croissant",
  "sausage egg and cheese",
  "sausage gravy",
  "sausage links",
  "sausage patties",
  "sausage sandwich",
  "sausage toast",
  "scone",
  "scrambled eggs",
  "scrapple",
  "sesame bagel",
  "shakshuka",
  "short stack",
  "shredded wheat",
  "shrimp and grits",
  "smoothie",
  "smoothie bowl",
  "smoked fish",
  "smoked salmon",
  "soft boiled eggs",
  "souffle",
  "sourdough toast",
  "spam",
  "spinach omelet",
  "steak",
  "steak and eggs",
  "steel cut oats",
  "sticky bun",
  "strawberries",
  "strawberry french toast",
  "strawberry pancakes",
  "strawberry smoothie",
  "strawberry waffles",
  "strawberry yogurt",
  "strudel",
  "stuffed french toast",
  "sunny side up eggs",
  "sweet potato hash",

  "tamale",
  "tamales",
  "tater tots",
  "tea",
  "texas toast",
  "toast",
  "toast and butter",
  "toast and eggs",
  "toast and honey",
  "toast and jam",
  "toast and jelly",
  "toast and peanut butter",
  "tomato juice",
  "tortilla",
  "turkey bacon",
  "turkey sausage",
  "turnover",

  "upma",

  "vanilla yogurt",
  "vegetable juice",
  "vegetable omelet",
  "veggie omelet",

  "waffle",
  "waffles",
  "waffles and sausage",
  "walnuts",
  "water",
  "watermelon",
  "western omelet",
  "white gravy",
  "white pudding",

  "xigua",

  "yogurt",
  "yogurt parfait",

  "zucchini bread",
]),

  Cookies: new Set([
    "chocolate chip",
    "oatmeal raisin",
    "peanut butter",
    "sugar cookie",
    "snickerdoodle",
    "gingerbread",
    "shortbread",
    "oreo",
  ]),

  "Board Games": new Set([
    "chess",
    "checkers",
    "monopoly",
    "scrabble",
    "clue",
    "sorry",
    "risk",
    "pictionary",
    "battleship",
    "connect four",
    "yahtzee",
    "catan",
    "ticket to ride",
  ]),
};

function getNextCategory(current) {
  const currentIndex = CATEGORIES.indexOf(current);

  if (currentIndex === -1 || currentIndex === CATEGORIES.length - 1) {
    return CATEGORIES[0];
  }

  return CATEGORIES[currentIndex + 1];
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function normalize(text) {
  let value = text.trim().toLowerCase();

  const irregularPlurals = {
    mice: "mouse",
    geese: "goose",
    feet: "foot",
    teeth: "tooth",
    children: "child",
  };

  if (irregularPlurals[value]) {
    return irregularPlurals[value];
  }

  if (value.endsWith("ies") && value.length > 3) {
    return value.slice(0, -3) + "y";
  }

  if (
    value.endsWith("s") &&
    !value.endsWith("ss") &&
    !value.endsWith("us") &&
    value.length > 3
  ) {
    return value.slice(0, -1);
  }

  return value;
}

function isValidColorAnswer(answer) {
  const value = answer.trim().toLowerCase();
  const colors = VALID_ANSWERS.Colors;

  if (colors.has(value)) {
    return true;
  }

  const shadeModifiers = [
    "light",
    "dark",
    "bright",
    "deep",
    "pale",
    "soft",
    "neon",
    "pastel",
    "vivid",
    "muted",
    "dusty",
    "electric",
    "fluorescent",
    "metallic",
    "warm",
    "cool",
    "very light",
    "very dark",
  ];

  for (const modifier of shadeModifiers) {
    if (value.startsWith(`${modifier} `)) {
      const baseColor = value.slice(modifier.length + 1);

      if (colors.has(baseColor)) {
        return true;
      }
    }
  }

  return false;
}
export default function MessedUpGameSoloVsComputer() {
  const [playMode, setPlayMode] = useState("single");
  const [letterIndex, setLetterIndex] = useState(0);

const currentLetter = LETTERS[letterIndex];
  
  const [category, setCategory] = useState("Animals");
  const [answer, setAnswer] = useState("");
  const [usedAnswers, setUsedAnswers] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const [score, setScore] = useState(0);

  const [level, setLevel] = useState(1);

  const [levelCorrect, setLevelCorrect] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [champion, setChampion] = useState(false);
  const audioRef = useRef(null);
  const [message, setMessage] = useState(
    "Choose Single Category or A-to-Z Challenge, then press START GAME. You have 20 seconds for each answer."
  );

  const levelInfo = useMemo(
    () => LEVELS.find((item) => item.level === level) || LEVELS[0],
    [level]
  );

  const [timeLeft, setTimeLeft] = useState(levelInfo.seconds);

  const maxStrikes = 3;

  useEffect(() => {
    const song = new Audio("/audio/it-comes-from-loving-you.mp3");
    song.preload = "metadata";
    song.loop = true;
    song.volume = 0.75;
    audioRef.current = song;

    return () => {
      song.pause();
      song.removeAttribute("src");
      song.load();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!gameOver && !champion) return;

    const song = audioRef.current;
    if (song) {
      song.pause();
      song.currentTime = 0;
    }
  }, [gameOver, champion]);

  useEffect(() => {
    setTimeLeft(levelInfo.seconds);
  }, [category, level, levelInfo.seconds]);

  useEffect(() => {
    if (!gameStarted || gameOver || champion) return;

    if (timeLeft <= 0) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      setAnswer("");

      if (newStrikes >= maxStrikes) {
        setGameOver(true);
        setMessage("⏰ Time ran out. That was strike 3 — game over!");
      } else {
        setMessage(`⏰ Time ran out. Strike ${newStrikes}! Try the next one.`);
        setTimeLeft(levelInfo.seconds);
      }
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [
    timeLeft,
    gameStarted,
    gameOver,
    champion,
    strikes,
    levelInfo.seconds,
  ]);

  const registerStrike = (text) => {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    setAnswer("");

    if (newStrikes >= maxStrikes) {
      setGameOver(true);
      setMessage(`${text} Strike 3 — game over!`);
    } else {
      setMessage(`${text} Strike ${newStrikes}!`);
      setTimeLeft(levelInfo.seconds);
    }
  };

 const registerCorrect = (key) => {
  const newLevelCorrect = levelCorrect + 1;

  setUsedAnswers((prev) => [...prev, key]);
  setScore((prev) => prev + 1);
  setAnswer("");

  if (playMode === "atoz") {
    if (letterIndex >= LETTERS.length - 1) {
      setChampion(true);
      setMessage(
        "🏆 A-to-Z CHAMPION! You made it all the way from A to Z!"
      );
      return;
    }

    setLetterIndex((prev) => prev + 1);
    setMessage(
      `✅ Correct! Next letter: ${LETTERS[letterIndex + 1]}.`
    );
    setTimeLeft(levelInfo.seconds);
    return;
  }

  if (newLevelCorrect >= levelInfo.target) {
    if (level >= LEVELS.length) {
      setLevelCorrect(levelInfo.target);
      setChampion(true);
      setMessage(
        "🏆 CHAMPION! You completed Level 5 of The Messed Up Game!"
      );
    } else {
      const nextLevel = level + 1;

      setLevel(nextLevel);
      setLevelCorrect(0);
     
      setMessage(
        `🎉 LEVEL UP! Welcome to Level ${nextLevel}: ${
          LEVELS[nextLevel - 1].name
        }!`
      );
    }
  } else {
    setLevelCorrect(newLevelCorrect);

    setMessage(
      `✅ Correct! ${newLevelCorrect} of ${levelInfo.target} toward Level ${
        level >= LEVELS.length ? "Champion" : level + 1
      }.`
    );
  }

  setTimeLeft(levelInfo.seconds);
};
  
const handleStartGame = () => {
  const song = audioRef.current;
  if (song) {
    song.currentTime = 0;
    song.play().catch((error) => {
      console.warn("The song could not start automatically:", error);
    });
  }

  setGameStarted(true);
  setGameOver(false);
  setChampion(false);
  setStrikes(0);
  setScore(0);
  setLevel(1);
  setLevelCorrect(0);
  setUsedAnswers([]);
  setAnswer("");
  setLetterIndex(0);
  setTimeLeft(LEVELS[0].seconds);

  if (playMode === "atoz") {
    if (category === "Colors") {
      setMessage(
        "🌈 Colors A-to-Z Challenge! Letter A — name a color beginning with A."
      );
    } else if (category === "Breakfast Foods") {
      setMessage(
        "🍳 Breakfast Foods A-to-Z Challenge! Letter A — name a breakfast food beginning with A."
      );
    } else {
      setMessage(
        "🐶 Animals A-to-Z Challenge! Letter A — name an animal beginning with A."
      );
    }
  } else {
    if (category === "Colors") {
      setMessage(
        "🎨 Level 1: Colors! You have 20 seconds to name a color."
      );
    } else if (category === "Breakfast Foods") {
      setMessage(
        "🍳 Level 1: Breakfast Foods! You have 20 seconds to name a breakfast food."
      );
    } else {
      setMessage(
        "🐶 Level 1: Animals! You have 20 seconds to name an animal."
      );
    }
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gameStarted || gameOver || champion) return;

  const trimmed = answer.trim();

  if (!trimmed) {
    setMessage("⚠️ Please type an answer first.");
    return;
  }

  const rawAnswer = trimmed.toLowerCase();
const normalized = normalize(trimmed);
const key = `${category.toLowerCase()}::${normalized}`;

  if (usedAnswers.includes(key)) {
    registerStrike("❌ You already used that answer.");
    return;
  }

  const validSet = VALID_ANSWERS[category];


if (category === "Colors") {
  if (!isValidColorAnswer(normalized)) {
    registerStrike(`❌ That doesn’t look like it fits “Colors”.`);
    return;
  }

  registerCorrect(key);
  return;
}

if (!validSet && OBVIOUS_WRONG.has(normalized)) {
  registerStrike(`❌ That clearly doesn’t fit “${category}”.`);
  return;
}

if (
  validSet &&
  !validSet.has(rawAnswer) &&
  !validSet.has(normalized)
) {
  registerStrike(`❌ That doesn’t look like it fits “${category}”.`);
  return;
}

registerCorrect(key);
};

const handleNextCategory = () => {
  if (!gameStarted || gameOver || champion) return;

  const currentIndex = CATEGORIES.indexOf(category);
  const nextIndex = (currentIndex + 1) % CATEGORIES.length;
  const nextCategory = CATEGORIES[nextIndex];

  setCategory(nextCategory);
  setAnswer("");
  setMessage(
    `🔁 New category: ${nextCategory}! Your level progress stays with you.`
  );
  setTimeLeft(levelInfo.seconds);
};

  const handleGiveStrike = () => {
    if (!gameStarted || gameOver || champion) return;
    registerStrike("⚠️ Honest call.");
  };

  const handlePlayAgain = () => {
  setCategory("Animals");
  setAnswer("");
  setUsedAnswers([]);
  setStrikes(0);
  setScore(0);
  setLevelCorrect(0);
  setLevel(1);
  setGameStarted(false);
  setGameOver(false);
  setChampion(false);
  setLetterIndex(0);
  setTimeLeft(LEVELS[0].seconds);

  setMessage(
    "Choose Single Category or A-to-Z Challenge, then press START GAME. You have 20 seconds for each answer."
  );
};

  const progressDots = Array.from(
    { length: levelInfo.target },
    (_, index) => (index < levelCorrect ? "⭐" : "○")
  ).join(" ");

  const page = {
    minHeight: "100vh",
    padding: "24px 12px 40px",
    background: "radial-gradient(circle at top, #0f172a, #020617 55%)",
    color: "#e5e7eb",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  };

  const card = {
    maxWidth: 900,
    margin: "0 auto",
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: 18,
    padding: "22px 22px 26px",
    boxShadow: "0 18px 40px rgba(0,0,0,.45)",
    border: "1px solid rgba(148, 163, 184, 0.5)",
  };

  const title = { fontSize: 30, fontWeight: 900, marginBottom: 4 };
  const subtitle = { opacity: 0.9, marginBottom: 18, lineHeight: 1.4 };

  const categoryBox = {
    padding: "14px 16px",
    borderRadius: 12,
    background: "rgba(2,132,199,.12)",
    border: "1px solid rgba(56,189,248,.55)",
    fontSize: 22,
    fontWeight: 900,
    textAlign: "center",
  };

  const levelBox = {
    marginBottom: 16,
    padding: 16,
    borderRadius: 14,
    background: "rgba(250,204,21,.10)",
    border: "1px solid rgba(250,204,21,.45)",
    textAlign: "center",
  };

  const statsRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
    marginBottom: 14,
  };

  const statPill = {
    padding: "7px 12px",
    borderRadius: 999,
    fontSize: 14,
    display: "flex",
    alignItems: "start",
    gap: 6,
    background: "rgba(15,23,42,0.9)",
    border: "1px solid rgba(148,163,184,.5)",
  };

  const formRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  };

  const input = {
    flex: 1,
    minWidth: 220,
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontSize: 16,
  };

  const primaryButton = {
    padding: "11px 16px",
    borderRadius: 10,
    border: "none",
    background: "#0ea5e9",
    color: "#0f172a",
    fontWeight: 900,
    cursor: "pointer",
    minWidth: 110,
  };

  const secondaryButton = {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    fontWeight: 700,
    cursor: "pointer",
    minWidth: 140,
  };

  const backButton = {
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid rgba(148,163,184,.7)",
    background: "rgba(15,23,42,0.95)",
    color: "#e5e7eb",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 14,
  };

  return (
    <section style={page}>
      <div style={{ padding: "10px 12px 4px", maxWidth: 900, margin: "0 auto" }}>
        <button
          type="button"
          style={backButton}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← Back to Home
        </button>
      </div>

      <div style={card}>
        <h1 style={title}>🎲 The Messed Up Game — Level Challenge</h1>
        <p style={subtitle}>
          Level 1 starts with Animals. Press START GAME when you’re ready.
          Then you have 20 seconds for each answer. Get 5 correct to level up.
          Don’t repeat. 3 strikes and you’re out.
        </p>

        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            margin: "12px 0 16px",
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(250,204,21,.14)",
            border: "1px solid rgba(250,204,21,.35)",
            color: "#fef3c7",
            fontSize: 16,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          🎵 “It Comes From Loving You” starts when you press START GAME — audio only.
        </div>

        <div style={levelBox}>
          <div style={{ fontSize: 14, fontWeight: 800, opacity: 0.9 }}>
            LEVEL {level}
          </div>
          <div style={{ fontSize: 28, fontWeight: 950 }}>
            {levelInfo.name}
          </div>
          <div style={{ fontSize: 26, marginTop: 8 }}>{progressDots}</div>
          <div style={{ marginTop: 6, fontWeight: 800 }}>
            {levelCorrect} of {levelInfo.target} correct
          </div>
        </div>

        <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 6 }}>
          Current category
        </div>
        <div style={categoryBox}>{category}</div>

        <div style={statsRow}>
          <div style={statPill}>
            ⏱️ Time: {gameStarted ? `${timeLeft}s` : "READY"}
          </div>
          <div style={statPill}>✅ Total Score: {score}</div>
          <div style={statPill}>
            ❌ Strikes: {strikes} / {maxStrikes}
          </div>
          <div style={statPill}>🧠 Unique: {usedAnswers.length}</div>
        </div>

        {!gameStarted && !gameOver && !champion && (
  <>
    <div
      style={{
        display: "flex",
        gap: 12,
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "14px 0",
      }}
    >
      <button
        type="button"
        style={{
          ...secondaryButton,
          background:
            playMode === "single" && category === "Animals"
              ? "#22c55e"
              : "rgba(255,255,255,.08)",
          color:
            playMode === "single" && category === "Animals"
              ? "#052e16"
              : "white",
          fontWeight: 900,
        }}
        onClick={() => {
          setPlayMode("single");
          setCategory("Animals");
          setLetterIndex(0);
          setMessage(
            "🐶 Animals selected. Press START GAME when you’re ready."
          );
        }}
      >
        🐶 Animals
      </button>

      <button
        type="button"
        style={{
          ...secondaryButton,
          background:
            playMode === "single" && category === "Colors"
              ? "#a855f7"
              : "rgba(255,255,255,.08)",
          color: "white",
          fontWeight: 900,
        }}
        onClick={() => {
          setPlayMode("single");
          setCategory("Colors");
          setLetterIndex(0);
          setMessage(
            "🎨 Colors selected. Press START GAME when you’re ready."
          );
        }}
      >
        🎨 Colors
      </button>

      <button
        type="button"
        style={{
          ...secondaryButton,
         background:
  playMode === "atoz" && category === "Animals"
    ? "#facc15"
    : "rgba(255,255,255,.08)",
color:
  playMode === "atoz" && category === "Animals"
    ? "#422006"
    : "white",
          fontWeight: 900,
        }}
        onClick={() => {
          setPlayMode("atoz");
          setCategory("Animals");
          setLetterIndex(0);
          setMessage(
            "🔤 A-to-Z Challenge selected. Start with A and work your way to Z!"
          );
        }}
      >
        🔤 Animals A-to-Z
      </button>
      <button
  type="button"
  style={{
    ...secondaryButton,
    background:
      playMode === "atoz" && category === "Colors"
        ? "#a855f7"
        : "rgba(255,255,255,.08)",
    color: "white",
    fontWeight: 900,
  }}
  onClick={() => {
    setPlayMode("atoz");
    setCategory("Colors");
    setLetterIndex(0);
    setMessage(
      "🌈 Colors A-to-Z selected. Start with A and work your way to Z!"
    );
  }}
>
  🌈 Colors A-to-Z
</button>
   <button
  type="button"
  style={{
    ...secondaryButton,
    background:
      playMode === "single" && category === "Breakfast Foods"
        ? "#f59e0b"
        : "rgba(255,255,255,.08)",
    color: "white",
    fontWeight: 900,
  }}
  onClick={() => {
    setPlayMode("single");
    setCategory("Breakfast Foods");
    setMessage(
      "🍳 Breakfast Foods selected. Press START GAME when you're ready!"
    );
  }}
>
  🍳 Breakfast Foods
</button>

<button
  type="button"
  style={{
    ...secondaryButton,
    background:
      playMode === "atoz" && category === "Breakfast Foods"
        ? "#f59e0b"
        : "rgba(255,255,255,.08)",
    color: "white",
    fontWeight: 900,
  }}
  onClick={() => {
    setPlayMode("atoz");
    setCategory("Breakfast Foods");
    setLetterIndex(0);
    setMessage(
      "🍳 Breakfast Foods A-to-Z selected. Start with A and work your way to Z!"
    );
  }}
>
  🍳 Breakfast Foods A-to-Z
</button>   
    </div>

    <button
      type="button"
      style={{
        ...primaryButton,
        width: "100%",
        marginTop: 6,
        padding: "16px 20px",
        fontSize: 20,
        background: "#22c55e",
        color: "#052e16",
      }}
      onClick={handleStartGame}
    >
      ▶ START GAME
    </button>
  </>
)}
  
        {gameStarted && !champion && (
          <form onSubmit={handleSubmit}>
            <div style={formRow}>
              <input
                style={input}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={gameOver}
                autoFocus
                placeholder="Type your answer..."
              />
              
              <button
  type="submit"
  style={primaryButton}
  disabled={gameOver}
>
  Submit
</button>
              {playMode === "single" && (
  <button
    type="button"
    style={secondaryButton}
    onClick={handleNextCategory}
    disabled={gameOver}
  >
    New Category
  </button>
)}

              <button
                type="button"
                style={secondaryButton}
                onClick={handleGiveStrike}
                disabled={gameOver}
              >
                Give Myself a Strike
              </button>
            </div>
          </form>
        )}

        {(gameOver || champion) && (
          <button
            type="button"
            style={{
              ...primaryButton,
              marginTop: 14,
              background: "#22c55e",
              color: "#022c22",
            }}
            onClick={handlePlayAgain}
          >
            Reset to Level 1
          </button>
        )}

        <div
          style={{
            marginTop: 16,
            padding: "12px 14px",
            borderRadius: 12,
            background: champion
              ? "rgba(250,204,21,.14)"
              : "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.10)",
            lineHeight: 1.5,
            fontWeight: champion ? 900 : 700,
          }}
        >
          {message}
        </div>

        <p style={{ marginTop: 14, fontSize: 13, opacity: 0.72 }}>
          Some categories are automatically checked. For open-ended categories,
          use the honor system and give yourself a strike if an answer does not
          truly fit.
        </p>
      </div>
    </section>
  );
}
