const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js');
    console.log(baseConfig);

    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'D:/test/studyWebpack/package39/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, 'D:/test/studyWebpack/package39/test/smoke/template/src/search/index.js')
    });
});