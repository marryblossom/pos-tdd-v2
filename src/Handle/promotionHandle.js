function promotionHandle(){
  var promotionPrice = new promotionPriceHandle();
  this.promotionTypes = function (barCode){
    var allPromption = loadPromotions();
    var promptionTypes = [];
    for(var i in allPromption){
      if(this.isPromotion(barCode,allPromption[i].barcodes)){
        promptionTypes.push(allPromption[i].type);
      }
    }
    return promptionTypes;
  };

  this.getPromption = function (type,num,price){
    if(type == 'BUY_TWO_GET_ONE_FREE'){
      return promotionPrice.promotion(num,price);
    }
  };

  this.isPromotion = function (barCode,allPromption){
    for(var j in allPromption){
      if(barCode == allPromption[j]){
        return true;
      }
    }
    return false;
  };
  this.freeNum = function (type, num){
    if(type ===  'BUY_TWO_GET_ONE_FREE'){
      return parseInt(num/3);
    }
  };
  this.freePrice = function (freeNum,price){
    return freeNum * price;
  };
}
