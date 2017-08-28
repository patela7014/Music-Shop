$(()=>{
    $(document).on('click', '.buttons',() =>{
       console.log()
        $('.buttons').toggleClass('active')
    })
    $(document).on('click', '.buttons',() =>{
        $('.fa-heart').toggleClass('active')
    })
    $(document).on('click', '.buttons',() =>{
        $('.fa-star').toggleClass('active')
    })
})