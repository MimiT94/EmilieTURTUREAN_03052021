class RequestAjax {
    constructor(url) {
        this.get(url);
    }

    get(url) {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then(response => {
                Request.response = response;
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    }

}