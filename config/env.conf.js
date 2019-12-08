'use strict'
module.exports = {
  //测试环境
  'test': {
     NODE_ENV: '"testing"',
     ENV_CONFIG:'"test"'
  },
  //生产环境
  'prod': {
     NODE_ENV: '"production"',
     ENV_CONFIG:'"prod"'
  },
  //预上线
  'prepro': {
    NODE_ENV: '"preproduction"',
    ENV_CONFIG:'"prepro"'
  }
}
