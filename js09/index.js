<html>
   <head>
   <title>User-defined objects</title>
   
      <script type="text/javascript">
         // Define a function which will work as a method
         function addPrice(amount){
            this.price = amount; 
         }
         function addDate(amount){
             this.date = amount;
         }
         
         
         function book(title, author){
            this.title = title;
            this.author  = author;
            this.addPrice = addPrice; // Assign that method as property.
            this.addDate = addDate;
         }
      </script>
      
   </head>
   <body>
   
      <script type="text/javascript">
         var myBook = new book("Perl", "Mohtashim");
         myBook.addPrice(100);
         myBook.addDate(2016);
         document.write("Book title is : " + myBook.title + "<br>");
         document.write("Book author is : " + myBook.author + "<br>");
         document.write("Book price is : " + myBook.price + "<br>");
          document.write("Book price is : " + myBook.date+ "<br>");
         
      </script>
      
   </body>
</html>