// const product=[
//     {
//         id: 0 ,
//         image: 'images/watch1A.png',
//         title: 'Silver round watch',
//         price:$500
//     },
//     {
//         id: 1,
//         image: 'images/watch2A.png',
//         title: 'Black rolex watch',
//         price:$1000
//     },
//     {
//         id: 2,
//         image: 'images/watch3A.png',
//         title: 'Zara pink watch',
//         price:$200
//     },
//     {
//         id: 3,
//         image: 'images/headphones1A.png',
//         title: '16th edition JBL headphones',
//         price:$50
//     },
//     {
//         id: 4,
//         image: 'images/headphones2A.png',
//         title: 'Medium sized peru headphones',
//         price:$78
//     },
//     {
//         id: 5,
//         image: 'images/headphones3A.png',
//         title: 'Latest smart Sony headphones',
//         price:$90
//     },
//     {
//         id: 6,
//         image: 'images/earphones1A.png',
//         title: 'Sparkling white JBl earpods',
//         price:$49
//     },
//     {
//         id: 7,
//         image: 'images/earphones2A.png',
//         title: 'Black 2022 Oraimo earpods',
//         price:$60
//     },
//     {
//         id: 8,
//         image: 'images/earphones3A.png',
//         title: 'Girlie Pink Sudio earpods',
//         price:$55
//     },
// ]
// const categories = [...new Set(product.map((item)=>{return item}))]
// document.getElementById("searchbar").addEventListener("keyup",(e)=>{
//     const searchData = e.target.value.toLowerCase();
//     const filterData = categories.filter((item)=>{
//         return(
//             item.title.toLowerCase().includes(searchData)
//         )
//     })
//     displayItem(filterData)
// });

// const displayItem=(items)=>{
//     document.getElementById('root').innerHTML=items.map((item)=>{
//         var{image,title,price} =item;
//         return(
//             `<div class ='box'>
//             <div class ='img-box'>
//             <img class='images'scr=${image}></img>
//             </div>
//             <div class='bottom'>
//             <p>${title}</p>
//             <h2> $ ${price}.00</h2>
//             <button>Add to cart</button>
//             </div>`
//         )
//     }).join("")
// };
// displayItem(categories);

// s

// function search() {
//   let filter = document.getElementById("searchBar").value.toUpperCase();
//   let item = document.querySelectorAll("items");
//   let h = document.getElementsByTagName("h3");

//   for (var i = 0; i <= h.length; i++) {
//     let a = item[i].getElementsByTagName("h3")[0];
//     let value = a.innerHTML || a.innerText || a.textContent;

//     if (value.toUpperCase().indexOf(filter) > -1) {
//       item[i].style.display = "";
//     } else {
//       item[i].style.display = "none";
//     }
//   }
// };
// console.log(search);

// get fields

let search = document.querySelector("#searchBar"),
  article = document.querySelector(".body");

search.addEventListener("input", runSearch);

function runSearch(e) {
  let searchValue = e.target.value.toLowerCase();
  let content = Array.from(article.children);
  console.log(content);

  content.forEach((item) => {
    let itemValue = item.firstElementChild;

    if (itemValue.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      itemValue.parentElement.style.display = "block";
    } else {
      itemValue.parentElement.style.display = "none";
    }
  });
}

// let jag  = 'james'
// console.log(jag.indexOf)
