


    var pokemon = prompt("What Pokemon would you like to battle?", "Lugia");


    var normalType = ["Farfetchd", "Dodrio", "Wigglytuff", "Raticate", "Persian", "Lickitung", "Pidgey", "Eevee", "Chansey", "Kangaskhan", "Tauros", "Ditto", "Porygon", "Snorlax", "Togepi", "Togetic", "Aipom", "Granbull", "Ursaring", "Porygon2", "Stantler", "Smeargle", "Miltank", "Blissey", "Zigzagoon", "Linoone", "Swellow", "Slakoth", "Vigoroth", "Slaking", "Whismur", "Loudred", "Exploud", "Skitty", "Delcatty", "Spinda", "Swablu", "Zangoose", "Castform", "Kecleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Ambipom", "Buneary", "Lopunny", "Glameow", "Purugly", "Happiny", "Chatot", "Munchlax", "Lickilicky", "Togekiss", "Porygon-Z", "Regigigas", "Arceus"];

    var fightingType = ["Mewtwo", "Poliwrath", "Blaziken", "Primeape", "Machamp", "Heracross", "Hitmonlee", "Hitmonchan", "Tyrogue", "Hitmontop", "Breloom", "Makuhita", "Hariyama", "Meditite", "Medicham", "Monferno", "Infernape", "Lopunny", "Riolu", "Lucario", "Croagunk", "Toxicroak", "Gallade", "Pignite"];

    var flyingType = ["Lugia", "Ho-Oh", "Charizard", "Moltres", "Gyarados", "Pidgey", "Zapdos", "Articuno", "Dragonite", "Crobat", "Farfetchd", "Dodrio", "Golbat", "Aerodactyl", "Scyther", "Noctowl", "Togetic", "Jumpluff", "Yanma", "Murkrow", "Gligar", "Delibird", "Mantine", "Skarmory", "Beautifly", "Taillow", "Swellow", "Wingull", "Pelipper", "Masquerain", "Ninjask", "Swablu", "Altaria", "Tropius", "Salamence", "Rayquaza", "Starly", "Staravia", "Staraptor", "Mothim", "Combee", "Vespiquen", "Drifloon", "Drifblim", "Honchkrow", "Chatot", "Mantyke", "Togekiss", "Yanmega", "Gliscor", "Rotom", "Shaymin"];
    
    var groundType = ["Golem", "Rhydon", "Steelix", "Nidoqueen", "Nidoking", "Sandslash", "Marowak", "Quagsire", "Gligar", "Swinub", "Donphan", "Marshtomp", "Swampert", "Nincada", "Numel", "Camerupt", "Trapinch", "Vibrava", "Flygon", "Barboach", "Whiscash", "Baltoy", "Claydol", "Groudon", "Torterra", "Wormadam", "Gastrodon", "Gible", "Gabite", "Garchomp", "Hippopotas", "Hippowdon", "Rhyperior", "Gliscor", "Mamoswine"];

    var poisonType = ["Gengar", "Venusaur", "Crobat", "Weezing", "Muk", "Golbat", "Nidoqueen", "Nidoking", "Tentacruel", "Vileplume", "Victreebel", "Arbok", "Bulbasaur", "Nidorino", "Roselia", "Gulpin", "Swalot", "Seviper", "Budew", "Roserade", "Stunky", "Skuntank", "Skorupi", "Drapion", "Croagunk", "Toxicroak"];

    var rockType = ["Tyranitar", "Golem", "Rhydon", "Omastar", "Aerodactyl", "Kabutops", "Corsola", "Aron", "Lairon", "Aggron", "Lunatone", "Solrock", "Lileep", "Cradily", "Anorith", "Armaldo", "Relicanth", "Regirock", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Bonsly", "Rhyperior", "Probopass"];

    var bugType = ["Scizor", "Scyther", "Pinsir", "Forretress", "Silcoon", "Beautifly", "Surskit", "Masquerain", "Nincada", "Ninjask", "Shedinja", "Volbeat", "Illumise", "Anorith", "Armaldo", "Kricketot", "Kricketune", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Skorupi", "Yanmega"];

    var ghostType = ["Gengar", "Marowak", "Misdreavus", "Shedinja", "Sableye", "Shuppet", "Banette", "Duskull", "Dusclops", "Drifloon", "Drifblim", "Mismagius", "Spiritomb", "Dusknoir", "Froslass", "Rotom", "Giratina"];

    var steelType = ["Steelix", "Scizor", "Megneton", "Forretress", "Skarmory", "Mawile", "Aron", "Lairon", "Aggron", "Beldum", "Metang", "Metagross", "Registeel", "Jirachi", "Empoleon", "Shieldon", "Bastiodon", "Wormadam", "Bronzor", "Bronzong", "Lucario", "Magnezone", "Probopass", "Dialga", "Heatran"];

    var fireType = ["Entei", "Ho-Oh", "Blaziken", "Moltres", "Charizard", "Ninetales", "Arcanine", "Rapidash", "Magmar", "Flareon", "Magcargo", "Houndoom", "Magby", "Numel", "Camerupt", "Torkoal", "Castform", "Groudon", "Chimchar", "Monferno", "Infernape", "Magmortar", "Rotom", "Heatran", "Victini", "Tepig", "Pignite"];

    var waterType = ["Gyarados", "Lapras", "Vaporeon", "Omastar", "Kabutops", "Blastoise","Feraligatr", "Golduck", "Poliwrath", "Tentacruel", "Dewgong", "Squirtle", "Cloyster", "Kingler", "Seadra", "Seaking", "Chinchou", "Lanturn", "Marill", "Azumarill", "Politoed", "Wooper", "Quagsire", "Slowking", "Qwilfish", "Corsola", "Remoraid", "Octillery", "Mantine", "Kingdra", "Suicune", "Mudkip", "Marshtomp", "Swampert", "Lotad", "Lombre", "Ludicolo", "Wingull", "Pelipper", "Surskit", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Feebas", "Milotic", "Castform", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Kyogre", "Piplup", "Prinplup", "Empoleon", "Bibarel", "Buizel", "Floatzel", "Shellos", "Gastrodon", "Finneon", "Lumineon", "Mantyke", "Rotom", "Palkia", "Phione", "Manaphy"];

    var grassType = ["Coming Soon", "Venusaur", "Bulbasaur",];

    var electricType = ["Raikou", "Zapdos", "Magneton", "Raichu", "Electrode", "Electabuzz", "Jolteon", "Pikachu", "Magnemite", "Elekid", "Electrike", "Manectric", "Plusle", "Minun", "Shinx", "Luxio", "Luxray", "Pachirisu", "Magnezone", "Electivire", "Rotom"];

    var psychicType = ["Lugia", "Alakazam", "Mewtwo", "Slowbro", "Exeggutor", "Jynx", "Mr-mime", "Hypno", "Unown", "Celebi", "Ralts", "Kirlia", "Gardevoir", "Meditite", "Medicham", "Spoink", "Grumpig", "Lunatone", "Solrock", "Baltoy", "Claydol", "Chimecho", "Wynaut", "Beldum", "Metang", "Metagross", "Latias", "Latios", "Jirachi", "Deoxys", "Chingling", "Bronzor", "Bronzong", "Mime Jr.", "Gallade", "Uxie", "Mesprit", "Azelf", "Cresselia", "Victini"];

    var iceType = ["Lapras", "Articuno", "Jynx", "Regice", "Dewgong", "Cloyster", "Sneasel", "Piloswine", "Delibird", "Smoochum", "Castform", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Snover", "Abomasnow", "Weavile", "Glaceon", "Mamoswine", "Froslass", "Rotom"];

    var dragonType = ["Dragonite", "Dratini", "Dragonair", "Kingdra", "Sceptile", "Vibrava", "Flygon", "Altaria", "Bagon", "Shelgon", "Salamence", "Latias", "Latios", "Rayquaza", "Gible", "Gabite", "Garchomp", "Dialga", "Palkia", "Giratina"];

    var darkType = ["Coming Soon"];

    var fairyType= ["Wigglytuff", "Clefable", "Granbull", "Mr-mime", "Jigglypuff", "Clefairy", "Snubbull", "Ralts", "Kirlia", "Gardevoir", "Azurill", "Mawile", "Altaria", "Mime Jr.", "Togekiss"];
    

    








    if (normalType.indexOf(pokemon.toUpperCase())>=0) {
        document.write("</br> You have selected a Normal Tpye Pokemon. You should use a Fighting Type against them, such as " + fightingType.slice(0,6).join(" or "));
    } 
     if (fightingType.indexOf(pokemon)>=0) {
        document.write("</br> You have selected a Fighting Tpye Pokemon. You should use a Flyinging Type against them, such as " + flyingType.slice(0,8).join(" or "));
        /* or psychic*/
    }
     if (flyingType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Flying Tpye Pokemon. You should use a Electric Type against them, such as " + electricType.slice(0,8).join(" or "));
        /* or ice or rock*/
    }
    if (poisonType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Poison Tpye Pokemon. You should use a Ground Type against them, such as " + groundType.slice(0,8).join(" or "));
        /* or psychic*/
    }
    if (groundType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Ground Tpye Pokemon. You should use a Water Type against them, such as " + waterType.slice(0,8).join(" or "));
        /* or grass or ice*/
    }
    if (rockType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Rock Tpye Pokemon. You should use a Fighting Type against them, such as " + fightingType.slice(0,8).join(" or "));
        /* or steel or water or grass or ground*/
    }
    if (bugType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a bug Tpye Pokemon. You should use a Flying Type against them, such as " + flyingType.slice(0,8).join(" or "));
        /* or rock or flying*/
    }
    if (ghostType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Ghost Tpye Pokemon. You should use a Dark Type against them, such as " + darkType.slice(0,8).join(" or "));
    }
    if (steelType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Steel Tpye Pokemon. You should use a Flying Type against them, such as " + flyingType.slice(0,8).join(" or "));
        /* or fighting or ground or fire*/
    }
    if (fireType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Normal Tpye Pokemon. You should use a Fighting Type against them, such as " + waterType.slice(0,8).join(" or "));
    }
        // or rock or water
    if (waterType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Water Tpye Pokemon. You should use a Electric Type against them, such as " + electricType.slice(0,8).join(" or "));
        //or grass
    }    
    if (grassType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a grass Tpye Pokemon. You should use a Flying Type against them, such as " + flyingType.slice(0,8).join(" or "));
        //or fire or flying or poison
    }
    if (electricType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Electric Tpye Pokemon. You should use a Ground Type against them, such as " + groundType.slice(0,8).join(" or "));
    }
    if (psychicType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Psychic Tpye Pokemon. You should use a Ghost Type against them, such as " + ghostType.slice(0,8).join(" or "));
        // or bug or dark
    }
    if (iceType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected an Ice Tpye Pokemon. You should use a Fire Type against them, such as " + fireType.slice(0,8).join(" or "));
        // or fire or steel or rock
    }
    if (dragonType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Dragon Tpye Pokemon. You should use an Ice Type against them, such as " + iceType.slice(0,8).join(" or "));
        // or fairy
    }
    if (darkType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Dark Tpye Pokemon. You should use a Bug Type against them, such as " + bugType.slice(0,8).join(" or "));
        // or fighting    
    }
    if (fairyType.indexOf(pokemon )>=0) {
        document.write("</br> You have selected a Fairy Tpye Pokemon. You should use a Poison Type against them, such as " + poisonType.slice(0,8).join(" or "));
        // or steel
    }


