import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  display: flex;
  justify-content: center;
  padding: 20px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 60vw;
  font-family: 'Bree Serif';
`
export const HeadingText = styled.h1`
  font-size: 30px;
`

export const ScoreText = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
`
export const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 40vw;
`
export const RulesButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
`
export const CustomButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 18px;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 500px;
`
export const CloseButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
`
export const ScoreNumber = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
`
