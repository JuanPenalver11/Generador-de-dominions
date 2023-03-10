

  let combinationName = () => {
    var pronoun = ["the", "our"];
    var adj = ["great", "big"];
    var noun = ["jogger", "racoon"];
    var dominio = [ ".com", ".net", ".us", ".io"]

   let  result = []

   for (let i of pronoun){
    for (let j of adj){
      for (let k of noun){
        for (let l of dominio){
          result.push(i+j+k+l);
        }
      }
    }
   }

   return result
   
  };

  console.log(combinationName())