export const ConnectAPI = () => {

  post = function(url, paramJson) {
    fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paramJson
        })
      })
      .then(ConnectAPI.checkStatus)
      .then(response => response.json())
      .catch(e => e)
  }

  checkStatus = function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
