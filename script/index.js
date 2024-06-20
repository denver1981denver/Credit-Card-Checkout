import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';

const createInput = (data) => {
  const inputWrap = el(`.form__input-wrap.form__input-wrap--${data}`);
  const label = el(`label.form__label.form__${data}-label`, `${data}`, {for: ''});
  const input = el(`input.input.input__${data}`, {type: 'text'});

  setChildren(inputWrap, [label, input]);

  return {inputWrap, input};
};

const {
  inputWrap: holderWrap,
  input: inputHolder,
} = createInput('holder');

const {
  inputWrap: numberWrap,
  input: inputNumber,
} = createInput('number');

const {
  inputWrap: dateWrap,
  input: inputDate,
} = createInput('date');

const {
  inputWrap: cvvWrap,
  input: inputCvv,
} = createInput('cvv');

const wrapper = el('.wrapper');
const card = el('.card');
const title = el('p.secure', 'Secure Checkou');
const creditCard = el('.credit-card');
const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
const cardPersonal = el('.card__personal');
const name = el('span.card__name', 'John Doe');
const date = el('span.card__date', '04/24');
const form = el('form.form', {id: 'form', action: '#'});
const btn = el('button.form__button', 'CHECK OUT', {type: 'submit'});

setChildren(document.body, wrapper);
setChildren(wrapper, card);
setChildren(card, [title, creditCard, form]);
setChildren(creditCard, [cardNumber, cardPersonal]);
setChildren(cardPersonal, [name, date]);
setChildren(form, [holderWrap, numberWrap, dateWrap, cvvWrap, btn]);

inputHolder.addEventListener('input', () => {
  name.textContent = inputHolder.value;
});

inputNumber.addEventListener('input', () => {
  cardNumber.textContent = inputNumber.value;
});

inputDate.addEventListener('input', () => {
  date.textContent = inputDate.value;
});

inputCvv.addEventListener('input', () => {
  console.log('dfgfh');
});



// inputDate.id = 'date';
// inputDate.className = 'datepicker-here';
// $(inputDate).mask(("99/99/9999"));
// inputDate.addEventListener('input', () => {
//   data.textContent = inputDate.value;
// });

// inputNumber.addEventListener('input', () => {
//   cardNumber.textContent = inputNumber.value;
// });

// $(inputDate).mask("99/99", {
//   completed: () => {
//     date.textContent = inputDate.value;
//   }
// });

// $(inputNumber).mask("9999 9999 9999 9999", {
//   completed: () => {
//     cardNumber.textContent = inputNumber.value;
//   }
// });

// inputHolder.addEventListener('input', () => {
//   inputHolder.value = inputHolder.value.replace(/[^A-Z\s'-]/g, '');
//   name.textContent = inputHolder.value

//  });
