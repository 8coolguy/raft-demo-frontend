import React from "react";
import { useState } from "react";
import ReactDiffViewer from "react-diff-viewer";
import { Row, Col, Container, Button, Form} from "react-bootstrap";
import CodeEditor from "@uiw/react-textarea-code-editor/nohighlight";

function Sidebar({directory,selected,setSelect}){
  const handleSelect = (event) => {
    setSelect(event.target.attributes.value.value);
  }
  return(
    <Container fluid className="bg-secondary">
    {directory.map(element => {
      if(directory.indexOf(element) == selected)
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
  componentDidUpdate(prevProps,prevState) {
    if (this.props.file.id != prevProps.file.id) {
      this.setState({
        file:this.props.file,
        text:this.props.file.content,
        newText:``
      });
    }else if(this.props.file.timestamp != prevProps.file.timestamp){
      this.setState({
        file:this.props.file,
        text:this.props.file.content,
        newText:prevState.text
      });
    }
  }
  render(){
    if(this.state.newText.length!==0)
      return( <div id="editor"> <ReactDiffViewer oldValue={this.state.text} newValue={this.state.newText} /> </div>)
    return (
      <div id="editor">
        <CodeEditor autoFocus minHeight={"80vh"} value={this.state.text} placeholder="Type Something" onChange={(event) => this.setState({text:event.target.value})}/>
      </div>
    )
  }
}
function CommitForm({file,setDirectory}){
  const files = [
    {
      id:0,
      name:"file 1",
      timestamp:5,
      content:"sldflsdkfjlsjflksdjf\n"
    },
    {
      id:1,
      name:"file 2",
      timestamp:3,
      content:"sldflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsd"
    },
    {
      id:2,
      name:"file 3",
      timestamp:5,
      content:"slfsdfsdfsdfsdfdsfsdfsdfsddflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsddslfksjdlfjk\n"
    }
  ]
  const [commitMessage,setCommit] = useState("");
  const getDirectory = () => {
    setDirectory(files);
  }
  return (
    <Container fluid className="bg-secondary text-white">
      <Form>
        <Form.Group>
          <Row>
              <Form.Label>{file.name}</Form.Label>
            <Col>
              <Form.Control size="sm" type="name" placeholder="Commit Message" value={commitMessage} onChange={(event)=>setCommit(event.target.value)}/>
            </Col>
            <Col md="auto">
              <Button className="rounded" type="submit" variant="success">Commit</Button>
              <Button className="rounded" variant="primary" onClick={getDirectory}>Fetch</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  )
}
function Home({directory,setDirectory}){
  const addFile = (event) =>{
    event.preventDefault();
    //if name is unique add to directory and push to server to add to directory
    setDirectory([...directory, {
      id:directory.length,
      name:newName,
      timestamp:0,
      content:""
    }]);
  }
  const [select,setSelect] = useState(2);
  const [newName, setName] = useState("");
  return(
    <Container fluid>
      <Row id="editor">
        <Col className="p-0 bg-secondary" xs={4} md={2}>
          <Sidebar directory={directory} selected={select} setSelect={setSelect}/>
        </Col>
        <Col className="p-0 bg-light" xs={16} md={10}>
          <Editor selected={select} file={directory[select]}/>
        </Col>
      </Row>
      <Row id="creator">
        <Col className="p-0 bg-secondary" xs={4} md={2}>
          <Form className="text-white">
            <Form.Group>
              <Form.Label>Add a new File</Form.Label>
              <Row className="p-0">
                <Col md lg="8">
                  <Form.Control size="sm" type="name" placeholder="Name" value={newName} onChange={(event)=>setName(event.target.value)}/>
                </Col>
                <Col className="p-0" md="auto">
                  <Button className="rounded-circle" type="submit" variant="success" onClick={addFile}>+</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
        <Col className="p-0 bg-secondary" xs={16} md={10}>
          <CommitForm file={directory[select]} setDirectory={setDirectory}/>
        </Col>
      </Row>
    </Container>
  )






}

export default Home;
