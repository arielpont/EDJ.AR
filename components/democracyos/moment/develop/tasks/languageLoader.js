module.exports = function (grunt) {
    grunt.registerTask('languageLoader', function() {

        var langFiles = grunt.file.expand('locale/*.js');
        var buf = [];
        buf.push('// don\'t touch this file, it\'s generated\n');

        buf.push('var languages = {\n');
        var i=0;
        for (i; i<langFiles.length; i++) {
            var item = langFiles[i];
            var key = item.match(/locale\/(.*)\.js/)[1];
            buf.push('  "'+key+'": ');
            buf.push('function() {return require("./'+item+'");}');
            buf.push(',\n');
        }
        buf[buf.length-1] = '\n'; // reset the last comma
        buf.push('};\n');
        buf.push('module.exports = function(key) {\n');
        buf.push('  if (languages[key] === null) {\n');
        buf.push('    throw new Error("no language file was found for the key: "+key);\n');
        buf.push('  }\n');
        buf.push('  return languages[key]();\n');
        buf.push('};');
        grunt.file.write('language-loader.js', buf.join(''));
    });
};
