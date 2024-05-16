function toggleColumn(index) {
  const tables = document.querySelectorAll("#dataTable tr");
  let row = tables.rows;
  let cell = row.cells[index];
  tables.forEach(function (table) {
    table.style.display = table.style.display === "none" ? "" : "none";
  });
  if (cell.style.display === 'none') {
        cell.style.display = '';
}
}

// function toggleColumn(index){
//     var table = document.getElementById('table');
//     var column = table.rows[0].cells[index];
//     var rows = table.rows;
//     for(var i = 1; i < rows.length; i++){
//         rows[i].style.display = rows[i].style.display == 'none'? '' : 'none';
//     }
//     column.style.backgroundColor = column.style.backgroundColor == 'blue'? 'white' : 'blue';
// }
