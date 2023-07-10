//elementos
let item = document.querySelector('#itemInput')
let quantidade = document.querySelector('#addQuant')
let lista = document.querySelector('#lista')
let botaoAdd = document.querySelector('#botaoAdd')
let inputApagarItem = document.querySelector('#apagarItem')
let botaoApagar = document.querySelector('#apagar')
//listas
let frutas = []
let congelados = []
let produtos = []
let graos = []
let laticinios = []

let itemApagado
let x
let _compra

function itemAdd() {
  switch (lista.value) {
    case 'graos':
      graos.push(quantidade.value + ' - ' + item.value)
      console.log(`Grãos: ${graos.join(', ')}`)
      break
    case 'frutas':
      frutas.push(quantidade.value + ' - ' + item.value)
      console.log(`Frutas: ${frutas.join(', ')}`)
      break
    case 'produtos':
      produtos.push(quantidade.value + ' - ' + item.value)
      console.log(`Produtos de limpesa: ${produtos.join(', ')}`)
      break
    case 'congelados':
      congelados.push(quantidade.value + ' - ' + item.value)
      console.log(`Congelados: ${congelados.join(', ')}`)
      break
    case 'laticinios':
      laticinios.push(quantidade.value + ' - ' + item.value)
      console.log(`Latícinios: ${laticinios.join(', ')}`)
      break

    default:
      alert(`Você não escolheu uma categoria para o produto.`)
      break
  }
}

function apagaItem() {
  itemApagado = inputApagarItem.value

  if (!itemApagado) {
    alert('Por favor, insira um item para apagar.');
    return;
  }

  let ig = graos.findIndex(item => item.includes(itemApagado))
  console.log(`${ig}`)
  let ic = congelados.findIndex(item => item.includes(itemApagado))
  console.log(`${ic}`)
  let fi = frutas.findIndex(item => item.includes(itemApagado))
  console.log(`${fi}`)
  let il = laticinios.findIndex(item => item.includes(itemApagado))
  console.log(`${il}`)

  if (ig !== -1) {
    x = graos.splice(ig, 1)
    alert(`'${x}' foi apagado`)
  }
  if (ic !== -1) {
    x = congelados.splice(ic, 1)
    alert(`'${x}' foi apagado`)
  }
  if (fi !== -1) {
    x = frutas.splice(fi, 1)
    alert(`'${x}' foi apagado`)
  }
  if (il !== -1) {
    x = laticinios.splice(il, 1)
    alert(`'${x}' foi apagado`)
  }
  if (ig === -1 && il === -1 && fi === -1 && ic === -1){
    alert(`O item informado não existe!`)
  }
  
}

function tabela() {
  _compra = String(`<h4> Esta é a sua lista de compras organizada: </h4>
  
  <div classe='divTabela'> 
  <table class='tabela' >
  <tr>
  <th>Grãos</th>
  <th>Frutas</th>
  <th>Laticinios</th>
  <th>Congelados</th>
  <th>Limpeza</th>
  </tr>
  <tr>
  <td> ${graos.join('<br><hr>')} </td>
  
  <td> ${frutas.join('<br><hr>')} </td>
  
  <td> ${laticinios.join('<br><hr>')} </td>
  
  <td> ${congelados.join('<br><hr>')} </td>

  <td> ${produtos.join('<br><br><hr>')} </td>
  </tr>
  
  
  </table>
  
  </div>`)

  document.querySelector('.compra').innerHTML = _compra
}

function classeCompraAdd() {

  document.querySelector('.compra').classList.add('compraAdd')
  
}

botaoApagar.addEventListener('click', () => {
  apagaItem()
  tabela()
  classeCompraAdd()
})

botaoAdd.addEventListener('click', () => {
  itemAdd()
  tabela()
  classeCompraAdd()
})
