import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categories, setCategories] = useState([])

  const initialValues = {
    categoryName: '',
    description: '',
    color: ''
  }

  const [values, setValues] = useState(initialValues)
  function setValue(key, value) {
     setValues({
       ...values,
       [key]: value
     });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    )
  }

  

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.categoryName}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault()
        setCategories([
          ...categories,
          values
        ])

        setValues(initialValues)
        
      }}>

        <FormField 
          label="Nome da Categoria"
          value={values.categoryName}
          name='categoryName'
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type='textarea'
          value={values.description}
          name='description'
          onChange={handleChange}
        />

        <FormField 
          label="Cor"
          type='color'
          value={values.color}
          name='color'
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.categoryName}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria