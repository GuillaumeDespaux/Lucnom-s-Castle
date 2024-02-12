// Define the nodes of the story
const storyNodes = {

  0:{
    name: 'Start',
    text: 'Reincarnated in another world by the gods of Lucnom, your quest is to find out where the princess of the kingdom disappeared. After a long travel around the country, you face a weird dungeon. Just arrived you hear a big explosion coming from the dungeon.',
    image: './img/0.png',
    options: [
      { text: 'Continue', nextNodeId: 10 },
    ]
  },
  10:{
    name: "The castle",
    text:'You are in the biggest hall ever seen',
    image: './img/10.webp',
    options:[
      {text:'Left door', nextNodeId:100},
      {text:'Upstair', nextNodeId:200},
      {text:'Right door', nextNodeId:300},
      {text:'Inspect',nextNodeId:10.1}
    ]
  },
  10.1:{
    name: "Inspect the castle",
    text: "Inspect the castle",
    options:[
      {text:'Look behind the blinds',nextNodeId:11},
      {text:'Look the chandeler',nextNodeId:12},
      {text:'Explore', nextNodeId:10}
    ]
  },
  11:{
    name: "Behind the blinds",
    text: 'You look behind the blinds and find a map of the castle',
    options:[
      {text:'Back to inspect', nextNodeId:10.1}
    ]
  },
  12:{
    name: "The chadeller",
    text: 'This chandeler seems pretty old',
    options:[
      {text:'Back to inspect', nextNodeId:10.1}
    ]
  },
  // left door story
  100:{
    name: "Hall left door",
    text: "The door is locked I should use something to unlock it.",
    options:[
      {text:'Go back to the hall', nextNodeId:10}
    ]
  },
  // upstair story
  200:{
    name:"Upstairs",
    text: "You go up the old stairs and face a corridor with 4 door.",
    image:"./img/200.jpg",
    options:[
      {text:"Open the first door",nextNodeId:210},
      {text:"Open the second door",nextNodeId:220},
      {text:"Open the thrid door",nextNodeId:230},
      {text:"Open the fourth door",nextNodeId:240},
      {text: 'Go back in the hall',nextNodeId:10}
    ]
  },
  210:{
    name: "Upstair first door",
    text: "This is a basic room with with an old bed and a nice view outside",
    options:[
      {text: 'Go back on upstairs', nextNodeId:200},
      {text: 'Inspect the room', nextNodeId:210.1}
    ]
  },
  210.1:{
    name:'Inspect first room',
    text:'Inspect first room',
    options:[
      {text:'Look under the bed', nextNodeId:211},
      {text:'Check the window', nextNodeId:212},
      {text:'Inspect the room', nextNodeId:210}
    ]
  },
  211:{
    name:'Look under the bed',
    text:'There is nothing expect a mouse',
    options:[
      {text:'Inspect the room', nextNodeId:210.1}
    ]
  },
  212:{
    name:'Look the view',
    text:'There is a beautifull view from there we can see all the plains.',
    options:[
      {text:'Inspect the room', nextNodeId:210.1}
    ]
  },
  220:{
    name: "Upstair second door",
    text: 'This room is weirdly designed, it looks like furniture have been moved.',
    options:[
      {text: 'Inspect this room',nextNodeId:220.1},    
      {text: 'Go back on upstairs', nextNodeId:200},
    ]
  },
  220.1:{
    name:'Room inspection',
    text:'Room inspection',
    options:[
      {text:'Look under the bed', nextNodeId:221},
      {text:'Look the celling', nextNodeId:222},
      {text:'Look the wardrobe', nextNodeId:223},
      {text:'Explore', nextNodeId:220},
    ]
  },
  221:{
    name:'Look under the bed2',
    text:'._.?',
    options:[
      {text:'Inspect the room', nextNodeId:220.1}
    ]
  },
  222:{
    name:'Celling',
    text:'You poke the celling with your sword but nothing happened.',
    options:[
      {text:'Inspect the room', nextNodeId:220.1}
    ]
  },
  223:{
    name:'the wardorbe',
    text:'Behind some old dresses you can ears a little air flow.',
    options:[
      {text:'Entrer in the wardrobe', nextNodeId:231},
      // {text:'Think about life', nextNodeId:223.1},
      {text:'Inspect the room', nextNodeId:220.1}
    ]
  },
  230:{
    name: "Upstair thrid door",
    text: 'The door is weirdly locked',
    options:[
      {text: 'Go back on upstairs', nextNodeId:200}
    ]
  },
  230.1:{
    name:"the locked door upstair", 
    text:"What a strange room why there is some secret passage?",
    options:[
      {text: 'Inspect the strange room',nextNodeId:231},
      {text: 'Take back the passage', nextNodeId:220}
    ] 
  },
  231:{
    name:'Inspection',
    text:'After barely manage to go through the little gap in the wardrobe you face a new room.',
    options:[
      {text:'Inspect the ground', nextNodeId:232},
      {text:'Inspect the table', nextNodeId:233},
      {text:'Inspect the door', nextNodeId:234},
      {text:'Explore', nextNodeId:230.1},
    ]
  },
  232:{
    name:'inspect the ground',
    text:'There is some text but I can not read them.',
    options:[
      {text: 'Inspect the strange room',nextNodeId:231},
    ]
  },
  233:{
    name:'inspect the table',
    text:'The is multiple note on the table but theyre is only one redable. "If "FOX" = 45, "ELK" = 37, and "ANT" = 27, what does "CAT" equal?"',
    options:[
      {text: 'Inspect the strange room',nextNodeId:231},
    ]
  },
  234:{
    name:'door inspection',
    text:'The door seems to looked with ancient magic. It\'s impossible to open.',
    options:[
      {text: 'Inspect the strange room',nextNodeId:231}
    ]
  },
  240:{
    name: "Upstair fourth door",
    text:'This is the bathroom nothing to see there.',
    options: [
      {text: 'Go back on upstairs', nextNodeId:200},
    ]
  },
  //right door story
  300: {
    name: 'Right door',
    text: 'You go in the direction of the right door without any hesitation. When you push the door, it provokes an absolute noise. Just as the door passes you, you hear a loud noise coming from the door you just passed by. The door is no longer openable anymore. A little further, you can hear noises, something that sounds like a non-human form approaching.',
    image: './img/3.webp',
    options: [
      { text: 'Run away', nextNodeId: 400 },
      { text: 'Prepare to fight', nextNodeId: 500 }
    ]
  },
  400: {
    name: 'Running away',
    text: 'You run away as fast as you can and find a new room. In this room, you can observe two doors, one with a lock and one chest.',
    image: './img/4.png',
    options: [
      { text: 'Open the chest', nextNodeId: 1100 },
      { text: 'Open the unlocked door', nextNodeId: 1200 }
    ]
  },
  500: {
    name: 'Prepare to fight',
    text: 'You grab your sword out of the guard and prepare to attack. The form shows up and seems to be a skeleton. You take it off guard and prepare to attack.',
    image: './img/mob5.png',
    options: [
      { text: 'Attack right side', nextNodeId: 600 },
      { text: 'Attack left side', nextNodeId: 1300 }
    ]
  },
  600: {
    name: 'Skeleton defeated',
    text: 'You swing your sword with the most power you can muster and destroy the head of the skeleton. Facing you is a big door.',
    image: './img/6.jpeg',
    options: [
      { text: 'Open the big door', nextNodeId: 900 }
    ]
  },
  700: {
    name: 'Trap!',
    text: 'You fell into a trap! You\'re dead.',
    options: []
  },
  800: {
    name: 'Carbon princess',
    text: 'Congratulations, you reach the Carbon princess!',
    image: './img/8.png',
    options: []
  },
  900: {
    name: 'GLFH',
    text: 'Oh no, doors GLFH.',
    options: [
      { text: 'Open door number 1', nextNodeId: 1200 },
      { text: 'Open door number 2', nextNodeId: 1200 },
      { text: 'Open door number 3', nextNodeId: 1200 },
      { text: 'Open door number 4', nextNodeId: 1200 },
      { text: 'Open door number 5', nextNodeId: 1200 },
      { text: 'Open door number 6', nextNodeId: 1200 },
      { text: 'Open door number 7', nextNodeId: 1200 },
      { text: 'Open door number 8', nextNodeId: 1200 },
      { text: 'Open door number 9', nextNodeId: 1200 },
      { text: 'Open door number 10', nextNodeId: 1200 },
      { text: 'Open door number 11', nextNodeId: 1200 },
      { text: 'Open door number 12', nextNodeId: 1200 },
      { text: 'Open door number 13', nextNodeId: 1200 },
      { text: 'Open door number 14', nextNodeId: 1200 },
      { text: 'Open door number 15', nextNodeId: 1200 },
      { text: 'Open door number 16', nextNodeId: 1200 },
      { text: 'Open door number 17', nextNodeId: 1200 },
      { text: 'Open door number 18', nextNodeId: 1200 },
      { text: 'Open door number 19', nextNodeId: 1200 },
      { text: 'Open door number 20', nextNodeId: 1200 },
      { text: 'Open door number 21', nextNodeId: 1200 },
      { text: 'Open door number 22', nextNodeId: 1200 },
      { text: 'Open door number 23', nextNodeId: 1200 },
      { text: 'Open door number 24', nextNodeId: 1200 },
      { text: 'Open door number 25', nextNodeId: 1200 },
      { text: 'Open door number 26', nextNodeId: 1200 },
      { text: 'Open door number 27', nextNodeId: 1200 },
      { text: 'Open door number 28', nextNodeId: 1200 },
      { text: 'Open door number 29', nextNodeId: 1200 },
      { text: 'Open door number 30', nextNodeId: 1200 },
      { text: 'Open door number 31', nextNodeId: 1200 },
      { text: 'Open door number 32', nextNodeId: 1200 },
      { text: 'Open door number 33', nextNodeId: 1200 },
      { text: 'Open door number 34', nextNodeId: 1200 },
      { text: 'Open door number 35', nextNodeId: 1200 },
      { text: 'Open door number 36', nextNodeId: 1200 },
      { text: 'Open door number 37', nextNodeId: 1200 },
      { text: 'Open door number 38', nextNodeId: 1200 },
      { text: 'Open door number 39', nextNodeId: 1200 },
      { text: 'Open door number 40', nextNodeId: 1200 },
      { text: 'Open door number 41', nextNodeId: 1200 },
      { text: 'Open door number 42', nextNodeId: 1200 },
      { text: 'Open door number 43', nextNodeId: 1200 },
      { text: 'Open door number 44', nextNodeId: 1200 },
      { text: 'Open door number 45', nextNodeId: 800 },
      { text: 'Open door number 46', nextNodeId: 1200 },
      { text: 'Open door number 47', nextNodeId: 1200 },
      { text: 'Open door number 48', nextNodeId: 1200 },
      { text: 'Open door number 49', nextNodeId: 1200 },
      { text: 'Open door number 50', nextNodeId: 1200 },
      { text: 'Open door number 51', nextNodeId: 1200 },
      { text: 'Open door number 52', nextNodeId: 1200 },
      { text: 'Open door number 53', nextNodeId: 1200 },
      { text: 'Open door number 54', nextNodeId: 1200 },
      { text: 'Open door number 55', nextNodeId: 1200 },
      { text: 'Open door number 56', nextNodeId: 1200 },
      { text: 'Open door number 57', nextNodeId: 1200 },
      { text: 'Open door number 58', nextNodeId: 1200 },
      { text: 'Open door number 59', nextNodeId: 1200 },
      { text: 'Open door number 60', nextNodeId: 1200 },
      { text: 'Open door number 61', nextNodeId: 1200 },
      { text: 'Open door number 62', nextNodeId: 1200 },
      { text: 'Open door number 63', nextNodeId: 1200 },
      { text: 'Open door number 64', nextNodeId: 1200 },
      { text: 'Open door number 65', nextNodeId: 1200 },
      { text: 'Open door number 66', nextNodeId: 1200 },
      { text: 'Open door number 67', nextNodeId: 1200 },
      { text: 'Open door number 68', nextNodeId: 1200 },
      { text: 'Open door number 69', nextNodeId: 1200 },
      { text: 'Open door number 70', nextNodeId: 1200 },
      { text: 'Open door number 71', nextNodeId: 1200 },
      { text: 'Open door number 72', nextNodeId: 1200 },
      { text: 'Open door number 73', nextNodeId: 1200 },
      { text: 'Open door number 74', nextNodeId: 1200 },
      { text: 'Open door number 75', nextNodeId: 1200 },
      { text: 'Open door number 76', nextNodeId: 1200 },
      { text: 'Open door number 77', nextNodeId: 1200 },
      { text: 'Open door number 78', nextNodeId: 1200 },
      { text: 'Open door number 79', nextNodeId: 1200 },
      { text: 'Open door number 80', nextNodeId: 1200 },
      { text: 'Open door number 81', nextNodeId: 1200 },
      { text: 'Open door number 82', nextNodeId: 1200 },
      { text: 'Open door number 83', nextNodeId: 1200 },
      { text: 'Open door number 84', nextNodeId: 1200 },
      { text: 'Open door number 85', nextNodeId: 1200 },
      { text: 'Open door number 86', nextNodeId: 1200 },
      { text: 'Open door number 87', nextNodeId: 1200 },
      { text: 'Open door number 88', nextNodeId: 1200 },
      { text: 'Open door number 89', nextNodeId: 1200 },
      { text: 'Open door number 90', nextNodeId: 1200 },
      { text: 'Open door number 91', nextNodeId: 1200 },
      { text: 'Open door number 92', nextNodeId: 1200 },
      { text: 'Open door number 93', nextNodeId: 1200 },
      { text: 'Open door number 94', nextNodeId: 1200 },
      { text: 'Open door number 95', nextNodeId: 1200 },
      { text: 'Open door number 96', nextNodeId: 1200 },
      { text: 'Open door number 97', nextNodeId: 1200 },
      { text: 'Open door number 98', nextNodeId: 1200 },
      { text: 'Open door number 99', nextNodeId: 1200 },
      { text: 'Open door number 100', nextNodeId: 1200 }
    ]
  },
  1100: {
    name: 'Horrible creature',
    image: './img/11.png',
    text: 'When you approach the chest, a horrible creature comes out of the chest but gives you a key to open the locked door.',
    options: [
      { text: 'Open the big door', nextNodeId: 900 }
    ]
  },
  1200: {
    name: 'Death',
    image: './img/12.jpg',
    text: 'You are dead.',
    options: [
      { text: 'Try again', nextNodeId: 0 }
    ]
  },
  1300: {
    name: 'Combat death',
    image: './img/13.png',
    text: 'You are dead.',
    options: [
      { text: 'Try again', nextNodeId: 0 }
    ]
  }
}



























// Function to display a part of the story
function displayNode(nodeId){
  const node = storyNodes[nodeId];
  const storyDiv = document.getElementById('story');
  const choiceDiv = document.getElementById('choices'); // Get the choice div
  let html = `<p>${node.text}</p>`;
  if (node.image) {
    html += `<img src="${node.image}" alt="${node.name}">`;
  }
  let choiceHtml = '<ul>'; // Initialize a string with an opening ul tag
  node.options.forEach((option, i) => {
    choiceHtml += `<li><button class="choice-button, nice-btn" onclick="makeChoice(${nodeId}, ${i})">${option.text}</button></li>`;
  });
  choiceHtml += '</ul>'; // Add a closing ul tag
  storyDiv.innerHTML = html;
  choiceDiv.innerHTML = choiceHtml; // Set the innerHTML of the choice div to the choice buttons


  }
// Function to make a choice
function makeChoice(nodeId, choiceIndex) {
  const chosenOption = storyNodes[nodeId].options[choiceIndex];
  if (chosenOption) {
    displayNode(chosenOption.nextNodeId);
  } else {
    console.log('Invalid choice.');
  }
}

const themeBtn = document.getElementById('themeBtn');
const resetBtn = document.getElementById('rstbtn');

let currentTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(currentTheme);

themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(currentTheme);
  localStorage.setItem('theme', currentTheme);
});

resetBtn.addEventListener('click', () => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add('light');
  localStorage.setItem('theme', 'light');
});


// Start the story
displayNode(0);