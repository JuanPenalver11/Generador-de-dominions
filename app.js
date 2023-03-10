

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
          result.push(i+j+k+l);echo "# Generador-de-Nombres-de-Dominios" >> README.md
          git init
          git add README.md
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://github.com/JuanPenalver11/Generador-de-Nombres-de-Dominios.git
          git push -u origin main
        }
      }
    }
   }

   return result
   
  };

  console.log(combinationName())