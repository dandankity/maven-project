describe('JS common function test',function(){
    var commonFunction = new CommonFunction();

    describe('maximum', function(){
        it('should return the element when one element is passed to it',function(){
            expect(commonFunction.max([1])).toBe(1);
        });

        it('should return the larger element when multiple elements are passed to it', function(){
            expect(commonFunction.max([1,2,5])).toBe(5);
        });
    });
   });