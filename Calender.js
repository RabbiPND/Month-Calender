// to add divs faster div*30{$}

const currentDate = new Date ();
const monthEl = document.getElementById("month-el");
const detailEl = document.getElementById("detail-el");
let daysEl = document.getElementById("days")

   //Phase 1 -- the header
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August","September", "October", "November", "December"
    ];

    
    monthEl.textContent = monthNames[currentDate.getMonth()];

    //Phase 2 -- the paragraph

    detailEl.textContent = new Date().toDateString(); //N.B

    //Phase 3 -- editing the days-- Full Year           Month( +1--current month, 0--previous momth)
    const lastDay = new Date(new Date().getFullYear(), currentDate.getMonth() + 1, 0).getDate() //first step is to know how many days are in the month
    const firstDay = new Date(new Date().getFullYear(), currentDate.getMonth(), 1).getDay() //how to get the first day


    let days = ""

    for(let i = firstDay; i > 0; i--) {
        days += `<div class="empty"></div>`
    }

    for(let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate()) {
            days += `<div id = "today">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
        
    }

    daysEl.innerHTML = days
    
    



