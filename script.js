const packages = [
  {country:"Paris",days:5,price:25000,img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34"},
  {country:"Maldives",days:3,price:18000,img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e"},
  {country:"Switzerland",days:7,price:40000,img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
  {country:"Japan",days:6,price:35000,img:"https://images.unsplash.com/photo-1549693578-d683be217e58"},
  {country:"Dubai",days:4,price:22000,img:"https://images.unsplash.com/photo-1526498460520-4c246339dccb"},
  {country:"Italy",days:6,price:30000,img:"https://images.unsplash.com/photo-1526481280695-3c687fd5432c"},
  {country:"USA",days:10,price:80000,img:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29"},
  {country:"Singapore",days:5,price:28000,img:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd"},
  {country:"Thailand",days:4,price:15000,img:"https://images.unsplash.com/photo-1504214208698-ea1916a2195a"},
  {country:"Australia",days:8,price:90000,img:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9"},
  {country:"Canada",days:7,price:70000,img:"https://images.unsplash.com/photo-1503614472-8c93d56e92ce"},
  {country:"South Korea",days:5,price:32000,img:"https://images.unsplash.com/photo-1549693578-0b8aa3e3f8d5"},
  {country:"Turkey",days:6,price:27000,img:"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200"},
  {country:"Spain",days:5,price:29000,img:"https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"},
  {country:"New Zealand",days:9,price:95000,img:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21"},
  {country:"Brazil",days:7,price:60000,img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470"},
  {country:"Egypt",days:5,price:26000,img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35"},
  {country:"Russia",days:8,price:65000,img:"https://images.unsplash.com/photo-1513326738677-b964603b136d"},
  {country:"China",days:6,price:38000,img:"https://images.unsplash.com/photo-1508804185872-d7badad00f7d"},
  {country:"Greece",days:6,price:31000,img:"https://images.unsplash.com/photo-1507525428034-3b3b3b3b3b3b"}
];

let selectedCountry = "";
let selectedPrice = 0;

const container = document.getElementById("packages");

packages.forEach(p => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card shadow">
        <img src="${p.img}" class="card-img-top">
        <div class="card-body text-center">
          <h4>${p.country}</h4>
          <p>${p.days} Days Tour</p>
          <h5>₹${p.price}</h5>

          <button class="btn btn-primary"
            onclick="select('${p.country}', ${p.price})">
            Book Trip
          </button>
        </div>
      </div>
    </div>
  `;
});

function select(country, price) {
  selectedCountry = country;
  selectedPrice = price;

  document.getElementById("countryName").innerText = country;
  document.getElementById("priceValue").innerText = price;
}

function goBooking() {
  if (!selectedCountry) {
    alert("Please select a package!");
    return;
  }

  localStorage.setItem("country", selectedCountry);
  localStorage.setItem("price", selectedPrice);

  window.location.href = "booking.html";
}