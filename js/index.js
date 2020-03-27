let arrs = [
  [1, 2, 3, 4],
  [2, 4, 5, 6],
  [4, 5, 6, 7],
  [4, 3, 4, 5]
];

document.write("<table>");
document.write("<tr>");
document.write("<th>Number 1</th>");
document.write("<th>Number 2</th>");
document.write("<th>Number 3</th>");
document.write("<th>Number 4</th>");
document.write("</tr>");

for (let i = 0; i < arrs.length; i++) {
  document.write("<tr>");
  for (let j = 0; j < arrs[i].length; j++) {
    document.write(`<td>${arrs[i][j]}</td>`);
  }
  document.write("</tr>");
}

document.write("</table>");
