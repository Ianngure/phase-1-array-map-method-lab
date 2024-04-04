const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => { // Iterate through each tutorial title
    return title.split(' ').map(word => { // Split the title into words
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
    }).join(' '); // Join the words back together
  });
}

console.log(titleCased()); // Output the title cased array

