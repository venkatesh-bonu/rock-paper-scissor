import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

// upade rules button on the tab

import {Component} from 'react'

import RulesPopup from './Popup'

import {
  MainDiv,
  CustomButton,
  List,
  Player,
  ChoiceButton,
  ChoiceImage,
  MatchStatus,
  MainHeading,
  TypeOfChoice,
  ScoreContainer,
  ScoreHeading,
  Score,
  ChoicesContainer,
  PalyAgainContainer,
} from './styledComponents.js'

import './App.css'

const matchConstants = {
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class App extends Component {
  state = {
    isPlaingGame: true,
    score: 0,
    showRules: false,
    userId: '',
    oppnentId: '',
  }

  renderHeading = () => {
    const {score} = this.state
    return (
      <MainHeading>
        <div>
          <TypeOfChoice>ROCK PAPER SCISSORS</TypeOfChoice>
        </div>
        <ScoreContainer>
          <ScoreHeading>Score</ScoreHeading>
          <Score>{score}</Score>
        </ScoreContainer>
      </MainHeading>
    )
  }

  getGameStatus(userId, opponentId) {
    if (
      (userId === 'ROCK' && opponentId === 'SCISSORS') ||
      (userId === 'SCISSORS' && opponentId === 'PAPER') ||
      (userId === 'PAPER' && opponentId === 'ROCK')
    )
      return matchConstants.win
    else if (
      (userId === 'SCISSORS' && opponentId === 'ROCK') ||
      (userId === 'PAPER' && opponentId === 'SCISSORS') ||
      (userId === 'ROCK' && opponentId === 'PAPER')
    )
      return matchConstants.lose
    else return matchConstants.draw
  }

  getScoreForStautus = status => {
    if (status === matchConstants.lose) return -1
    if (status === matchConstants.win) return 1
    return 0
  }

  onClickGameBtn = event => {
    const oppnentId = choicesList[Math.floor(Math.random() * 3)].id
    const status = this.getGameStatus(event.target.id, oppnentId)
    const {score} = this.state
    this.setState({
      isPlaingGame: false,
      userId: event.target.id,
      oppnentId,
      score: score + this.getScoreForStautus(status),
    })
  }

  ChoiceButton = props => {
    const {details} = props
    const {imageUrl, id} = details
    // console.log(imageUrl)
    const testId = id.toLowerCase() + 'Button'
    console.log(testId)
    return (
      <ChoiceButton onClick={this.onClickGameBtn}>
        <ChoiceImage id={id} src={imageUrl} alt={id} data-testid={testId} />
      </ChoiceButton>
    )
  }

  renderPlayingMode = () => {
    return (
      <ChoicesContainer>
        {choicesList.map(eachChoice => {
          return <this.ChoiceButton details={eachChoice} key={eachChoice.id} />
        })}
      </ChoicesContainer>
    )
  }

  playGameAgain = () => {
    this.setState({isPlaingGame: true})
  }

  renderGameOverMode = () => {
    const {userId, oppnentId} = this.state
    const userObj = choicesList.find(eachChoice => eachChoice.id === userId)
    const oppnentObj = choicesList.find(
      eachChoice => eachChoice.id === oppnentId,
    )
    const userImgUrl = userObj.imageUrl
    const opponentImgUrl = oppnentObj.imageUrl
    const matchStatus = this.getGameStatus(userId, oppnentId)
    const matchStatusText =
      matchStatus === matchConstants.draw
        ? 'IT IS DRAW'
        : matchStatus === matchConstants.win
        ? 'YOU WON'
        : 'YOU LOSE'
    return (
      <>
        <List>
          <div>
            <Player>YOU</Player>
            <ChoiceButton>
              <ChoiceImage src={userImgUrl} alt="your choice" />
            </ChoiceButton>
          </div>
          <div>
            <Player>OPPONENT</Player>
            <ChoiceButton>
              <ChoiceImage src={opponentImgUrl} alt="opponent choice" />
            </ChoiceButton>
          </div>
        </List>
        <PalyAgainContainer>
          <MatchStatus>{matchStatusText}</MatchStatus>
          <CustomButton onClick={this.playGameAgain}>PLAY AGAIN</CustomButton>
        </PalyAgainContainer>
      </>
    )
  }

  render() {
    const {isPlaingGame} = this.state
    return (
      <MainDiv>
        {this.renderHeading()}
        {isPlaingGame ? this.renderPlayingMode() : this.renderGameOverMode()}
        {RulesPopup()}
      </MainDiv>
    )
  }
}

export default App

