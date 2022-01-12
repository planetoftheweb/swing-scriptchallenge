var your_drink = "";
var bartender = {
  str1: "ers",
  str2: "rap",
  str3: "amet",
  reverse: function (myString) {
    return myString.split("").reverse().join("");
  },
  request: function (preference) {
    return preference + ".Secret word: " +
      this.reverse(this.str2) + this.str3 + this.str1;
  }
};
console.log(bartender.request(your_drink));