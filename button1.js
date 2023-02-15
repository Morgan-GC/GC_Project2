const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "Cluster 1",
    options: [
      {
        text: 'option 1',
        
        nextText: 2
      },
      {
        text: 'option 2',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Cluster 2',
    options: [
      {
        text: 'option 3',
        
        nextText: 4
      },
      {
        text: 'option 4',
      
        nextText: 5
      },
      {
        text: 'option 5',
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text: 'Cluster 3',
    options: [
      {
        text: 'option 6',
        nextText: 7
      },
      {
        text: 'option 7',
        nextText: 8
      },
      {
        text: 'option 8',
        nextText: 9
      }
    ]
  },
  {
    id: 4,
    text: 'end 1',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'end 2',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'end 3',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'cluster 5',
    options: [
      {
        text: 'option 9',
        nextText: 8
      },
      {
        text: 'option 10',
        
        nextText: 9
      },
      {
        text: 'option 11',
        
        nextText: 10
      },
      {
        text: 'option 12',
        
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'end 4',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'end 5',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'end 6',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'end 7',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()