# Shop-Tshirt
This is a web application for viewing and buying Tshirts.

[Click here to see the live App](https://movies-n-chill.netlify.com/)

This application is developed in Reactjs.
Jsons are provided to fetch the data.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. No framework is used for CSS and modeling purpose. Home page of this app is divided into 3 parts

- Header
- Main Part
- Footer

### Header
It always stays on top of every page, this component is called in App component, so need to write only once in the whole app.

It has 2 elements
- Logo
- Cart Icon

#### Cart
This is a smart component which takes input from the user when user clicks on Add To Cart button.

When user clicks Add to Cart button all the details of the tshirt will get sends to the Cart component and that tshirt gets removed from the list on the Home page. In cart user can remove the tshirt from the cart and that tshirt will get added to the list in the Home page.
It will calculate the total amount of the cart.


### Main Part
As the name suggests it is the main body of the App. This App has 2 main parts.

- Filter panel
- Tshirt List panel

#### Filter panel
This panel having only Size filter for the Tshirt.

#### Tshirt List panel
This is a smart comopnent, it contains the list of Tshirts. It shows all the filtered and sorted tshirts. It handles the cart operations like adding tshirt to cart and removing that from the list and when user remove the tshirt from cart it takes the tshirt back.

### Footer
It holds the link to its GitHub page and emailId of the creator.

