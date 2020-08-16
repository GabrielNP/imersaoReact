import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import PageDefault from '../../../components/PageDefault'
import useForm from '../../../hooks/useForm'

import categoriesRepository from '../../../repositories/categories'

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: ''
  }  

  const { handleChange, values, clearForm } = useForm(initialValues)
  
  const [categories, setCategories] = useState([])
  
  useEffect(() => {      
      fetch(categoriesRepository.URL_CATEGORIES)
      .then(async (response) => {
        const result = await response.json()
        setCategories([
          ...result,
        ])
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.title}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault()
        setCategories([
          ...categories,
          values
        ])

        clearForm()
        
      }}>

        <FormField 
          label='Nome da Categoria'
          value={values.title}
          name='title'
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
            <li key={`${category.title}${index}`}>
              {category.title}
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