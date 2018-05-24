const returnNewConfig = () => {
  jest.resetModules();
  return require('./index.mjs').default;
};



describe('config', function() {
  it('returns port passed in to process', function() {
    process.env.PORT = '4321';
    expect(returnNewConfig().port).toEqual('4321');
  });

  it('returns default port of "1234" if one is not passed in to process', function() {
    delete process.env.PORT;
    expect(returnNewConfig().port).toEqual('1234');
  });

  it('returns environment name passed in to process', function() {
    process.env.NODE_ENV = 'foobar';
    expect(returnNewConfig().environment).toEqual('foobar');
  });

  it('returns default environment name of "local" if one is not passed in to process', function() {
    delete process.env.NODE_ENV;
    expect(returnNewConfig().environment).toEqual('local');
  });

  // describe('local environment', function() {
  //   beforeEach(function() {
  //     process.env.NODE_ENV = 'local';
  //   });
  // });

  // describe('production environment', function() {
  //   beforeEach(function() {
  //     process.env.NODE_ENV = 'production';
  //   });
  // });
});
