/* From https://jscodebox.com/challenge/password-security-ii

Given are two strings password and password_repeat. Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 8 chars
- contains at least a number
- contains at lease an uppercase letter
- contains at least a lowercase letter
- contains at least one of these special chars (&$%§-_)
Return true only if all criteria are met, otherwise return false.
*/

function checkPassword(password, password_repeat) {
  if (password !== password_repeat || password.length < 8) 
    return false
  
  const regExp = /^(?=.*\d)(?=.*[$%_&])(?=.*[a&#8209;z])(?=.*[A&#8209;Z]).{8,}$/;

  return Boolean(password.match(regExp)?.length)
}
