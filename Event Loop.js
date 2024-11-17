// Link : https://medium.com/gradeup/asynchronous-javascript-event-loop-1c8de41298dd
/* Event Loop
 * Javascript is a single-threaded language at runtime which means only one thing can happen at a time.
 * That is, the JavaScript engine can only process one statement at a time in a single thread. 
 * It also means you can’t perform long operations such as network access without blocking the main thread.
 * That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.
 * When you open a website in the browser, it uses a single JavaScript execution thread.
 * That thread is responsible to handle everything, like scrolling the web page, printing something on the web page, listen to DOM events (like when the user clicks a button), and doing other things.
 * Terminalogies :
   -> Heap - Stores objects (when we define variables)
   -> Stack - Contains all fucntions
            -> When we call function for its execution - push to stack
            -> When execution is completed - pop from stack
   -> Web APIS - responsible for filling the callback queue.
       While using web apis         
 */


       