// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: strong-npm-ls
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

require('./helpers');

assertPrintable('deep-deps', 0, 'deep-0.txt');
assertPrintable('deep-deps', 1, 'deep-1.txt');
assertPrintable('deep-deps', 2, 'deep-2.txt');
assertPrintable('deep-deps', 3, 'deep-3.txt');
assertPrintable('deep-deps', 4, 'deep-4.txt');
assertPrintable('deep-deps', 5, 'deep-5.txt');
assertPrintable('deep-deps', Number.MAX_VALUE, 'deep-inf.txt');
