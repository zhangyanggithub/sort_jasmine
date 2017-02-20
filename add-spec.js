"use strict";
describe("The add function",function () {
    it("Add 1+2+3 correctly",function () {
        var output = add(1,2,3);
        expect(output).toEqual(6);
    });

    it("Add -1-2-3 correctly",function () {
        var output = add(-1,-2,-3);
        expect(output).toEqual(-6);
    });
    it("return 0 if no inputs provided",function () {
        var output = add();
        expect(output).toEqual(0);
    });
    it("add only numeric",function () {
        var output = add(1,2,3,"3");
        expect(output).toEqual(6);
    });
});
describe("the wrap function",function () {
    it("change index 1 and 2 correctly",function () {
        var output = wrap([0,1,2,3],1,2);
        expect(output).toEqual([0,2,1,3]);
    });
    it("change same index 1 and 1 correctly",function () {
        var output = wrap([0,1,2,3],1,1);
        expect(output).toEqual([0,1,2,3]);
    });
    it("change out of index 9 and 10 correctly",function () {
        var output = wrap([0,1,2,3],9,10);
        expect(output).toEqual('index out of arr! please check.');
    });
});
describe('the sort_choose function',function () {
    it('sort number arr correctly',function () {
        var s = new Array(3,2,1);
        var output = sort_choose(s);
        var t = new Array(1,2,3);
        expect(output).toEqual(t);
    });
    it('sort charator arr correctly',function () {
        var output = sort_choose("zhang".split(''));
        expect(output).toEqual(['a','g','h','n','z']);
    });
});
describe('the sort_bubble function',function () {
    it('sort number arr correctly',function () {
        var s =[3,2,7,1];
        var output = sort_bubble(s);
        var t = [1,2,3,7];
        expect(output).toEqual(t);
    });
    it('sort charator arr correctly',function () {
        var output = sort_bubble("zhang".split(''));
        expect(output).toEqual(['a','g','h','n','z']);
    });
});
describe('the sort_insert function',function () {
    it('sort number arr correctly',function () {
        var s =[3,2,7,1];
        var output = sort_insert(s);
        var t = [1,2,3,7];
        expect(output).toEqual(t);
    });
    it('sort charator arr correctly',function () {
        var output = sort_insert("zhang".split(''));
        expect(output).toEqual(['a','g','h','n','z']);
    });
    it('sort null arr correctly',function () {
        var output = sort_insert([]);
        expect(output).toEqual([]);
    });
});
describe('the sort_insert_binary function',function () {
    it('sort number arr correctly',function () {
        var s =[3,2,7,1];
        var output = sort_insert_binary(s);
        var t = [1,2,3,7];
        expect(output).toEqual(t);
    });
    it('sort charator arr correctly',function () {
        var output = sort_insert_binary("zhang".split(''));
        expect(output).toEqual(['a','g','h','n','z']);
    });
    it('sort null arr correctly',function () {
        var output = sort_insert_binary([]);
        expect(output).toEqual([]);
    });
});
describe('the sort_quik function',function () {
    it('sort number arr correctly',function () {
        var s =[3,2,7,1];
        var output = sort_quik(s,0,4);
        var t = [1,2,3,7];
        expect(output).toEqual(t);
    });
    it('sort charator arr correctly',function () {
        var output = sort_quik("zhang".split(''),0,5);
        expect(output).toEqual(['a','g','h','n','z']);
    });
    it('sort null arr correctly',function () {
        var output = sort_quik([],0,0);
        expect(output).toEqual([]);
    });
});
describe('the shell_sort function',function () {
   it('sort number arr correctly',function () {
       var gap = [5,3,1],
           arr = [6,0,2,9,3,5,8,0,5,4],
           output = sort_shell(arr,gap);
       expect(output).toEqual([0,0,2,3,4,5,5,6,8,9]);
   });
});
describe('merge_sort function',function () {
    it('sort number arr correctly',function () {
       var arr = [6,10,1,9,4,8,2,7,3,5],
           output = sort_merge(arr);
        expect(output).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});