// Filter Items
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryCont = document.querySelectorAll(".gallery-container");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
 
      // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
 
      // activate new 'filter-item'
        event.target.classList.add("active");
 
        const filterValue = event.target.getAttribute("data-filter");
 
        galleryItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
             item.classList.add("show");
        }
 
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
 
        });
    }

    function checkDiv() {
        const childDivs = (container.children);
        for(i = 0, i < (container.children), i++)
        {
            let num = 0;
            const x = document.getElementById("myDIV");
            if (window.getComputedStyle(x).display === "none") {
                let num = (num + 1);
            }
            else{
                num = (num + 0);
            }
        }
    }

});