import styled from 'styled-components'

export const MainDiv = styled.div`
   min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CustomButton = styled.button`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: white;
  border: 0px;
  border-radius: 8px;
  font-family: 'bree serif';
  align-self: flex-end;
`

export const List = styled.ul`
  padding: 0px;
  list-style-type: none;
  width: 70%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const Player = styled.p`
   color: white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`
export const ChoiceButton = styled.button`
  width: 120px;
  height: 130px;
  background-color: transparent;
  border: 0px;
  margin-bottom: 30px;
  padding: 0px;
`

export const ChoiceImage = styled.img`
   height : 100%;
   width : 100%;
`

export const MatchStatus = styled.p`
   color: white;
  font-weight: 700;
  font-size: 25px;
`
export const MainHeading = styled.h1`
  display: flex;
  width: 100%;
  max-width: 800px;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  border: 3px solid white;
  border-radius: 15px;
  margin-bottom: 40px; 
`

export const TypeOfChoice = styled.h1`
  font-family: 'bree serif';
  font-weight: 500;
  font-size: 30px;
  color: white;
  margin: 0px;
`

export const ScoreContainer = styled.div`
   border-radius: 8px;
  height: 120px;
  width: 120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ScoreHeading = styled.p`
   color: #223a5f;
  font-family: 'bree serif';
  font-size: 30px;
  margin: 0px;
  margin-bottom: 10px;
`
export const Score = styled.p`
   color: #223a5f;
  font-family: 'Roboto';
  font-size: 30px;
  margin: 0px;
  margin-bottom: 10px;
`

export const ChoicesContainer = styled.ul`
  padding : 0px;
  list-style-type : none;
  wdith : 100%;
  max-width : 300px;
  display : flex;
  justify-content : space-around;
  align-items : center;
  flex-wrap : wrap
`

export const PalyAgainContainer = styled.div`
 text-align : center;
`

export const ModalContainer = styled.div`
   display : felx;
   height : 100vh;
   width : 100vw;
   background-color : #00000066;
  justify-content : center;
  align-items : center;
`
export const ModalCenterContainer = styled.div`
    height : 50%;
    width : 80%;
    background-color : white;
    padding : 10px;
    display : flex;
    flex-direction : column;
    @media (min-width : 768px){
      height : 70%;
      width : 50%;
    }
`
export const CloseButtonContainer = styled.div`
  text-align : right;
`

export const PopUpCloseButton = styled.button`
   backgroun-color: grey: 
   height : 40px;
   width : 40px;
   border : 0px;
   border-radius : 5px;
   font-size : 15px;
   padding : 10px;
`

export const ModalImgContainer = styled.div`
 flex-grow : 1;
 display: flex;
 justify-content : center;
 overflow : auto;
`

export const ModalImg = styled.img`
    height : 80%;
    width : 80%;
    flex-grow : 1px;
`

