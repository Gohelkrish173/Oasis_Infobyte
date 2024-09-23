const title = document.getElementById('Title');
const description = document.getElementById('Description');
const sdate = document.getElementById('sdate');

const pdata = document.getElementById('pdata');
const cdata = document.getElementById('cdata');

const btn = document.getElementById('submit');
btn.innerHTML = "submit";
var index;

var PList = [
  { "Title" : "task1", "Description" : "task1 is more important.","Date" : "28-08-2024"}
];

const DisplayList = () =>{
  pdata.innerHTML = "";
  for(var i = 0;i<PList.length;i++){
    pdata.innerHTML += "<div class='task'>"+"<table class='tab'>" +
                "<tr>"+
                `<td class="title">${PList[i].Title}</td>`+
                `<td class="date">${PList[i].Date}</td>`+
                `<td class="Description">${PList[i].Description}</td>`+
                "<td>"+
                  "<i class='fa-solid fa-pencil' onclick='Edit("+i+")'></i> &nbsp;"+
                  "<i class='fa-solid fa-trash' onclick='Delete("+i+")'></i>"+
                "</td>"+
                "<td>"+
                  "<i class='fa-regular fa-square' onclick='Completed("+i+")'>"
                  +"</i>"+
                "</td>"+
              "</tr>"+
              "</table>"+"</div>"
  }
}

const DisplayCList = () =>{
  cdata.innerHTML = "";
  for(var i = 0;i<CList.length;i++){
    cdata.innerHTML += "<div class='task'>"+"<table>"+
              "<tr>"+
              `<td class = 'title'>${CList[i].Title}</td>`+
              `<td>${CList[i].sdate}</td>`+
              "<td>"+CList[i].cdate+"</td>"+
              "<td class = 'c'>"+
                  "<i class='fa-regular fa-square-check'>"
              "</td>"+
              "</tr>"+
            "</table>"+"</div>"
  }
}

const AddEditTask = () =>{
  if(btn.innerHTML == "submit"){
    const obj = {
      "Title" : title.value,
      "Description" : description.value,
      "Date" : sdate.value,
    }
  
    PList.push(obj);
  
    title.value = "";
    Description.value = "";
    sdate.value = "";
  }
  else{
    const obj = {
      "Title" : title.value,
      "Description" : description.value,
      "Date" : sdate.value,
    }
    PList[index] = obj;

    title.value = "";
    Description.value = "";
    Date.value =  "mm/dd/yyyy";
    btn.innerHTML = "submit"
  }
  DisplayList();
}

const Edit = (i) =>{
  title.value = PList[i].Title;
  description.value = PList[i].Description;
  sdate.value = PList[i].Date;
  btn.innerHTML = "Edit";
  index = i;
}

const Delete = (i) =>{
  PList.splice(i,1);
  DisplayList();
}

const CList = [];

const Completed= (i)=>{
  const date = new Date();
  const obj = {
    "Title" : PList[i].Title,
    "sdate" : PList[i].Date,
    "cdate" : date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
  }
  CList.push(obj);

  console.log(CList);

  PList.splice(i,1);
  DisplayList();

  DisplayCList();
}
