
async function getUser() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log(response.data.products);
      const Products=response.data.products;
      const result = Products.map(function(products){
        return `
        <div class="product">         
        <h2>${products.title}</h2>
        <p>Price: ${products.price}$</p>
        <img src="${products.thumbnail}"/>
        <button onclick="bringData(${products.id})">Read More</button>
        </div> 
        
        ` 
           
    });
    document.querySelector(".productSection").innerHTML = result;
    } catch (error) {
      console.error(error);
    }
    
  }
  function bringData(data){
    localStorage.productID = data;
    console.log(localStorage.productID);
    window.location.href = "about.htm";
    

}

getUser();