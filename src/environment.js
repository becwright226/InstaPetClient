let APIURL ='';

switch (window.location.hostname) {
    //
    case 'localhost' || '192.168.4.95':
        //
    APIURL = 'http://localhost:1150';
    break;

    case "instapet-rwak-client.herokuapp.com":

    APIURL= 'https://instapet-rwak.herokuapp.com/'

}

export default APIURL;