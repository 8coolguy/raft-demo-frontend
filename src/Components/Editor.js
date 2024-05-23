import React from "react";
import { useState } from "react";
import ReactDiffViewer from "react-diff-viewer";
import { Row, Col, Container, Button, Text} from "react-bootstrap";
import CodeEditor from '@uiw/react-textarea-code-editor/nohighlight';
import TextareaCodeEditor from '@uiw/react-textarea-code-editor';

function Sidebar({directory,selected,setSelect}){
  const handleSelect = (event) => {
    setSelect(event.target.attributes.value.value);
  }
  //<Button className="rounded-circle" variant="success">+</Button>
  return(
    <Container fluid className="bg-secondary">
    {directory.map(element => {
      if(directory.indexOf(element)==selected)
        return (<Row text id="selected" className="bg-primary text-white">
          <a>{element.name}</a>
        </Row>)
      else
        return (<Row text id="unselected" value={directory.indexOf(element)} className="text-white" onClick={handleSelect}>
          <a value={directory.indexOf(element)}>{element.name}</a>
        </Row>)
    })}
    </Container>
  )
}
class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      file:props.file,
      text:props.file.content,
      newText:``
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.file != prevProps.file) {
      this.setState({
        file:this.props.file,
        text:this.props.file.content,
        newText:``
      });
    }
  }
  render(){
    if(this.state.newText.length!=0)
      return( <div id="editor"> <ReactDiffViewer oldValue={this.state.text} newValue={this.state.newText} splitView={true} /> </div>)
    return (
      <div id="editor">
        <CodeEditor autoFocus minHeight={"80vh"} value={this.state.text} placeholder="Type Something" onChange={(event) => this.setState({text:event.target.value})}/>
      </div>
    )
  }
}
function CommitForm(){

}
function Home({directory}){


  const [select,setSelect] = useState(2);
  return(
    <Container fluid>
      <Row id="editor">
        <Col className="p-0 bg-secondary" xs={6} md={4}>
          <Sidebar directory={directory} selected={select} setSelect={setSelect}/>
        </Col>
        <Col className="p-0 bg-light" xs={12} md={8}>
          <Editor selected={select} file={directory[select]}/>
        </Col>
      </Row>
      <Row>
        <Col className="p-0" xs={6} md={4}>
          <p>fsdfnsldk</p>
        </Col>
        <Col className="p-0" xs={12} md={8}>
          <p>fsdfnsldk</p>
        </Col>
      </Row>
    </Container>
  )






}

export default Home;
