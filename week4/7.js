document.addEventListener("DOMContentLoaded", function(event) {  
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    var caption = document.createElement('caption');
    caption.innerHTML = "Table caption";
    tbl.appendChild(caption);
    var tbdy = document.createElement('tbody');
    

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.innerHTML = "Evidence<br>Rating";
    tr.appendChild(th)
    th = document.createElement('th');
    th.innerHTML = "Effect";
    tr.appendChild(th)
    th = document.createElement('th');
    th.innerHTML = "Efficancy";
    tr.appendChild(th)
    th = document.createElement('th');
    th.innerHTML = "Consensus";
    tr.appendChild(th)
    th = document.createElement('th');
    th.innerHTML = "Comments";
    tr.appendChild(th)
    tbdy.appendChild(tr);

    tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = "A";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "Power<br>Output";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "3 star";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "80%<br>18 studis";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.";
    tr.appendChild(td)
    tbdy.appendChild(tr);

    tr = document.createElement('tr');
    td = document.createElement('td');
    td.innerHTML = "B";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "Weight";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "4 star";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "100%<br>65 studis";
    tr.appendChild(td)
    td = document.createElement('td');
    td.innerHTML = "Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.Too much text.";
    tr.appendChild(td)
    tbdy.appendChild(tr);

    tbl.appendChild(tbdy);
    body.appendChild(tbl);

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Click!"));
    button.setAttribute('onclick', "func()")
    body.appendChild(button);
});

function func() {
    var myTable = document.getElementsByTagName('table');
    for(i in myTable[0].rows[1].cells) {
        let temp =  myTable[0].rows[1].cells[i].innerHTML;
        myTable[0].rows[1].cells[i].innerHTML = myTable[0].rows[2].cells[i].innerHTML;
        myTable[0].rows[2].cells[i].innerHTML = temp;
    }
}