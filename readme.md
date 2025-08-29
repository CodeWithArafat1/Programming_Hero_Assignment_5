## Question 1: What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

> **getElementById**: It can only grab a single element. For example, suppose I have many tags in my HTML file and all the tags use the same ID. If I call Document Get Element By ID and pass my ID as a parameter, it will grab only the first element and ignore the rest of the elements.

> **getElementsByClassName**: When we use this, we can access all the common classes in our HTML file at once and it will return us an HTMLCollection.

> **querySelector**: It is a selector that can only capture one thing and it is like a CSS selector. Here we have to capture the ID like CSS using dot and using hash symbol, similarly with querySelector we have to access our elements using dot and hash symbol.

> **querySelectorAll**: It is the same as getElementsByClass, except here like CSS we can use dot notation and hash symbol and access the element, but there is a difference. With querySelectorAll if we want to get the ID we will get only one ID, but when we go to get the class then we will get all the classes just like getElementsByClassName and this is basically ES6 a future.

---

## Question 2: How do you create and insert a new element into the DOM?

To create a DOM element, we use the Document.createElement method and in it, we write the tag that we want to create the element between double quotations or single quotations and if we want to open it in DOM, what we can do is Document.body. Using this method, we can append an element to the document or inside a DOM element.

---

## Question 3: What is Event Bubbling and how does it work?

Event bubbling is when we use click event or any event on child element then it is first applied on child element then applied on parent element and then applied on grand element then on document then on window and this is Event Bubbling.

---

## Question 4: What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a method that we can use to get rid of the previous event bubbling. Like before when we clicked on an element, it went from that element to its parent element, then to its grand element, then to the document or window, and if we use Event Delegation, then it will only apply the event to the element that is targeted.

---

## Question 5: What is the difference between `preventDefault()` and `stopPropagation()` methods?

> When we work with an HTML form and submit the form, it automatically reloads, and to stop it, we use the `preventDefault()` method. 
> And we use the `stopPropagation()` so that when we fire an event, it does not go to the parent.