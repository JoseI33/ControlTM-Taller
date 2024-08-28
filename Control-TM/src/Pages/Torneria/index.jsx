import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Grid from '../../Components/Grid'

function index() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Torneria
      {
        items?.map(item => {
          return <Grid key={item.id} data={item} />
        })
      }
    </Layout>
  )
}

export default index