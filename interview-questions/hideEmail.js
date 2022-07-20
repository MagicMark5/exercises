/*
Given a string that has a valid email address, 
write a function to hide the first part of the email (before the @ sign), 
minus the first and last character. 
For extra credit, add a flag to hide the second part after the @ sign 
to your function excluding the first character and the domain extension.
*/

function hideEmail(email = 'example+test@example.co.uk', hideFull) {
  // split a string into 2 parts before & after a given character in that string
  function splitStringAt(string, char) {
    let divideIndex = string.indexOf(char);
    let firstPart = string.substring(0, divideIndex);
    let secondPart = string.substring(divideIndex + 1, string.length);
    return [ firstPart, secondPart ];
  }
  // hide a string with asterisks, optionally preserving the first or first & last character
  function obscurify(string, showFirstAndLast) {
    const preserveFirstAndLastChar = (char, i, arr) => i === 0 ? char : i === arr.length - 1 ? char : "*";
    const preserveFirst = (char, i, arr) => i === 0 ? char : "*";
    return string.split('')
      .map(showFirstAndLast ? preserveFirstAndLastChar : preserveFirst)
      .join('')
  }
  // destructure an email into the username and domain, hide the username
  const [user, domain] = splitStringAt(email, '@');
  const hiddenUser = obscurify(user, true);
  
  if (!hideFull) return `${hiddenUser}@${domain}`;
  // destructure the domain into the domain name and domain extension, hide the domain name
  const [domainBeforeExt, domainExt] = splitStringAt(domain, '.');
  const hiddenDomain = obscurify(domainBeforeExt);    

  return `${hiddenUser}@${hiddenDomain}.${domainExt}`;
}

let result1 = hideEmail();
let result2 = hideEmail('example+test@example.co.uk', true);
console.log(result1);
console.log(result2);