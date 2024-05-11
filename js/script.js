function addtocart()
{
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value
    var address = document.getElementById("address").value
    var credit = document.getElementById("cnumber").value
    var date = document.getElementById("date").value


    if(name == "" || email ==""|| number== "" || address =="" || credit == "" || date =="")
    {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    else
    {
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Number",number)
        localStorage.setItem("Address",address)
        localStorage.setItem("Credit",credit)
        localStorage.setItem("Date",date)

    }
}