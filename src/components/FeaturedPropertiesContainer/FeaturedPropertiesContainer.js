import React from 'react';
import Property from '../Property/Property';

const FeaturedPropertiesContainer = ({properties}) => {

  const featuredProperties = properties.filter(property => property.destacada);

  return (
    <div className='properties--container'>
        {
          featuredProperties || featuredProperties !== [] ?
          featuredProperties.map(property => {
            return(
              <Property 
                key={property.id}
                property={property}
              />
            );
          })
          :
          null
        }
    </div>
  )
}

export default FeaturedPropertiesContainer;