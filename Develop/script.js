$(document).ready(function () {
  var result = luxon.DateTime.local();
  $("#demo").text(
    result.toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );
  // aray time blocks

  let currentHour = result.toFormat("H")
  let timeBlock = [
    {
      hour: "9am",
      id: 9,
      content: "",
    },
    {
      hour: "10am",
      id: 10,
      content: "",
    },
    {
      hour: "11am",
      id: 11,
      content: "",
    },
    {
      hour: "12pm",
      id: 12,
      content: "",
    },
    {
      hour: "1pm",
      id: 13,
      content: "",
    },
    {
      hour: "2pm",
      id: 14,
      content: "",
    },
    {
      hour: "3pm",
      id: 15,
      content: "",
    },
    {
      hour: "4pm",
      id: 16,
      content: "",
    },
    {
      hour: "5pm",
      id: 17,
      content: "",
    },
  ];
// get the items form local Storage

var list = JSON.parse(localStorage.getItem('schedule'));

  // creating time blocks
  for (let i = 0; i < timeBlock.length; i++) {
    var row = document.createElement("div");
    $(row).addClass("row");
    $(".container").append(row);
    let hourBlk = $("<div></div>").addClass("hour col-1");
    $(row).append(hourBlk);
    $(hourBlk).text(timeBlock[i].hour);

    var textArea = document.createElement("textarea");
    $(textArea).addClass("time-block col-10 description");
    $(textArea).text(list[i].content)
    $(row).append(textArea);

    var DaButton = document.createElement("button");
    $(DaButton).addClass("far fa-save saveBtn col-1");
    $(row).append(DaButton);
  
    if (timeBlock[i].id < currentHour){
      $(textArea).addClass("past")}
      
  else if (timeBlock[i].id > currentHour){
    $(textArea).addClass("future")}

    else if (timeBlock[i].id = currentHour){
      $(textArea).addClass("present")} 
    
  }

  $(".saveBtn").on("click", function(event){
    event.preventDefault();
    for (let i = 0; i < timeBlock.length; i++) {
   
      timeBlock[i].content = $(".time-block")[i].value
      localStorage.setItem('schedule', JSON.stringify(timeBlock));
    }

    
  })

});
