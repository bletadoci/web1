//bohet implement njejt si JS bro me <script src="jQuery.js"></script?
//a little sintakse
$("#ID").html("new content"); //grab the element with that id and change whats written in the input -> in JS innerHTML
$("ul li").css("background-color", "yellow"); //all li inside a ul somewhere have a yellow background color i guess bro
var hey = $("#ID"); //sikur njs kur e barazojke documentGetElementById me ni var bro
str = "foo";
$.trim(str);

//what can you take inside a $?
$("document") //document itself bro crazy
$("#ID");
$(".class");
$("tag");
$("tag.class");
$("tag#id");
$(":button"); //all buttons but also the <input type="button">
$(":checked"); //only checkboxes that are checked by the user
/*you can use checked as a funct if ( $(".meh").prop("checked") ) {
    console.log("User checked the box!");
}  -> basically is it checked right now?*/
$(":disabled"); //elements that users can't click (greyed out)
$(":focus"); //element user is currently typing in
$(":file"); //input type file
$(":input"); //A "catch-all" that selects <input>, <textarea>, <select>, and <button></button>
$("tag:has(p)"); //all tags with a p in them
$("tag:empty"); //all tags that are empty
$("tag:contains('Hi')"); //all tags with the word hi in them

//jQuery functions:
$("something").hide(); //hides everything that was mentioned
$("something").show();//shows everything that was mentioned
$("something").toggle(); //changes state from visible to hidden/hidden to visible
$("something").text("HELLO<br/>"); //changes text in everything that was mentioned, doesn't treat tags as tags it literally prints <br/>
$("something").html("HELLO<br/>"); //treats tags as tags
$("something").addClass("heya"); //adds class to whats inside but doesnt erase the old classes
$("something").attr("id", "new-id"); //either used to grab the attribute of something inside like: 
/*<div id="player" data-level="42" data-weapon="sword"></div>
let level = $("#player").attr("data-level"); // Returns "42"
or used to change the id of an attr depends on what we're selecting*/
$("something").prop("checked"); //checks whether something is checked -> munesh me e check .prop("checked", true)
//ki prsh edhe .prop("diabled") me e disable mos me mujt me check
//.prop("selected")
//.prop("readOnly") prevent typing in a field
$("something").before("Hi"); //insert text before the "something" element
$("something").after("Hi"); //insert text after the "something" element
$("something").fadeTo("10000", 0); //first is speed either "slow" or in seconds, 2nd is opacity
$("something").fadeIn("10000"); //u can put a funct as a 2nd attir
$("something").fadeOut("slow"); //here too
$("something").slideDown("slow");
$("something").slideUp("fast");
$("something").slideToggle("fast"); //if an element is initially visible, it slides up to hide/hidden, it slides down to 

$("something").hover( function(){});
$("document").ready( function(){}); //per kur dokumenti osht ready
$("something").click( function(){}); //onclick
$("something").dbclick( function(){}); //db onclick do something BRO
$("something").animate({width: '200px',
    opacity: '0.5'
}, "slow"); //first attr is the change, 2nd is the speed
//osht edhe njo .on('click':function(){});
$("something").focus( function(){}); //the one that user is focusing on
$("something").change( function(){}); //when value is modified
$("something").blur( function(){});
$("something").mouseenter( function(){});
$("something").mouseleave( function(){});

//js way:
btn.addEventListener('click', () => { //
  console.log('Clicked!');
});

const input = document.querySelector('input');

input.addEventListener('input', (event) => {
  // event.target is the <input> element itself
  console.log(event.target.value); //get value inside the input per input/textbox/select
});
//ose mundesh me React event inside tags <button onClick = {function}></button> -> krejt kto
//dbclick, focus, etc etc bohen on(name) in HTML

