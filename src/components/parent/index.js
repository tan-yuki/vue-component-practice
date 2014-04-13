module.exports = {
    template: require('./template.html'),

    data: {
        list: [
        ]
    },

    computed: {
        msg: function() {
            return this.list.join(' ');
        }
    }
};
