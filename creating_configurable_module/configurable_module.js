module.exports = function(configObj) {
    return {
        log: function(msg) {
            console.log(configObj.configPrefix + msg);
        }
    }
}