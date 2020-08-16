import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../../components/Button';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

import categoriesRepository from '../../../repositories/categories'
import videosRepository from '../../../repositories/videos'
import useForm from '../../../hooks/useForm'

function CadastroVideo() {
  const history = useHistory()
  const [categories, setCategories] = useState([])
  const categoryTitles = categories.map(({ title }) => title);
  const {handleChange, values} = useForm({
    title: '',
    url: '',
    category: ''
  })

  useEffect(() => {
    categoriesRepository.getAll()
      .then((allCategories) => {
        setCategories(allCategories)
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault()

        const chosenCategory = categories.find((category) => {
          return category.title === values.category
        })

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => history.push('/'))
      }}>
        <FormField
          label='Título da Vídeo'
          value={values.title}
          name='title'
          onChange={handleChange}
        />

        <FormField
          label='URL'
          value={values.url}
          name='url'
          onChange={handleChange}
        />

        <FormField
          label='Categoria'
          value={values.category}
          name='category'
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        
        <Button type='submit'>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo; 