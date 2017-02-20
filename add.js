var add = function () {
    var sum = 0;
    for(var i in arguments){
        if(typeof  arguments[i] === "number"){
            sum += arguments[i];
        }
    }
    return sum;
};
var sort_choose = function (arr) {
    if(arr.length > 1){
        for(var i = 0;i<arr.length-1; i++){
            var pos = i;
            for(var j = i+1;j<arr.length; j++){
                if(arr[pos] > arr[j]){
                    pos = j;
                }
            }
            arr = wrap(arr,i,pos);
        }
        return arr;
    }else {
        return arr;
    }
};
var sort_bubble = function (arr) {
   if(arr.length > 1){
        for(var i = 0;i<arr.length-1; i++){
            for(var j = 1;j<arr.length-i; j++){
                if(arr[j-1] > arr[j]){
                    wrap(arr,j-1,j);
                }
            }
        }
        return arr;
    }else {
        return arr;
    }
};
var sort_insert = function (arr) {
    if(arr.length > 1){
        for(var j = 1;j<arr.length; j++){
            var temp = arr[j];
            var k = j-1;
            while(arr[k] > arr[j] && k > -1){
                k--;
            }//插在k+1位置上
            for(var t = j-1; t>k; t--){
                arr[t+1]  = arr[t];
            }
            arr[k+1]  = temp;
        }
        return arr;
    }else {
        return arr;
    }
};
var sort_insert_binary = function (arr) {
    if(arr.length > 1){
        for(var j = 1;j<arr.length; j++){
            var temp = arr[j];
            var right = j-1;
            var left = 0;
            var mid;

            while(right >= left){
                mid = Math.floor((left+right)/2);
                if(temp > arr[mid]){
                    left = mid+1;
                }else{
                    right = mid-1;
                }
            }
            for(var t = j-1; t > right; t--){
                arr[t+1]  = arr[t];
            }
            arr[left]  = temp;
        }
        return arr;
    }else {
        return arr;
    }
};
var sort_quik = function (arr,left,right) {
    if(left < right){
        var pos = change_quik(arr,left,right);
        sort_quik(arr,left,pos);
        sort_quik(arr,pos+1,right);
    }
    return arr;
};
var change_quik = function (arr,left,right) {
    var pos = left;
    var temp = arr[left];
    for(var i = left+1 ;i < right; i++){
        if(arr[i]<temp){
            pos++;
            wrap(arr,pos,i);
        }
    }
    arr[left] = arr[pos];
    arr[pos] = temp;
    return pos;
};
var wrap = function (arr,a,b) {
    if(arr.length < 2) {
        return;
    }
    if(a == b){
        return arr;
    }
    if(a<arr.length&&b<arr.length){
        var temp;
        temp = arr[a] ;
        arr[a] = arr[b];
        arr[b] = temp;
        return arr;
    }else{
        return 'index out of arr! please check.'
    }
};
var sort_shell = function (arr,gap) {
      for(var g = 0; g<gap.length; g++){
          for(var i = gap[g];i<arr.length;i++){
              var temp = arr[i];
              for(var j = i; j>=gap[g] && temp < arr[j-gap[g]]; j-=gap[g]){
                  arr[j] = arr[j-gap[g]];
              }
              arr[j] = temp;
          }
      }
    return arr;
};
var sort_merge = function (arr) {
    if(arr.length < 2) {
        return arr;
    }
    var step,right,left;
    step = 1;
    while(step < arr.length){
        left = 0;
        right = step;
        while(right + step <= arr.length){
            mergeArrays(arr,left,left+step,right,right+step);
            left = right + step;
            right = left + step;
        }
        if(right < arr.length){
            mergeArrays(arr,left,left+step,right,arr.length);
        }
        step *= 2;
    }
    return arr;
};
var mergeArrays = function (arr,startLeft,stopLeft,startRight,stopRight) {
    var rightArr = new Array(stopRight - startRight);
    var leftArr = new Array(stopLeft - startLeft);
    var k = startLeft,m,n;
    m = n = 0;
    for(var i = 0;i < leftArr.length; i++){
        leftArr[i] = arr[k++];
    }
    k = startRight;
    for(var j = 0;j < rightArr.length; j++){
        rightArr[j] = arr[k++];
    }
    while(m < leftArr.length && n < rightArr.length){
        if(leftArr[m] <= rightArr[n]){
            arr[startLeft++] = leftArr[m++];
        }else{
            arr[startLeft++] = rightArr[n++];
        }
    }
    if(m < leftArr.length){
        for(var t = m; t<leftArr.length; t++){
            arr[startLeft++] = leftArr[t];
        }
    }else if(n < rightArr.length){
        for(var t1 = n; t1<rightArr.length; t1++){
            arr[startLeft++] = rightArr[t1];
        }
    }
};