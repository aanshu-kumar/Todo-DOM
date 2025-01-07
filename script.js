document.addEventListener("DOMContentLoaded", () => {
  let Todo = [];
  let todayDate = new Date();
  todayDate = todayDate.toISOString().split("T")[0];

  if (localStorage.getItem("todo"))
    Todo = JSON.parse(localStorage.getItem("todo"));
  function parseTodo() {
    let today = document.getElementById("today");
    today.innerHTML = ``;
    let finish = document.getElementById("future");
    finish.innerHTML = ``;
    let complete = document.getElementById("Completed");
    complete.innerHTML = ``;
    Todo.map((item,idx) => {
      if (item.status == "done")
        complete.innerHTML += `<div id="todo" style="color: black; background-color: white; border: 2px solid black;">      
        <p id="item-name">${complete.childElementCount + 1}. ${
          item.itemName
        }</p>
      <p id="deadline">${item.deadline}</p>
      <p id="Priority">Priority: ${item.priority}</p>
      <div id="icon">
        <div class="delete" data-value="${idx}">
          <svg
            fill="#000"
            width="40"
            height="30"
            viewBox="0 0 64 64"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.86 13.38H13a1.5 1.5 0 0 1 0-3h37.86a1.5 1.5 0 0 1 0 3"
            />
            <path
              d="M42.4 57.93H21.48a5.5 5.5 0 0 1-5.5-5.5V11.87a1.5 1.5 0 0 1 1.5-1.5H46.4a1.5 1.5 0 0 1 1.5 1.5v40.56a5.51 5.51 0 0 1-5.5 5.5M19 13.37v39.06a2.5 2.5 0 0 0 2.5 2.5h20.9a2.5 2.5 0 0 0 2.5-2.5V13.37Z"
            />
            <path
              d="M40 13.37H23.9a1.5 1.5 0 0 1-1.5-1.5v-5.3a1.5 1.5 0 0 1 1.5-1.5H40a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-1.5 1.5m-14.58-3h13.06v-2.3H25.4Zm-.48 37.24a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m14 0a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m-7-7.23a1.5 1.5 0 0 1-1.5-1.5V28.7a1.5 1.5 0 1 1 3 0v10.18a1.5 1.5 0 0 1-1.5 1.5"
            />
          </svg>
        </div>
</div></div>`;
      else if (item.deadline == todayDate)
        today.innerHTML += `<div id="todo">      
        <p id="item-name">${today.childElementCount + 1}. ${item.itemName}</p>
      <p id="deadline">${item.deadline}</p>
      <p id="Priority">Priority: ${item.priority}</p>
      <div id="icon">
        <div class="done" data-value="${idx}">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4L12 14.01L9 11.01"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="delete" data-value="${idx}">
          <svg
            fill="#FFF"
            width="40"
            height="30"
            viewBox="0 0 64 64"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.86 13.38H13a1.5 1.5 0 0 1 0-3h37.86a1.5 1.5 0 0 1 0 3"
            />
            <path
              d="M42.4 57.93H21.48a5.5 5.5 0 0 1-5.5-5.5V11.87a1.5 1.5 0 0 1 1.5-1.5H46.4a1.5 1.5 0 0 1 1.5 1.5v40.56a5.51 5.51 0 0 1-5.5 5.5M19 13.37v39.06a2.5 2.5 0 0 0 2.5 2.5h20.9a2.5 2.5 0 0 0 2.5-2.5V13.37Z"
            />
            <path
              d="M40 13.37H23.9a1.5 1.5 0 0 1-1.5-1.5v-5.3a1.5 1.5 0 0 1 1.5-1.5H40a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-1.5 1.5m-14.58-3h13.06v-2.3H25.4Zm-.48 37.24a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m14 0a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m-7-7.23a1.5 1.5 0 0 1-1.5-1.5V28.7a1.5 1.5 0 1 1 3 0v10.18a1.5 1.5 0 0 1-1.5 1.5"
            />
          </svg>
        </div>
</div></div>`;
      
      else
        finish.innerHTML += `<div id="todo">      
        <p id="item-name">${finish.childElementCount + 1}. ${item.itemName}</p>
      <p id="deadline">${item.deadline}</p>
      <p id="Priority">Priority: ${item.priority}</p>
      <div id="icon">
        <div class="done" data-value="${idx}">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 4L12 14.01L9 11.01"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="delete" data-value="${idx}">
          <svg
            fill="#FFF"
            width="40"
            height="30"
            viewBox="0 0 64 64"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.86 13.38H13a1.5 1.5 0 0 1 0-3h37.86a1.5 1.5 0 0 1 0 3"
            />
            <path
              d="M42.4 57.93H21.48a5.5 5.5 0 0 1-5.5-5.5V11.87a1.5 1.5 0 0 1 1.5-1.5H46.4a1.5 1.5 0 0 1 1.5 1.5v40.56a5.51 5.51 0 0 1-5.5 5.5M19 13.37v39.06a2.5 2.5 0 0 0 2.5 2.5h20.9a2.5 2.5 0 0 0 2.5-2.5V13.37Z"
            />
            <path
              d="M40 13.37H23.9a1.5 1.5 0 0 1-1.5-1.5v-5.3a1.5 1.5 0 0 1 1.5-1.5H40a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-1.5 1.5m-14.58-3h13.06v-2.3H25.4Zm-.48 37.24a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m14 0a1.5 1.5 0 0 1-1.5-1.5V21.46a1.5 1.5 0 0 1 3 0v24.65a1.5 1.5 0 0 1-1.5 1.5m-7-7.23a1.5 1.5 0 0 1-1.5-1.5V28.7a1.5 1.5 0 1 1 3 0v10.18a1.5 1.5 0 0 1-1.5 1.5"
            />
          </svg>
        </div>
</div></div>`;
    });


  let donebtn = document.querySelectorAll(".done");
  donebtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      let id = btn.getAttribute("data-value");
      Todo[id].status = "done";
      localStorage.setItem("todo", JSON.stringify(Todo));
      parseTodo();
    })
  })
  let deletebtn = document.querySelectorAll(".delete");
  deletebtn.forEach((btn)=>{

    btn.addEventListener("click",()=>{
      let id = btn.getAttribute("data-value");
      Todo = Todo.filter((item,idx)=> idx != id);
      localStorage.setItem("todo", JSON.stringify(Todo));
      parseTodo();
    })
  })

  }

  let addItem = document.getElementById("add-item");
  addItem.addEventListener("click", function setTodo() {
    let itemName = document.getElementById("item-name");
    let date = document.getElementById("date");
    let priority = document.getElementById("priority");

    if (itemName.value == "" || date.value == "" || priority.value == "") {
      alert("Todo Item is Incomplete");
    } else if (date.value < todayDate) {
      alert("Date is not available. Check the date");
    } else {
      Todo.push({
        itemName: itemName.value,
        deadline: date.value,
        priority: priority.value,
        status: "Pending",
      });
      localStorage.setItem("todo", JSON.stringify(Todo));
    }
    console.log(Todo);
    parseTodo();
  });

  parseTodo();

  


});