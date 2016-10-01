var Bluebird = require('bluebird')

module.exports = function(Tweet) {
  Tweet.disableRemoteMethod('count', true);
  Tweet.disableRemoteMethod('exists', true);
  Tweet.disableRemoteMethod('upsert', true);
  Tweet.disableRemoteMethod('replaceById', true);
  Tweet.disableRemoteMethod('updateAttributes', false);
  Tweet.disableRemoteMethod('__count__accessTokens', false);
  Tweet.disableRemoteMethod('__create__accessTokens', false);
  Tweet.disableRemoteMethod('__delete__accessTokens', false);
  Tweet.disableRemoteMethod('__destroyById__accessTokens', false);
  Tweet.disableRemoteMethod('__findById__accessTokens', false);
  Tweet.disableRemoteMethod('__get__accessTokens', false);
  Tweet.disableRemoteMethod('__updateById__accessTokens', false);
  Tweet.disableRemoteMethod('createChangeStream', true);
  Tweet.disableRemoteMethod('replaceOrCreate', true);
  Tweet.disableRemoteMethod('upsertWithWhere', true);

  Tweet.homeFeed = Bluebird.promisify(function homeFeed(req, cb) {
    var currentUser = req.accessToken && req.accessToken.userId;
    var Follow = Tweet.app.models.Follow;
    var followings = []
    Follow.find({
      where: {
        username: currentUser,
      },
    })
    .then(function(follows) {
      return follows.map(follow => follow.followedUsername);
    })
    .then(function(followers) {
      var usersForFeed = followers;
      usersForFeed.push(currentUser);

      return Tweet.find({
        where: {
          username: {
            inq: usersForFeed,
          },
        },
      })
    })
    .then(function(tweets) {
      cb(null, tweets);
    })
    .catch(function(err) {
      cb(err);
    })
  });

  Tweet.remoteMethod('homeFeed', {
    http: { path: '/homefeed', verb: 'get' },
    accepts: { arg: 'req', type: 'object', required: true, http: { source: 'req' } },
    returns: { arg: 'feed', type: ["object"], root: true },
  })
};
