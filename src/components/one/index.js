var _ = require('/lodash');
var parents = require('/parent');

module.exports = _.extend({}, parents, {
    data: {
        list: [
            'This',
            'is',
            'one'
        ]
    }
});
