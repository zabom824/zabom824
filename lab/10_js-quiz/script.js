//Literally copied the classwork from two weeks ago because I have no idea what I'm doing 
//as my brain is blanking out right now. This is what I meant by javascript causing anxiety.
//The numbers and words mean nothing and jumble up together, although I swear I understood them
//a few days ago.

var checkerboard = "";

for (j = 0; j < 4; j++){
    if (j % 2) {
        for (i = 0; i < 8; i++) {
            if ( i % 2 ){
                checkerboard = checkerboard + "#"
            } else {
                checkerboard = checkerboard + " "
            }
        }
    } else {
        for (i = 0; i < 8; i++) {
            if ( i % 2 ){
                checkerboard = checkerboard + " "
            } else {
                checkerboard = checkerboard + "#"
            }
        }
    }
    checkerboard = checkerboard + "\n"
}