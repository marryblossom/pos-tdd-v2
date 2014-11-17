function utils(){

  this.number = function (str){
    if(str.indexOf('-') >= 0){
       var strs = str.split("-");
       return parseInt(strs[1]);
    }else{
       return 1;
    }
  };
  this.manageString = function (str,sign){
    if(str.indexOf(sign) > 0){
      var strs = str.split(sign);
      return strs[0];
    }else{
      return str;
    }
  };
}
