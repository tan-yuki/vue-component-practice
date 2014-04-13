module.exports = {
    template: require('./template.html'),

    data: {
        list: [
            "This",
            "is",
            "one"
        ]
    },

    computed: {
        msg: function() {
            return this.list.join(' ');
        }
    }
};
