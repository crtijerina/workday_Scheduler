$(document).ready(function () {
  var result = luxon.DateTime.local();
  $("#demo").text(
    result.toLocaleString({ weekday: "long", month: "long", day: "numeric" })
  );

  // creating time blocks
  for (let i = 9; i <= 17; i++) {
    var row = document.createElement("div");
    $(row).addClass("row");
    $(".container").append(row);

    var hourBlk = document.createElement("div");
    $(hourBlk).addClass("hour col-1");
    $(row).append(hourBlk);

    if (i < 12) {
      $(hourBlk).text(i + "am");
    } else if ((i === 12)) {
      $(hourBlk).text(i + "pm");
    } else {
      $(hourBlk).text((i % 12) + "pm");
    }

    var textArea = document.createElement("textarea");
    $(textArea).addClass("time-block col-10 description");
    $(row).append(textArea);

    var DaButton = document.createElement("button");
    $(DaButton).addClass("far fa-save saveBtn col-1");
    $(row).append(DaButton);
  }
});
