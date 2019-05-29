const exec = require('child_process').execSync

module.exports = () => {
  let name
  let email

  try {
    name = exec('git config user.name')
    email = exec('git config user.email')
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (' <' + email.toString().trim() + '>')
  return (name || '') + (email || '')
}
