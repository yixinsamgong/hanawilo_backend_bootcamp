const fetch = require('node-fetch')

const fetchRickAndMorty = async () => {
  try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data.results.map((character) => character.name));
  } catch (error) {
      console.log(error.message);
  }
}

fetchRickAndMorty()

const fetchMultipleAPIs = async () => {
  try {
      const res1 = fetch('https://rickandmortyapi.com/api/character/2');
      const res2 = fetch('https://randomuser.me/api/?results=1');
      const [data1, data2] = await Promise.all([res1, res2])
        .then((res) => Promise.all(res.map((res) => res.json())));

      const name1 = data1.name;
      const name2 = data2.results[0].name.first + ' ' + data2.results[0].name.last;
      console.log([name1, name2]);

  } catch (error) {
      console.log(error.message);
  }
}


fetchMultipleAPIs()