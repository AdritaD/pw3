
    function loadData(){
      $.ajax({
        url:"books.xml",
        type: "GET",
        dataType: "xml",
        success: function(xml){

          var content="<tr><th>Title</th><th>author</th><th>year</th><th>price</th><th>category</th></tr>";
          $(xml).find('book').each(function(){
            var title = $(this).find('title').text(); 
            var author = "";
            $(this).find('author').each(function(){
              author += $(this).text() +",";
            });
            author = author.slice(0,-1);
            var year = $(this).find('year').text();
            var price = $(this).find('price').text();
            var category = $(this).attr('category');
            content += "<tr><td>" + title + "</td><td>"+ author + "</td><td>"+ year +"</td><td>"+ price + "</td><td>"+ category + "</td>";
          });
        
          $("#books").append(content);
        },
        error: function(){alert("Error loading file");}
      });
  };  
 