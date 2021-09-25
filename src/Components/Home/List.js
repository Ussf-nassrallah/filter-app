import React from 'react'
import ListItem from '../Home/ListItem'
import './List.scss'

function List({ list }) {
    return (
        <div className="list-wrap">
            {
                list.map(item => <ListItem key={item.id} item={item} />)
            }
        </div>
    )
}

export default List
