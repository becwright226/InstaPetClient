let APIURL ='';

switch (window.location.hostname) {
    //
    case 'localhost' || '192.168.4.95':
        //
    APIURL = 'http://localhost:3000';
    break;

    case "instapet-rwak-client.herokuapp.com":

    APIURL= 'https://git.heroku.com/instapet-rwak-client.git'

}

export default APIURL;