/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';

// Project metadata.
var pkg = require('../package.json');
var colors = require('colors');

// Display grunt-cli version.
exports.version = function() {
  console.log('boggart-cli v' + pkg.version);
};

// Show help, then exit with a message and error code.
exports.fatal = function(msg, code) {
  exports.helpHeader();
  console.log('Fatal error: ' + msg);
  console.log('');
  exports.helpFooter();
  process.exit(code);
};

// Show help and exit.
exports.help = function() {
  exports.helpHeader();
  exports.helpFooter();
  process.exit();
};

// Help header.
exports.helpHeader = function() {
  console.log('boggart-cli '.green.bold + ('(v' + pkg.version + '): ').red + pkg.description);
  console.log('');
};

// Help footer.
exports.helpFooter = function() {
  [
    'If you\'re seeing this message, either a Boggartfile wasn\'t found or boggart',
    'hasn\'t been installed locally to your project. For more information about',
    'installing and configuring boggart, please see the Getting Started guide:',
    '',
    'http://boggartjs.com/getting-started',
  ].forEach(function(str) { console.log(str); });
};
