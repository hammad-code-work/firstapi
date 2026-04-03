// 1. Grab the element where we will display the total count
const countEl = document.getElementById("count"); 

// 2. Grab the button element that the user will click
const btn = document.getElementById("load"); 

// 3. Set up an event listener to wait for the click
btn.addEventListener("click", async () => { 
    
    // 4. Request the user list from the external server (API)
    const res = await fetch("https://typicode.com"); 
    
    // 5. Convert the raw server response into a readable JavaScript array
    const data = await res.json(); 
    
    // 6. Calculate how many user objects are in the array
    const count = data.length; 
    
    // 7. Update the webpage text to show the total count
    countEl.innerText = count; 

    // 8. Start a loop to visit every individual user in the list
    data.forEach(user => { 
        // 9. Print the 'name' property of each user to the console
        console.log(user.name); 
    }); 
});
