import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FlavorItem from "./FlavorItem";

function Category(category: LexiconCategory) {
  const [show, setShow] = useState(false);
  return (
    <div
      key={category.id}
      className="divided-y divide-slate-300 border-l border-r border-b first:rounded-t first:border last:rounded-b last:boarder p-2"
      onClick={() => setShow((state) => !state)}
    >
      <div className="flex flex-row items-center">
        <img
          src={category.image}
          alt={category.displayName_en}
          className="rounded-full w-16 h-16 m-2"
        />
        <strong className="text-2xl">{category.displayName_en}</strong>
        <span className="font-sans text-sm p-2 text-slate-500">
          {category.displayName_ja}
        </span>
        <FontAwesomeIcon icon={faAngleRight} className="ml-auto" />
      </div>
      <div>
        {show ? (
          <ul
            key={category.id}
            role="list"
            className="divide-y divide-slate-200 first:border-t-2 first:border-double"
          >
            {category.items.map((item) => {
              return <FlavorItem key={item.id} {...item} />;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default Category;
