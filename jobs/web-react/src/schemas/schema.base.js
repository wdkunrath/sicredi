/* eslint no-template-curly-in-string: 0 */ // --> É a sintaxe do Yup

import * as Yup from 'yup'
import * as moment from 'moment'
Yup.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
    notType: 'Campo obrigatório'

  },
  number: {
    min: 'Deve ser maior que ${min}',
    max: 'Deve ser menor ou igual a ${max}',
    notEqual: 'Deve ser diferente de ${notEqual}',
    notType: 'Campo obrigatório'
  },
  string: {
    length: 'Deve ter ${length} caracteres',
    min: 'Deve possuir no mínimo ${min} caracteres',
    max: 'Deve possuir no máximo ${max} caracteres',
    email: 'E-mail inválido',
    notType: 'Digite um campo válido'
  }
})

const regexValidators = [
  {
    method: 'telefone',
    name: 'telefoneInvalido',
    error: 'Telefone inválido',
    regex: /^\(\d{2}\) \d{4}-\d{4}$/
  },
  {
    method: 'celular',
    name: 'celularInvalido',
    error: 'Celular inválido',
    regex: /^\(\d{2}\) \d{5}-\d{4}$/
  },
  {
    method: 'cep',
    name: 'cepInvalido',
    error: 'CEP inválido',
    regex: /^\d{5}-\d{3}$/
  },
  {
    method: 'cei',
    name: 'ceiInvalido',
    error: 'CEI inválido',
    regex: /^\d{2}.\d{3}.\d{5}\/\d{2}$/
  },
  {
    method: 'nisPisPasepNit',
    name: 'nisPisPasepNitInvalido',
    error: 'Número inválido',
    regex: /^\d{3}.\d{5}.\d{2}-\d{1}$/
  }
]

regexValidators.forEach(({ method, name, error, regex }) =>
  Yup.addMethod(Yup.string, method, function() {
    return this.test(name, error, (texto) => !texto || regex.test(texto))
  })
)
Yup.addMethod(Yup.string, 'cpf', function () {
  return this.test('cpfInvalido', 'CPF inválido', texto => {
    if (!texto) return true
    texto = (texto || '').replace(/\D/g, '')
    if (texto.toString().length !== 11 || /^(\d)\1{10}$/.test(texto))
      return false
    var result = true
    ;[9, 10].forEach(function(j) {
      var soma = 0,
        r
      texto
        .split(/(?=)/)
        .splice(0, j)
        .forEach(function(e, i) {
          soma += parseInt(e) * (j + 2 - (i + 1))
        })
      r = soma % 11
      r = r < 2 ? 0 : 11 - r
      if (r.toString() !== texto.substring(j, j + 1)) result = false
    })
    return result
  })
})

Yup.addMethod(Yup.date, 'past', function(format) {
  return this.test(
    'notPastDate',
    'A data precisa ser anterior a hoje',
    (date) => {
      const now = moment().startOf('day')
      const val = moment(date, format || 'DD/MM/YYYY')
      return val < now
    }
  )
})
const dateRangeValidator = (context, period, format) => {
  const now = moment().startOf('day')
  const min = now.clone().add(period.min)
  const max = now.clone().add(period.max)
  return context.test('dateRange', 'A data não é válida', (date) => {
    const val = moment(date, format || 'DD/MM/YYYY')
    return !date || (val > min && val <= max)
  })
}
Yup.addMethod(Yup.date, 'range', function (period, format) {

  return dateRangeValidator(this, period, format)
})

Yup.addMethod(Yup.date, 'birthdate', function() {
  return dateRangeValidator(this, {

    min: { years: -99 },
    max: { years: -18 }
  })
})
Yup.addMethod(Yup.string, 'allString', function (message) {
  return this.matches(/^\D+$/, message)
})
Yup.addMethod(Yup.string, 'allNumber', function (message) {
  return this.matches(/[0-9]/, message)
})
Yup.confirm = (target, message) => Yup.string().nullable().oneOf([Yup.ref(target), null], message || 'Os campos devem ser iguais')
Yup.conditional = (schemaType, target, value) => {
  return schemaType().when(target, {
    is: value,
    then: schemaType().required(),
    otherwise: schemaType().notRequired()
  })
}
