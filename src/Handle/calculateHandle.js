function calculateHandle(){
  var util = new utils();
  this.boughtNum = function (item,input){
    var num = 0;
    for(var i=0;i<input.length;i++){
       if(input[i].indexOf(item.barcode) >=0)
        num += util.number(input[i]);
    }
    return num;
  };
}
