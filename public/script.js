const jq = jQuery.noConflict();

class Row {
  #row;
  constructor() {
    this.#row = '<tr><td>Hello 1</td><td>Hello 2</td><td>Hello 3</td>/tr>';
  }

  addRow() {
    const tableBody = jq('tbody');
    tableBody.append(this.#row);
  }

  deleteRow() {
    const tableBodyRows = jq('tbody tr');
    const lastRow = tableBodyRows.last();
    lastRow.remove();
  }
}

jq(function () {
  jq(document).on('click', '.add-button', function () {
    const row = new Row();
    //row.row = '<tr><td>Hello 2</td><td>Hello 2</td><td>Hello 3</td>/tr>';
    //debugger;
    row.addRow();
    console.log(row);
    console.log(Object.getOwnPropertyNames(row));
    console.log(Object.getOwnPropertyNames(row.__proto__));
  });

  jq(document).on('click', '.delete-button', function () {
    const row = new Row();
    row.deleteRow();
  });
});
