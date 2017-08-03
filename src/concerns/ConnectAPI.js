export default class ConnectAPI {

  post = (url, paramJson) => {

    let data = {
      method: 'POST',
      body: JSON.stringify({
        paramJson
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }

    return fetch(url, data)
            .then(response => response.json())  // promise
            .then(json => dispatch(json))

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

  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
