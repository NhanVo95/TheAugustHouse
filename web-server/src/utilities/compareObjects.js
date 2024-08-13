const twoObjects = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB)
}

export const compareObjects = { twoObjects }
