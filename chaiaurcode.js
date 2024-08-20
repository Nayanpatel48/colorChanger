//selecting button
const button = document.querySelectorAll('.button');
//selecting body
const body = document.querySelector('body');

// console.log(button);

//looping through each button in node list
button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target.id);
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
  });
});
