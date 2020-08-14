import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button'
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

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias'
    fetch(URL)
      .then(async (response) => {
        const result = await response.json()
        setCategories([
          ...result,
        ])
      })
  }, [])

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
          label='Nome da Categoria'
          value={values.categoryName}
          name='categoryName'
          onChange={handleChange}
        />

        <FormField 
          label='Descrição'
          type='textarea'
          value={values.description}
          name='description'
          onChange={handleChange}
        />

        <FormField 
          label='Cor'
          type='color'
          value={values.color}
          name='color'
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
      <div>
        Loading...
      </div>)}

      <ul>
        {categories.map((category, index) => (
          console.log(category),
            <li key={`${category.categoryName}${index}`}>
              {category.categoryName}
            </li>
        ))}
      </ul>


      <Link to='/'>
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria