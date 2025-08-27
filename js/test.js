const deleteEv = document.querySelector(".delete");
const add = document.querySelector(".add");
const check = document.querySelector(".check");

const btn = () => {
    console.log("Event listner");
};

add.addEventListener("click", () => { 
    check.addEventListener("click", btn);
    console.log("Add event listner");
});

deleteEv.addEventListener("click", () => {
    check.removeEventListener("click", btn);
    console.log("Delete event listner");
});

