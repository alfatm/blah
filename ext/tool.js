function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getClamp(v, min, max) {
    return Math.min(max, Math.max(v, min));
}

function getRandomFloat(min, max) {
    var v = Math.random() * (max - min + 1) + min;
    return getClamp(v, min, max);
}

function getRandomInt(min, max) {
    return Math.floor(getRandomFloat(min, max))
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}