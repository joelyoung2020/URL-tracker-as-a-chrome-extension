let newText = document.getElementById("text-el")
let saveEl = document.getElementById("save-btn")
let list = document.getElementById("list-el") 
let delBtn = document.getElementById("deletebtn") 
let saveTab = document.getElementById("tab-el")
let arr = []

let stored = JSON.parse(localStorage.getItem("myLeads"))
 if(stored){
    arr = stored
    render()
 }
 delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    arr = []
    render()
    list.innerText= ""

 })


 saveEl.addEventListener("click", function(){
    list.innerText= ""
    arr.push(newText.value) 
    localStorage.setItem("myLeads", JSON.stringify(arr))
    newText.value = ""
    render()
 })


 function render(){
 for( let i= 0; i<arr.length; i++){
    list.innerHTML += "<li><a target='_blank' href='" + arr[i] + "'>" + arr[i] + "</li>" 
}
 }

 saveTab.addEventListener("click", function(tabs){
    chrome.tabs.query({active: true, currentWindow:true}, function(tab){
        arr.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(arr))
        render()
    })
 })
console.log(arr)
 

 
