import React from 'react'
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom'
import Loading from '../components/Loading/Loading';

export default function SingleItem() {
    const {id} = useParams();

    const {data: singleitem, isLoading, refetch} = useQuery("singleitem", () => fetch(`http://localhost:4000/items/${id}`).then((res) => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>{
                singleitem.name
            }</h1>
            <h1>{
                singleitem.description
            }</h1>
        </div>
    )
}
