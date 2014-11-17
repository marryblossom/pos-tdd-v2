var promotionHand = new promotionHandle();
var itemHand = new itemHandle();
var calculate = new calculateHandle();
function printInventory(inputs) {
  var start='***<没钱赚商店>购物清单***\n';
  var end = '**********************';
  var segmentLine = '----------------------\n';
  var freeLine = '挥泪赠送商品：\n';
  var allString = '';
  var simpleInput = itemHand.withoutSameItem(inputs);
  var subtotalString ='';
  var totalString ='';
  var total = 0;
  var save = 0;
  var freeString = '';
  var saveString = '';
  for(var j in simpleInput){
    var input = simpleInput[j];
    var item = itemHand.item(input);
    var num = calculate.boughtNum(item, inputs);
    var subtotal = 0;
    if(promotionHand.promotionTypes(item.barcode).length !== 0){
      var promotionTypes = promotionHand.promotionTypes(item.barcode);

      for(var i in promotionTypes){
        subtotal += promotionHand.getPromption(promotionTypes[i],num,item.price);
        freeString += '名称：' + item.name + '，数量：' + promotionHand.freeNum(promotionTypes[i],num) + item.unit+"\n";
        save += promotionHand.freeNum(promotionTypes[i],num) * item.price;
      }

    }else{
      subtotal += num*item.price;
    }
    subtotalString +=  '名称：'+ item.name +
                   '，数量：'+num + item.unit +
                   '，单价：' + item.price.toFixed(2) + '(元)，小计：' +
                   subtotal.toFixed(2) + '(元)\n';
    total += subtotal;
  }
  totalString = '总计：' + total.toFixed(2) + '(元)\n';
  var freeStrings = '';
  if(save !== 0){
    freeStrings += freeLine + freeString + segmentLine;
    saveString = '节省：' + save.toFixed(2) + '(元)\n';
  }
  var output = start + subtotalString + segmentLine + freeStrings + totalString + saveString +end;
  console.log(output);
}
