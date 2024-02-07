// Define the nodes of the story
const storyNodes = {
  0: {
    id: 0,
    name: 'Start',
    text: 'Reincarnated in another world by the gods of Lucnom, your quest is to find out where the princess of the kingdom disappeared. After a long travel around the country, you face a weird dungeon. Just arrived you hear a big explosion coming from the dungeon.',
    options: [
      { text: 'Go to the left door', nextNodeId: 1 },
      { text: 'Go to the right door', nextNodeId: 3 }
    ]
  },
  1: {
    id: 1,
    name: 'Left door',
    text: 'You carefully go towards the left door and open it slowly. The only thing you can see is a very long corridor.',
    options: [
      { text: 'Go Through', nextNodeId: 2 },
      { text: 'Go back', nextNodeId: 0 }
    ]
  },
  2: {
    id: 2,
    name: 'Dark corridor',
    text: 'The more you go toward, the darker the corridor becomes. You have the feeling that if you continue, something bad will happen.',
    options: [
      { text: 'Continue anyways', nextNodeId: 10 },
      { text: 'Go back', nextNodeId: 1 }
    ]
  },
  3: {
    id: 3,
    name: 'Right door',
    text: 'You go in the direction of the right door without any hesitation. When you push the door, it provokes an absolute noise. Just as the door passes you, you hear a loud noise coming from the door you just passed by. The door is no longer openable anymore. A little further, you can hear noises, something that sounds like a non-human form approaching.',
    options: [
      { text: 'Run away', nextNodeId: 4 },
      { text: 'Prepare to fight', nextNodeId: 5 }
    ]
  },
  4: {
    id: 4,
    name: 'Running away',
    text: 'You run away as fast as you can and find a new room. In this room, you can observe two doors, one with a lock and one chest.',
    options: [
      { text: 'Open the chest', nextNodeId: 11 },
      { text: 'Open the unlocked door', nextNodeId: 0 }
    ]
  },
  5: {
    id: 5,
    name: 'Prepare to fight',
    text: 'You grab your sword out of the guard and prepare to attack. The form shows up and seems to be a skeleton. You take it off guard and prepare to attack.',
    options: [
      { text: 'Attack right side', nextNodeId: 6 },
      { text: 'Attack left side', nextNodeId: 0 }
    ]
  },
  6: {
    id: 6,
    name: 'Skeleton defeated',
    text: 'You swing your sword with the most power you can muster and destroy the head of the skeleton. Facing you is a big door.',
    options: [
      { text: 'Open the big door', nextNodeId: 9 }
    ]
  },
  7: {
    id: 7,
    name: 'Trap!',
    text: 'You fell into a trap! You\'re dead.',
    options: []
  },
  8: {
    id: 8,
    name: 'Carbon princess',
    text: 'Congratulations, you reach the Carbon princess!',
    options: []
  },
  9: {
    id: 9,
    name: 'GLFH',
    text: 'Oh no, doors GLFH.',
    options: [
      { text: 'Open door number 1', nextNodeId: 0 },
      { text: 'Open door number 2', nextNodeId: 0 },
      { text: 'Open door number 3', nextNodeId: 0 },
      { text: 'Open door number 4', nextNodeId: 0 },
      { text: 'Open door number 5', nextNodeId: 0 },
      { text: 'Open door number 6', nextNodeId: 0 },
      { text: 'Open door number 7', nextNodeId: 0 },
      { text: 'Open door number 8', nextNodeId: 0 },
      { text: 'Open door number 9', nextNodeId: 0 },
      { text: 'Open door number 10', nextNodeId: 0 },
      { text: 'Open door number 11', nextNodeId: 0 },
      { text: 'Open door number 12', nextNodeId: 0 },
      { text: 'Open door number 13', nextNodeId: 0 },
      { text: 'Open door number 14', nextNodeId: 0 },
      { text: 'Open door number 15', nextNodeId: 0 },
      { text: 'Open door number 16', nextNodeId: 0 },
      { text: 'Open door number 17', nextNodeId: 0 },
      { text: 'Open door number 18', nextNodeId: 0 },
      { text: 'Open door number 19', nextNodeId: 0 },
      { text: 'Open door number 20', nextNodeId: 0 },
      { text: 'Open door number 21', nextNodeId: 0 },
      { text: 'Open door number 22', nextNodeId: 0 },
      { text: 'Open door number 23', nextNodeId: 0 },
      { text: 'Open door number 24', nextNodeId: 0 },
      { text: 'Open door number 25', nextNodeId: 0 },
      { text: 'Open door number 26', nextNodeId: 0 },
      { text: 'Open door number 27', nextNodeId: 0 },
      { text: 'Open door number 28', nextNodeId: 0 },
      { text: 'Open door number 29', nextNodeId: 0 },
      { text: 'Open door number 30', nextNodeId: 0 },
      { text: 'Open door number 31', nextNodeId: 0 },
      { text: 'Open door number 32', nextNodeId: 0 },
      { text: 'Open door number 33', nextNodeId: 0 },
      { text: 'Open door number 34', nextNodeId: 0 },
      { text: 'Open door number 35', nextNodeId: 0 },
      { text: 'Open door number 36', nextNodeId: 0 },
      { text: 'Open door number 37', nextNodeId: 0 },
      { text: 'Open door number 38', nextNodeId: 0 },
      { text: 'Open door number 39', nextNodeId: 0 },
      { text: 'Open door number 40', nextNodeId: 0 },
      { text: 'Open door number 41', nextNodeId: 0 },
      { text: 'Open door number 42', nextNodeId: 0 },
      { text: 'Open door number 43', nextNodeId: 0 },
      { text: 'Open door number 44', nextNodeId: 0 },
      { text: 'Open door number 45', nextNodeId: 8 },
      { text: 'Open door number 46', nextNodeId: 0 },
      { text: 'Open door number 47', nextNodeId: 0 },
      { text: 'Open door number 48', nextNodeId: 0 },
      { text: 'Open door number 49', nextNodeId: 0 },
      { text: 'Open door number 50', nextNodeId: 0 },
      { text: 'Open door number 51', nextNodeId: 0 },
      { text: 'Open door number 52', nextNodeId: 0 },
      { text: 'Open door number 53', nextNodeId: 0 },
      { text: 'Open door number 54', nextNodeId: 0 },
      { text: 'Open door number 55', nextNodeId: 0 },
      { text: 'Open door number 56', nextNodeId: 0 },
      { text: 'Open door number 57', nextNodeId: 0 },
      { text: 'Open door number 58', nextNodeId: 0 },
      { text: 'Open door number 59', nextNodeId: 0 },
      { text: 'Open door number 60', nextNodeId: 0 },
      { text: 'Open door number 61', nextNodeId: 0 },
      { text: 'Open door number 62', nextNodeId: 0 },
      { text: 'Open door number 63', nextNodeId: 0 },
      { text: 'Open door number 64', nextNodeId: 0 },
      { text: 'Open door number 65', nextNodeId: 0 },
      { text: 'Open door number 66', nextNodeId: 0 },
      { text: 'Open door number 67', nextNodeId: 0 },
      { text: 'Open door number 68', nextNodeId: 0 },
      { text: 'Open door number 69', nextNodeId: 0 },
      { text: 'Open door number 70', nextNodeId: 0 },
      { text: 'Open door number 71', nextNodeId: 0 },
      { text: 'Open door number 72', nextNodeId: 0 },
      { text: 'Open door number 73', nextNodeId: 0 },
      { text: 'Open door number 74', nextNodeId: 0 },
      { text: 'Open door number 75', nextNodeId: 0 },
      { text: 'Open door number 76', nextNodeId: 0 },
      { text: 'Open door number 77', nextNodeId: 0 },
      { text: 'Open door number 78', nextNodeId: 0 },
      { text: 'Open door number 79', nextNodeId: 0 },
      { text: 'Open door number 80', nextNodeId: 0 },
      { text: 'Open door number 81', nextNodeId: 0 },
      { text: 'Open door number 82', nextNodeId: 0 },
      { text: 'Open door number 83', nextNodeId: 0 },
      { text: 'Open door number 84', nextNodeId: 0 },
      { text: 'Open door number 85', nextNodeId: 0 },
      { text: 'Open door number 86', nextNodeId: 0 },
      { text: 'Open door number 87', nextNodeId: 0 },
      { text: 'Open door number 88', nextNodeId: 0 },
      { text: 'Open door number 89', nextNodeId: 0 },
      { text: 'Open door number 90', nextNodeId: 0 },
      { text: 'Open door number 91', nextNodeId: 0 },
      { text: 'Open door number 92', nextNodeId: 0 },
      { text: 'Open door number 93', nextNodeId: 0 },
      { text: 'Open door number 94', nextNodeId: 0 },
      { text: 'Open door number 95', nextNodeId: 0 },
      { text: 'Open door number 96', nextNodeId: 0 },
      { text: 'Open door number 97', nextNodeId: 0 },
      { text: 'Open door number 98', nextNodeId: 0 },
      { text: 'Open door number 99', nextNodeId: 0 },
      { text: 'Open door number 100', nextNodeId: 0 }
    ]
  },
  10: {
    id: 10,
    name: 'Bad ending',
    text: 'The princess is dead.',
    options: [
      { text: 'Kill yourself' },
      { text: 'Kill yourself' }
    ]
  },
  11: {
    id: 11,
    name: 'Horrible creature',
    text: 'When you approach the chest, a horrible creature comes out of the chest but gives you a key to open the locked door.',
    options: [
      { text: 'Open the big door', nextNodeId: 9 }
    ]
  }
};

// Function to display a part of the story
  function displayNode(nodeId) {
  const node = storyNodes[nodeId];
  const storyDiv = document.getElementById('story');
  const choiceDiv = document.getElementById('choices'); // Get the choice div
  let html = `<p>${node.text}</p>`;
  let choiceHtml = '<ul>'; // Initialize a string with an opening ul tag
  node.options.forEach((option, i) => {
    choiceHtml += `<li><button class="choice-button" onclick="makeChoice(${nodeId}, ${i})">${option.text}</button></li>`;
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

// Start the story
displayNode(0);