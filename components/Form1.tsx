import { useState } from "react";
import Header from "./Header";
import Member from "./Member";

export default function Form1() {
  const data = [
    {
      id: 1,
      covered: true,
      name: "Jerome Bell asdfasfasdfadsadsfasdf",
      preferredName: "Rome",
      subscribed: false,
      insurance: "Primary",
      insuranceId: "",
    },
    {
      id: 2,
      covered: true,
      name: "Stacy Bell",
      preferredName: "Stacy",
      subscribed: false,
      insurance: "Primary",
      insuranceId: "",
    },
    {
      id: 3,
      covered: false,
      name: "Rebecca Bell",
      preferredName: "Becca",
      subscribed: true,
      insurance: "Primary",
      insuranceId: "",
    },
  ];

  const [members, setMembers] = useState(data);

  const handleRadioClick = (id: number) => {
    const newMembers = [...members];
    newMembers.forEach((member) => {
      if (member.id === id) {
        member.subscribed = true;
      } else {
        member.subscribed = false;
      }
    });
    setMembers(newMembers);
  };

  return (
    <div className="sans text-almostBlack w-[740px]">
      <form className=" max-w-32 border border-gray-300 p-4 m-4 rounded-md">
        <div className="space-y-2">
          <h4 className="font-medium">Household</h4>
          <div className="space-y-4">
            <Header />
            {members &&
              members.map((member, index) => {
                return (
                  <Member
                    covered={member.covered}
                    name={member.name}
                    preferredName={member.preferredName}
                    subscribed={member.subscribed}
                    insurance={member.insurance}
                    id={member.id}
                    insuranceId={member.insuranceId}
                    key={`member-${index}`}
                    handleRadioClick={handleRadioClick}
                  />
                );
              })}
          </div>
        </div>
      </form>
    </div>
  );
}
