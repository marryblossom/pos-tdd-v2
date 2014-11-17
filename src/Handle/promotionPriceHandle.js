function promotionPriceHandle(){
  this.promotion = function (num,price){
     return price*(Math.ceil(num/3))*2;

  } ;
  this.freeNum = function (num){
    return parseInt(num/3);
  };
  this.freePrice = function (freeNum,price){
    return freeNum * price;
  };
}
