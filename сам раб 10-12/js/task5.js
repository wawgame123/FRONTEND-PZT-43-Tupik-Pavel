// Задание 5. Работа со строками String. Используется вариант 21.
function processStrings() {
  const stringVariantNumber = 21;
  const s1 = "Я люблю Беларусь";
  const s2 = "Я учусь в Политехническом колледже.";
  const symbolInput = document.getElementById("symbolNumber");
  const symbolNumber = Number(symbolInput.value || stringVariantNumber);
  const index = symbolNumber - 1;
  let symbolInfo;

  if (!Number.isInteger(symbolNumber) || symbolNumber < 1) {
    symbolInfo = "Номер символа должен быть целым положительным числом.";
  } else if (index >= s1.length) {
    symbolInfo = "Символ №" + symbolNumber + " отсутствует, так как длина S1 равна " + s1.length + ".";
  } else {
    const symbol = s1.charAt(index);
    symbolInfo = "Символ №" + symbolNumber + ": " + symbol + "\nASCII/Unicode-код: " + symbol.charCodeAt(0);
  }

  document.getElementById("stringResult").textContent =
    "Вариант для задания 5: " + stringVariantNumber + "\n" +
    "S1: " + s1 + "\n" +
    "S2: " + s2 + "\n" +
    "Длина S1: " + s1.length + "\n" +
    symbolInfo + "\n" +
    "Замена буквы \"ю\" на \"№\": " + s1.replaceAll("ю", "№");
}

processStrings();
