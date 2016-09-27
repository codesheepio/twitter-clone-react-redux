module.exports = function(Tweet) {
  Tweet.disableRemoteMethod("count", true);
  Tweet.disableRemoteMethod("exists", true);
  Tweet.disableRemoteMethod("upsert", true);
  Tweet.disableRemoteMethod("replaceById", true);
  Tweet.disableRemoteMethod("updateAttributes", false);
  Tweet.disableRemoteMethod('__count__accessTokens', false);
  Tweet.disableRemoteMethod('__create__accessTokens', false);
  Tweet.disableRemoteMethod('__delete__accessTokens', false);
  Tweet.disableRemoteMethod('__destroyById__accessTokens', false);
  Tweet.disableRemoteMethod('__findById__accessTokens', false);
  Tweet.disableRemoteMethod('__get__accessTokens', false);
  Tweet.disableRemoteMethod('__updateById__accessTokens', false);
  Tweet.disableRemoteMethod("createChangeStream", true);
  Tweet.disableRemoteMethod("replaceOrCreate", true);
  Tweet.disableRemoteMethod("upsertWithWhere", true);
};
