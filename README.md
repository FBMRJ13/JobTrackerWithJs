1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById — grabs a single element by its ID,
getElementsByClassName — grabs all elements with a given class
querySelector — grabs the first element matching any CSS selector.
querySelectorAll — grabs all elements matching any CSS selector 

2. How do you create and insert a new element into the DOM?

      1.create the element like div or p
      2.set the innerHtml
      3.access the parent class
      4.append the chils to the parent class

   
3. What is Event Bubbling? And how does it work?
When you click an element, the event doesn't just fire on that element — it travels upward through every ancestor all the way to document.
So if you click a <button> inside a <div> inside <body>, all three elements' click listeners fire in that bottom-up order.
You can stop this upward travel at any point by calling e.stopPropagation() inside a listener.
Most events bubble (click, input, keydown), but a few like focus and blur do not.


4. What is Event Delegation in JavaScript? Why is it useful?

 Instead of attaching a listener to every child element,
 you attach one listener to a parent and use event.target
 to detect which child triggered the event — exploiting the fact that events bubble up.
 
