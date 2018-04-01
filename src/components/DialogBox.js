import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DialogExampleAlert extends React.Component {
    constructor(props) {
        super();
    }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          Discard draft?
        </Dialog>
      </div>
    );
  }
}