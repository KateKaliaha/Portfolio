const main = document.querySelector('.main');
const p = document.createElement('p');
p.classList.add('jokes');
main.append(p);
const p2 = document.createElement('p');
p2.classList.add('author');
main.append(p2);
const button = document.querySelector('.btn');
const url = 'https://type.fit/api/quotes'

getData();

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.value.joke);
    // console.log(data[0].author);
   showData(data)
    // showData()
//     const randomJokes = jokes.map(function(jokes ) {
// randomJokes = jokes[0].text;
// console.log(randomJokes)
//     });
  }
//   getData();
    //  console.log(data[0].text)

    function showData (data) {
        const dataNew = data[Math.floor(Math.random() * data.length)];
         p.textContent = dataNew.text
         p2.textContent = dataNew.author
                         
    }

    button.addEventListener('click', getData);
    // button.addEventListener('click', showData())
    