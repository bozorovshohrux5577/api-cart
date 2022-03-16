

fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => {return res.json()})
.then(data => {
    let mass = "";
      data.map((vall)=>{
        mass += `  <div class="box">
        <div class="val1">${vall.id}</div>
        <div class="val2">${vall.name}</div>
        <div class="val3">${vall.email}</div>
        <div class="val4">${vall.body}</div>
    </div>`;
      })
   document.querySelector(".container")
   .innerHTML = mass;
})
.catch(err => {
  document.querySelector(".container")
  .innerHTML = ("<h1 style='font-size:20px; font-family:sans-serif; color:gray;'>Internet mavjud emas!</h1>");
})