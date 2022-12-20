// 3. Mock out some functionality of Steam.
//    a) Declare a class `Game` that takes two arguments in it's constructor, `name` and `price`.
//    b) Create 5 games with different names and prices.
//    c) Declare a class: `SteamUser`, that takes one argument in it's constructor ,`balance` and sets this property on the user, 
//    as well as an empty array `games`.

//    c) Write a function on that SteamUser class that lets a user purchase a game, if they have enough `balance` to afford the `price` of the game. 
//    If they can not afford it, throw an error.
//    d) Write a function on that SteamUser class that lets a user wishlist a game. If they already own it, throw an error.
//    e) Write a function on that SteamUser that logs out a SteamUser's games alphabetically.
//    f) Change the function you wrote in `e)` to take a single argument, `sortType`, to let the user decide to sort them alphabetically or by price. 
//    Change the function to use that sortType and sort appropriately based on it.

// require here
const Game = require('./games/game');
const godOfWar = require('./games/godOfWar');
const amongUs = require('./games/amongUs');
const cyberPunk2077 = require('./games/cyberpunk2077');
const eldenRing = require('./games/eldenRing');
const modernWarfare2 = require('./games/modernWarfare2');
const yahoo = require('./steamUsers/yahoo');

// log initialized user to show empty game lists
console.log(yahoo);

// purchase games here. last game commented out to not throw error. Uncomment to simulate
// the throw error of not having enugh balance to purchase game
yahoo.purchaseGame(eldenRing);
yahoo.purchaseGame(godOfWar);
yahoo.purchaseGame(modernWarfare2);
yahoo.purchaseGame(cyberPunk2077);
// yahoo.purchaseGame(amongUs); //will go over budget and throw error if ran


console.log("Before sort:\n")
console.log(yahoo.games);

console.log("Sorted by name:")
yahoo.sortGamesBy("name");

console.log("Sorted by price:")
yahoo.sortGamesBy("price");

yahoo.addWishlist(amongUs);
