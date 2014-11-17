
var itemHand = new itemHandle();
function printInventory(inputs) {
  var start='***<没钱赚商店>购物清单***\n';
  var end = '**********************';
  var segmentLine = '----------------------\n';
  var allString = '';
  var simpleInput = itemHand.withoutSameItem(inputs);
  var subtotalString ='';
  var totalString ='';
  var total = 0;
  for(var j in inputs){
    var input = inputs[j];
    var item = itemHand.item(input);
    subtotalString +=  '名称：'+ item.name +
                   '，数量：1' + item.unit +
                   '，单价：' + item.price.toFixed(2) + '(元)，小计：' +
                   item.price.toFixed(2) + '(元)\n';
        total += item.price;
        totalString = '总计：' + total.toFixed(2) + '(元)\n';

  }
  var output = start + subtotalString + segmentLine + totalString +end;
  console.log(output);

}
