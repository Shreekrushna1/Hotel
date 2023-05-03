
let hotels = JSON.parse(localStorage.getItem("Hotels")) || [];

document.getElementById("filterDiv").style.display="none";

function showMenu() {
    var foodSelect = document.getElementById("food-select");
    var selectedOption = foodSelect.options[foodSelect.selectedIndex].value;
    var punjabiMenu = document.getElementById("menu-punjabi");
    var chineseMenu = document.getElementById("menu-chinese");
    var southMenu = document.getElementById("menu-south");
    
    if(selectedOption === "none"){
        punjabiMenu.style.display = "none";
      chineseMenu.style.display = "none";
      southMenu.style.display = "none";
    }
    else if (selectedOption === "punjabi") {
      punjabiMenu.style.display = "block";
      chineseMenu.style.display = "none";
      southMenu.style.display = "none";
    } else if (selectedOption === "chinese") {
        punjabiMenu.style.display = "none";
        southMenu.style.display = "none";
      chineseMenu.style.display = "block";
    }
     else if (selectedOption === "south") {
        punjabiMenu.style.display = "none";
        chineseMenu.style.display = "none";
      southMenu.style.display = "block";
    }
  }

function createHotel(event) {
  event.preventDefault();
    let foodDetails={
        nameHotel:document.getElementById("hotel-Name").value,
        food:document.getElementById("food-select").value,
        menuPunjabi:document.getElementById("punjabi-menu").value,
        menuChinese:document.getElementById("chinese-menu").value,
        menuSouth:document.getElementById("south-menu").value,
        price:document.getElementById("price").value,
        orders:[]
    }
    checkFoodData(foodDetails);

}
function checkFoodData(foodDetails) {
    if (foodDetails) {

        let hotelName;
        let foodOption;
        let menuPunjabiValue;
        let menuChineseValue;
        let menuSouthValue;
        let foodPrice;
        if (foodDetails.nameHotel==0) {
            document.getElementById("error-hotel-Name").innerHTML="Please Enter Hotel Name";
            document.getElementById("error-hotel-Name").style.color="red";
            document.getElementById("hotel-Name").style.border="3px solid red";
        }else{
          document.getElementById("error-hotel-Name").style.display="none";
          document.getElementById("hotel-Name").style.border="none";
            hotelName=1;
        }
        if (foodDetails.food==='none') {
            document.getElementById("error-food-select").innerHTML="Please Select Food ";
            document.getElementById("error-food-select").style.color="red";
            document.getElementById("food-select").style.border="3px solid red";
        }else{
          document.getElementById("error-food-select").style.display="none";
          document.getElementById("food-select").style.border="none";
            foodOption=1;
        }
        if(foodDetails.menuPunjabi==='none'){
          document.getElementById("error-menu-punjabi").innerHTML="Please Select Food Type ";
            document.getElementById("error-menu-punjabi").style.color="red";
            document.getElementById("error-menu-punjabi").style.border="3px solid red";
        }else{
          document.getElementById("error-menu-punjabi").style.display="none";
          document.getElementById("menu-punjabi").style.border="none";
          menuPunjabiValue=1;
        }
        if(foodDetails.menuChinese==='none'){
          document.getElementById("error-menu-chinese").innerHTML="Please Select Food Type ";
            document.getElementById("error-menu-chinese").style.color="red";
            document.getElementById("error-menu-chinese").style.border="3px solid red";
        }else{
          document.getElementById("error-menu-chinese").style.display="none";
          document.getElementById("menu-chinese").style.border="none";
          menuChineseValue=1;
        }
        if(foodDetails.menuSouth==='none'){
          document.getElementById("error-menu-south").innerHTML="Please Select Food Type ";
            document.getElementById("error-menu-south").style.color="red";
            document.getElementById("error-menu-south").style.border="3px solid red";
        }else{
          document.getElementById("error-menu-south").style.display="none";
          document.getElementById("menu-south").style.border="none";
          menuSouthValue=1;
        }
        if (foodDetails.price==0) {
            document.getElementById("error-price").innerHTML="Please Enter Price or Valid Price ";
            document.getElementById("error-price").style.color="red";
            document.getElementById("price").style.border="3px solid red";
        }else if(foodDetails.price<0){
            document.getElementById("error-price").innerHTML="Please Enter Valid Price";
            document.getElementById("error-price").style.color="red";
            document.getElementById("price").style.border="3px solid red";
        }else{
          document.getElementById("error-price").style.display="none";
          document.getElementById("price").style.border="none";
          foodPrice=1;
        }
        if (((hotelName && foodOption) && (menuPunjabiValue || menuChineseValue || menuSouthValue) ) && (foodPrice)) {
          console.log(hotelName , foodOption , menuPunjabiValue , menuChineseValue , menuSouthValue , foodPrice);
          hotelSuccessAlert(foodDetails);
      }
      
        
    }
}

function hotelSuccessAlert(foodDetails){
  
    Swal.fire({
        icon: 'success',
        title: 'Hotel Add Success',
        text: 'Hotel And Food Details Are Saved SuccessFully'
      }).then(() => {
        hotels.push(foodDetails);
        localStorage.setItem("Hotels", JSON.stringify(hotels));
        document.getElementById("form").reset();
        food=document.getElementById("food-select").value,
        $('#exampleModal').modal('hide');
        if(food==='none'){
          document.getElementById("menu-punjabi").style.display="none";
          document.getElementById("menu-chinese").style.display="none";
          document.getElementById("menu-south").style.display="none";
        }
      });
}

function removeHotel(index) {
  Swal.fire({
    icon: 'success',
    title: 'Hotel Remove Success',
    text: 'Hotel Removed SuccessFully'
  }).then(() => {
  hotels.splice(index,1);
  localStorage.setItem("Hotels", JSON.stringify(hotels));
  hotelTableData();
  })
}

function hotelTableData(sortOrder) {
  document.getElementById("filterDiv").style.display="block";
  document.getElementById("order-box").style.display="block";
  document.getElementById("user-order-box").style.display="none";
  
  let findHotel = [...hotels];
  
  if (sortOrder === "high-to-low") {
    findHotel.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "low-to-high") {
    findHotel.sort((a, b) => a.price - b.price);
  }
  let html=''
  
  findHotel.forEach((item,index) => {
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
          <button class="btn btn-danger" onclick="removeHotel(${index})">Remove</button>
          </div>
        </div>
      </div>`
      }else if(item.menuChinese=='none' && item.menuSouth=='none'){
          html += `<div class="card shadow" style="width: 18rem;margin:10px;">
          <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
          <div class="card-body text-black">
            <h5 class="card-title">${item.nameHotel}</h5>
            <p class="card-text">Food:&nbsp${item.food}</p>
            <h4 class="card-price">Price:&nbsp${item.price}</h4>
            <div class="card-footer">
            <button class="btn btn-danger" onclick="removeHotel(${index})">Remove</button>
            </div>
          </div>
        </div>
        `
      }
      else {
          html += `
          <div class="card shadow" style="width: 18rem;margin:10px;">
          <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
          <div class="card-body text-black">
            <h5 class="card-title">${item.nameHotel}</h5>
            <p class="card-text">Food:&nbsp${item.food}</p>
            <h4 class="card-price">Price:&nbsp${item.price}</h4>
            <div class="card-footer">
            <button class="btn btn-danger" onclick="removeHotel(${index})">Remove</button>
            </div>
          </div>
        </div>
        `
      }
      
    }
  });
  
  document.querySelector('.order-box').innerHTML=html;
}


function filter(){
  let filters=document.getElementById("filters").value
  if (filters==="low") {
    hotelTableData("low-to-high");
  }
  else if(filters==="high"){
    hotelTableData("high-to-low");
  }
}

  function viewUsersOrder(){
    document.getElementById("order-box").style.display="none";
    document.getElementById("filterDiv").style.display="none";
    document.getElementById("user-order-box").style.display="block";
    document.getElementById("user-order-box").style.display="flex";
        let htmlView = '';
        hotels.forEach((hotel) => {
          if (hotel.orders) {
            if (hotel.orders==='') {
              htmlView += `
              <div class="card shadow" style="width: 18rem;margin:10px;">
          <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
          <div class="card-body text-black">
            <h5 class="card-title">${hotel.nameHotel}</h5>
            <p class="card-text">Food:&nbsp${hotel.food}</p>
            <h4 class="card-price">Price:&nbsp${hotel.price}</h4>
            <div class="card-footer">
            <p>Ordered Users:<br>${hotel.orders}</p>
            </div>
          </div>
        </div>
            `;
            }else
              htmlView += `
              <div class="card shadow" style="width: 18rem;margin:10px;">
          <img class="card-img-top" src="https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886" alt="Card image cap">
          <div class="card-body text-black">
            <h5 class="card-title">${hotel.nameHotel}</h5>
            <p class="card-text">Food:&nbsp${hotel.food}</p>
            <h4 class="card-price">Price:&nbsp${hotel.price}</h4>
            <div class="card-footer">
            <p>Ordered Users:<br>${hotel.orders}</p>
            </div>
          </div>
        </div>
            `;
            
          }
        });
        document.getElementById('user-order-box').innerHTML = htmlView;
  }
 

var loginPageNavigate=function () {
    window.location.href='index.html'
}

var closeModal=function(){
  document.getElementById("form").reset();
  document.getElementById("error").style.display="none";
  document.getElementById("hotel-Name").style.border="none";
  document.getElementById("food-select").style.border="none";
  document.getElementById("error-food-select").style.display="none";
  document.getElementById("menu-punjabi").style.border="none";
  document.getElementById("error-menu-punjabi").style.display="none";
  document.getElementById("menu-chinese").style.border="none";
  document.getElementById("error-menu-chinese").style.display="none";
  document.getElementById("menu-south").style.border="none";
  document.getElementById("error-menu-south").style.display="none";
  document.getElementById("price").style.border="none";
  document.getElementById("error-price").style.display="none";
  $('#exampleModal').modal('hide');
}