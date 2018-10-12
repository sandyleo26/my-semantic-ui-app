import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'


const ModalModalExample = () => (
  <Modal size="tiny" trigger={<Button>Download Application</Button>}>
    <Modal.Header>Download Application</Modal.Header>
    <Modal.Actions>
      <Button positive>Summary</Button>
      <Button positive icon='cloud download' labelPosition='right' content='Attachments' />
    </Modal.Actions>
  </Modal>
)


class App extends Component {
  render() {
    return (
      <ModalModalExample />
    );
  }
}

export default App;
