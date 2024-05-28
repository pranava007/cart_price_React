import './App.css'
import Pro from './Components/Pro'
import Puls from './Components/Puls'
import Free from './Components/Free'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 

  return (
    <>
    <Container>
      <Row>
        <Col><Free/></Col>
        <Col><Puls/></Col>
        <Col> <Pro/></Col>
      </Row>
    </Container>
   
   
     

    </>
  )
}

export default App
