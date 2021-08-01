alert("Welocme to my website");
let  name = prompt("We need to konw your beautiful Name, for better conversation");
alert("good to meet you! " + name) ;
console.log("user_name :"+name);
let fav_food = prompt("What's your favorite favorite food in those three jordanian dishes\n  \n Mansaf\n Kanafeh \n Falafel ")

if (fav_food == 'Mansaf') {
   alert('You have graet taste , nice !!!')
   alert("let's to Know more about this dish ")
     document.write('<p>'+'<img src="https://kitchen.sayidaty.net/uploads/small/43/433e4b0fab1635469b33b63d17be6bb4_w750_h500.jpg" width="1000" height= "400"/>'+'History The original pastoralist Bedouin mansaf underwent significant changes in the 20th century. The dish is said to originally have been made with simply meat (camel or lamb), meat broth or ghee (clarified butter) and bread.[4] Following the popularization of rice in northern Jordan in the 1920s, rice gradually was introduced into the dish, at first mixed with bulgur, and later on its own, until the dish reached its modern incarnation of being based on white rice. Similarly, the jameed sauce is a recent development, as the Bedouins did not historically feature jameed in their cooked dishes until their modern sedentarization.[5]' + '</p>')
} else if(fav_food == 'Kanafeh') {
    alert('You have graet taste , nice !!!')
    alert("let's to Know more about this dish ")
    document.write('<p>'+'<img  src="https://alkaramahdough.com/wp-content/uploads/2019/09/grounded-kunafa5.png" width="1000" height= "400"/> '+ "Kanafeh is a traditional Middle Eastern dessert made with shredded filo pastry, or alternatively fine semolina dough, soaked in sweet, sugar-based syrup, and typically layered with cheese, or with other ingredients such as clotted cream or nuts, depending on the region." +'</p>')
} else if(fav_food == 'Falafel'){
    alert('You have graet taste , nice !!!')
    alert("let's to Know more about this dish ")
    document.write('<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg" width="1000" height= "400"/> ' + '<p> Falafel, a staple Middle Eastern dish—and a popular street food around the world—that consists of fried spiced balls or patties of ground chickpeas or fava beans (or a mixture of both) stuffed into a pita or wrapped in laffa bread with hot sauce, tahini sauce, and generally some saladlike combination of tomato, lettuce, cucumber, onion, parsley, and yogurt.</p>')
}else{
    alert('Error,invald input')
}
