QUnit.test('Given a user click the rock paper Scissors button the computer predict a suggestion', function(assert) {
    var choice = getautoChoice();
    assert.ok(choice, "Computer predicted a choice and it's not null");
});
QUnit.test('Given a user click the button a player name is given', function(assert) {
    var choice = currentPlayer(true);
    assert.equal("Player 1", choice, "A user player mode is given");
});
QUnit.test('Given a user click the button a player mode is given', function(assert) {
    var choice = currentMode("Scissors", true);
    assert.ok(choice, "A user player mode is given");
});
QUnit.test('Given a user click the button for auto play the computer genrated choice is given', function(assert) {
    var choice = currentMode(null, true);
    assert.ok(choice, "A computer mode is given");
});
