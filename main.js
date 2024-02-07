// Define the nodes of the story
const storyNodes = {
  0: {
    id: 0,
    name: 'Start',
    text: 'You find yourself in a dark room. There are two doors.',
    options: [
      { text: 'Go through the door on the left.', nextNodeId: 1 },
      { text: 'Go through the door on the right.', nextNodeId: 4 }
    ]
  },
  1: {
    id: 1,
    name: 'Left door',
    text: 'You find yourself in a library.',
    options: [
      { text: 'Read a book.', nextNodeId: 2 },
      { text: 'Leave the library.', nextNodeId: 3 }
    ]
  },
  2: {
    id: 2,
    name: 'Read a book',
    text: 'You live happily ever after.',
    options: []
  },
  3: {
    id: 3,
    name: 'Leave the library',
    text: 'You find yourself back in the dark room.',
    options: []
  },
  4: {
    id: 4,
    name: 'Right door',
    text: 'You find yourself in a garden.',
    options: []
  }
};

// Function to display a part of the story
function displayNode(nodeId) {
  const node = storyNodes[nodeId];
  const storyDiv = document.getElementById('story');
  let html = `<p>${node.text}</p>`;
  node.options.forEach((option, i) => {
    html += `<button onclick="makeChoice(${nodeId}, ${i})">${option.text}</button>`;
  });
  storyDiv.innerHTML = html;
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