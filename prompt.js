var prompt = require("prompt");

prompt.start()

var life = module.exports = {
  hungry: 'yes',
  keepPrompting: function() {
    prompt.get(["hungry"], function(err, result) {
      var life = require("./prompt.js");

      this.hungry = result.hungry;

      if(this.hungry === "yes") {
        console.log("Here are some pizza burgers");
        life.keepPrompting();
      } else {
        console.log("You're full");
      }
    });
  }
}

life.keepPrompting();