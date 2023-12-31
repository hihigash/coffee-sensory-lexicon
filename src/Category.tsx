import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import FlavorItem from './FlavorItem'

function Category(category: LexiconCategory) {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='text-left' onClick={() => setShow(state => !state)}>
                <FontAwesomeIcon icon={faSquareCaretDown} />
                <div className='text-2xl font-bold'>{category.displayName_en}</div>
                <div className='font-jptext font-bold'>{category.displayName_ja}</div>
                {
                    show ? (
                        <ul className='flex flex-col'>
                            {category.items.map((item) => {
                                return (
                                    <FlavorItem key={item.id} {...item} />
                                )
                            })}
                        </ul>
                    ) : null
                }
            </div>
        </>
    )
}
export default Category
