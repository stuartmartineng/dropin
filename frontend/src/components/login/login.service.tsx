import { config } from "../../config";

export const authenticationService = {
    login,
    logout,
    register
}

function login(data: any){
    return fetch(config.host + '/token-auth/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log("Json: ", json);
        if(json.non_field_errors != null){
            if(json.non_field_errors[0] == "Unable to log in with provided credentials."){
                const error = json.non_field_errors[0];
                return Promise.reject("User Credentials did not match with records.");
            }
        }
        else{
            localStorage.setItem('token', json.token);
            localStorage.setItem('user', json.user);
            return json;
        }
    }

    );
};

function register(data: any){
    return fetch(config.host + '/users/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        localStorage.setItem('user', json.user);
        return json;

      });
  };

function logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}