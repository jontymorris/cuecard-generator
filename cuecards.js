const cuecardApp = new Vue({
    el: '#cuecardApp',
    data: {
        cuecards: []
    },
    created() {
        fetch('speech.txt').then(function(response) {
            if (response.status == 200) {
                response.text().then(function(data) {
                    cuecardApp.cuecards = data.split('\n').filter(function(cuecard) {                        
                        if (cuecard != '') {
                            return cuecard;
                        }
                    });
                });
            }
        });
    }
});