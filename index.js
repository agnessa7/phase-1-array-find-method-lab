const superbowlWin = (obj) => {
    for (const record of obj) {
        if( record.result === "W"){
            return record.year
        } 
    }

}
   