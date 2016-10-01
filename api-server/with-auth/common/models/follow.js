module.exports = function(Follow) {
  Follow.disableRemoteMethod('exists', true);
  Follow.disableRemoteMethod('upsert', true);
  Follow.disableRemoteMethod('replaceById', true);
  Follow.disableRemoteMethod('updateAttributes', false);
  Follow.disableRemoteMethod('__count__accessTokens', false);
  Follow.disableRemoteMethod('__create__accessTokens', false);
  Follow.disableRemoteMethod('__delete__accessTokens', false);
  Follow.disableRemoteMethod('__destroyById__accessTokens', false);
  Follow.disableRemoteMethod('__findById__accessTokens', false);
  Follow.disableRemoteMethod('__get__accessTokens', false);
  Follow.disableRemoteMethod('__updateById__accessTokens', false);
  Follow.disableRemoteMethod('createChangeStream', true);
  Follow.disableRemoteMethod('replaceOrCreate', true);
  Follow.disableRemoteMethod('upsertWithWhere', true);
};
