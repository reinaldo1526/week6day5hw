function wData() {
    let weather = $("#search input[name=city]").val()
    $("#city1".toString()).text(weather)
    


    $.get('https://api.openweathermap.org/data/2.5/weather?q='+ weather +',usa&appid=06e667ff63e1fa10d7c9dc72c0186b2c', function( data ){
        let forecast = data.weather[0].description
        let high = data.main.temp_max
        let low = data.main.temp_min
        let humidity = data.main.humidity

        let highF = parseFloat((high) - 273.15) * 1.8 + 32
        let lowF =  parseFloat((low) - 273.15) * 1.8 + 32

        $("#hight".toString()).text(highF.toFixed(0) + "\xB0" + 'F')
        $("#lowt".toString()).text(lowF.toFixed(0) + "\xB0" + 'F')
        $("#forec".toString()).text(forecast)
        $("#hum".toString()).text(humidity + "%")
        
    })
}

