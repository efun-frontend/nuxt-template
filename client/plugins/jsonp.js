/**
 * Noop function.
 */

function noop() {}

/**
 * JSONP handler
 *
 * Options:
 *  - params {Object}  parameter 
 *  - callback {String} callback name
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object} 
 */
function jsonpPromise(url, opts) {
    return new Promise(function(resolve, reject) {
        jsonp(url, opts, resolve, reject);
    });
}

function jsonp(url, opts, resolve, reject) {

    if (!opts) opts = {};

    var prefix = 'jsonp_';

    // use the callback name that was passed if one was provided.
    // otherwise generate a unique name by incrementing our counter.
    var id = opts.name || (prefix + (+new Date()));
    var params = opts.params;
    var callback = opts.callback || 'jsoncallback';
    var timeout = null != opts.timeout ? opts.timeout : 60000;
    var enc = encodeURIComponent;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;


    if (timeout) {
        timer = setTimeout(function() {
            cleanup();
            reject(new Error('Timeout'));
        }, timeout);
    }

    function cleanup() {
        if (script.parentNode) script.parentNode.removeChild(script);
        window[id] = noop;
        if (timer) clearTimeout(timer);
    }

    function cancel() {
        if (window[id]) {
            cleanup();
        }
    }

    function paramsToString(obj) {
        var res = '',
            index = 0;

        for(var key in obj) {
            if (index > 0) {
                res += '&'
            }
            res += key + '=' + obj[key];
            index++;
        }  
        console.log(res);

        return res;
    }

    window[id] = function(data) {
        cleanup();
        resolve(data);
    };

    // add qs component
    url += (~url.indexOf('?') ? '&' : '?') + paramsToString(params) + '&' + callback + '=' + enc(id);
    url = url.replace('?&', '?');

    // create script
    script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);
  
    
}

export default jsonpPromise;