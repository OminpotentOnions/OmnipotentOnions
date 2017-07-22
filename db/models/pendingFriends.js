const db = require('../');
const PendingFriends = db.Model.extend({
  tableName: 'pending_friend_requests',
  user: () => {
    return this.belongsTo('Profile');
  },
  friend: () => {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('PendingFriends', PendingFriends);