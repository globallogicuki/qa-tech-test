import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const array1 = [1,2,3,4,5,6,7,8,10]
const array2 = [5,6,3,2,6,7,2,3,4]
const array3 = [30, 43, 29, 10, 50, 40, 1, 2, 1]

export default class CustomTable extends Component {

  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
          <TableRow>
            { array1.map((item, index) => <TableRowColumn key={index}>{item}</TableRowColumn>)}  
          </TableRow>
          <TableRow>
            { array2.map((item, index) => <TableRowColumn key={index}>{item}</TableRowColumn>)}  
          </TableRow>
          <TableRow>
            { array3.map((item, index) => <TableRowColumn key={index}>{item}</TableRowColumn>)}  
          </TableRow>
        </TableBody>
      </Table>
    </div>
    );
  }
}