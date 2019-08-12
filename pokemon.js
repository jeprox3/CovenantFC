

    var pokemon = prompt("What Pokemon would you like to battle?", "Lugia");


    var normalType = ["Farfetchd", "Dodrio", "Wigglytuff", "Raticate", "Persian", "Lickitung", "Chansey", "Kangaskhan", "Tauros", "Ditto", "Porygon", "Snorlax", "Togepi", "Togetic", "Aipom", "Granbull", "Ursaring", "Porygon2", "Stantler", "Smeargle", "Miltank", "Blissey", "Zigzagoon", "Linoone", "Swellow", "Slakoth", "Vigoroth", "Slaking", "Whismur", "Loudred", "Exploud", "Skitty", "Delcatty", "Spinda", "Swablu", "Zangoose", "Castform", "Kecleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Ambipom", "Buneary", "Lopunny", "Glameow", "Purugly", "Happiny", "Chatot", "Munchlax", "Lickilicky", "Togekiss", "Porygon-Z", "Regigigas", "Arceus"];

    var fightingType = ["Mewtwo", "Poliwrath", "Blaziken", "Primeape", "Machamp", "Heracross", "Hitmonlee", "Hitmonchan", "Tyrogue", "Hitmontop", "Breloom", "Makuhita", "Hariyama", "Meditite", "Medicham", "Monferno", "Infernape", "Lopunny", "Riolu", "Lucario", "Croagunk", "Toxicroak", "Gallade", "Pignite"];

    var flyingType = ["Lugia", "Ho-Oh", "Charizard", "Moltres", "Gyarados", "Zapdos", "Articuno", "Dragonite", "Crobat", "Farfetchd", "Dodrio", "Golbat", "Aerodactyl", "Scyther", "Noctowl", "Togetic", "Jumpluff", "Yanma", "Murkrow", "Gligar", "Delibird", "Mantine", "Skarmory", "Beautifly", "Taillow", "Swellow", "Wingull", "Pelipper", "Masquerain", "Ninjask", "Swablu", "Altaria", "Tropius", "Salamence", "Rayquaza", "Starly", "Staravia", "Staraptor", "Mothim", "Combee", "Vespiquen", "Drifloon", "Drifblim", "Honchkrow", "Chatot", "Mantyke", "Togekiss", "Yanmega", "Gliscor", "Rotom", "Shaymin"];
    
    var groundType = ["Golem", "Rhydon", "Steelix", "Nidoqueen", "Nidoking", "Sandslash", "Marowak", "Quagsire", "Gligar", "Swinub", "Donphan", "Marshtomp", "Swampert", "Nincada", "Numel", "Camerupt", "Trapinch", "Vibrava", "Flygon", "Barboach", "Whiscash", "Baltoy", "Claydol", "Groudon", "Torterra", "Wormadam", "Gastrodon", "Gible", "Gabite", "Garchomp", "Hippopotas", "Hippowdon", "Rhyperior", "Gliscor", "Mamoswine"];

    var poisonType = ["Gengar", "Venusaur", "Crobat", "Weezing", "Muk", "Golbat", "Nidoqueen", "Nidoking", "Tentacruel", "Vileplume", "Victreebel", "Arbok", "Nidorino", "Roselia", "Gulpin", "Swalot", "Seviper", "Budew", "Roserade", "Stunky", "Skuntank", "Skorupi", "Drapion", "Croagunk", "Toxicroak"];

    var rockType = ["Tyranitar", "Golem", "Rhydon", "Omastar", "Aerodactyl", "Kabutops", "Corsola", "Aron", "Lairon", "Aggron", "Lunatone", "Solrock", "Lileep", "Cradily", "Anorith", "Armaldo", "Relicanth", "Regirock", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Bonsly", "Rhyperior", "Probopass"];

    var bugType = ["Scizor", "Scyther", "Pinsir", "Forretress", "Silcoon", "Beautifly", "Surskit", "Masquerain", "Nincada", "Ninjask", "Shedinja", "Volbeat", "Illumise", "Anorith", "Armaldo", "Kricketot", "Kricketune", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Skorupi", "Yanmega"];

    var ghostType = ["Gengar", "Marowak", "Misdreavus", "Shedinja", "Sableye", "Shuppet", "Banette", "Duskull", "Dusclops", "Drifloon", "Drifblim", "Mismagius", "Spiritomb", "Dusknoir", "Froslass", "Rotom", "Giratina"];

    var steelType = ["Steelix", "Scizor", "Megneton", "Forretress", "Skarmory", "Mawile", "Aron", "Lairon", "Aggron", "Beldum", "Metang", "Metagross", "Registeel", "Jirachi", "Empoleon", "Shieldon", "Bastiodon", "Wormadam", "Bronzor", "Bronzong", "Lucario", "Magnezone", "Probopass", "Dialga", "Heatran"];

    var fireType = ["Entei", "Ho-Oh", "Blaziken", "Moltres", "Charizard", "Ninetales", "Arcanine", "Rapidash", "Magmar", "Flareon", "Magcargo", "Houndoom", "Magby", "Numel", "Camerupt", "Torkoal", "Castform", "Groudon", "Chimchar", "Monferno", "Infernape", "Magmortar", "Rotom", "Heatran", "Victini", "Tepig", "Pignite"];

    var waterType = ["Gyarados", "Lapras", "Vaporeon", "Omastar", "Kabutops", "Blastoise","Feraligatr", "Golduck", "Poliwrath", "Tentacruel", "Dewgong", "Cloyster", "Kingler", "Seadra", "Seaking", "Chinchou", "Lanturn", "Marill", "Azumarill", "Politoed", "Wooper", "Quagsire", "Slowking", "Qwilfish", "Corsola", "Remoraid", "Octillery", "Mantine", "Kingdra", "Suicune", "Mudkip", "Marshtomp", "Swampert", "Lotad", "Lombre", "Ludicolo", "Wingull", "Pelipper", "Surskit", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Feebas", "Milotic", "Castform", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Kyogre", "Piplup", "Prinplup", "Empoleon", "Bibarel", "Buizel", "Floatzel", "Shellos", "Gastrodon", "Finneon", "Lumineon", "Mantyke", "Rotom", "Palkia", "Phione", "Manaphy"];

    var grassType = ["Coming Soon"];

    var electricType = ["Raikou", "Zapdos", "Magneton", "Raichu", "Electrode", "Electabuzz", "Jolteon", "Pikachu", "Magnemite", "Elekid", "Electrike", "Manectric", "Plusle", "Minun", "Shinx", "Luxio", "Luxray", "Pachirisu", "Magnezone", "Electivire", "Rotom"];

    var psychicType = ["Lugia", "Alakazam", "Mewtwo", "Slowbro", "Exeggutor", "Jynx", "Mr-mime", "Hypno", "Unown", "Celebi", "Ralts", "Kirlia", "Gardevoir", "Meditite", "Medicham", "Spoink", "Grumpig", "Lunatone", "Solrock", "Baltoy", "Claydol", "Chimecho", "Wynaut", "Beldum", "Metang", "Metagross", "Latias", "Latios", "Jirachi", "Deoxys", "Chingling", "Bronzor", "Bronzong", "Mime Jr.", "Gallade", "Uxie", "Mesprit", "Azelf", "Cresselia", "Victini"];

    var iceType = ["Lapras", "Articuno", "Jynx", "Regice", "Dewgong", "Cloyster", "Sneasel", "Piloswine", "Delibird", "Smoochum", "Castform", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Snover", "Abomasnow", "Weavile", "Glaceon", "Mamoswine", "Froslass", "Rotom"];

    var dragonType = ["Dragonite", "Dratini", "Dragonair", "Kingdra", "Sceptile", "Vibrava", "Flygon", "Altaria", "Bagon", "Shelgon", "Salamence", "Latias", "Latios", "Rayquaza", "Gible", "Gabite", "Garchomp", "Dialga", "Palkia", "Giratina"];

    var darkType = ["Coming Soon"];

    var fairyType= ["Wigglytuff", "Clefable", "Granbull", "Mr-mime", "Jigglypuff", "Clefairy", "Snubbull", "Ralts", "Kirlia", "Gardevoir", "Azurill", "Mawile", "Altaria", "Mime Jr.", "Togekiss"];
    

    








    if (normalType.indexOf(pokemon )>=0) {
        document.write("You should use " + fightingType.slice(0,6).join(" or "));
    } 
    else if (fightingType.indexOf(pokemon )>=0) {
        document.write("You should use " + flyingType.slice(0,8).join(" or "));
        /* or psychic*/
    }
    else if (flyingType.indexOf(pokemon )>=0) {
        document.write("You should use " + electricType.slice(0,8).join(" or "));
        /* or ice or rock*/
    }
    else if (poisonType.indexOf(pokemon )>=0) {
        document.write("You should use " + groundType.slice(0,8).join(" or "));
        /* or psychic*/
    }
    else if (groundType.indexOf(pokemon )>=0) {
        document.write("You should use " + waterType.slice(0,8).join(" or "));
        /* or grass or ice*/
    }
    else if (rockType.indexOf(pokemon )>=0) {
        document.write("You should use " + fightingType.slice(0,8).join(" or "));
        /* or steel or water or grass or ground*/
    }
    else if (bugType.indexOf(pokemon )>=0) {
        document.write("You should use " + flyingType.slice(0,8).join(" or "));
        /* or rock or flying*/
    }
    else if (ghostType.indexOf(pokemon )>=0) {
        document.write("You should use " + darkType.slice(0,8).join(" or "));
    }
    else if (steelType.indexOf(pokemon )>=0) {
        document.write("You should use " + fightingType.slice(0,8).join(" or "));
        /* or flying or ground or fire*/
    }
    else if (fireType.indexOf(pokemon )>=0) {
        document.write("You should use " + waterType.slice(0,8).join(" or "));
    }
        // or rock or water
    else if (waterType.indexOf(pokemon )>=0) {
        document.write("You should use " + electricType.slice(0,8).join(" or "));
        //or grass
    }    
    else if (grassType.indexOf(pokemon )>=0) {
        document.write("You should use " + flyingType.slice(0,8).join(" or "));
        //or fire or flying or poison
    }
    else if (electricType.indexOf(pokemon )>=0) {
        document.write("You should use " + groundType.slice(0,8).join(" or "));
    }
    else if (psychicType.indexOf(pokemon )>=0) {
        document.write("You should use " + ghostType.slice(0,8).join(" or "));
        // or bug or dark
    }
    else if (iceType.indexOf(pokemon )>=0) {
        document.write("You should use " + fireType.slice(0,8).join(" or "));
        // or fire or steel or rock
    }
    else if (dragonType.indexOf(pokemon )>=0) {
        document.write("You should use " + iceType.slice(0,8).join(" or "));
        // or fairy
    }
    else if (darkType.indexOf(pokemon )>=0) {
        document.write("You should use " + bugType.slice(0,8).join(" or "));
        // or fighting    
    }
    else if (fairyType.indexOf(pokemon )>=0) {
        document.write("You should use " + poisonType.slice(0,8).join(" or "));
        // or steel
    }


/*
var normalType = ["Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Farfetchd", "Doduo", "Dodrio", "Jigglypuff", "Wigglytuff", "Rattata", "Raticate", "Meowth", "Persian", "Lickitung", "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee", "Porygon", "Snorlax"];

var fightingType = ["Poliwrath", "Mankey", "Primeape", "Machop", "Machoke", "Machamp", "Hitmonlee", "Hitmonchan"];

var flyingType = ["Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Farfetchd", "Doduo", "Dodrio", "Zubat", "Golbat", "Aerodactyl", "Butterfree", "Scyther", "Charizard", "Moltres", "Gyarados", "Zapdos", "Articuno", "Dragonite"];

var poinsonType = ["Zubat", "Golbat", "Nidoqueen", "Nidoking", "Weedle", "Kakuna", "Beedrill", "Venonat", "Venomoth", "Gastly", "Haunter", "Gengar", "Tentacool", "Tentacruel", "Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Bellsprout", "Weepinbell", "Victreebel", "Ekans", "Arbok", "Nidoran", "Nidorina", "Nidorino", "Grimer", "Muk", "Koffing", "Weezing"];

var groundType = ["Nidoqueen", "Nidoking", "Geodude", "Graveler", "Golem", "Onix", "Rhyhorn", "Rhydon", "Sandshrew", "Sandslash", "Diglett", "Dugtrio", "Cubone", "Marowak"];

var rockType = ["Aerodactyl", "Geodude", "Graveler", "Golem", "Onix", "Rhyhorn", "Rhydon", "Omanyte", "Omastar", "Kabuto", "Kabutops"];

var bugType = ["Butterfree", "Scyther", "Weedle", "Kakuna", "Beedrill", "Venonat", "Venomoth", "Paras", "Parasect", "Caterpie", "Metapod", "Pinsir"];

var ghostType = ["Gastly", "Haunter", "Gengar"];

var steelType = ["Magnemite", "Megneton"];

var fireType = ["Moltres", "Charizard", "Charmander", "Charmeleon", "Vulpix", "Ninetales", "Growlithe", "Arcanine", "Ponyta", "Rapidash", "Magmar", "Flareon"];

var waterType = ["Poliwrath", "Gyarados", "Tentacool", "Tentacruel", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Slowpoke", "Slowbro", "Starmie", "Dewgong", "Cloyster", "Lapras", "Squirtle", "Wartortle", "Blastoise", "Psyduck", "Golduck", "Poliwag", "Poliwhirl", "Seel", "Shellder", "Krabby", "Kingler", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Magikarp", "Vaporeon"];

var electricType = ["Zapdos", "Magnemite", "Magneton", "Pikachu", "Raichu", "Voltorb", "Electrode", "Electabuzz", "Jolteon"];

var psychicType = ["Slowpoke", "Slowbro", "Starmie", "Exeggcute", "Exeggutor", "Jynx", "Mr-mime", "Abra", "Kadabra", "Alakazam", "Drowzee", "Hypno", "Mewtwo"];

var iceType = ["Jynx", "Articuno", "Dewgong", "Cloyster", "Lapras"];

var dragonType = ["Dragonite", "Dratini", "Dragonair"]

var fairyType= ["Mr-mime", "Jigglypuff", "Wigglytuff", "Clefairy", "Clefable"];
*/