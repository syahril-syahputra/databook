This Is For Online Test - Frontend Engineer - SejutaCita 

Fitur
1. Retrive All Category
2. Retrive Book. i'm using 12 book per page. 
3. instead of using pagination. I prefer to use Infinity Scroll because the backend itself doesn't display the number of books per category so it's better to use Infinity Scroll when we don't know how many pages are needed for each category. and it will be better for user experience,
4. search for books from all data books that have been retrieved
5. Bookmark. when the user presses the bookmark button, the application will save the book data to the local storage browser.
6. responsive design

Feedback fro backend developer team
1. for the link to retrieve the book data, instead of using like this: 
  https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=12&size=10&page=0

  I think it's better to use the permalink so that it becomes like this:
  https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books/12/10/0 so it's easier to read
  
2. when taking a category is also displayed the number of books contained in that category
3. for the cors problem. it's better to talk about it when starting the project because it depends on the needs
4. for search, it's better to have a Search API than just searching from the book data that has been displayed


Thank you for the opportunity


Syahril Syahputra
