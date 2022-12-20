class SteamUser {
    constructor(balanace) {
        this.balance = balanace;
        this.games = [];
        this.wishlist = [];

    }
    purchaseGame(game) {
        if (this.balance > game.price) {
            this.balance -= game.price;
            this.games.push(game);

            // console.log(this.games);
        } else {
            throw Error("You do no have enough balance to purchase this game!");
        }
    }

    addWishlist(game) {
        if (this.games.includes(game)) {
            throw Error("You already own this game.")
        } else {
            this.wishlist.push(game);
            // console.log(this.wishlist)
        }
    }

    sortGamesBy(input) {
        if (input === "name") {
            this.games.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            console.log(this.games);
        }

        else if (input === "price") {
            this.games.sort((a, b) => {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            });
            console.log(this.games);
        }
    }

}

module.exports = SteamUser;