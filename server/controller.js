

const userDataBase = []


module.exports = {


    //Don't change this code, this is examle
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getWisdome: (req, res) => {
    
    const wisdoms = ["A fresh start will put you on your way.","A golden egg of opportunity falls into your lap this month.","A smile is your personal welcome mat","A soft voice may be awfully persuasive.","Adventure can be real happiness","All will go well with your new project."]
    
    let randomIndex = Math.floor(Math.random() * wisdoms.length);
    let randomWisdom = wisdoms[randomIndex];
  
    res.status(200).send(randomWisdom);

},
    getUserScore:(req,res) => {
        console.log('hit endpoint of getUserScore')
        console.log(req.data)
        // console.log(req.body)
    // const mathScore = req.data.answer1 + req.data.answer2 + req.data.answer3 + req.data.answer4 + req.data.answer5
    // const totalScore = []
    // totalScore = mathScore.push(totalScore)
    // console.log(totalScore)
    res.status(200).send(res.data)
   },

   addNewUser: (req,res) => {
   
   console.log(req.body)
   userDataBase.push(req.body)
   
   res.status(200).send(userDataBase[userDataBase.length - 1])
   
   },
   
   userUpdated:(req,res) => {
    let existingUsername = req.params.username
    let newUsername = req.body.username
    
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === existingUsername) {
      user[i].username = newUsername
      res.status(200).send("username updated.")
      return
    }
  }
  res.status(400).send("username not found.")
},


   deleteUser: (req, res) => {
    let existingUsername  = req.params.username
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === existingUsername) {
        users.splice(i, 1)
        res.status(200).send("User deleted.")
        return
      }
    }
    res.status(400).send("User not found.")
  }

  
}

 





   