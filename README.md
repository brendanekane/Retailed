# Retailed
#### A single page app built with a Rails backend and a React/Redux frontend, that is a C2C marketplace for used designer, streetwear, and basicwear clothing.
<br>
<br>
###### Here is a short demo of the current features via gifs
<br>
<br>
<br>
Clicking either the login or signup links open up a modal for the correct situation. Within each modal is a link to the other modal, if for instance you clicked login when you don't have an account you can easily be linked to the signup modal.
<br>
![Login Demo](https://media.giphy.com/media/tJq5gRyi2pB0UWX3nk/giphy.gif)
<br>
<br>
<br>
<br>
On the User Settings page, you can easily upload or edit your current avatar by clicking on the default avatar/current avatar picture. After uploading, as soon as you click anywhere else outside of the avatar picture, the new avatar picture will be added to the database and reflected in three different components simultaneously (the settings form component, user greeting component, and navbar component.)
<br>
![Upload/Edit User Avatar Demo](https://media.giphy.com/media/1yT8VvasJbPs3Vhh10/giphy.gif)
<br>
<br>
<br>
<br>
On the User Settings page, you can also easily edit any of your personal information including email, location, weight, and height. Similarly to the avatar picture, as soon as you click anywhere out side of the field you are currently editing the information will be saved to the database and immediately reflected in the greeting component
![Edit User Info Demo](https://media.giphy.com/media/1ieGqd6euBIJfbtzmW/giphy.gif)
<br>
<br>
<br>
<br>
The ability to update your information and picture by clicking outside of the field you are currently editing is a small UI feature that I think is particularly cool. It was easily accomplished by making use of React's onBlur event handler.

![onBlur Snippet](https://github.com/brendanekane/Retailed/blob/master/app/assets/images/onblur_snippet.png)
<br>
<br>
<br>
<br>
One half of the core feature of the site - being able to upload clothes for sale makes heavy use of Amazon Web Services to store photos of the clothes on their server and the Paperclip gem in order to make storage and management of the photos information in my database.
![Sell Demo](https://media.giphy.com/media/cGq1YXHE5tCT20NBeJ/giphy.gif)
<br>
<br>
<br>
<br>
The other half of the core feature of the site - being able to buy other people's clothes - I made some liberal changes from the website that I was cloning. I thought that being able to buy multiple pieces of the clothing at the same time via a cart (a very standard web design feature) gave a better user experience than only being able to buy clothes one item at a time. You can add as many items to the cart as you like, as well as remove items from the cart if you change your mind. Once purchased the clothes will change ownership in my backend and be reflected in the frontend when going to My Items page where your new clothes will appear, as well as reflected in the transactions number that appears in your greeting component and product detail component on product show pages.
<br>
![Buy Demo](https://media.giphy.com/media/7TodM8uG5ypjUIE38C/giphy.gif)

###### Future Plans
I have several features that I plan on implementing in the future, in no partiticular order:

* Liking other peoples clothes
* Creating a Transactions page where bought and sold items appear, instead of having all your items appear on My Items page.
* Search feature
* A messaging feature via websockets
* Either pagination or infinite scroll
