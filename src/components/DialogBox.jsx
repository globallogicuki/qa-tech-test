import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
  alignItems: 'center',
  textAlign: 'center',
};


const dialogText = complete => (complete ? 'Congratulations you have succeeded. Please submit your challenge ✅' :
  'It looks like your answer wasn\'t quite right ❌');

export default class DialogBox extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary
        onClick={this.props.handleClose}
      />,
    ];
    return (
      <div>
        <Dialog
          className="dialog"
          style={style}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >

          {dialogText(this.props.complete)}
        </Dialog>
      </div>
    );
  }
}
