function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const modifier = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const textToCamelCase = (string, modString) => {
    return modifiyText(string, modString);
  }

  const textToPascalCase = (string, modString) => {
    return modifiyText(string, modString);
  }

  const modifiyText = (string, modString) => {
    return string.split(' ')
      .map((element, i) => {
        if (i == 0 && modString == 'Camel Case') {
          return element;
        }
        return element.replace(element[0], element[0].toUpperCase());
      })
      .join('');
  }

  if (modifier == 'Pascal Case' || modifier == 'Camel Case') {
    return modifier == 'Pascal Case'
      ? result.textContent = textToPascalCase(text, modifier)
      : result.textContent = textToCamelCase(text, modifier);
  }

  return result.textContent = 'Error!';
}
solve("this is an example", "Camel Case");
solve("secOND eXamPLE", "Pascal Case");
solve("Invalid Input", "Another Case")