function ShowSelection1() {
  // input 1
  var textComponent = document.getElementById("input_1");
  var selectedText1;

  if (textComponent.selectionStart !== undefined) {
    // Standards-compliant version
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText1 = textComponent.value.substring(startPos, endPos);
  } else if (document.selection !== undefined) {
    // Internet Explorer version
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText1 = sel.text;
  }
  document.getElementById("selected1").innerHTML = selectedText1;
}

function ShowSelection2() {
  // input 1
  var textComponent = document.getElementById("input_2");
  var selectedText1;

  if (textComponent.selectionStart !== undefined) {
    // Standards-compliant version
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText1 = textComponent.value.substring(startPos, endPos);
  } else if (document.selection !== undefined) {
    // Internet Explorer version
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText1 = sel.text;
  }
  document.getElementById("selected2").innerHTML = selectedText1;
}

function clearSelection() {
  $("#selected1").text('')
  $("#selected2").text('')
}

function submitSelected() {
  $('#res_error').text("");
  $('#res_success').text("");

  let selected1 = $("#selected1").text();
  let selected2 = $("#selected2").text();
  let domainSelected = $("#floatingSelect").val()

  // check value is not empty
  if(selected1 === '' || selected2 === '') {
    $('#res_error').text("Please select both the fields");
  }else{
    console.log("Selected 1: ", selected1, " selected 2: ", selected2, " domainSelcted : ", domainSelected);

    const url = "http://localhost:5000";
    $.ajax({
      type: "GET",
      url: url + "/test?input_1=" + selected1 + "&input_2=" + selected2 + "&domain_selected=" + domainSelected,
    }).done(function (res) {
      console.log("res ", res);
      if (res.status == "success") {
        console.log("print success");
        $('#res_success').text("Data Saved");
      } else {
        console.log("print Error");
        $('#res_error').text(res.data);
      }
    }).catch(err => {
      console.log("print Error");
        $('#res_error').text("Something wrong happened");
    })
  }

  
}
