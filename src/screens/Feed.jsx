import React, { useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import BASE_URL from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPlants } from '../redux/plantSlice'
import Skeleton from '../loaders/Skeleton'

const Feed = () => {
    const dispatch=useDispatch()
    const plants=useSelector((store)=>store.plant)
    const {searchName,searchCategory}=useSelector((store)=>store.filter)

    const fetchPlants=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/allPlants",{withCredentials:true})
            console.log(res.data)
            dispatch(addPlants(res.data))
        }catch(err){
            console.log(err.message)
        }
    }

    const filteredProducts=plants.filter((product)=>{
        const matchesName=searchName?product.name.toLowerCase().includes(searchName.toLowerCase()):true
        const matchesCategory= searchCategory?product.categories.includes(searchCategory):true
        return matchesName&&matchesCategory
    })

    useEffect(()=>{
        fetchPlants()
    },[])

  if(plants.length===0) return <Skeleton/>
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 mx-5">

        {
            filteredProducts.length>0?(filteredProducts.map((each)=><Card data={each}/>)):<p>no plants found</p>

        }
 

    </div>
  )
}

export default Feed