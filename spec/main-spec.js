describe("pos-tdd-v2",function(){
  it("test a input with only one item without '-' and without promotion",function(){
    spyOn(console, 'log');
    var inputStr = ["ITEM000003"],
        expectedResult =  "***<没钱赚商店>购物清单***\n" +
                          "名称：荔枝，数量：1斤，单价：15.00(元)，小计：15.00(元)\n"+
                          "----------------------\n" +
                          "总计：15.00(元)\n" +
                          "**********************";
     printInventory(inputStr);
     expect(console.log).toHaveBeenCalledWith(expectedResult);

  });
  it("test two different items without '-' and without promotion",function(){
    spyOn(console, 'log');
    var inputStr = ["ITEM000003",
                    "ITEM000004"],
        expectedResult =  "***<没钱赚商店>购物清单***\n" +
                          "名称：荔枝，数量：1斤，单价：15.00(元)，小计：15.00(元)\n"+
                          "名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n"+
                          "----------------------\n" +
                          "总计：17.00(元)\n" +
                          "**********************";
     printInventory(inputStr);
     expect(console.log).toHaveBeenCalledWith(expectedResult);

  });
  it("test same items without '-' and without promotion",function(){
    spyOn(console, 'log');
    var inputStr = ["ITEM000003",
                    "ITEM000003",
                    "ITEM000004"],
        expectedResult =  "***<没钱赚商店>购物清单***\n" +
                          "名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n"+
                          "名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n"+
                          "----------------------\n" +
                          "总计：32.00(元)\n" +
                          "**********************";
     printInventory(inputStr);
     expect(console.log).toHaveBeenCalledWith(expectedResult);

  });
  it("test items with '-' but without promotion",function(){
    spyOn(console, 'log');
    var inputStr = ["ITEM000003-2",
                    "ITEM000004"],
        expectedResult =  "***<没钱赚商店>购物清单***\n" +
                          "名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n"+
                          "名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n"+
                          "----------------------\n" +
                          "总计：32.00(元)\n" +
                          "**********************";
     printInventory(inputStr);
     expect(console.log).toHaveBeenCalledWith(expectedResult);

  });
  it("test items with '-' and with promotion",function(){
    spyOn(console, 'log');
    var inputStr = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
        expectedResult =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
     printInventory(inputStr);
     expect(console.log).toHaveBeenCalledWith(expectedResult);

  });
});
