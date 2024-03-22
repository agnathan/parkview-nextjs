function convertCssStringToJsxStyle (cssString) {
  const styles = cssString.split(';').reduce((acc, styleFragment) => {
    if (styleFragment.trim()) {
      const [key, value] = styleFragment.split(':').map(part => part.trim())
      const camelCaseKey = key.replace(/-([a-z])/g, (match, group1) =>
        group1.toUpperCase()
      )
      acc[camelCaseKey] = value
    }
    return acc
  }, {})

  return styles
}

// Accessing the CSS string from command line arguments
const cssString = process.argv[2]

if (!cssString) {
  console.log('Please provide a CSS style string as an argument.')
} else {
  const jsxStyle = convertCssStringToJsxStyle(cssString)
  console.log(jsxStyle)
}
