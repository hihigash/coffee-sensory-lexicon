import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import FlavorItem from "./FlavorItem";

function Category(category: LexiconCategory) {
  const [show, setShow] = useState(false);
  return (
    <div
      key={category.id}
      className="divided-y divide-slate-300 border-l border-r border-b first:rounded-t-md first:border last:rounded-b-md last:boarder p-2"
      onClick={() => setShow((state) => !state)}
    >
      <div className="flex flex-row">
        <img
          src={category.image}
          alt={category.displayName_en}
          className="rounded-full w-16 h-16 m-1"
        />
        <div className="flex flex-col flex-1">
          <strong className="text-left text-2xl">{category.displayName_en}</strong>
          <span className="text-left font-sans text-sm text-slate-500">
            {category.displayName_ja}
          </span>
          <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} className="ml-auto" />
        </div>
      </div>
      <div className="flex flex-col">
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
