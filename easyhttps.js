/*ES5  Object Oriented, Prototypes*/

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request

easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this; //use a variable for this since keyword .this pertains to function scope and we're  not using arrow function

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  };

  this.http.send();
};

//Make an HTTP POST Request

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  //we need to set content type

  this.http.setRequestHeader('Content-type', 'application/json'); //second param is data type we're working with

  let self = this;

  this.http.onload = function () {
    //dont need to check status cause doing post request

    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data)); //when u send data, this is gonna be a regular javascript object when u pass it in so u need to run it through a function called stringify to send it as a JSON string
};

//Make an HTTP PUT Request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error:' + self.http.status);
    }
  };

  this.http.send();
};
