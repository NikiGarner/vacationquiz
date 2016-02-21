$(document).ready(function() {
  $("form#question").submit(function(event){
      var drink = $("select#drink").val();
      var transportation = $("select#transportation").val();
      var passport = $("select#passport").val();
      var time = $("select#time").val();
      var climate = $("select#climate").val();

      if (drink === 'coffee' && transportation === 'car' && passport === 'yes' && time === 'book' && climate === 'mountain'){
        $("#Alaska").show();
      } if (drink === 'coffee' && transportation === 'airplane' && passport === 'yes' && time === 'book' && climate === 'mountain'){
        $("#Alaska").show();
      } if (drink === 'coffee' && transportation === 'airplane' && passport === 'no' && time === 'book' && climate === 'mountain'){
        $("#Alaska").show();
      } if (drink === 'coffee' && transportation === 'car' && passport === 'no' && time === 'book' && climate === 'mountain'){
        $("#Alaska").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'yes' && time === 'book' && climate === 'mountain'){
        $("#London").show();
      } if (drink === 'tea' && transportation === 'airplane' && passport === 'yes' && time === 'book' && climate === 'mountain'){
        $("#London").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'yes' && time === 'shopping' && climate === 'mountain'){
        $("#London").show();
      } if (drink === 'tea' && transportation === 'airplane' && passport === 'yes' && time === 'shopping' && climate === 'mountain'){
        $("#London").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'yes' && time === 'shopping' && climate === 'tropical'){
        $("#Palm").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'yes' && time === 'book' && climate === 'tropical'){
        $("#Palm").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'no' && time === 'book' && climate === 'tropical'){
        $("#Palm").show();
      } if (drink === 'tea' && transportation === 'car' && passport === 'no' && time === 'shopping' && climate === 'tropical'){
        $("#Palm").show();
      } if (drink === 'tea' && transportation === 'airplane' && passport === 'no' && time === 'book' && climate === 'tropical' ){
       $("#Hawaii").show();
     } if (drink === 'tea' && transportation === 'airplane' && passport === 'yes' && time === 'book' && climate === 'tropical' ){
        $("#Hawaii").show();
      } if (drink === 'tea' && transportation === 'airplane' && passport === 'no' && time === 'shopping' && climate === 'tropical' ){
         $("#Hawaii").show();
      } if (drink === 'tea' && transportation === 'airplane' && passport === 'yes' && time === 'shopping' && climate === 'tropical'){
          $("#Hawaii").show();
        }






event.preventDefault();
  });
});
