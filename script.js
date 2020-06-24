
const persons = [
    {
        name: 'Tanya Sinclair',
        profession: ' UX Engineer',
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        image: 'images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        profession: ' Junior Front-end Developer',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        image: 'images/image-john.jpg',
    }
]

let name = document.getElementsByClassName('name')
let profession = document.getElementsByClassName('profession')
let quote = document.getElementsByClassName('quote')
let image = document.getElementsByTagName('IMG')
let arrowL = document.getElementsByClassName('arrowL')
let arrowR = document.getElementsByClassName('arrowR')
let currentIndex = 0
let lastIndex = persons.length - 1



function begin(index = 0) {
    name[0].innerHTML = persons[index].name;
    profession[0].innerHTML = persons[index].profession;
    quote[0].innerHTML = persons[index].quote;
    image[0].src = persons[index].image;
    currentIndex = index;
}

function prev(){

    if(currentIndex === 0){
        return begin(lastIndex)
    }

    if(currentIndex > 1){
        return begin(currentIndex - 1)
    }
    else{
        return begin(0)
    }
}

function next(){
    if(currentIndex === lastIndex){
        return begin(0)
    }

    if(currentIndex < lastIndex){
        return begin(currentIndex + 1)
    } 
}

begin();