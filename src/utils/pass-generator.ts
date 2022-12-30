const lowCase = "abcdefghijklmnopqrstuvxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const Numbers = "0123456789";
const SpecialChar = "£$&()*+[]@#^-_!?";

interface IOptions {
  withLower: boolean;
  withUpper?: boolean;
  withNums?: boolean;
  withSpecial?: boolean;
}

function generatePassword(length: Number = 8, options: IOptions): string {
  const CharGroup = createDict(options);
  const CharGroupLenght = CharGroup.length;
  console.log(CharGroup);
  let password = "";
  let random = 0;
  for (let i = 0; i < length; i++) {
    random = Math.floor(Math.random() * CharGroupLenght);
    const index = Math.floor(Math.random() * CharGroup[random].length);
    password += CharGroup[random][index];
  }
  return password;
}

function createDict(options: IOptions): Array<String> {
  let dict = [];
  if (options.withLower) dict.push(lowCase);
  if (options.withUpper) dict.push(upCase);
  if (options.withNums) dict.push(Numbers);
  if (options.withSpecial) dict.push(SpecialChar);
  return dict;
}

export { generatePassword };
