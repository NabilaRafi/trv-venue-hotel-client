# trv-venue-hotel-client

Allows the user to view all the hotels available for booking in Leipzig, Germany.

To run the application:

1. npm install 
2. npm run start
3. lanuch http://localhost:3000/#/

Modules used:
1. react-redux -> Stores the api response and used across all the required views
2. react-router -> Allows the application to naviagte forward and backward
3. react-test-rendered, testing-library, enzymes -> Used to unit test the application
4. axios - to make the api call

- Hotel images are dowloaded from google and stored locally. Based on the mockjson relevant images are loaded from local assets path. Webpack url loader helps in managing assets path.

Features of the application and implementation understanding:

1. Landing page:
    - On launching application, initial path is mapped to the landing page. Mock API (getHotels) is called to load all the 6 available hotel details(refer trv-venuw-hotel-api for more details).
    - Relevant details (price, first image, distance, name of the hotel, price category and amenities) are mapped into a separate array in store reducer.
    - Filter option is enabled to filter out the hotel based on price, category, distance.
    - Link is included within each card component to show more details about the hotel, as of now only amenities are shown
    - On selecting a particular hotel redirected to the hotel-details view.

2. Hotel details view:
    - Selected hotel details shown to the user based on the unique id generated for each hotel.
    - Price details for all the available rooms are sorted in the store and passed to the view for easier access.
    - Rooms are shown based on the sorted list (price low to high).
    - Each room is enabled with a button option to book.
    - Card component used in thelanding page is reused to show the hotel details, here price and view deals are masked. 
    - On selecting the particular hotel user is redirected to the booking-confirmation view.

3. Booking confirmation.
    - All the relevant booking details of the selected users are fetched from store and displayed to the user.
    - User name is initially stored as John Doe in the redux store and its used here.
    - Style is kept minimal 
    - Latest booking information are fetched from the store without making any api call.
    - Unique booking reference (8 digit random number generated with the combination of alphabets and numeric (0-9))

4. Manage Hotels:
    - Can be accessed directly http:localhost:3000/#/manage-hotel
    - Add and delete buttons are enabled to allow the admins to add new hotels and delete hotels.
    - Patch is used to append the new hotel details to the db
    - Delete method is used to delete the selected hotel from the db.
    - Delete and patch methods are written but they aren't working as expected. 404 error is received, request method and the url are correct. Need to debug more to fix this issue.

Understaning:
- No library to be used for styling and component creation and functionality other than React.
- Images aren't used (like profile user logged in, arrows to click functionality, filter icon).
- Tried to mimic trivago webpage (though didn't get exactly like the website due to lesser time duration to search units for each element)
- Minimal unit testing is done. Need to improve the code branch and functional coverage, and need to include thresholds.
- Media queries used to style for both desktop and mobile screens

Improvements;
- More amount of unit testing (should have followed TDD)
- Styling needs to be improved
- Accesibility, screen readers needs to be cheked. For images alt atribute is added similiarly need to be check whether all the other tags are accesibile.

Eagerly looking forward to hear the feedback :) :)
