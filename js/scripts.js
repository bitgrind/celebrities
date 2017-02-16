$(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var gender = $('#user-gender').val();
    var hair = $('#user-hair').val();
    var height = $('#user-height').val();
    var weight = $('#user-weight').val();

    var r = [];

    $(".results .gender").text(gender);
    $(".results .hair").text(hair);
    $(".results .height").text(height);
    $(".results .weight").text(weight);
    $("#celebrity").slideDown(500);

    $(".form-group select").each(function(){
      resultArray.push($(this).val());
    });

    if(r[0] == "male"){

    } else if(r[0] == "female") {

    } else if(r[0] == "both") {

    }

    if(r[0] == 'male' && r[1] == 'tall' && r[2] = 'blonde' && r[3] == 'fit'){
      $('#celebrity1').show();
    }
    if(r[0] == 'female' && r[1] == 'tall' && r[2] = 'blonde' && r[3] == 'fit'){
      $('#celebrity2').show();
    }
    if(r[0] == 'both' && r[1] == 'tall' && r[2] = 'blonde' && r[3] == 'fit'){
      $('#celebrity3').show();
    }

    console.log(resultArray);
  });
});
