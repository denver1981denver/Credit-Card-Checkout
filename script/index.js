import {el, setChildren} from 'redom';
import AirDatepicker from 'air-datepicker';
import Inputmask from "inputmask";

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

const createInput = data => {
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

setChildren(document.body, wrapper);
setChildren(wrapper, card);
setChildren(card, [title, creditCard, form]);
setChildren(creditCard, [cardNumber, cardPersonal]);
setChildren(cardPersonal, [name, date]);
setChildren(form, [holderWrap, numberWrap, dateWrap, cvvWrap, btn]);
numberWrap.id = 'cardNumber';

inputHolder.addEventListener('input', () => {
   inputHolder.value = inputHolder.value.replace(/[^A-Z\s'-]/g, "");
  if(inputHolder.value.length < 22) name.textContent = inputHolder.value;
});

const numberMask = new Inputmask("9999 9999 9999 9999", 
  {"placeholder": "xxxx xxxx xxxx xxxx"});

inputNumber.addEventListener("input", () => {
  cardNumber.textContent = inputNumber.value;
});

numberMask.mask(inputNumber);

const dateMask = new Inputmask("99/99", {
  oncomplete: function () {
    date.textContent = inputDate.value;
  },
});

dateMask.mask(inputDate);

new AirDatepicker(inputDate, {
  autoClose: true,
  view: "months",
  minView: "months",
  dateFormat: "MM/yy",
  onSelect({ inputDate, formattedDate, datepicker }) {
    date.textContent = formattedDate;
  },
});

const cvvMask = new Inputmask("999");
cvvMask.mask(inputCvv);


