//Js code Question 1
let img1Url = 'https://unowp.com/wp-content/uploads/2019/05/free-stock-images-traveler.jpg';
let img2Url = 'https://unowp.com/wp-content/uploads/2019/05/free-stock-image.jpg';
let img3Url = 'https://unowp.com/wp-content/uploads/2019/05/free-copyright-images.jpg';

const changeImage = (ele) => {
    let btnId = document.getElementsByTagName('button');
    let image = document.getElementsByTagName('img')[0];
    if (btnId[0] == ele) {
        image.src = img1Url;
    } else if(btnId[1] == ele) {
        image.src = img2Url;
    } else if(btnId[2] == ele) {
        image.src = img3Url;
    }
}

//Js code for Question 2
const copyInput = () => {
    let inputs = document.getElementsByClassName('copy');
    inputs[1].value = inputs[0].value;
}

//Js code for Question 3
let objArray = [
    {
        name: 'Ananya',
        age: 25,
        country: 'India',
        hobbies: ['cooking', 'reading']
    },
    {
        name: 'John',
        age: 35,
        country: 'England',
        hobbies: ['Football', 'Chess']
    },
    {
        name: 'Smitha',
        age: 40,
        country: 'India',
        hobbies: ['singing', 'dancing']
    },
    {
        name: 'Henry',
        age: 14,
        country: 'America',
        hobbies: ['gardening', 'reading']
    },
    {
        name: 'Tejas',
        age: 20,
        country: 'India',
        hobbies: ['Cricket', 'chess']
    }
];

//Function to display all objects
const displayAll = () => {
    objArray.forEach(obj => {
        console.log(obj);
    });
};

//Function to display objects: age < 30
const displayOnAge = () => {
    objArray.forEach(obj => {
        if(obj.age<30) {
            console.log(obj);
        }
    });
};

//Function to display objects: country = 'India'
const displayOnCountry = () => {
    objArray.forEach(obj => {
        if(obj.country == 'India') {
            console.log(obj);
        }
    });
};