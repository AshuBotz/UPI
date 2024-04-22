// Function to parse URL parameters
function parseParams(url) {
    var params = {};
    var queryString = url.split('?')[1];
    if (queryString) {
        var pairs = queryString.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
    }
    return params;
}

// Function to convert token URL to UPI format
function convertTokenToUPI(token) {
    var params = parseParams(token);
    var upi = params['u'];
    var name = params['n'];
    var amount = params['a'];
    var description = params['d'];
    var upiFormat = `pa=${upi}&pn=${name}&am=${amount}&tn=${description}&cu=INR`;
    return upiFormat;
}

// Function to redirect after 1 second
function redirectWithDelay(upi) {
    setTimeout(function() {
        window.location.href = `upi://pay?${upi}`;
    }, 1000);
}

// Extracting token from the current URL
var currentURL = window.location.href;
var tokenIndex = currentURL.indexOf('?');
var token = currentURL.substring(tokenIndex + 1);

// Converting token to UPI format
var upiFormat = convertTokenToUPI(token);

// Redirecting after 1 second
redirectWithDelay(upiFormat);
