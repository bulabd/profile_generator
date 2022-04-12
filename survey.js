const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your name? ", (answer) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, ect.)? ", (answer4) => {
        rl.question("What's your favorite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What's is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer} loves ${answer2} and listening to ${answer3} at the same time. While he is ${answer2}, for ${answer4}, he likes to eat ${answer5} in order to have enough energy to do ${answer6}. He is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

