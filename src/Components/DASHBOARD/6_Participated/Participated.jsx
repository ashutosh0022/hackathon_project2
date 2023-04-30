import React from "react";
import {useSelector } from "react-redux";
import "./Participated.css";
// import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {API} from "../../../config.js"

const Participated = () => {
  const [eventofid, setideventofid] = useState([]);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    userInfo?.userdata?.participated?.map((e, index) => {
      fetch(`${API}/getidevent/${userInfo?.userdata?.participated[index]?.eventid}`)
        .then((response) => response.json())
        .then((data) => setideventofid((prev) => [...prev, data]));
    });
  }, [userInfo]);
  // console.log(eventofid[0]?.eventdata[0]?._id?.$oid);

  return (
    <>
      <div className="heading">
        <div className="heading-d1">
          <h3>EVENTS YOU'VE</h3>
        </div>
        <div className="heading-d">
          <h1>PARTICIPATED</h1>
        </div>
      </div>
      <div className="pacont">
        <div className="pacont2">
          <div className="pcont3">
            <div className="etms det01">
              <h2>S.No.</h2>
            </div>
            <div className="etms det02">
              <h2>Booked on</h2>
            </div>
            <div className="etms det03">
              <h2>Event Name</h2>
            </div>
            <div className="etms det04">
              <h2>Event Date</h2>
            </div>
            <div className="etms det05">
              <h2>Tickets</h2>
            </div>
          </div>

          {eventofid.map((e, index) => {
            return (
              <>
                <div className="pcont3 evitems">
                  <div className="etms det01 evitemsde">{index + 1}</div>
                  <div className="etms det02 evitemsde">
                    {userInfo?.userdata?.participated[index]?.bookedon}
                  </div>
                  <div className="etms det03 evitemsde">
                    {e?.eventdata[0]?.eventitle}
                  </div>
                  <div className="etms det04 evitemsde">
                    {e?.eventdata[0]?.date}
                  </div>
                  <div className="etms det05 evitemsde">
                  <Link to={`/dashboard/ticket/${eventofid[index]?.eventdata[0]?._id?.$oid}`}>
                  view
                </Link>
                  </div>
                </div>
              </>
            );
          })}

          {/* );
          })} */}
        </div>
      </div>
      <Outlet />
    </>

  );
};

// const MyDocument = (props) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );


export default Participated;




