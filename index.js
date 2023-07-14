
 

  const superbowlWin = (record) => {
      const outcome = record.find(element => element.result === "W")
      return outcome? outcome.year: undefined
    }
    
   
   
   
   
   
    // function superbowlWin(record) {
        // return record.result.find === "W"
    // }
    // 
    

  // const superbowlWin = (record) => {
    // const result = record.find(record.result === "W")
    // return result 
// } 


// function superbowlWin(record,result) {
//    return record.find(result === "W")
// }
