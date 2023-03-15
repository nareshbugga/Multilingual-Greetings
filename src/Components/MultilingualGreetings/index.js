import {Component} from 'react'
import MultilingualGreetingsButtons from '../MultilingualGreetingsButtons'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeButton: languageGreetingsList[0].id,
    displayImage: languageGreetingsList[0],
  }

  buttonActive = id => {
    const display = languageGreetingsList.filter(eachList => eachList.id === id)
    const value = display[0]
    this.setState({activeButton: id, displayImage: value})
  }

  render() {
    const {activeButton, displayImage} = this.state
    console.log(displayImage)
    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul className="list-items">
          {languageGreetingsList.map(eachList => (
            <MultilingualGreetingsButtons
              eachList={eachList}
              key={eachList.id}
              condition={activeButton === eachList.id}
              buttonActive={this.buttonActive}
            />
          ))}
        </ul>
        <img
          src={displayImage.imageUrl}
          alt={displayImage.imageAltText}
          className="image"
        />
      </div>
    )
  }
}

export default MultilingualGreetings
