var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":71,"id":1702,"methods":[{"el":45,"sc":5,"sl":42},{"el":59,"sc":5,"sl":55},{"el":70,"sc":5,"sl":67}],"name":"UnrecognizedOptionException","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_104":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOption","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_107":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOptionWithBursting","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_13":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption3","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_135":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testLongWithUnexpectedArgument2","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_144":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testLongWithUnexpectedArgument2","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_145":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption2","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_156":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOption","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_16":{"methods":[{"sl":42},{"sl":55}],"name":"testPropertyOptionUnexpected","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58}]},"test_177":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testShortWithUnexpectedArgument","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_181":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testShortWithUnexpectedArgument","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_184":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testLongWithUnexpectedArgument2","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_192":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOptionWithBursting","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_217":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testShortWithUnexpectedArgument","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_231":{"methods":[{"sl":42},{"sl":55}],"name":"testPropertyOptionUnexpected","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58}]},"test_251":{"methods":[{"sl":42},{"sl":55}],"name":"testAmbiquousOptionName","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58}]},"test_255":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOption","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_28":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption3","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_284":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testLongWithUnexpectedArgument1","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_296":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testUnrecognizedOption","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_301":{"methods":[{"sl":42},{"sl":55}],"name":"testPropertyOptionUnexpected","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58}]},"test_36":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testLongWithUnexpectedArgument1","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_49":{"methods":[{"sl":42},{"sl":55}],"name":"testPropertyOptionUnexpected","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58}]},"test_57":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption1","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_64":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption4","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_67":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption2","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]},"test_93":{"methods":[{"sl":42},{"sl":55},{"sl":67}],"name":"testAmbiguousPartialLongOption1","pass":true,"statements":[{"sl":44},{"sl":57},{"sl":58},{"sl":69}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [13, 184, 177, 217, 156, 49, 181, 284, 296, 67, 28, 104, 64, 16, 251, 135, 231, 301, 36, 93, 107, 57, 144, 192, 145, 255], [], [13, 184, 177, 217, 156, 49, 181, 284, 296, 67, 28, 104, 64, 16, 251, 135, 231, 301, 36, 93, 107, 57, 144, 192, 145, 255], [], [], [], [], [], [], [], [], [], [], [13, 184, 177, 217, 156, 49, 181, 284, 296, 67, 28, 104, 64, 16, 251, 135, 231, 301, 36, 93, 107, 57, 144, 192, 145, 255], [], [13, 184, 177, 217, 156, 49, 181, 284, 296, 67, 28, 104, 64, 16, 251, 135, 231, 301, 36, 93, 107, 57, 144, 192, 145, 255], [13, 184, 177, 217, 156, 49, 181, 284, 296, 67, 28, 104, 64, 16, 251, 135, 231, 301, 36, 93, 107, 57, 144, 192, 145, 255], [], [], [], [], [], [], [], [], [13, 184, 177, 217, 156, 181, 284, 296, 67, 28, 104, 64, 135, 36, 93, 107, 57, 144, 192, 145, 255], [], [13, 184, 177, 217, 156, 181, 284, 296, 67, 28, 104, 64, 135, 36, 93, 107, 57, 144, 192, 145, 255], [], []]
