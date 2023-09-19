document.querySelector("body").appendChild(document.createElement('div')).setAttribute('id', 'bod-main-div');
document.querySelector('#bod-main-div').appendChild(document.createElement('p')).setAttribute('id', 'bod-main-p');
let adj1 = window.prompt("Please enter your favorite taste!");
let noun1 = window.prompt("Please enter your favorite food!");
let verb1 = window.prompt("Please enter a verb!");
let adj2 = window.prompt("Please describe yourself in one word!");
let noun2 = window.prompt("Please enter a sport name!");
let verb2 = window.prompt("Please enter an action verb!");
let adj3 = window.prompt("Please enter adjective!");
let noun3 = window.prompt("Please enter an animal name!");
let noun4 = window.prompt("Please enter your birthstone name!");
let verb3 = window.prompt("Please enter an action verb!");
document.getElementById("bod-main-p").innerHTML = `
    <h4>Baby Mad Lips Game</h4>
  I can't wait to <samp> ${verb1} </samp> the new little <samp> ${adj1} </samp> food!
  I am sure I'll be knows as the <samp> ${adj2} </samp> uncle to a baby. The baby will love me
  becuase I will give them lots of <samp> ${noun1} </samp> and we will go <samp> ${noun2} </samp> together.
  I predict the baby will look like <samp> ${noun3} </samp> with eyes like <samp> ${noun4} </samp> and hair that feel lik bamboo.
  Make sure you <samp> ${verb2} </samp> before the baby arrives becuase babies love to <samp> ${verb3} </samp> all night long! and
  Don't forget to carry <samp> ${adj3} </samp> diper and change it when the baby is crying.
`;
