const API={
    api:'https://api.openweathermap.org/data/2.5/weather?q=',
    key:'&appid=ab5740463d8f8704f13ab32066a84b5e'
}
const getAPI=(city)=>{
    fetch(API.api+city+API.key)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let cityName=data.name;
        let country=data.sys.country;
        let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        let temp=Math.round(data.main.temp/10)+"°c";
        let descriptionWeather=data.weather[0].description; 
        let minTemp=Math.round(data.main.temp_min/10)+"°c";
        let maxTemp=Math.round(data.main.temp_max/10)+"°c ";
        let now= new Date();
        document.getElementsByTagName('h3')[0].innerText=setDate(now);
        document.getElementsByTagName('h1')[0].innerText=cityName+', '+country;
        document.getElementsByTagName('img')[0].setAttribute('src', icon);
        document.getElementsByTagName('h2')[0].innerText=temp;
        document.getElementsByTagName('p')[0].innerText=descriptionWeather;
        document.getElementsByTagName('p')[1].innerText=minTemp+" / "+maxTemp;
    })
    .catch(err=>alert('Ban nhap sai ten thanh pho!'))
}
getAPI('Ha Noi');

const changeCity=()=>{
    let value = document.getElementsByTagName("input")[0].value;
    getAPI(value);
    setDate();
}
const setDate=(d)=>{
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ,${date} ${month} ${year}`
}
setDate();

