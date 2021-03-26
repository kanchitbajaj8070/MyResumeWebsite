
function scrollfn(event) {
    event.preventDefault();
    let targetSection = event.target.innerHTML.toString().trim().toLowerCase();
    let target=document.getElementById(targetSection).getBoundingClientRect();
    let targetpos = target.y;
    let curPos=0;
    function scrolling() {
        window.scrollBy(0,20);
        curPos+=20;
        if (document.getElementById(targetSection).getBoundingClientRect().top<0) {
            clearInterval(id);
            return;
        }
    }
        var id=setInterval(scrolling,20);

}

function scrollWindowFn()
{
let experience_section=document.getElementById("experience").getBoundingClientRect();
    let currentYpos=window.pageYOffset;
    let skill_section=document.getElementById("skills-heading").getBoundingClientRect();
    console.log(skill_section);
    let skillYheight=skill_section.height;
    let skillsYpos=skill_section.y;
    if(currentYpos>skillsYpos&& experience_section.top>0 ) {
        let skill_items = document.querySelectorAll(".skill-item-text");
        let skill_item_widths = [70, 50, 90, 50, 70, 80, 80, 80, 60, 60, 80];
        for (let i = 0; i < skill_items.length; i++) {
            let w = skill_item_widths[i];
                skill_items[i].style.width=String(w+"%");
                skill_items[i].style.background = "linear-gradient(to top right,#000428 ,#004e92)";
        }
    }
    else
    {
        let skill_items=document.querySelectorAll(".skill-item-text");
        for( let i=0;i<skill_items.length;i++)
        {skill_items[i].style.width="0%";
            skill_items[i].style.background="white";
        }
    }

}
document.addEventListener("scroll", scrollWindowFn);
