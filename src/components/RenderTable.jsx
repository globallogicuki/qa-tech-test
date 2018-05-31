import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
 
const array1 = [23, 50, 63, 90, 10, 30, 155, 23, 18];
const array2 = [133, 60, 23, 92, 6, 7, 168, 16, 19];
const array3 = [30, 43, 29, 10, 50, 40, 99, 51, 12];

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
    height: '200px',
    alignItems:'center',
    textAlign: 'center',
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
            { array1.map((item, index) => <TableRowColumn data-test-id={`array-item-1-${index}`} key={index}>{item}</TableRowColumn>)}  
          </TableRow>
          <TableRow>
            { array2.map((item, index) => <TableRowColumn data-test-id={`array-item-2-${index}`}  key={index}>{item}</TableRowColumn>)}  
          </TableRow>
          <TableRow>
            { array3.map((item, index) => <TableRowColumn data-test-id={`array-item-3-${index}`}  key={index}>{item}</TableRowColumn>)}  
          </TableRow>
        </TableBody>
      </Table>
    </div>
    );
  }
}