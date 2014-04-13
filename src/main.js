var Vue = require('vue');

var app = new Vue({
    el: 'body',
    components: {
        one: require('one'),
        two: require('two')
    }
});

module.exports = app;
