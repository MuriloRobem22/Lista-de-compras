let graos = []
let congelados = []
let laticinios = []
let frutas = []
let item
let categoria
let ask = prompt(
  `Você deseja adicionar algum item a sua lista de compras?? (sim ou nao)`
)
let apagar
let x
let quantidade

function latici(item, categoria, quantidade) {
  if (categoria === 'laticinios') {
    laticinios.push(quantidade, item)
    alert(`${quantidade} - ${item} foi adicionado a lista de laticinios`)
  }
}

function fruta(item, categoria, quantidade) {
  if (categoria === 'frutas') {
    frutas.push(quantidade, item)
    alert(`${quantidade} - ${item} foi adicionado a lista de laticinios`)
  }
}

function freez(item, categoria, quantidade) {
  if (categoria === 'congelados') {
    congelados.push(quantidade, item)
    alert(`${quantidade} - ${item} foi adicionado a lista de laticinios`)
  }
}

function grao(item, categoria, quantidade) {
  if (categoria === 'graos') {
    graos.push(quantidade, item)
    alert(`${quantidade} - ${item} foi adicionado a lista de laticinios`)
  }
}

function apaga(x) {
  let ig = graos.indexOf(`${_apagado}`)
  console.log(`${ig}`)
  let ic = congelados.indexOf(`${_apagado}`)
  console.log(`${ic}`)
  let fi = frutas.indexOf(`${_apagado}`)
  console.log(`${fi}`)
  let il = laticinios.indexOf(`${_apagado}`)
  console.log(`${il}`)

  if (ig !== -1) {
    x = graos.splice(ig - 1, 2)
  }
  if (ic !== -1) {
    x = congelados.splice(ic - 1, 2)
  }
  if (fi !== -1) {
    x = frutas.splice(fi - 1, 2)
  }
  if (il !== -1) {
    x = laticinios.splice(il - 1, 2)
  }
  alert(`'${x.join(' - ')}' foi apagado`)

  ask = prompt(
    `Você deseja adicionar mais algum item a sua lista de compras?? ou deseja apagar algum? (sim ou nao ou apagar)`
  )
}

while (ask === 'sim' && 'apagar') {
  if (ask === 'sim') {
    item = prompt(`qual produto você deseja inserir??`)

    quantidade = prompt(`Qual é a quantidade?`)

    categoria = prompt(
      `Em qual categoria este produto se encaixa?? (frutas, laticinios, congelados ou graos)`
    )
  }

  latici(item, categoria, quantidade)
  fruta(item, categoria, quantidade)
  freez(item, categoria, quantidade)
  grao(item, categoria, quantidade)

  ask = prompt(
    `Você deseja adicionar algum item a sua lista de compras?? ou deseja apagar algum? (sim ou nao ou apagar)`
  )

  if (ask === 'apagar') {
    apagar = prompt('qual item você deseja apagar??')

    apaga()
  }
}
alert(`Esta é a sua lista de compras organizada:

graos: ${graos.join(', ')}. 

frutas: ${frutas.join(', ')}.

laticinios: ${laticinios.join(', ')}.

congelados: ${congelados.join(', ')}.`)
