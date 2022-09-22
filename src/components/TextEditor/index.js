import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  TextEditorCard,
  TextContainer,
  Heading,
  Image,
  TextCard,
  Styles,
  TextButton,
  Text,
  List,
} from './StyledComponents'

class TextEditor extends Component {
  state = {
    boldClicked: false,
    italicClicked: false,
    underlineClicked: false,
    text: '',
  }

  boldColor = () => {
    const {boldClicked} = this.state
    this.setState({boldClicked: !boldClicked})
  }

  textStyle = event => {
    this.setState({text: event.target.value})
  }

  italicColor = () => {
    const {italicClicked} = this.state
    this.setState({italicClicked: !italicClicked})
  }

  underlineColor = () => {
    const {underlineClicked} = this.state
    this.setState({underlineClicked: !underlineClicked})
  }

  render() {
    const {boldClicked, italicClicked, underlineClicked, text} = this.state
    const style = {
      bold: boldClicked,
      italic: italicClicked,
      underline: underlineClicked,
    }
    return (
      <MainContainer>
        <TextEditorCard>
          <TextContainer>
            <Heading>Text Editor</Heading>
            <Image
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </TextContainer>
          <TextCard>
            <Styles>
              <List>
                <TextButton
                  data-testid="bold"
                  clicked={boldClicked}
                  onClick={this.boldColor}
                >
                  <VscBold size={25} />
                </TextButton>
              </List>
              <List>
                <TextButton
                  data-testid="italic"
                  clicked={italicClicked}
                  onClick={this.italicColor}
                >
                  <GoItalic size={25} />
                </TextButton>
              </List>
              <List>
                <TextButton
                  data-testid="underline"
                  clicked={underlineClicked}
                  onClick={this.underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </TextButton>
              </List>
            </Styles>
            <Text onChange={this.textStyle} style={style} value={text} />
          </TextCard>
        </TextEditorCard>
      </MainContainer>
    )
  }
}

export default TextEditor
