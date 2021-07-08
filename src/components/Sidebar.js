import React,{useEffect,useState} from "react";
import "./SIdebar.css";
import {
    AddOutlined,
  AppsOutlined,
  BookmarkBorderOutlined,
  DraftsOutlined,
  ExpandLessOutlined,
  ExpandMoreOutlined,
  FiberManualRecordRounded,
  FileCopyOutlined,
  InboxOutlined,
  PeopleAltOutlined,
} from "@material-ui/icons";
import { CreateOutlined } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { InsertCommentOutlined } from "@material-ui/icons";
import db from "../firebase";
import { useStateValue } from "./StateProvinder";

function Sidebar() {
  const [channels,setChannels] = useState([])
  const [{user}] = useStateValue()

  useEffect(() => {
    //Run this code when the sidebar component load
    db.collection('rooms').onSnapshot(snapshot =>(
      setChannels(
        snapshot.docs.map(doc=>(
         {
           id:doc.id,
           name:doc.data().name
         }))
      )
    ))
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack clone</h2>
          <h3>
            <FiberManualRecordRounded />
            {user?.displayName}
          </h3>
        </div>
        <CreateOutlined />
      </div>
      <SidebarOption Icon={InsertCommentOutlined} title="Threads" />
      <SidebarOption Icon={InboxOutlined} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsOutlined} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderOutlined} title="Channel browser" />
      <SidebarOption Icon={PeopleAltOutlined} title="People & user groups" />
      <SidebarOption Icon={AppsOutlined} title="Apps" />
      <SidebarOption Icon={FileCopyOutlined} title="File browser" />
      <SidebarOption Icon={ExpandLessOutlined} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreOutlined} title="Channels" />
      <hr />
      <SidebarOption Icon={AddOutlined} addChannelOption title="Add Channel"/>
    {/* Connect to DB and list*/}
    {channels.map(channel=>(
      <SidebarOption title={channel.name} id={channel.id} />
    ))}
    </div>
  );
}

export default Sidebar;
