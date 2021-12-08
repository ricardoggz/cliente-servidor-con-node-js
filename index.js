const axios = require("axios"); //require is a function node js
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((characterString) => Object.values(characterString).join(","))
    .join("\n");
    
  await fs.writeFile(path.join(__dirname, "data.csv"), characters);
  console.log(characters);
};

main();
