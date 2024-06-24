let mobiles = [
    {
        "brand": "Samsung",
        "model": "Galaxy S21",
        "price": 79999,
        "storage": "128GB",
        "ram": "8GB",
        "image": "./assest/s.jpeg",
        "link": "https://www.gsmarena.com/samsung_galaxy_s21_5g-10626.php"
    },
    {
        "brand": "Apple",
        "model": "iPhone 13",
        "price": 119999,
        "storage": "128GB",
        "ram": "4GB",
        "image":"./assest/i-13.jpeg",
        "link":"https://www.gsmarena.com/apple_iphone_13-11103.php"
    },
    {
        "brand": "OnePlus",
        "model": "9 Pro",
        "price": 64999,
        "storage": "256GB",
        "ram": "12GB",
        "image":"./assest/d-1.jpeg",
         "link":"https://www.gsmarena.com/oneplus_9_pro-10806.php"
    },
    {
        "brand": "Xiaomi",
        "model": "Mi 11 Ultra",
        "price": 69999,
        "storage": "256GB",
        "ram": "12GB",
        "image":"./assest/img-1.jpeg",
         "link":"https://www.gsmarena.com/xiaomi_mi_11_ultra-10737.php"
    },
    {
        "brand": "Vivo",
        "model": "Find X3 Pro",
        "price": 59999,
        "storage": "256GB",
        "ram": "12GB",
        "image":"./assest/img-2.jpeg",
         "link":"https://www.gsmarena.com/oppo_find_x3_pro-10627.php"
    },
    {
        "brand": "Vivo",
        "model": "X60 Pro",
        "price": 49999,
        "storage": "128GB",
        "ram": "8GB",
        "image":"./assest/img-3.jpeg",
         "link":"https://www.gsmarena.com/vivo_x60_pro-10797.php"
        
    },
    {
        "brand": "Realme",
        "model": "GT",
        "price": 37999,
        "storage": "128GB",
        "ram": "8GB",
        "image":"./assest/img-4.jpeg",
         "link":"https://www.gsmarena.com/realme_gt_6-13103.php"
    
    },
    {
        "brand": "Google",
        "model": "Pixel 6",
        "price": 62999,
        "storage": "128GB",
        "ram": "8GB",
        "image":"./assest/img-5.jpeg",
         "link":""
       
    },
    {
        "brand": "Sony",
        "model": "Xperia 1 III",
        "price": 99999,
        "storage": "256GB",
        "ram": "12GB",
        "image":"./assest/img-6.jpeg",
         "link":"https://www.gsmarena.com/sony_xperia_1_iii-10712.php"

    },
    {
        "brand": "Asus",
        "model": "ROG Phone 5",
        "price": 57999,
        "storage": "128GB",
        "ram": "8GB",
        "image":"./assest/img-7.jpeg",
         "link":"https://www.gsmarena.com/asus_rog_phone_5-10715.php"
    
    }
]

let card = document.querySelector(".main-sec");

for(let i=0; i<mobiles.length; i++){
    card.innerHTML += `
<div class="card">
        <div class="img-sec">
            <img src="${mobiles[i].image}" alt="">
        </div>
        <div class="content-sec">
           <p><span>Brand :</span>${mobiles[i].brand}</p>
           <p><span>Model :</span>${mobiles[i].model}</p>
           <p><span>Price :</span>${mobiles[i].price}</p>
           <p><span>Storage :</span>${mobiles[i].storage}</p>
           <p><span>Ram :</span>${mobiles[i].ram}</p>
    </div>
    <div class="btn">
        <button><a class="a" target="_blank" href="${mobiles[i].link}">Buy Now</a></button>
    </div>
    `
}