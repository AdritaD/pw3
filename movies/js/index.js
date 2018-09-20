
    function loadData(){
      $.ajax({
        url:"movies.xml",
        type: "GET",
        dataType: "xml",
        success: function(xml){

          var content="<tr><th>Title</th><th>Genre</th><th>MPAA-Rating</th><th>Director</th><th>Cast</th><th>Description</th><th>IMDB-Rating</th></tr>";
          $(xml).find('movie').each(function(){
            var title = $(this).find('title').text();
            var genre = $(this).find('genre').text();
            var mpaa = $(this).find('mpaa-rating').text();
            var director = $(this).find('director').text(); 
            var cast = "";
            $(this).find('cast person').each(function(){
              cast += $(this).attr('name')  + " as " + $(this).attr('role')  + "," ;
            });
            cast = cast.slice(0,-1);
            var description = $(this).find('imdb-info synopsis').text();
            var imdb = $(this).find('imdb-info score').text();
            content += "<tr><td>" + title + "</td><td>"+ genre + "</td><td>"+ mpaa +"</td><td>"+ director + "</td><td>"+ cast + "</td><td>"+ description + "</td><td>"+ imdb + "</td></tr>";
          });
        
          $("#movies").append(content);
        },
        error: function(){alert("Error loading file");}
      });
  };  
 

