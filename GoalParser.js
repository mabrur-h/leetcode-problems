const GoalParser = function(command) {
    const objects = {"G": "G", "()": "o", "(al)": "al"};
    let result = "";
    let curr = "";
    for (const char of command) {
        curr += char;
        if (curr in objects) {
            result += objects[curr];
            curr = ""
        }
    }
    return result;
};