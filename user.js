//refresh page

const refresh = document.querySelector(".refresh")
refresh.addEventListener("click", function(){
    location.reload();
})

const title_details = document.querySelector(".title_details");
const user_image = document.querySelector(".user_img")

// fetching data

fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(function(data){
    // console.log(data);
    let userData = data.results[0];
    console.log(userData)
    let imgSrc = `<img src="${userData.picture.large}">`
    let name = `${userData.name.first} ${userData.name.last}`
    let content = `
    <div class="icon user_active"  data-title="Hi, My name is" data-value=${userData.name.first} ${userData.name.last}><i class="bi bi-person"></i></div>
    <div class="icon email_" data-title="My email address is" data-value=${userData.email}><i class="bi bi-envelope"></i></div>
    <div class="icon birthday_" data-title="My age is" data-value="${userData.age}yrs"><i class="bi bi-file-spreadsheet"></i></div>
    <div class="icon location_" data-title="My address is" data-value="${userData.location.country}"><i class="bi bi-pin-map"></i></div>
    <div class="icon phone_" data-title="My phone number is" data-value="${userData.cell}"><i class="bi bi-telephone"></i></div>
    <div class="icon password_" data-title="My password is" data-value="${userData.login.password}"><i class="bi bi-lock"></i></div>
    `
    info_icons.innerHTML = content;
    user_image.innerHTML = imgSrc;
    title_details.innerHTML = name;
}
    )

//hover and change details
const info_icons = document.querySelector(".info_icons")
const icon = document.querySelectorAll(".icon");
const title_info = document.querySelector(".title_info");

icon.forEach(function (item){
item.addEventListener("mouseover", function () {
let titleData = item.getAttribute("data-title")
let dataValue = item.getAttribute("data-value")

title_info.innerHTML = titleData;
dataValue.innerHTML = dataValue;

let activeClass = document.querySelectorAll(".active")
activeClass.forEach(function(active){
active.className  = active.className.replace("active", "")
})
item.className += "active";
})
})




// window.onload = () =>{
//     randomUserGenerator ()
//     }
//     const randomUserGenerator = () => {
//        fetch('https://randomuser.me/api')
//        .then((response) => {
//         return response.json()
//        })
//        .then((data) => {
//         console.log(data)
//         showRadomUserData(data)
//        })
//     }

//     showRadomUserData = (randomUser) => {
//         document.querySelector('.user').innerHTML = 
//         `${randomUser.results[0].name.title}
//          ${randomUser.results[0].name.first}
//          ${randomUser.results[0].name.last}`
        
//            document.querySelector('.email').innerText = 
//            `${randomUser.results[0].email}`

//            document.querySelector('.birthday').innerText = 
//            `${randomUser.results[0].registered.date}
//             ${randomUser.results[0].registered.age}`

//            document.querySelector('.location').innerText = 
//            `${randomUser.results[0].location.street}
//            ${randomUser.results[0].location.city}
//            ${randomUser.results[0].location.state}
//            ${randomUser.results[0].location.country}`

//            document.querySelector('.phone').innerText = 
//           `${randomUser.results[0].phone}`

//           document.querySelector('.password').innerText = 
//           `${randomUser.results[0].login.password}`
      
//    }   
       
