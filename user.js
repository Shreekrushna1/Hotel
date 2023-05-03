let hotels = JSON.parse(localStorage.getItem("Hotels")) || [];
document.getElementById("filterDiv").style.display="none";
const select = document.getElementById("allHotelOption");
const food = document.getElementById("food");

let hotelNames = [];
hotels.forEach((item) => {
  if (item) {
    if (!hotelNames.includes(item.nameHotel)) {
      let option = document.createElement("option");
      option.value = item.nameHotel;
      option.textContent = item.nameHotel;
      option.onchange = filterTable;
      select.appendChild(option);
      hotelNames.push(item.nameHotel);
    }
  }
});
let hotelFood=[];
hotels.forEach((item) => {
  if (item) {
    if (!hotelFood.includes(item.food)) {
      let option = document.createElement("option");
      option.value = item.food;
      option.textContent = item.food;
      option.onclick=filterTable;
      food.appendChild(option);
      hotelFood.push(item.food);
    }
  }
});

function userHotelData(sortOrder) {
    document.getElementById("user-order-box").style.display="none";
    document.getElementById("ordered-box").style.display="block";
    document.getElementById("filterDiv").style.display="flex";

    if (sortOrder === "low-to-high") {
      hotels.sort((a, b) => a.price - b.price);
    }else if (sortOrder === "high-to-low") {
      hotels.sort((a, b) => b.price - a.price);
    } 
  let htmlBody = '';
  hotels.forEach((item) => {
    if (item) {
      if (item.menuPunjabi=='none' && item.menuSouth=='none') {
        htmlBody += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood('${item.nameHotel}', '${item.food}', '${item.price}')">Buy Now</button>
          </div>
        </div>
      </div>
        `
      } else if(item.menuChinese=='none' && item.menuSouth=='none') {
        htmlBody += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood('${item.nameHotel}', '${item.food}', '${item.price}')">Buy Now</button>
          </div>
        </div>
      </div>
        `
      } else {
        htmlBody += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood('${item.nameHotel}', '${item.food}', '${item.price}')">Buy Now</button>
          </div>
        </div>
      </div>
        `
      }
    }
  });
  document.getElementById('order-box').innerHTML=htmlBody;
}
function filterTable(sortOrder){
    selectedHotel=document.getElementById("allHotelOption").value;
    selectedFood=document.getElementById("food").value;
    document.getElementById("user-order-box").style.display="none";
    document.getElementById("ordered-box").style.display="block";
    document.getElementById("filterDiv").style.display="flex";
    
  let showHotel = hotels.map((item) => {
    return item;
  });
  if (sortOrder === "low-to-high") {
    showHotel.sort((a, b) => a.price - b.price);
  }else if (sortOrder === "high-to-low") {
    showHotel.sort((a, b) => b.price - a.price);
  } 
   if (selectedHotel !== 'none') {
    showHotel = showHotel.filter((item) => item.nameHotel === selectedHotel);
  } 
  if (selectedFood == 'south') {
    showHotel = showHotel.filter((item) => item.food === selectedFood);
  }
  if (selectedFood == 'chinese') {
    showHotel = showHotel.filter((item) => item.food === selectedFood);
  }
  if (selectedFood == 'punjabi') {
    showHotel = showHotel.filter((item) => item.food === selectedFood);
  }

  
  
  let html = '';
  showHotel.forEach((item) => {
    if (item) {
      if (item.menuPunjabi=='none' && item.menuSouth=='none') {
        html += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood(${item.nameHotel},${item.food},${item.price},">Buy Now</button>
          </div>
        </div>
      </div>
        `
      } else if(item.menuChinese=='none' && item.menuSouth=='none') {
        html += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood(${item.nameHotel},${item.food},${item.price},">Buy Now</button>
          </div>
        </div>
      </div>
        `
      } else {
        html += `
        <div class="card shadow" style="width: 18rem;margin:10px;">
        <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
        <div class="card-body text-black">
          <h5 class="card-title">${item.nameHotel}</h5>
          <p class="card-text">Food:&nbsp${item.food}</p>
          <h4 class="card-price">Price:&nbsp${item.price}</h4>
          <div class="card-footer">
          <button class="btn btn-primary" onclick="buyFood(${item.nameHotel},${item.food},${item.price})">Buy Now</button>
          </div>
        </div>
      </div>
        `
      }
    }
  });
  document.getElementById('order-box').innerHTML=html;
}

function buyFood(name, food, price) {
    const currentURL = new URL(window.location.toLocaleString());
    const urlParams = new URL(currentURL).searchParams;
    const username = urlParams.get("userName");
  
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to buy this food ${food}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Buy It!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Sucess',
          'Your Food Buyed Success',
          'success'
        ) 
  
        const hotel = {
          username: username 
        };
  
        hotels.forEach((item) => {
          if (item.nameHotel === name) {
            if (!item.orders) {
              item.orders = [hotel.username];
            } else if (item.orders.some((order) => order === hotel.username)) {
              Swal.fire({
                title: "error",
                text: "You Already Purchased This Food",
                icon: "error",
              });
            } else {
              item.orders.push(hotel.username);
            }
          }
        });
  
        localStorage.setItem("Hotels", JSON.stringify(hotels)); 
      }
    })
  }
  

 

function viewUserOrder(){
    document.getElementById("filters").selectedIndex = 0;
    document.getElementById("user-order-box").style.display="flex";
    document.getElementById("ordered-box").style.display="none";
    document.getElementById("filterDiv").style.display="none";
        const currentURL = new URL(window.location);
        const username = currentURL.searchParams.get('userName');
        let htmlBody = '';
        hotels.forEach((hotel) => {
          if (hotel.orders && hotel.orders.includes(username)) {
            htmlBody += `
            <div class="card shadow" style="width: 18rem;margin:10px;">
            <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
            <div class="card-body text-black">
              <h5 class="card-title">${hotel.nameHotel}</h5>
              <p class="card-text">Food:&nbsp${hotel.food}</p>
              <h4 class="card-price">Price:&nbsp${hotel.price}</h4>
            </div>
          </div>
            `;
          }
        });
        document.getElementById('user-order-box').innerHTML = htmlBody;
      }

function userLogOut() {
        users = JSON.parse(localStorage.getItem("Users"));
        let actionfind = users.find((item) => item.action === true);
      
        if (actionfind) {
          actionfind.action = false;
        }
        localStorage.setItem("Users", JSON.stringify(users));
        window.location.href = "index.html";
      }

function filter(){
        let filters=document.getElementById("filters").value
        if (filters==="low") {
            userHotelData("low-to-high");
            filterTable("low-to-high");
        }
        else if(filters==="high"){
            userHotelData("high-to-low");
            filterTable("high-to-low");
        }
      }
