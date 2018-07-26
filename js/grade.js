// this is the grading scale:



var grade = null;



var score = 85;

switch (true) {
  case score > 90 :
    console.log('Your Grade is A');
    break;
  case 80 < score :
    console.log('Your Grade is B');
    break;
  case 70 < score :
    console.log('Your Grade is C');
    break;
  case 60 < score :
    console.log('Your Grade is D');
    break;
  case 60 > score :
    console.log('Your Grade is F');
    break;
  default:
    console.log('Sorry, we don\'t have a score ' + grade + '.');
}