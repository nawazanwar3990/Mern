export default function header() {
    /*
       Below code  checks Local Storage for user item.
       If there is a logged in user with token (JWT),
       return HTTP Authorization header like object . 
       Otherwise, return an empty object.
       Note: For Node.js Express back-end, please use x-access-token header:
    */
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {

        return { 
          'x-access-token': user.token,
          "Content-Type": "multipart/form-data"
        };

    } else {

      return {};

    }
  }