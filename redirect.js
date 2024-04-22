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

// Function to convert parameters to UPI format
function convertToUPIFormat(params) {
    var upi = params['u'];
    var name = params['n'];
    var amount = params['a'];
    var description = params['d'];
    var upiFormat = `upi://pay?pa=${upi}&pn=${name}&am=${amount}&tn=${description}&cu=INR`;
    return upiFormat;
}

// Function to redirect after 1 second
function redirectWithDelay(upi) {
    setTimeout(function() {
        window.location.href = upi;
    }, 1000);
}

// Extracting parameters from the current URL
var currentURL = window.location.href;
var params = parseParams(currentURL);

// Converting parameters to UPI format
var upiFormat = convertToUPIFormat(params);

// Redirecting after 1 second
redirectWithDelay(upiFormat);
