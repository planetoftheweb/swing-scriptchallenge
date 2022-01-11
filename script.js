// If you can read this code, you could
// probably use a free cup of coffee.

var your_drink;

var reverse = function (s) {
  return s.split("").reverse().join("");
}

var bartender = {
  str1: "ers",
  str2: reverse("rap"),
  str3: "amet",
  request: function (preference) {
    return preference + ".Secret word: " +
      this.str2 + this.str3 + this.str1;
  }
};

bartender.request(your_drink);