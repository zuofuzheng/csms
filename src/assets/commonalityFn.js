var fn = {
  cutClass: function (evnet, class1, class2) {
    console.log(event.target.className);
    var classStr = event.target.className;
    var re1 = new RegExp('\\s?' + class1);
    if (!class2) {
      event.target.className = classStr.indexOf(class1) > -1 ? classStr.replace(re1, '') : classStr + ' ' + class1;
    }else {
      classStr.indexOf(class1) > -1 ? event.target.className = classStr.replace(re1, '') : null;
      classStr.indexOf(class2) === -1 ? event.target.className = classStr +' '+ class2 : null;
    }
  }
}
export default fn;