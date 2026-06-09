// Задание 4. Работа с объектом Math: расчет по формуле y = (2x - 7) / (5x).
function calculateY(x) {
  const a = 2;
  const b = -7;
  const c = 5;
  const d = 0;
  const denominator = c * x + d;

  if (denominator === 0) {
    throw new Error("Ошибка: деление на ноль, так как 5x = 0.");
  }

  return (a * x + b) / denominator;
}

// Задание 4. Вывод результата расчета в тело HTML-документа.
function showFormulaResult() {
  const x = Number(document.getElementById("xValue").value);
  const resultPlace = document.getElementById("mathResult");

  try {
    if (!Number.isFinite(x)) {
      throw new Error("Ошибка: введите числовое значение x.");
    }

    const y = calculateY(x);
    resultPlace.textContent = "Результат: y = " + y.toFixed(4);
  } catch (error) {
    alert(error.message);
    resultPlace.textContent = error.message;
  }
}
