

const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getWisdome = () =>{
    axios.get("http://localhost:4000/api/wisdom/")
    .then(res => {
        const data = res.data
        alert(data);
    })
}
fortuneBtn.addEventListener('click', getWisdome)


const username = document.querySelector("#login-username");

const questionOne = document.querySelector("#q1");
const questionTwo = document.querySelector("#q2");
const questionThree = document.querySelector("#q3");
const questionFour = document.querySelector("#q4");
const questionFive = document.querySelector("#q5");

const calculateBtn = document.querySelector("#calculate-button");
const deleteBtn = document.querySelector("#delete-button");

//1 Post Request to get an object data:

const newUser = () => {
    const userObj = {
        username: username.value,
        answer1: questionOne.value,
        answer2: questionTwo.value,
        answer3: questionThree.value,
        answer4: questionFour.value,
        answer5: questionFive.value

    }
    axios.post('http://localhost:4000/api/user',userObj)
    .then((res) => {
        console.log(res.data);    
    })

}






const Total = () => {
   
    const totalUserScore = parseInt(questionOne.value)+parseInt(questionTwo.value)+parseInt(questionThree.value)+parseInt(questionFour.value)+parseInt(questionFive.value)
    axios.get('http://localhost:4000/api/get')
    .then((res) => {
        console.log(res.data)
        alert(`${username.value} Your score is ${totalUserScore}`)
    })
}



calculateBtn.addEventListener("click", newUser);
deleteBtn.addEventListener("click", Total);