let formdet = document.querySelector('#form')

formdet.addEventListener('submit',(event)=>{
    event.preventDefault()

    let dataTable = document.querySelector('.table')

    let tableRow = document.createElement('tr')

let dataArr = ["first","last","Gender","Food","Door","Street","Town","Pincode","State","Country"]
for(let out of dataArr){
    let dataBox = document.createElement('td')
    let data = document.querySelector(`[placeholder*=${out}]`)
    dataBox.innerText = data.value 
    tableRow.append(dataBox)
    data.value =''
}
 dataTable.append(tableRow)

})