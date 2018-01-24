const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
 newArray = [...kittens,name]
 return newArray
}

function prependKitten(name) { 
  newArray = [name,...kittens]
 return newArray
}

function removeLastKitten() { 
  removedKitten = kittens.slice(0,kittens.length - 1)
  return removedKitten
}

function removeFirstKitten() {
removedFirstKitten = kittens.slice(-2)
  return removedFirstKitten
}
