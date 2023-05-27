// React is a library we only have to inject it

// how to write Namaste Everyone from JavaScript
// Refer documentation for every small thing
// refer createElement
<div id="maindiv"></div>;

const div = document.createElement("div");

div.innerHTML = "Namaste Everyone from JavaScript";

maindiv.appendChild(div);

// how browser get to know what is createElement or document
// -because of browser,browser has window and it has JS engine

// CDN-content delivery network

// what is crossorigin

// React is just a piece of JavaScript code

// why there are 2 files in react cdn

// 1st file is core library for react(for all web,app)

// 2nd file is for DOM,react DOM

// in React

const heading = React.createElement("h1", {}, "Namaste Everyone from React"); //this h1 coming from core React
//{} is like <h1 id="title"></h1>

console.log(heading); //This gives us object of type h1 so these attributes goes in {}

const root = ReactDOM.createRoot(document.getElementById("Root")); //This is from ReactDOM

root.render(heading);

// we can make more than one root in React index.html page

{
  /* <div id="root">
<h1 id="title">Hello World</h1>
</div> */
}

// React code will override this hello world

// root.render where React injects

{
  /* <div>
<h1>Hello World</h1>
<h2>Hey
</div>

In React

const heading1=React.createElement("h1",{},"Hello World")
const heading2=React.createElement("h2",{},"Hey")
const container=React.createElement("div",{},[heading1,heading2])//heading1 and heading2 are sibilings
root.render(container)
render method converts the js object to html ex createElement */
}

// const heading=document.createElement("h1");
// heading.innerHTML="Hello world"

// const root=document.getElementById("root");
// console.log(root);
// root.appendChild(heading)

/*
createElement()
ye method jab use hota hai jab humhe koi element dynamically banana hota hai
ye method document me available hota hai jo current page dikhata hai

for example house humara html hai aur usme humhe ek room banana hai to 
hum createElement() use karke room bana sakte hai
aur appendChild karke house me us room ko daldo

*/

const element = React.createElement("h1", {}, "Hello World"); //it returns object
console.log(element);

//difference between document.createElement and React.createElement
//React.createElement() creates a virtual DOM and don't interact with real DOM directly

/*
$$typeof-indicates It as a React element

key-it requires for sibilings unke beech difference samajhne ke liye

props-nested element or text content jo parent ke sath bhejte hai

ref-it allows to interact DOM directly

type-batata hai konse type ka hai like humare case me h1 type ka hai

for example book

typeof batayega kis type ki book hai for example novel

type specific type batayega like novel me konsi fiction,non fiction

key is unique identifier jaise hum pen rakh dete book me is page par hai

props content hota hai book ka jaise title author heading subheading

ref personal note for future

_owner,_store,_self,_source are like internal notes or metadata related to books like 
published or printing details

virtual DOM-imagine you are a architect and mere pass ek image hai building ki jo hum bana
rahe hai ab mere dimag me koi idea aaya to maine image me changes kiye aur constructors ko bata 
dia ye changes karne hai to sirf utna hi change hua jitna neccessary tha same as for
virtual DOM,it compares old dom and real dom and updates only necessary part
*/

// const dom=ReactDOM.createRoot(document.getElementById("root"));
// console.log(dom);
// dom.render(element)

const dom = ReactDOM.createRoot(document.getElementById("root")); //it create ReactDOMRoot wo argument lega kaha render karna hai
dom.render(element);

//create nested React Elements
//like this
{
  /* <div className="container">
    <ul>
        <li>abcd</li>
    </ul>
</div> */
}

// const divElement=React.createElement("div",{id:"container"},React.createElement(
//     "ul",{},React.createElement("li",{},"abcd")
// ))

// const rootElement=ReactDOM.createRoot(document.getElementById("nestedroot"))
// rootElement.render(divElement)

// console.log(divElement);

//now something like this

{
  /* <div className="container">
    <ul>
        <li>abcd</li>
        <li>1234</li>
    </ul>
</div> */
}

// const nestedElement=React.createElement("div",{className:'container'},
// React.createElement(
//     "ul",{},React.createElement(
//         "li",{},"abcd",
//         React.createElement("li",{},"1234")
//     )
// ))

// const heading1=React.createElement("h1",{},"Heading1")
// const heading2 = React.createElement("h1", {}, "Heading2");
const nestedElement = React.createElement("div", {}, [
  React.createElement("h1", {}, "Heading1"),
  React.createElement("h1", {}, "Heading2"),
]);

const nestedRoot = ReactDOM.createRoot(document.getElementById("nestedroot"));
nestedRoot.render(nestedElement);

//createElement means element ko create karna
//createRoot matlab root value jaha humhe element dikhana hai,it will be rendered into the DOM
//render matlab usko dikhana

// Arrow function

//More Details

/*
Emmet 15 min 10:17

Emmet aisi cheez hai jo kisi bhi element ko ya code me shortcut me create kar sakti hai 
for example ! lagane se full code aa jata hai html boilerplate ka 
div>ul>li*3 se div ke andar ul ke andar 3 li ban jayenge
header+div+footer se in teeno ke sibiling ban jayenge
div>(a>p>span+span)*3 se complex abbreaviations banaye ja sakte hai 
emmet css me bhi kaam aata hai jaise m10-5-2-1 likhne se 4 values set ho jayengi margin ki 


Difference between library and framework 15 min 

library means hum apne hisab se ghar banva rahe hai framework means humhe bana banaya ghar milra hai
Library means hum khud apni application ka flow dal sakte hai is se humara code smooth ho jayega like react-router dalna hai dal do,react-icons dalna hai dal do 
Framework means sab kuch usme pehle se hi included hoga
you tell libraries what to do,frameworks tell you what to do

What is cdn?why do we use it 15 min 

cdn means data fast provide karana,cdn full form is content delivery network,cdn jo user access karta hai uske sabse pass wale server content provide karata hai,
jo popular data hota hai home page vagarah wo cache me store karke rakhta hai,sab acchi websites iska use karti hai fast loading page ke liye,har 1 second loading 
ka bahut important hai,1 second late matlab 16% user ka loss,isliye cdn important hai
Real life analogy
Imagine you are organizing a large event, like a music concert, in a massive stadium. You expect thousands of attendees from different parts of the city to come and enjoy the concert. To ensure a smooth and efficient experience for everyone, you decide to implement a system of vendors strategically placed throughout the stadium.

CDN (Vendor Network):
In this scenario, each vendor represents a node in the Content Delivery Network. These vendors are located strategically across the stadium to distribute and deliver various goods to the attendees. The vendors are equipped with a wide range of products, such as food, beverages, merchandise, and amenities.

Improved Experience:
Instead of every attendee having to go to a centralized location, such as a single food court or merchandise store, they can conveniently access these goods from nearby vendors. This saves them time and effort in navigating through the crowd to reach a single location. Each vendor serves a specific section of the stadium, ensuring that attendees can easily find what they need without walking long distances.

Scalability and Reliability:
If there is a surge in demand for food or merchandise during intermission or at specific sections of the stadium, the vendor network can handle the increased load. Additional vendors can be deployed to high-demand areas, preventing long queues and ensuring a smooth purchasing experience. This scalability helps avoid bottlenecks and ensures that attendees can access the goods they desire efficiently.

Localized Delivery:
By having vendors distributed throughout the stadium, attendees can quickly receive their desired items without having to travel long distances. This localized delivery reduces waiting times and improves the overall experience for the attendees. Additionally, it minimizes congestion and eases the strain on the central facilities, ensuring a seamless event for everyone.


why is react known as react 15 min 
React is known as React because it reacts whenever user clicks or subscribe or like something samajh rahe ho na..it react whenever data or state changes


what is cross origin in the script tag 15 min 
it is for security,for example hum www.date.com is website par gaye aur  ye caffe naam ke server par store hai to humhe cors enable karna padega ki data fetch 
kia ja sakta hai frontend se 


difference between React and React DOM 15 min 
React is a js library for building UI,class,components,elements,tags React ke part hai
React library jo React ko browser se milata hai render,findDOM() isi ke part hai
React ke aur bhi part hai React native,React-three hai jo react jaise work karte hai aur react ki jararat padti hai inko reactdom se matlab nahi 
isliye react aur react dom split huye

Real life example 

React (Chef):
React is like the chef who plans and orchestrates the entire cooking process. The chef decides on the recipe, selects the ingredients, and determines the steps to prepare the meal. They focus on the overall structure and logic of the cooking process but don't directly handle the utensils or appliances.

ReactDOM (Kitchen Utensils and Appliances):
ReactDOM is like the collection of utensils and appliances that the chef uses to execute their culinary vision. These tools include knives, pans, ovens, and other cooking equipment necessary to cook and present the meal.

Dish (Browser DOM):
The dish represents the browser DOM, which is the final presentation of your web application. It is where the user interface is displayed and interacts with the users.


async/defer 15 min 
when we load a web page there are 2 thing happening in browser 
1.Html parsing
2.Loading of the script -Fetching script from network,executing statement line by line 
<script src="...."> html parsing,js(from network) executing,js execute,html parsing again,so in this case js block html for that time
async case-same as src but in this case parsing js is doing parallel along with html parsing so that case of time html is blocked
defer js is executing in parallel in this case js execute when html parsing is done
 
Functions
piece of code which is reusable is function,like humhe function caller se instruction milte hai humhe use leke kuch 
task perform karke caller ko value return karna hota hai

Map 
Map function array me se single single har ek value leta hai aur uspar task perform karta hai 


Promise
ye hamesha chalega aur koi na koi value pending,fetching,reject me se dega ise api call me chala sakte hai kyuki wo time leti hai aur promise last me chalta hai
The process of ordering the package and tracking its delivery is similar to working with Promises.
When you place the order, you receive a tracking number (Promise) from the shipping company.
You can use the tracking number to chain callbacks (then()) that will be executed once the package is delivered successfully (resolve()) or if there is an issue (reject()). 
You periodically check the tracking status (then()) and handle the package arrival or any errors (catch()).
Async/Await
Using async/await is like having a personal assistant who manages the order and keeps you informed about the package's delivery. 
You instruct the assistant to place the order (await orderPackage()), and they take care of the process.
 You wait until the package is delivered (await trackPackage()), and then you handle its arrival or any errors using a try/catch block.

This keyword
Imagine you're attending a team meeting at your workplace. In this meeting, different employees discuss various topics and share their opinions. In this analogy:

Global scope: The meeting room itself represents the global scope. It provides a shared environment where everyone gathers and interacts.

Function invocation: Suppose there's a person named John who speaks up during the meeting and shares his thoughts without explicitly mentioning any specific person.
 In this case, John's statements are not directed at anyone in particular but are meant for the entire group. 
 Here, John represents a standalone function, and the group represents the global object (this) since his comments are not specific to any individual.

Method invocation: Now, imagine that during the meeting, Sarah presents a report and explains its findings. 
She refers to specific details related to her work and mentions "my findings" or "my team's progress." 
Here, Sarah is a member of the team, and when she uses the possessive pronoun "my," she is referring to herself and her team. 
In this scenario, Sarah represents an object (the team) and this refers to her own work and team.

Constructor invocation: Suppose the team leader, Michael, wants to create a new team member. He uses a predefined template to create a new employee profile.
Michael fills in the necessary information in the template, such as the name, position, and department.
The template acts as a constructor function, and the newly created employee profile represents the object. 
In this case, this refers to the newly created employee profile, as it represents the object being constructed.

Event handling: Let's say the meeting involves a group activity, such as a brainstorming session where participants write their ideas on sticky notes and 
stick them on a whiteboard. Each sticky note represents an idea contributed by a different person. When someone places their sticky note on the whiteboard, 
the facilitator can easily identify who contributed that idea based on the person's name written on the note.
Here, the sticky notes represent events, and the person's name on each note indicates who triggered the event.
In this scenario, this refers to the person who triggered the event by placing their sticky note on the whiteboard.
*/