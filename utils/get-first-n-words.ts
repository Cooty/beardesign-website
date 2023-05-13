function getFirstNWords(n: number, text: string) {
  const words = text.split(' ')
  return words.slice(0, n).join(' ')
}

export default getFirstNWords
