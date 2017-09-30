$(document).ready(function() { 
  
  $("#searchButton").click(function(){
    $(".content").animate({ marginTop: '0px'}, 1000);
    $("#searchButton").hide();
    $("#searchText").css("width","100%");
      var wordSearched = $("#searchText").val();
      $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + wordSearched + "&callback=?", function(data) {
        
        var pages = data.query.pages;        
        var lista = "<ul class='allPage'>";
        
        $.each(pages, function(i, item) {
            
            var title = item.title;
            var description = item.extract;
            var pageid = item.pageid;
            var url = "https://en.wikipedia.org/?curid=" + pageid;
            lista += "<li class='page'><a target='_blank' href='" + url + "'><h4 class='pageTitle'>" + title + "</h4></a><span>" + description + "</span></li>";          
          
        });
        
        lista += "</ul>";
        
        $("#searchList").append(lista);
        $("#searchList").show();
        $("#closeSearch").show();
        
      });
    
  });  
  
  $("#closeSearch").click(function(){
      $("#searchList").empty();
      $("#searchList").hide();
      $("#closeSearch").hide();
      $("#searchText").val("");
      $("#searchButton").show();
      $("#searchText").css("width","88%");
      $(".content").animate({ marginTop: '21%'}, 1000);
  });
  
});