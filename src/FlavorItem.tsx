import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function FlavorItem(item: LexiconItem) {
  const [show, setShow] = useState(false);
  return (
    <li>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShow((state) => !state);
        }}
      >
        <div className="flex flex-col pl-2.5 pt-2">
          <div className="flex">
            <svg className="h-10 w-10 m-2">
              <circle cx="20" cy="20" r="18" strokeWidth="2" stroke="#CCCCCC" fill={item.color} />
            </svg>
            <div className="flex flex-col">
              <strong className="text-2xl uppercase">
                {item.displayName_en}
              </strong>
              <span className="font-sans text-justify text-slate-500">
                {item.displayName_ja}
              </span>
            </div>
            <div className="flex items-center ml-auto">
              {item.items?.length ? (
                <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} />
              ) : null}
            </div>
          </div>
          <article className="flex flex-col text-wrap m-2">
            <span className="text-left text-sm font-sans p-1">
              {item.description_ja}
            </span>
            <span className="text-left text-xs text-slate-500 p-1">
              {item.description_en}
            </span>
          </article>
        </div>
        {show && item.items?.length ? (
          <ul
            role="list"
            key={item.id}
            className="divide-y divide-slate-200 border-t border-double pl-4"
          >
            {item.items?.map((item) => {
              return <FlavorItem key={item.id} {...item} />;
            })}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
export default FlavorItem;
