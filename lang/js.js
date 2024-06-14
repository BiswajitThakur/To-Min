function index(s) {
    let r = [];
    let i = 0;
    if (/[\s\n]/.test(s[i])) {
        i++;
    };
    while (i < s.length) {
        // multiline comment
        if (`${s[i]}${s[i + 1]}` == '/*') {
            i += 2;
            while (i + 1 < s.length && `${s[i]}${s[i + 1]}` != '*/') {
                i++;
            };
            i += 2;
            if (/[\w\$]/.test(s[i]) && /[\w\$]/.test(r[r.length - 1])) {
                r.push(' ');
            };
            continue;
        };
        // single comment
        if (`${s[i]}${s[i + 1]}` == '//') {
            while (s[i] != '\n' && i < s.length) {
                i++;
            };
            i++;
            if (/[\w\$]/.test(s[i]) && /[\w\$]/.test(r[r.length - 1])) {
                r.push(' ');
            };
            continue;
        };
        // string ` `
        if (s[i] == "`") {
            r.push(s[i]);
            i++;
            while ((s[i - 1] == '\\' || s[i] != "`") && i < s.length) {
                r.push(s[i]);
                i++;
            };
            r.push(s[i]);
            i++;
            continue;
        };
        // string ' '
        if (s[i] == "'") {
            r.push(s[i]);
            i++;
            while ((s[i - 1] == '\\' || s[i] != "'") && i < s.length) {
                r.push(s[i]);
                i++;
            };
            r.push(s[i]);
            i++;
            continue;
        };
        // string " "
        if (s[i] == '"') {
            r.push(s[i]);
            i++;
            while ((s[i - 1] == '\\' || s[i] != '"') && i < s.length) {
                r.push(s[i]);
                i++;
            };
            r.push(s[i]);
            i++;
            continue;
        };
        // regex /  /
        if (s[i] == '/' && r[r.length - 1] == '=') {
            r.push(s[i]);
            i++;
            while ((s[i - 1] == '\\' || s[i] != '/') && i < s.length) {
                r.push(s[i]);
                i++;
            };
            r.push(s[i]);
            i++;
            continue;
        };
        if (i + 1 < s.length && /[\w][\s\n][\w]/.test(`${s[i - 1]}${s[i]}${s[i + 1]}`)) {
            r.push(' ');
            i++;
            continue;
        };
        if (i + 1 < s.length && /[\w][\s\n][^\w]/.test(`${s[i - 1]}${s[i]}${s[i + 1]}`)) {
            i++;
            continue;
        };
        if (i + 1 < s.length && /[^\w\$][\s\n][^\w\$]/.test(`${s[i - 1]}${s[i]}${s[i + 1]}`)) {
            i++;
            continue;
        };

        if (/[\s\n]/.test(s[i]) && (/\w/.test(r[r.length - 1]))) {
            r.push(' ');
            i++;
            continue;
        };
        if (/[\s\n]/.test(s[i])) {
            i++;
            continue;
        };
        r.push(s[i]);
        i++;
    };
    return r.join('');
};

module.exports = {
    index
};
