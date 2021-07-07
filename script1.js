 $( function() {
    var availableTags = [
      "A T Still University-Health",
"A.R.T. Institute of Washington, Inc.",
"AFI Silver Theatre and Cultural Center",
"AIU Online",
"ASA College",
"Abilene Christian University",
"Abraham Baldwin Agricultural College"];
   $("#fsCell112356591 > input").autocomplete({
    source: availableTags,
      minLength : 3
});
});
