function GetResult(oper) {
  var n1 = 0;
  var n2 = 0;

  n1 = eval(calcform.num_01.value); //Число 1
  n2 = eval(calcform.num_02.value); //Число 2

  switch (
    oper //Проверяем, какая кнопка //была нажата
  ) {
    case 1: { //Кнопка +
      calcform.res.value = n1 + n2;
      break;
    }
    case 2: { //Кнопка -
      calcform.res.value = n1 - n2;
      break;
    }
    case 3: { //Кнопка *
      calcform.res.value = n1 * n2;
      break;
    }
    case 4: { //Кнопка /
      calcform.res.value = n1 / n2;
      break;
    }
  }
}
