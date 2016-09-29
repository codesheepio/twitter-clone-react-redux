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

  TwisterUser.afterRemote('login', function(ctx, user, next) {
    if (ctx.result) {
      TwisterUser.findOne({
        where: {
          username: user.userId,
        },
      })
      .then(function(userInst) {
        var modifiedResult = {};
        modifiedResult.token = ctx.result.id;
        modifiedResult.ttl = ctx.result.ttl;
        modifiedResult.created = ctx.result.created;
        modifiedResult.username = userInst.username;
        modifiedResult.name = userInst.name;

        ctx.result = modifiedResult;
        next();
      });
    } else {
      next();
    }
  });
};
