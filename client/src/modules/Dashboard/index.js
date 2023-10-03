import React, { useEffect, useState } from "react";

import avatar from "../../assets/avatar.svg";
import Input from "../../components/input";

const Dashboard = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: avatar,
    },
    {
      name: "Mary",
      status: "Available",
      img: avatar,
    },
    {
      name: "Alexander",
      status: "Available",
      img: avatar,
    },
    {
      name: "Adam",
      status: "Available",
      img: avatar,
    },
    {
      name: "Larry",
      status: "Available",
      img: avatar,
    },
    {
      name: "Alex",
      status: "Available",
      img: avatar,
    },
  ];

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user:detail"));
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:8000/api/conversations/${loggedInUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      console.log("resData :>> ", resData);
      setConversations(resData);
    };
    fetchConversations();
  }, []);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user:detail"))
  );
  const [conversations, setConversations] = useState([]);
  console.log("user :>> ", user);
  console.log("Conversations :>> ", conversations);
  return (
    <div className="w-screen flex overflow-y-scroll">
      <div className="w-[25%] h-screen bg-secondary overflow-y-scroll">
        <div className="flex items-center my-8 mx-14">
          <div className="border border-primary p-[2px] rounded-full">
            <img src={avatar} width={75} height={75} />
          </div>
          <div className="ml-8">
            <h3 className="text-2xl">{user?.fullName}</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div>
            {conversations.map(({ conversationId, user }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img src={avatar} width={60} height={60} />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">
                        {user?.fullName}
                      </h3>
                      <p className="text-sm font-light text-gray-600">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14">
          <div className="cursor-pointer">
            <img src={avatar} width={60} height={60} />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg">Alexander</h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 9l5 -5"></path>
              <path d="M16 4l4 0l0 4"></path>
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-scroll shadow-sm">
          <div className="p-14">
            <div className="max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
            <div className="max-w-[50%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Kjedcj kjewbcq kejbedw jk kj aksdud kjbcuweb jdcbjc cb ekudiuqwej.
            </div>
          </div>
        </div>
        <div className="p-14 w-full flex item-center">
          <Input
            placeholder="Type a message..."
            className="w-[75%]"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
          />
          <div className="ml-4 p-2 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </div>
          <div className="ml-4 p-2 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M9 12h6"></path>
              <path d="M12 9v6"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] h-screen bg-light"></div>
    </div>
  );
};

export default Dashboard;
