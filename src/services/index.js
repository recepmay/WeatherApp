
export const getForecast = () =>
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`)
        .then(response => response.json())
        .then(body => {
            if (!body.error) {
                return body;
            }
            if (body.error) {
                console.log(body.message, 2);
                return null;
            }
            console.log("Something went wrong while fetching forecast info!", 2);
            return null;
        });