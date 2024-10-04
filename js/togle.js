document.getElementById('donation-btn').addEventListener('click',()=>{
  document.getElementById('history-container').classList.add('hidden');
  document.getElementById('three-card-container').classList.remove('hidden')

    console.log('donation btn')

    document.getElementById('history-btn').classList.remove(
        "bg-clifford",
        "text-white",
         "hover:bg-clifford"
  )

  document.getElementById('donation-btn').classList.add(
    "bg-clifford",
    "text-white",
     "hover:bg-clifford"
)


})
document.getElementById('history-btn').addEventListener('click',()=>{
  document.getElementById('history-container').classList.remove('hidden');
  document.getElementById('three-card-container').classList.add('hidden')


    console.log('history btn')

    document.getElementById('donation-btn').classList.remove(
        "bg-clifford",
        "text-white",
         "hover:bg-clifford"
  )

  document.getElementById('history-btn').classList.add(
    "bg-clifford",
    "text-white",
     "hover:bg-clifford"
)

})
