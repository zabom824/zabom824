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