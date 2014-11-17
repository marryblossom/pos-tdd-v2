
//名称：荔枝，数量：1斤，单价：15.00(元)，小计：15.00(元) ---------------------- 总计：15.00(元)
function printInventory(inputs) {
  var start='***<没钱赚商店>购物清单***\n';
  var end = '**********************';
  var segmentLine = '----------------------\n';
  var middle = '';
  var total = 0;
  var allItems = loadAllItems();
  for(var j in inputs){
    var input = inputs[j];
    var item;
    for(var i in allItems){
      if(allItems[i].barcode === input){
        item = allItems[i];
        middle +=  '名称：'+ item.name +
                   '，数量：1' + item.unit +
                   '，单价：' + item.price.toFixed(2) + '(元)，小计：' +
                   item.price.toFixed(2) + '(元)\n';
        total += item.price;
      }

    }
  }

  var totalString = '总计：' + total.toFixed(2) + '(元)\n';
  var output = start + middle+segmentLine + totalString +end;
  console.log(output);

}
