import { useState } from 'react'

function FlavorItem(item: LexiconItem) {
  const [show, setShow] = useState(false);
  return (
    <li>
      <div className='' onClick={(e) => {
        e.stopPropagation();
        setShow((state) => !state)
      }}>
        <div>{item.displayName_en}</div>
        <div>{item.displayName_ja}</div>
        <div className="font-jptext">{item.description_ja}</div>
        <div className="">{item.description_en}</div>
        {
          show ? (
            item.items?.map((item) => {
              return (
                <ul className="">
                  <FlavorItem key={item.id} {...item} />
                </ul>
              )
            })
          ) : null
        }
      </div>
    </li>
  )
}
export default FlavorItem
