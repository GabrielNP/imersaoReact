import React, { useEffect, useState } from 'react';

// Components
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'

import categoriesRepository from '../../repositories/categories'

function Home() {

  const [initialValues, setInitialValues] = useState([])

  useEffect(() => {
    
      categoriesRepository.getAllWithVideos()
        .then((categoriesWithVideos) => {
          setInitialValues(categoriesWithVideos)
        })
        .catch((err) => console.log(err.message))
     
  }, [])

  return (
    <PageDefault>

      {initialValues.length === 0 && (<div>Loading...</div>)}

      {initialValues.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialValues[0].videos[0].title}
                url={initialValues[5].videos[0].url}
                videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
              />
              <Carousel
                ignoreFirstVideo
                category={initialValues[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        )
      })}

      {/* 
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}

      {/* <Footer /> */}
    </PageDefault>
  );
}

export default Home;
