import React from 'react'
import './SimilarProducts.css'
import TopPicks from '../../../../topPicks/TopPicks'

const SimilarProducts = () => {
    return (
        <section className='similar'>
            <div className="similar__container">
                    <TopPicks />
            </div>
        </section>
    )
}

export default SimilarProducts