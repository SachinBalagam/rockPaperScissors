import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import PlayingView from './PlayingView/index'
import ResultView from './ResultView/index'
import {
  AppContainer,
  MainContainer,
  ResultContainer,
  ListContainer,
  RulesButtonContainer,
  HeadingText,
  ScoreText,
  CustomButton,
  Image,
  CloseButton,
  ScoreCard,
  ScoreNumber,
} from './styledComponents'
import './App.css'

import 'reactjs-popup/dist/index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class App extends Component {
  state = {
    showResultView: false,
    opponentUrl: '',
    yourUrl: '',
    score: 0,
    result: '',
  }

  getResult = props => {
    const {yourUrl, opponentUrl} = props
    console.log(props)
    console.log(yourUrl)
    console.log(opponentUrl)
    if (yourUrl.id === 'ROCK' && opponentUrl.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (yourUrl.id === 'SCISSORS' && opponentUrl.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (yourUrl.id === 'PAPER' && opponentUrl.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (yourUrl.id === opponentUrl.id) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  onImageClick = id => {
    const random = Math.floor(Math.random() * (choicesList.length - 0) - 0)
    const opponentUrl = choicesList[random]
    const your = choicesList.filter(each => each.id === id)
    const yourUrl = your[0]
    this.getResult({opponentUrl, yourUrl})
    this.setState({
      showResultView: true,
      opponentUrl,
      yourUrl,
    })
  }

  onPlayAgainClick = () => {
    this.setState({showResultView: false})
  }

  render() {
    const {showResultView, opponentUrl, yourUrl, score, result} = this.state
    return (
      <AppContainer>
        <MainContainer>
          <ResultContainer>
            <HeadingText>
              Rock <br /> Paper <br /> Scissors
            </HeadingText>

            <ScoreCard>
              <ScoreText>Score</ScoreText>
              <ScoreNumber>{score}</ScoreNumber>
            </ScoreCard>
          </ResultContainer>

          {showResultView ? (
            <ListContainer>
              <ResultView
                yourUrl={yourUrl}
                opponentUrl={opponentUrl}
                onPlayAgainClick={this.onPlayAgainClick}
                result={result}
              />
            </ListContainer>
          ) : (
            <ListContainer>
              {choicesList.map(each => (
                <PlayingView
                  key={each.id}
                  details={each}
                  onImageClick={this.onImageClick}
                />
              ))}
            </ListContainer>
          )}

          <RulesButtonContainer>
            <Popup modal trigger={<CustomButton>Rules</CustomButton>}>
              {close => (
                <>
                  <CloseButton
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    <RiCloseLine />
                  </CloseButton>
                  <div>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </div>
                </>
              )}
            </Popup>
          </RulesButtonContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default App
