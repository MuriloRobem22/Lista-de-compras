//arrays das listas
let graos = []
let congelados = []
let laticinios = []
let frutas = []
let produtos = []

//nome do item e a categoria dele
let item = document.querySelector('#additem')
let categoria = document.querySelector('#lista')
let _compra
let _compraClasse = document.querySelector('.compra')
//
let _registro = document.querySelector('#registro')
let _apagar = document.querySelector('#apagar')
let apagarItem = document.querySelector('#apagarItem')
let quantidade = document.querySelector('#quantidade')
let _apagado
let x

function construtorTable(_compra) {
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
}

function AddClasse() {
  _compraClasse.classList.add('compraadd')
}

function apagar(x) {
  _apagado = apagarItem.value

  let ig = graos.findIndex(item => item.includes(_apagado))
  console.log(`${ig}`)
  let ic = congelados.findIndex(item => item.includes(_apagado))
  console.log(`${ic}`)
  let fi = frutas.findIndex(item => item.includes(_apagado))
  console.log(`${fi}`)
  let il = laticinios.findIndex(item => item.includes(_apagado))
  console.log(`${il}`)

  if (ig !== -1) {
    x = graos.splice(ig, 1)
  }
  if (ic !== -1) {
    x = congelados.splice(ic, 1)
  }
  if (fi !== -1) {
    x = frutas.splice(fi, 1)
  }
  if (il !== -1) {
    x = laticinios.splice(il, 1)
  }
  alert(`'${x}' foi apagado`)
}

registro.onclick = function () {
  envio(categoria.value, item.value)
  construtorTable(_compra)
  AddClasse()
}

_apagar.onclick = function () {
  apagar(x)
  console.log(`${categoria.value}: item apagado: ${_apagado}`)
  alert(`Item:${_apagado}, foi apagado da categoria graos `)
  construtorTable(_compra)
}
