var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":69,"methods":[{"el":15,"sc":5,"sl":13},{"el":19,"sc":5,"sl":17}],"name":"MultiplierEnum","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_22":{"methods":[{"sl":13},{"sl":17}],"name":"multiplierTest","pass":true,"statements":[{"sl":14},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [22], [22], [], [], [22], [22], [], [], [], []]
