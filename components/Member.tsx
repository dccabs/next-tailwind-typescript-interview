import { UserCircleIcon } from "@heroicons/react/24/solid";

interface MemberProps {
  covered: boolean;
  name: string;
  preferredName: string;
  subscribed: boolean;
  insurance: string;
  id: number;
  insuranceId: string;
  handleRadioClick: (index: number) => void;
}

const Member = (props: MemberProps) => {
  const {
    covered,
    name,
    preferredName,
    subscribed,
    insurance,
    id,
    insuranceId,
    handleRadioClick,
  } = props;
  return (
    <div className="grid grid-cols-8 gap-3 text-sm font-normal">
      <div className="max-w-[50px] flex items-center justify-center">
        <input
          type="checkbox"
          className="h-4.5 w-4.5 rounded-sm border-lightGray border-2 text-lightBlue focus:ring-lightBlue"
          checked={covered}
        />
      </div>
      <div className="flex items-center col-span-3">
        <UserCircleIcon className="h-6 w-6" />
        <span className="mx-4">
          {name}{" "}
          {preferredName ? (
            <span className="flex-0 text-lightGray">({preferredName})</span>
          ) : null}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="radio"
          checked={subscribed}
          className="h-4 w-4 border-lightGray border-2 text-lightBlue focus:ring-lightBlue checked:ring-lightBlue checked:bg-none"
          onChange={() => handleRadioClick(id)}
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <select
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-lightBlue focus:outline-none focus:ring-lightBlue sm:text-sm"
          defaultValue={insurance}
        >
          <option>Primary</option>
          <option>Secondary</option>
        </select>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={insuranceId}
          className="rounded-md border-gray-300 w-full shadow-sm focus:border-lightBlue focus:ring-lightBlue sm:text-sm placeholder-lightGray"
          placeholder="Ins.ID/SSN"
        />
      </div>
    </div>
  );
};

export default Member;
