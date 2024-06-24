const jq = jQuery.noConflict();

class Row {
  constructor() {
    this.Row = '';
  }

  addRow() {
    const row = `
  <tr>
    <td>Hello 1</td>
    <td>Hello 2</td>
    <td>Hello 3</td>
  </tr>`;

    const tableBody = jq('tbody');
    tableBody.append(row);
  }

  deleteRow() {
    const tableBodyRows = jq('tbody tr');
    const lastRow = tableBodyRows.last();
    lastRow.remove();
  }
}

const row = new Row();

jq(function () {
  jq(document).on('click', '.add-button', function () {
    row.addRow();
  });

  jq(document).on('click', '.delete-button', function () {
    row.deleteRow();
  });
});
