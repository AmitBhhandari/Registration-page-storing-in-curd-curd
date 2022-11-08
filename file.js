function SaveToLocalStorage(event)
{
    const NAME=event.target.name.value;
    const EMAIL=event.target.email.value;


    const object={
        NAME,
        EMAIL,
    
    }

    axios.post("https://crudcrud.com/api/17d75c63b63548ae87c64dd0fdf940e3/AppointmentData",object)
    .then((response)=>{
        ShownUserOnScreen(response.data)
        //console.log(response)
    })
    .catch((err)=>{
        console.log(error)
    })
    //localStorage.setItem(object.NAME,JSON.stringify(object));

    //ShownUserOnScreen(object)
    
}
function ShownUserOnScreen(user)
{
    const parentNode=document.getElementById('ListOfUser')  

    const childHTML=`<li> ${user.NAME} - ${user.EMAIL} </li>`
    //parentNode.innerHTML=childHTML;
    parentNode.innerHTML=parentNode.innerHTML+childHTML; 
}