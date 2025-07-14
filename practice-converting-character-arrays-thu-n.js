//Task 1.  Decode the Following Reversed Messages

//1. Message 1:

let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY!ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC ";
let newMessage1 = message1.split('').reverse('').join('');
console.log(newMessage1);

//2. Message 2: 

let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let newMessage2 = message2.split('').reverse('').join('');
console.log(newMessage2);

//3. Message 3: 

let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI.lanoisseforp a ekil leef ot evah t'nod uoY";
let newMessage3 = message3.split('').reverse('').join('');
console.log(newMessage3);

//4. Message 4:

let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let newMessage4 = message4.split('').reverse('').join('');
console.log(newMessage4);

//Task 2: Write your own reverse messages

let myMessage = "Nothing worthwhile will come easy. Frustration will be part of the journey. Take a deep breath and take each day step by step. It will all be worth it in the end.";
let myMessageReversed = myMessage.split('').reverse('').join('');
console.log(myMessageReversed);


