import styled from 'styled-components'

export const Image = styled.img`
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const CustomButton = styled.button`
  background-color: transparent;
  border: 0;
  margin: 10px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
