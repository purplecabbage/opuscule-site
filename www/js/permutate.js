
var Permutate = {
    next:function next(arr,compareFunction) {
        var retArr = arr.slice();
        var safeCompare = compareFunction || function(a,b) {
            if(a < b) {
                return -1;
            } else if(a > b) {
                return 1;
            }
            return 0;
        };
        for(var k = arr.length - 2; k > -1; k--) {
            if(arr[k] < arr[k+1]){
                for(var l = arr.length - 1; l > k; l--) {
                    var compareResult = safeCompare(arr[k], arr[l]);
                    if( compareResult < 0 ) {
                        retArr[k] = arr[l];
                        retArr[l] = arr[k];
                        var sub = retArr.slice(k+1);
                        sub.reverse();
                        retArr = retArr.slice(0,k+1).concat(sub);
                        return retArr;
                    }
                    else if(compareResult == 0) {
console.log("matched ... should skip this value");
                    }
                }
            }
            else {
                console.log("it happened with : " + arr[k] + " and " + arr[k+1]);
            }
        }
        return null;
    },
    first:function first(arr,compareFunction) {
        var ret = arr.slice();
        ret.sort(compareFunction);
        return ret;
    },
    last:function last(arr,compareFunction) {
        var ret = this.first(arr,compareFunction);
        return ret.reverse();
    }
}