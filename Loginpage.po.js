var Loginpage = function() {

    'use strict';
    var that=this;

	
  this.deleteButtonPath = by.css('[id="comment-delete-submit"]');
  this.cancelTextLinkPath = by.css('[id="comment-delete-cancel"]')

  this.clickDeleteButtonElement = function () {
    commonsMethod.findElement(that.deleteButtonPath).then(function (foundElement) {
      foundElement.click();
    });
  };


  this.clickCancelTextLinkElement = function(){
    commonsMethod.findElement(that.cancelTextLinkPath).then(function (foundElement){
      foundElement.click();
    });
  };


  this.navigate = function(text){

  };


};
module.exports = Loginpage;