//arrays das listas
let graos = []
let congelados = []
let laticinios = []
let frutas = []
let produtos = []
let _apagado
//nome do item e a categoria dele
let item = document.querySelector('#additem')
let categoria = document.querySelector('#lista')
let _compra
let _compraClasse = document.querySelector('.compra')
//
let _registro = document.querySelector('#registro')
let _apagar = document.querySelector('#apagar')
let quantidade = document.querySelector('#quantidade')

function envio(categoria, item, _compra) {
  if (categoria === 'graos') {
    graos.push(quantidade.value + ' - ' + item)

    console.log(`tabela graos: ${graos.join(', ')}`)
  }
  if (categoria === 'congelados') {
    congelados.push(quantidade.value + ' - ' + item)

    console.log(`tabela congelados: ${congelados}`)
  }
  if (categoria === 'frutas') {
    frutas.push(quantidade.value + ' - ' + item)

    console.log(`tabela frutas: ${frutas}`)
  }
  if (categoria === 'laticinios') {
    laticinios.push(quantidade.value + ' - ' + item)

    console.log(`tabela laticinios: ${laticinios}`)
  }
  if (categoria === 'produtos') {
    produtos.push(quantidade.value + ' - ' + item)
  }
  if (item === '' && categoria === 'escolha') {
    item.pop()
    alert(`Nenhum produto foi reconhecido!!`)
  }

  _compra = String(`<h4> Esta é a sua lista de compras organizada: </h4>
  
  <table style='width: 100%'>
  <tr>
  <th>Grãos</th>
  <th>Frutas</th>
  <th>Laticinios</th>
  <th>Congelados</th>
  <th>Produtos de limpeza</th>
  </tr>
  <tr>
  <td> ${graos.join('<br>')} </td>
  
  <td> ${frutas.join('<br> ')} </td>
  
  <td> ${laticinios.join('<br> ')} </td>
  
  <td> ${congelados.join('<br> ')} </td>

  <td> ${produtos.join('<br> ')} </td>
  </tr>
  
  
  </table>`)

  document.querySelector('.compra').innerHTML = _compra

  item.value = ''
}

function AddClasse() {
  _compraClasse.classList.add('compraadd')
}

function apagar() {
  if (categoria.value === 'produtos') {
    _apagado = produtos.pop()
  }
  if (categoria.value === 'frutas') {
    _apagado = frutas.pop()
  }
  if (categoria.value === 'congelados') {
    _apagado = congelados.pop()
  }
  if (categoria.value === 'laticinios') {
    _apagado = laticinios.pop()
  }
  if (categoria.value === 'graos') {
    _apagado = graos.pop()
  }
}

registro.onclick = function () {
  envio(categoria.value, item.value, _compra)
  AddClasse()
}

_apagar.onclick = function () {
  apagar()
  console.log(`${categoria.value}: item apagado: ${_apagado}`)
  alert(`Item:${_apagado}, foi apagado da categoria graos `)
}
