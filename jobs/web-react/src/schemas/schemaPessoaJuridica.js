import * as Yup from 'yup'
import Moment from 'moment'
export const schemaPessoaJuridicaRep = Yup.object({

  representante: Yup.object().shape({    
    nome: Yup.string()
      .required()
      .max(20),
    dataNascimento: Yup.date()
      .birthdate()
      .required()
      .transform((cv, ov) => {
        return Moment(ov, 'DD/MM/YYYY', true).toDate()
      })        
    })
})
