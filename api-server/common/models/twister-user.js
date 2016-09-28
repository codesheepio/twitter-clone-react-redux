module.exports = function(TwisterUser) {
  TwisterUser.disableRemoteMethod('count', true);
  TwisterUser.disableRemoteMethod('exists', true);
  TwisterUser.disableRemoteMethod('upsert', true);
  TwisterUser.disableRemoteMethod('replaceById', true);
  TwisterUser.disableRemoteMethod('updateAll', true);
  TwisterUser.disableRemoteMethod('__count__accessTokens', false);
  TwisterUser.disableRemoteMethod('__create__accessTokens', false);
  TwisterUser.disableRemoteMethod('__delete__accessTokens', false);
  TwisterUser.disableRemoteMethod('__destroyById__accessTokens', false);
  TwisterUser.disableRemoteMethod('__findById__accessTokens', false);
  TwisterUser.disableRemoteMethod('__get__accessTokens', false);
  TwisterUser.disableRemoteMethod('__updateById__accessTokens', false);
  TwisterUser.disableRemoteMethod('createChangeStream', true);
  TwisterUser.disableRemoteMethod('replaceOrCreate', true);
  TwisterUser.disableRemoteMethod('upsertWithWhere', true);
};
