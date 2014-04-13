module.exports = {
    template: require('./template.html'),

    data: {
        list: [
            "This",
            "is",
            "two"
        ]
    },

    computed: {
        msg: function() {
            return this.list.join(' ');
        }
    }
};

