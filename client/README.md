# running notes

1. installed radix to closely align with workos design, best practices, accessibiliy, and speed to implmenent
2. installed tanstack query to handle fetching, cacheing
    - enables better cacheing
    - enables better error, loading, state handling 
3. installed icons from radix to match design
4. Updated search text to be more descriptive since the backend search is only by first or last name


# how to run

Make sure to have the backend running
- `npm run api`

then to run the client: 
1. `npm install`
2. `npm run dev`

# what i would do differently next time
1. use a more dynamic table component that can handle more complex data -- I would've liked to create a componund component to handle both tables. Right now there is a ton of duplicated code but I would rather avoid hasty abstractions and the two are different enough at the moment and small enough to where it didn't warrant spending all the time neccesary to account for both possible cases.
2. add tests -- I would like to add specific tests for the table and pagination components, the react query hooks, and the action menu component.
3. add better error handling with more specific messages -- the backend returns specific messages that would be helpful to display to the user. Right now, react query handles that failure gracefully and refectches the data. But this is not a great user experience or a gurantee that the server will respond differently. Error handling needs to be improved.
4. improve loading states
5. improve styles and a11y
6. improve pagination loading states -- right now it's not obvious to the user that the pagination is loading.
7. improve all functionality -- the backend is pretty fleshed out so we should be able to update, delete, etc more.
8. DX: improve the aliasing so we aren't relying on relative paths.
9. Add a no results state to the tables.
