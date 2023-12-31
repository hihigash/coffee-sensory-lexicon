import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function FlavorItem(item: LexiconItem) {
  const [show, setShow] = useState(false);
  return (
    <li>
      <div className="">
        <div
          className=""
          onClick={(e) => {
            e.stopPropagation();
            setShow((state) => !state);
          }}
        >
          <div className="flex flex-col pl-2.5">
            <div className="flex flex-row items-center">
              <svg className="h-10 w-10 m-2">
                <circle cx="20" cy="20" r="18" strokeWidth="2" stroke="#CCCCCC" fill={item.color} />
              </svg>
              <strong className="text-2xl uppercase">
                {item.displayName_en}
              </strong>
              <span className="text-base font-sans text-wrap text-slate-500 p-2">
                {item.displayName_ja}
              </span>
              {item.items?.length ? (
                <FontAwesomeIcon icon={faAngleRight} className="ml-auto" />
              ) : null}
            </div>
            <article className="flex flex-col items-baseline text-wrap m-2">
              <span className="text-sm font-sans p-1">
                {item.description_ja}
              </span>
              <span className="text-xs text-slate-500 p-1">
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
      </div>
    </li>
  );
}
export default FlavorItem;
