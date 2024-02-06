// Define the nodes of the story
const story = {
    id:0,
    name: 'Start',
    text: 'You find yourself in a dark room. There are two doors.',
    options: [
      {
        text: 'Go through the door on the left.',
        nextNode: {
          id:1,
          name: 'Left door',
          text: 'You find yourself in a library.',
          options: [
            {
              id:2,
              text: 'Read a book.',
              nextNode: {
                name: 'Read a book',
                text: 'You live happily ever after.',
                options: []
              }
            },
            {
            id:3,
              text: 'Leave the library.',
              nextNode: {
                name: 'Leave the library',
                text: 'You find yourself back in the dark room.',
                options: [] // To keep it simple, we'll stop the story here
              }
            }
          ]
        }
      },
      {
        id:4,
        text: 'Go through the door on the right.',
        nextNode: {
          name: 'Right door',
          text: 'You find yourself in a garden.',
          options: [] // To keep it simple, we'll stop the story here
        }
      }
    ]
  };
  
// Define the nodes of the story
// ...

// Function to display a part of the story
function displayNode(node) {
    const storyDiv = document.getElementById('story');
    let html = `<p>${node.text}</p>`;
    node.options.forEach((option, i) => {
      html += `<button onclick="makeChoice(story, ${i + 1})">${option.text}</button>`;
    });
    storyDiv.innerHTML = html;
  }
  
  // Function to make a choice
  function makeChoice(node, choice) {
    const chosenOption = node.options[choice - 1];
    if (chosenOption) {
      displayNode(chosenOption.nextNode);
    } else {
      console.log('Invalid choice.');
    }
  }
  
  // Start the story
  displayNode(story);