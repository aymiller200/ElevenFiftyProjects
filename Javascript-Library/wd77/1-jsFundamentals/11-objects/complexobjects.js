/*
OBJECTS
*/
let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                { episode: 1, episodeName: 'Pilot' },
                { episode: 2, episodeName: 'Magazine Profile' },
                { episode: 3, episodeName: 'Shats and Salsa' },
                { episode: 4, episodeName: 'Mannequin' },
                { episode: 5, episodeName: 'Shoplifter' },
                { episode: 6, episodeName: 'Secret Shopper' },
                { episode: 7, episodeName: 'Color Wars' },
                { episode: 8, episodeName: 'Wedding Day Sale' },
                { episode: 9, episodeName: 'All-Nighter' },
                { episode: 10, episodeName: 'Demotion' },
                { episode: 11, episodeName: 'Labor' }
            ]

        }
    },
    season2: {},
    season3: {}
}

console.log(netflix); //the whole object
console.log(netflix.season1); //the season 1 object
console.log(netflix.season1.seasonInfo); //season info object w/ array 
console.log(netflix.season1.seasonInfo.episodeInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//Pick an episode to log in the terminal
//Using dot notation, walk through the netflix object and print off both the episode number, 
//and the episode name.

console.log(netflix.season1.seasonInfo.episodeInfo[6].episode, netflix.season1.seasonInfo.episodeInfo[6].episodeName);

//JSON -> Javascript Object Notation 
//Allows you to share info that has to be sent as text or as a string across the wed to do so. 
//JSON will let us take a 'stringified' object and convert it to object notation (JSON.eval)
//can also take an object and turn into 'stringified' format (JSON.parse)

varjson = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString()); //.toString gives you the stuff inside the object as a single string

console.log(Object.values(spaceJam)); //Object.values gives you an array back consisting of the values in the object
console.log(Object.values(spaceJam.toonSquad));

let garden= {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true, 
    sun: true,
    size: 10,
}

console.log(garden.vegetable); //Use dot notation with a ket name, and you're going to get that value back.

let inc = 'fruit';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);
console.log(baking.bestKeyEver); //can add key value pairs to object with square bracket notation, or dot notation.
console.log(baking[baking.bestKeyEver]); 

let g = 'water'

Object.keys(garden).forEach(key => {
    if (key == g) {
        console.log(garden[key]);
    }
})
