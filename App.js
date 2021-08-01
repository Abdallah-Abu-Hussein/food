alert("Welocme to my website");

let  name = prompt("We need to konw your beautiful Name, for better conversation");
alert("good to meet you! " + name) ;
console.log("user_name is :"+name);

document.write('<p style="font-size : 35px ;background-color: #D4F1F4; color: green">'+ 'Your name is : '+ name +'</p>')

let age = prompt("what is your age?");
    console.log('asking user for his age = ' + age)
    alert(age + ' years');
    document.write('<p style="font-size : 35px ;background-color: red; color: lightgreen">'+ 'Your Age is : '+ age +'</p>')


let interseted_in_jordan = prompt("Are you welling to come to jordan to eat our beloved dishes , type y/yes or n/no")

if (interseted_in_jordan == "y") {
    alert( "can't wait to have ")
    console.log("the user interseted_in_jordan")
    document.write('<p style = " color: #81B622;background-color:#189AB4; font-size : 35px ;"> ' +name +'is interseted_in_jordan'+ '</p>');
}else{
    document.write('<p style = " color: #3D550C;background-color: #189AB4; font-size : 35px ;"> ' +name +'is Not interseted_in_jordan'+ '</p>');
}



let fav_food = prompt("What's your favorite food in those three jordanian dishes\n  \n Mansaf\n Kanafeh \n Falafel ")

if (fav_food == 'Mansaf') {
   alert('You have graet taste , nice !!!')
   console.log("fav_food = " + fav_food);
     document.write('<p style="background-color:red; color: lightgreen; font-size : 35px;">'+ 'your favorite food is  :'+fav_food+'</p>')

} else if(fav_food == 'Kanafeh') {
    console.log("fav_food = " + fav_food);
    alert('You have graet taste , nice !!!')
    document.write('<p style="background-color:yellow; color: green; font-size : 35px ;">' + 'Your favorite food is :'+fav_food+'</p>')

} else if(fav_food == 'Falafel'){
    console.log("fav_food = " + fav_food);
    alert('You have graet taste , nice !!!')
    document.write('<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg" width="1000" height= "400"/> ' + '<p style ="background-color:blue;color:red;font-size : 35px ;">' +'Your favorite fodd is fav_food : '+fav_food+'</p>')
 

}else{
    alert('Error,invald input')
}

