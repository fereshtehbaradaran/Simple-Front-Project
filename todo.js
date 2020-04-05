let addTodo = function(){
  if($("#newTitle").val() != ''){
    $("#x").append(
      $("#todo").html()
    );
    $("#x").children(".box").last().children(".todoTitle").text($("#newTitle").val());
    $("#x").children(".box").last().children(".todoContent").text($("#newContent").val());
  }
  else {
    alert("title can't be empty");
  }
}

$(document).ready(function(){
  $(".addTodoBtn").click(function(){
    addTodo()
  });

  $(document).on("click",".removeTodo", function(){
    $(this).parents(".box").remove();
  });

  $(document).on("click",".doneTodo", function(){
    $(this).parent().siblings().toggleClass("done");
    $(this).parent().parent().toggleClass("doneBox");
  });

  $(document).on("click","input[type='radio']" , function(){
    if ($(this).val() == "all"){
      $("#x").children().show()
    }
    else if ($(this).val() == "completed") {
      $("#x").children().hide();
      $("#x").children(".doneBox").show();
    }
    else{
      $("#x").children().show();
      $("#x").children(".doneBox").hide();
    }
  })
});
