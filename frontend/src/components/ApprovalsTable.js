import React, { Component } from 'react';
import '../styles/globalTableStyles.css';
import FiscalYear from './FiscalYear';
//making a comment
class ApprovalsTable extends Component {
  render() {
    return (
      <div>
        <div class="center">
          <h1 class="header approvals">APPROVALS</h1>
          <div class="approvals">
            <h3>CaptureMortgage+ Approvals Board</h3><span> </span>
            <h3><FiscalYear /></h3>
          </div>
          <table id="myTable">
            <tr class="approvals-back">
              <th>ID</th>
              <th>Moved to Approvals</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>WIP</th>
              <th>Lender</th>
              <th>Employee</th>
            </tr>
            <tr>
              <td>1</td>
              <td>01/01/2019</td>
              <td>Craig David</td>
              <td>Home Loan</td>
              <td>$200,000</td>
              <td>2 Days</td>
              <td>LP Staff</td>
              <td>Sarah Smith</td>
            </tr>
            <tr>
              <td>2</td>
              <td>01/01/2019</td>
              <td>James Dean</td>
              <td>Home Loan</td>
              <td>$40,000</td>
              <td>4 Days</td>
              <td>LP Staff</td>
              <td>Louise Lilly</td>
            </tr>
            <tr>
              <td>3</td>
              <td>02/04/2018</td>
              <td>Billy Joel</td>
              <td>Home Loan</td>
              <td>$475,000</td>
              <td>6 Days</td>
              <td>LP Staff</td>
              <td>Katherine Kale</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ApprovalsTable;


