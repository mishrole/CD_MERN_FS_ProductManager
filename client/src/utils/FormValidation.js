const formIsValid = (e) => {
  const inputs = Array.from(e.target.children)
  .map(item => Array.from(item.children)
  .filter(item => item.localName === 'input'))
  .filter(item => item.length > 0)
  .flat();

  const emptyInputs = inputs.filter(item => item.value.length === 0);
  const invalidInputs = inputs.filter(item => item.classList.contains('is-invalid'));

  if (emptyInputs.length > 0 || invalidInputs.length > 0) {
    return false;
  }

  return true;
}

export { formIsValid };