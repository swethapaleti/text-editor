import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
`

export const TextEditorCard = styled.div`
  display: flex;
  width: 80%;
  background-color: #1b1c22;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 350px;
  height: 350px;
  margin: 30px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const TextCard = styled.div`
  background-color: #25262c;
  border-radius: 8px;
  border: 1px solid #334155;
  margin: 20px;
  width: 50%;
`

export const Styles = styled.ul`
  border-bottom: 1px solid #334155;
  list-style-type: none;
  display: flex;
  padding-left: 0px;
`

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.clicked ? '#faff00' : '#f1f5f9')};
`

export const Text = styled.textarea`
  font-size: 20px;
  margin: 20px;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  text-decoration: ${props => (props.style.underline ? 'underline' : 'normal')};
  font-weight: ${props => (props.style.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.style.italic ? 'italic' : 'normal')};
`

export const List = styled.li`
  padding: 10px;
`
