let emails = [
  'a@gmail.com',
  '@gmail.bc',
  'a@gmail.',
  'a@gmail.b'
]

for (let email of emails) {
  let ok = checkEmail(email)
  console.log('checkEmail(\'' + email + '\') = ' + ok);
}

function checkEmail(e) {
  let ok = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(e)

  return ok
}