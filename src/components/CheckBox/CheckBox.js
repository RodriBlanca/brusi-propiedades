import React from 'react';

const types = [
    {
        id: 'Casa',
        type: 'Casa'
    },
    {
        id: 'Departamento',
        type: 'Departamento'
    },
    {
        id: 'Terreno',
        type: 'Terreno'
    },
    {
        id: 'Ph',
        type: 'Ph'
    },
    {
        id: 'Quinta',
        type: 'Quinta'
    },
    {
        id: 'Galpón',
        type: 'Galpón'
    },
    {
        id: 'Local',
        type: 'Local'
    },
];


const CheckBox = ({filterFunction}) => {
  return (
    <div>
        {types.map(type => {
            return (
                <div key={type.id}>
                    <input type={'checkbox'} onClick={filterFunction} id={type.id}/>
                    <label>{type.type}</label>
                </div>
            );
        })}
    </div>
  )
}

export default CheckBox;