function display_weather_chart(longitude, latitude){
    const url = "https://www.7timer.info/bin/civil.php?lon="+longitude+"&lat="+latitude+"&product=civil&output=internal&unit=metric&tzshift=0"
    console.log(url)
}

display_weather_chart(4 , 60)