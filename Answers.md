

1. What problem does the context API help solve?

    context API allows us to move state as we need freely through out app in places where prop drilling would be convoluted or impossible. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is our centrelized place for all of our state that we can manipulate with reducers based on status' called by our actions. I would imagine the store is known as a single source of truth because its the home for all of your state. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global state accessible from anyway, and gets moved throughout the application, meanwhile Component State is locally saved often used in isolated things such as Forms. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk allows us to have async calls for things like axios calls, and allows us pass info to our items after calls.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like redux a lot so far. It takes a bit more setup than some of the others, but once it's in place it offers so much flexibility for how you want to use your state. 