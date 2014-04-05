var Vue = require('vue');

var app = new Vue({
    components: {
        one: require('one'),
        two: require('two')
    }
});

module.exports = app;
