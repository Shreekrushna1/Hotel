
let hotels = JSON.parse(localStorage.getItem("Hotels")) || [];

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

function createHotel() {
    let foodDetails={
        nameHotel:document.getElementById("hotel-Name").value,
        food:document.getElementById("food-select").value,
        menuPunjabi:document.getElementById("punjabi-menu").value,
        menuChinese:document.getElementById("chinese-menu").value,
        menuSouth:document.getElementById("south-menu").value,
        price:document.getElementById("price").value
    }
    checkFoodData(foodDetails);
}
function checkFoodData(foodDetails) {
    if (foodDetails) {

        let hotelName;
        let foodOption;
        let foodPrice;
        if (foodDetails.nameHotel==0) {
            document.getElementById("error-hotel-Name").innerHTML="Please Enter Hotel Name";
            document.getElementById("error-hotel-Name").style.color="red";
            document.getElementById("hotel-Name").style.border="3px solid red";
        }else{
            document.getElementById("error-hotel-Name").innerHTML="Hotel Name Filled";
            document.getElementById("error-hotel-Name").style.color="green";
            document.getElementById("hotel-Name").style.border="3px solid green";
            hotelName=1;
        }
        if (foodDetails.food==='none') {
            document.getElementById("error-food-select").innerHTML="Please Select Food ";
            document.getElementById("error-food-select").style.color="red";
            document.getElementById("food-select").style.border="3px solid red";
        }else{
            document.getElementById("error-food-select").innerHTML="Hotel Name Filled";
            document.getElementById("error-food-select").style.color="green";
            document.getElementById("food-select").style.border="3px solid green";
            foodOption=1;
        }
        if (foodDetails.price==0 || foodDetails.price<0) {
            document.getElementById("error-price").innerHTML="Please Enter Price or Valid Price ";
            document.getElementById("error-price").style.color="red";
            document.getElementById("price").style.border="3px solid red";
        }else{
            document.getElementById("error-price").innerHTML=" Price Filled";
            document.getElementById("error-price").style.color="green";
            document.getElementById("price").style.border="3px solid green";
            foodPrice=1;
        }
        if (hotelName && foodOption && foodPrice===1) {
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
        window.location.href="admin.html";
        hotels.push(foodDetails);
        localStorage.setItem("Hotels", JSON.stringify(hotels));
      });
}

function hotelTableData() {
    let findHotel = hotels.map((item) => {
      return item;
    });
    const cards = document.getElementById("cards");
    let html=''
    findHotel.forEach((item) => {
      if (item) {
        if (item.menuPunjabi=='none' && item.menuSouth=='none') {
            html += `  <div class="card col m-2 bg-black glow-on-hover-card p-4" >
            <h3>Hotel Name:${item.nameHotel}</h3><br>
            <h4>Food:${item.food}</h4>
            <p>Chinese Menu:${item.menuChinese}</p>
            <p>Price:${item.price}</p>
        </div>`
        }else if(item.menuChinese=='none' && item.menuSouth=='none'){
            html += `  <div class="card col m-2 bg-black glow-on-hover-card p-4">
            <h3>Hotel Name:${item.nameHotel}</h3><br>
            <h4>Food:${item.food}</h4>
            <p>Punjabi Menu:${item.menuPunjabi}</p>
            <p>Price:${item.price}</p>
        </div>`
        }
        else {
            html += `  <div class="card col m-2 bg-black glow-on-hover-card p-4">
            <h3>Hotel Name:${item.nameHotel}</h3><br>
            <h4>Food:${item.food}</h4>
            <p>South Menu:${item.menuSouth}</p>
            <p>Price:${item.price}</p>
        </div>`
        }
        
      }
    });
    document.querySelector('.order-box').innerHTML=html;
  }

var loginPageNavigate=function () {
    window.location.href='index.html'
}