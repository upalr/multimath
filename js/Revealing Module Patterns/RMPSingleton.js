var ScoreboardTest = function(){
    var message = 'Welcome to the game!';

    function printMessage(){
        console.log(message);
    }

    return {
        showMessage: printMessage
    }
}(); //() For singleton jate execute kore scroboard a object littearl 
//{
 //   showMessage: printMessage
//}
// accign kore.
// i mean::::
// schoreoard = return {
//        showMessage: printMessage
//    }