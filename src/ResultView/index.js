import {
  ResultViewContainer,
  SubContainer,
  EachCard,
  Image,
  Heading,
  ResultText,
  CustomButton,
} from './styledComponents'

const ResultView = props => {
  const {yourUrl, opponentUrl, onPlayAgainClick, result} = props

  const onClickPlayAgain = () => {
    onPlayAgainClick()
  }
  return (
    <ResultViewContainer>
      <SubContainer>
        <EachCard>
          <Heading>YOU</Heading>
          <Image src={yourUrl.imageUrl} alt="your choice" />
        </EachCard>
        <EachCard>
          <Heading>OPPONENT</Heading>
          <Image src={opponentUrl.imageUrl} alt="opponent choice" />
        </EachCard>
      </SubContainer>
      <ResultText>{result}</ResultText>
      <CustomButton type="button" onClick={onClickPlayAgain}>
        Play Again
      </CustomButton>
    </ResultViewContainer>
  )
}

export default ResultView
