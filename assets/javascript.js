
async function getUser() {
    try {
     //const axios = require('axios/dist/browser/axios.cjs');
      const response = await axios.get('https://dummyjson.com/products');
      console.log(response.data.products);
      const Products=response.data.products;
      const result = Products.map(function(products){
        return `
        <div class="product">         
        <h2>${products.title}</h2>
        <img src="${products.thumbnail}"/>
        <a href="about.htm?id=${products.id}">Read More</a>
        </div> 
        
        ` 
           
    });
    document.querySelector(".productSection").innerHTML = result;
    } catch (error) {
      console.error(error);
    }
    
  }




getUser();