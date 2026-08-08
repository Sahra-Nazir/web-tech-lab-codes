const monthYear=document.getElementById("monthYear");
const dates=document.getElementById("dates");
const prevMonth=document.getElementById("prevMonth");
const nextMonth=document.getElementById("nextMonth");

let currentDate=new Date();

function renderCalendar(){
  const year=currentDate.getFullYear();
  const month=currentDate.getMonth();
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const today=new Date();

  monthYear.textContent=new Date(year,month).toLocaleString("en-US",{month:"long",year:"numeric"});
  dates.innerHTML="";

  for(let i=0;i<firstDay;i++){
    const empty=document.createElement("div");
    empty.className="empty";
    dates.appendChild(empty);
  }

  for(let day=1;day<=daysInMonth;day++){
    const date=document.createElement("div");
    date.textContent=day;

    if(day===today.getDate() && month===today.getMonth() && year===today.getFullYear()){
      date.classList.add("today");
    }

    date.addEventListener("click",()=>{
      document.querySelectorAll(".dates .selected").forEach(el=>el.classList.remove("selected"));
      date.classList.add("selected");
    });

    dates.appendChild(date);
  }
}

prevMonth.addEventListener("click",()=>{
  currentDate.setMonth(currentDate.getMonth()-1);
  renderCalendar();
});

nextMonth.addEventListener("click",()=>{
  currentDate.setMonth(currentDate.getMonth()+1);
  renderCalendar();
});

renderCalendar();
