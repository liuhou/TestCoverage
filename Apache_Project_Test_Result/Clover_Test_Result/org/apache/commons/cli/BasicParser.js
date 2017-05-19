var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":51,"id":32,"methods":[{"el":50,"sc":5,"sl":43}],"name":"BasicParser","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":43}],"name":"testOptionAndRequiredOption","pass":true,"statements":[{"sl":49}]},"test_106":{"methods":[{"sl":43}],"name":"testOptionGroup","pass":true,"statements":[{"sl":49}]},"test_108":{"methods":[{"sl":43}],"name":"testPropertyOptionFlags","pass":true,"statements":[{"sl":49}]},"test_110":{"methods":[{"sl":43}],"name":"testOptionGroupLong","pass":true,"statements":[{"sl":49}]},"test_119":{"methods":[{"sl":43}],"name":"testArgumentStartingWithHyphen","pass":true,"statements":[{"sl":49}]},"test_144":{"methods":[{"sl":43}],"name":"testLongWithUnexpectedArgument2","pass":true,"statements":[{"sl":49}]},"test_148":{"methods":[{"sl":43}],"name":"testPropertyOptionRequired","pass":true,"statements":[{"sl":49}]},"test_157":{"methods":[{"sl":43}],"name":"testPropertyOptionGroup","pass":true,"statements":[{"sl":49}]},"test_16":{"methods":[{"sl":43}],"name":"testPropertyOptionUnexpected","pass":true,"statements":[{"sl":49}]},"test_180":{"methods":[{"sl":43}],"name":"testSimpleLong","pass":true,"statements":[{"sl":49}]},"test_181":{"methods":[{"sl":43}],"name":"testShortWithUnexpectedArgument","pass":true,"statements":[{"sl":49}]},"test_19":{"methods":[{"sl":43}],"name":"testStopAtNonOptionLong","pass":true,"statements":[{"sl":49}]},"test_206":{"methods":[{"sl":43}],"name":"testMissingRequiredOptions","pass":true,"statements":[{"sl":49}]},"test_236":{"methods":[{"sl":43}],"name":"testNegativeArgument","pass":true,"statements":[{"sl":49}]},"test_237":{"methods":[{"sl":43}],"name":"testSimpleShort","pass":true,"statements":[{"sl":49}]},"test_238":{"methods":[{"sl":43}],"name":"testUnlimitedArgs","pass":true,"statements":[{"sl":49}]},"test_253":{"methods":[{"sl":43}],"name":"testWithRequiredOption","pass":true,"statements":[{"sl":49}]},"test_255":{"methods":[{"sl":43}],"name":"testUnrecognizedOption","pass":true,"statements":[{"sl":49}]},"test_266":{"methods":[{"sl":43}],"name":"testMultiple","pass":true,"statements":[{"sl":49}]},"test_269":{"methods":[{"sl":43}],"name":"testStopAtUnexpectedArg","pass":true,"statements":[{"sl":49}]},"test_280":{"methods":[{"sl":43}],"name":"testMissingRequiredOption","pass":true,"statements":[{"sl":49}]},"test_289":{"methods":[{"sl":43}],"name":"testPropertyOptionSingularValue","pass":true,"statements":[{"sl":49}]},"test_295":{"methods":[{"sl":43}],"name":"testSingleDash","pass":true,"statements":[{"sl":49}]},"test_297":{"methods":[{"sl":43}],"name":"testStopAtNonOptionShort","pass":true,"statements":[{"sl":49}]},"test_30":{"methods":[{"sl":43}],"name":"testStopAtExpectedArg","pass":true,"statements":[{"sl":49}]},"test_304":{"methods":[{"sl":43}],"name":"testMissingArg","pass":true,"statements":[{"sl":49}]},"test_316":{"methods":[{"sl":43}],"name":"testReuseOptionsTwice","pass":true,"statements":[{"sl":49}]},"test_36":{"methods":[{"sl":43}],"name":"testLongWithUnexpectedArgument1","pass":true,"statements":[{"sl":49}]},"test_43":{"methods":[{"sl":43}],"name":"testPropertyOptionMultipleValues","pass":true,"statements":[{"sl":49}]},"test_59":{"methods":[{"sl":43}],"name":"testDoubleDash1","pass":true,"statements":[{"sl":49}]},"test_60":{"methods":[{"sl":43}],"name":"testMissingRequiredGroup","pass":true,"statements":[{"sl":49}]},"test_62":{"methods":[{"sl":43}],"name":"testMultipleWithLong","pass":true,"statements":[{"sl":49}]},"test_65":{"methods":[{"sl":43}],"name":"testPropertyOverrideValues","pass":true,"statements":[{"sl":49}]},"test_68":{"methods":[{"sl":43}],"name":"testLongWithoutEqualDoubleDash","pass":true,"statements":[{"sl":49}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [106, 59, 266, 43, 108, 181, 60, 316, 253, 295, 304, 206, 62, 157, 68, 180, 16, 237, 119, 36, 280, 236, 110, 65, 144, 30, 101, 148, 238, 289, 269, 255, 19, 297], [], [], [], [], [], [106, 59, 266, 43, 108, 181, 60, 316, 253, 295, 304, 206, 62, 157, 68, 180, 16, 237, 119, 36, 280, 236, 110, 65, 144, 30, 101, 148, 238, 289, 269, 255, 19, 297], [], []]