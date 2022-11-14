
var myPow = function (x, n) {
    var recur = function (y, i) {
        if (i == 0) {
            return 1
        } else if (i == 1) {
            return y;
        }
        var tmp = recur(y, Math.floor(i / 2));
        if (i % 2 == 1) {
            return tmp * tmp * y;
        }
        return tmp * tmp;
    };
    var y = x;
    if (n < 0) {
        y = 1 / x;
        n = -1 * n;
    }
    return recur(y, n);
};